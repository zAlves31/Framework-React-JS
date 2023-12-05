import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Titulo from "../../components/Titulo/Titulo";
import Table from "./TableAluno/TableAluno";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { eventResource, myEventsResource } from "../../Services/Service";

import "./EventosAlunoPage.css";
import { UserContex } from "../../context/AuthContext";
import Notification from "../../components/Notification/Notification";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [notifyUser, setNotifyUser] = useState();
  const [eventos, setEventos] = useState([]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, titulo: "Todos os eventos" },
    { value: 2, titulo: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContex);

  useEffect(() => {
    setShowSpinner(true);

    async function loadEventsType() {
      if (tipoEvento === "1") {
        //chamar api todos os eventos
        try {
          const retornoEventos = await api.get(eventResource);
          setEventos(retornoEventos.data);
          console.log(retornoEventos.data);
        } catch (error) {
          setNotifyUser({
            titleNote: "Erro",
            textNote: `Erro de conexao com a Api`,
            imgIcon: "danger",
            imgAlt:
              "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
            showMessage: true,
          });
        }
      } else if (tipoEvento === "2") {
        try {
          const retornoEventos = await api.get(
            `${myEventsResource}/${userData.id}`
          );
          const arrEventos = [];

          retornoEventos.data.forEach((e) => {
            arrEventos.push(e.evento);
          });
          setEventos(arrEventos);
        } catch (error) {
          setNotifyUser({
            titleNote: "Erro",
            textNote: `Erro de conexao com a Api`,
            imgIcon: "danger",
            imgAlt:
              "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
            showMessage: true,
          });
        }
      } else {
        // chamar api meus eventos
        setEventos([]);
      }
      setShowSpinner(false);
    }

    loadEventsType();
  }, [tipoEvento, userData.userId]);

  const verificaPresenca = (arrAllEvents, eventsUser) => {
    for (let x = 0; x < arrAllEvents.length; x++){
      for(let i = 0; i < eventsUser.length; i++){
        if(arrAllEvents[x].idEvento === eventsUser[i].idEvento){
          arrAllEvents[x].situacao = true;
          break;
        }  
      }  
    }
  }

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    // alert("Desenvolver a função conectar evento");
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
            defaultValue={tipoEvento}
            addtionalClass="select-tp-evento"
          />

          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
