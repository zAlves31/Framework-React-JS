import React, {useContext, useEffect, useState } from "react";
import MainContent from "../../components/MainContent/MainContent";
import Titulo from "../../components/Titulo/Titulo";
import Table from "./TableAluno/TableAluno";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { eventResource, myEventsResource, presenceEventResource, commentaryEventResource } from "../../Services/Service";
import "./EventosAlunoPage.css";
import {UserContex} from "../../context/AuthContext";
import Notification from "../../components/Notification/Notification";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [notifyUser, setNotifyUser] = useState();
  const [eventos, setEventos] = useState([]);
  // select mocado
  //const [quaisEventos, setQuaisEventos] = useState([
  const quaisEventos = [
    { value: 1, titulo: "Todos os eventos" },
    { value: 2, titulo: "Meus eventos" },
  ];

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [idEvento, setIdEvento] = useState();
  const [comentario, setComentario] = useState("");

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContex);

  const verificaPresenca = (arrAllEvents, eventUser) => {
    for (let e = 0; e < arrAllEvents.length; e++) {
      for (let u = 0; u < eventUser.length; u++) {
        if (arrAllEvents[e].idEvento === eventUser[u].idEvento) {
          arrAllEvents[e].situacao = true;
          arrAllEvents[e].idPresencaEvento = eventUser[u].idPresencaEvento;
          break;
        }
      }
    }
    return arrAllEvents;
  };
  
  useEffect(() => {

    loadEventsType();
  }, [tipoEvento, userData.id]);

  async function loadEventsType() {
    setShowSpinner(true);
    setEventos([]);
    if (tipoEvento === "1") {
      //chamar api todos os eventos
      try {
        const todosEventos = await api.get(eventResource);
        const meusEventos = await api.get(
          `${myEventsResource}/${userData.id}`
        );
        const eventosMarcados = verificaPresenca(
          todosEventos.data,
          meusEventos.data
        );
        setEventos(eventosMarcados);
      } catch (error) {
        console.log(error);
      }
    } else if (tipoEvento === "2") {
      try {
        const retornoEventos = await api.get(
          `${myEventsResource}/${userData.id}`
        );
        const arrEventos = [];

        retornoEventos.data.forEach((e) => {
          arrEventos.push({ ...e.evento, situacao: e.situacao , idPresencaEvento: e.idPresencaEvento});
        });
        setEventos(arrEventos);
      } catch (error) {
        console.log(error);
      }
    } else {
      setEventos([]);
    }
    setShowSpinner(false);
  }


  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  const loadMyComentary = async (idUsuario, idEvento) => {

    try {
      console.clear();
      console.log(idUsuario, idEvento);
      const promise = await api.get(`${commentaryEventResource}?idUsuario=${idUsuario}&idEvento=${idEvento}`);
      console.log(promise.data[0].descricao);
      console.log(promise.data);

        setComentario(promise.data[0].descricao);
      
    } catch (error) {
      alert(error)
      
    }
    
  }

  async function postMyComentary() {
    return "????";
  }

  const showHideModal = (idEvent) => {
    setShowModal(showModal ? false : true);
    setUserData({...userData, idEvento: idEvent });
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  async function handleConnect(eventId, whatTheFunction, presencaId = null) {
    if (whatTheFunction === "connect") {
      try {
        const promise = await api.post(presenceEventResource, {
          situacao: true,
          idUsuario: userData.id,
          idEvento: eventId,
        });
        if (promise.status === 201) {
          loadEventsType()
          alert("Presença confirmada!");
        }
      } catch (error) {
        alert("Error na api");
      }
      return;
    }
    alert("DESCONECTAR AO EVENTO:");
    try {
      const unconnected = await api.delete(`${presenceEventResource}/${presencaId}`);
      if (unconnected.status === 204) {
        loadEventsType()
        alert("Presença cancelada!");
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      {/* <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} /> */}

      <MainContent>
        {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
        <Container>
          <Titulo tituloTexto={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            value={tipoEvento}
            addtionalClass="select-tp-evento"
          />

          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={showHideModal}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          // userId={userData.id}
          showHideModal={showHideModal}
          fnGet={loadMyComentary}
          fnPost={postMyComentary}
          fnDelete={commentaryRemove}
          // idEvento={idEvento}
          comentaryText={comentario}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;