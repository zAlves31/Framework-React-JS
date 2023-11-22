import React, { useEffect, useState } from "react";
import "./EventosPage.css";
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIllustrator/ImageIllustrator";
import EventoImage from "../../assets/images/evento.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, { eventsTypeResource } from "../../Services/Service";
import TableE from "./TableE/TableE";
import Notification from "../../components/Notification/Notification";
import Spinner from "../../components/Spinner/Spinner"

const TipoEventosPage = () => {
  //STATES
  const [frmEdit, setFrmEdit] = useState(false); //esta em modo de edicao

  const [titulo, setTitulo] = useState("");

  const [tipoEventos, setTipoEventos] = useState([]); //state de array vazia

  const [notifyUser, setNotifyUser] = useState();

  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    async function loadEventsType() {
      setShowSpinner(false);
      
      
      try {
        //chamando a funcao controladora e jogando as informações da api na array vazia tipoEventos
        const retorno = await api.get(eventsTypeResource);
        setTipoEventos(retorno.data);
        console.log(retorno.data);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }
    //chama a funcao/api no carregamento da pagina/componente
    loadEventsType();
  }, []);

  async function handleSubmit(e) {
    
  }

  async function handleUpdate(e) {
    
  }

  //mostra o formulario de edicao
  async function showUpdateForm() {
    
  }

  //cancela a tela/acao de edicao (volta para o form de cadastro)
  function editActionAbort() {
    setFrmEdit(false);
    setTitulo("");
    setIdEvento(null);
  }

  //apaga o tipo de evento de api
  async function handleDelete() {
    
  }

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

      {showSpinner ? <Spinner /> : null}
      
      <MainContent>
        {/* formulario de cadastro do tipo de evento */}
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo tituloTexto={"Cadastro de Eventos"} />

              <ImageIlustrator imageRender={EventoImage} />

              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {!frmEdit ? ( //cadastrar
                  <>
                    <Input
                      id="Titulo"
                      placeholdder={"Titulo"}
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />

                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      //formulário só será chamado pois seu type é submit
                      type="submit"
                    />
                  </>
                ) : (
                  //editar
                  <>
                    <Input
                      id="Titulo"
                      placeholdder={"Titulo"}
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />
                    
                    <div className="buttons-editbox">
                      <Button
                        textButton="Atualizar"
                        id="atualizar"
                        name="atualizar"
                        type="submit"
                        additionalClass="button-component--middle"
                      />

                      <Button
                        textButton="Cancelar"
                        id="cancelar"
                        name="cancelar"
                        type="submit"
                        manipulationFunction={editActionAbort}
                        additionalClass="button-component--middle"
                      />
                    </div>
                  </>
                )}
              </form>
            </div>
          </Container>
        </section>

        {/* Listagem de tipo de eventos*/}
        <section className="lista-eventos-section">
          <Container>
            <Titulo tituloTexto={"Lista de Eventos"} color="white" />
            <TableE
              dados={tipoEventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;