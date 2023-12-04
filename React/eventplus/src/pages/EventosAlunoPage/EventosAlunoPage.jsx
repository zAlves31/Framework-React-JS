import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Titulo from "../../components/Titulo/Titulo";
import Table from "./TableAluno/TableAluno";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api from "../../Services/Service";

import "./EventosAlunoPage.css";
import { UserContex } from "../../context/AuthContext"

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([

    {nomeEvento: 'Evento', dataEvento:"20/01/2024", idEvento:"0"},
    {nomeEvento: 'Evento', dataEvento:"20/01/2024", idEvento:"0"},
    {nomeEvento: 'Evento', dataEvento:"20/01/2024", idEvento:"0"}
  ]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, titulo: "Todos os eventos" },
    { value: 2, titulo: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState(1); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContex);

  useEffect(() => {
    setShowSpinner(false);
    setEventos([])

    async function loadEventsType() {
      if(tipoEvento === 1){//chamar api todos os eventos
        try {
          
        } catch (error) {
          
        }
      }else {// chamar api meus eventos
  
      }
    }
    

    loadEventsType();
  }, [tipoEvento]);

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
