import React, { useEffect, useState } from "react";
import "./EventosPage.css";
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIllustrator/ImageIllustrator";
import EventoImage from "../../assets/images/evento.svg";
import { Input, Button, Select } from "../../components/FormComponents/FormComponents";
import api, { eventsTypeResource, eventResource } from "../../Services/Service";
import TableE from "./TableE/TableE";
import Notification from "../../components/Notification/Notification";
import Spinner from "../../components/Spinner/Spinner"

const EventosPage = () => {
  //STATES
  const [frmEdit, setFrmEdit] = useState(false); //esta em modo de edicao
  const [idEvento, setIdEvento] = useState()
  const [eventos, setEventos] = useState([]);
  const [nome, setNome] = useState();
  const [optionsTipoEventos, setOptionsTipoEvento] = useState([]);
  const [descricao, setDescricao] = useState();
  const [tipoEventos, setTipoEventos] = useState([]); //state de array vazia
  const [date, setDate] = useState();
  const [notifyUser, setNotifyUser] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    async function loadEventsType() {
      setShowSpinner(false);
      
      
      try {
        //chamando a funcao controladora e jogando as informações da api na array vazia tipoEventos
        const retorno = await api.get(eventsTypeResource);
        setOptionsTipoEvento(retorno.data);
        console.log(retorno.data);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }
    //chama a funcao/api no carregamento da pagina/componente
    loadEventsType();
  }, []);
useEffect(() => {
  async function loadEvents() {
    try {
      const retorno = await api.get(eventResource);
      setEventos(retorno.data);
      console.log(retorno);
    } catch (error) {
      console.log("Erro na api");
      console.log(error);
    }
  }
  loadEvents();
},[])

  async function handleSubmit(e) {
    // e.preventDefault();
    //   try{
    //     const instituicaoEvento = await api.post(instituicaoResource);
    //     const retorno = await api.get(eventResource, {
    //     nomeEvento: nome,
    //     descricao: descricao,
    //     dataEvento: date,
    //     idTipoEvento: tipoEventos,
    //     idInstituicao: instituicaoEvento.idInstituicao,

    //   }); 
    // }catch(error){
    //   setNotifyUser({
    //     titleNote: "Erro",
    //     textNote: `Erro na operacao. por favor verifique a conexao`,
    //     imgIcon: "danger",
    //     imgAlt:
    //       "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
    //     showMessage: true,
    //   });
    // }
  }

  async function handleUpdate() {
   
  }

  //mostra o formulario de edicao(true)
  async function showUpdateForm(idElement) {
    setFrmEdit(true);
    setIdEvento(idElement)
    try{
      const promise = await api.get(`${eventResource}/${idElement}`, idElement)
      setNome(promise.data.nomeEvento)
      setDescricao(promise.data.descricao)
      setDate(promise.data.dataEvento.slice(0,10))
      setTipoEventos(promise.data.idTipoEvento)
    }
    catch(error){

    }
  }

  //cancela a tela/acao de edicao (volta para o form de cadastro)
  function editActionAbort() {
    setFrmEdit(false);
    setNome("");
    setIdEvento(null);
  }

  //apaga o tipo de evento de api
  async function handleDelete(idElement) {
    if (window.confirm("Confirma a exclusão?")) {
      try {
        const caminho = await api.delete(`${eventResource}/${idElement}`);

        console.log(idElement)

        if (caminho.status == 204) {
          setNotifyUser({
            titleNote: "Sucesso",
            textNote: `Excluido com sucesso`,
            imgIcon: "Success",
            imgAlt:
              "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
            showMessage: true,
            
          });

          const buscaEventos = await api.get(eventResource);
          setEventos(buscaEventos.data);
        }
      } catch (error) {
        setNotifyUser({
          titleNote: "Erro",
          textNote: `Erro no delete`,
          imgIcon: "danger",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
          showMessage: true,
          
        });
        console.log(error);
      }
    }
  }

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

      {showSpinner ? <Spinner /> : null}
      
      <MainContent>
        {/* formulario de cadastro de evento */}
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
                      id="Nome"
                      placeholdder={"Nome"}
                      name={"nome"}
                      type={"text"}
                      required={"required"}
                      value={nome}
                      manipulationFunction={(e) => {
                        setNome(e.target.value);
                      }}
                    />

                    <Input
                      id="Descricao"
                      placeholdder={"Descricao"}
                      name={"descricao"}
                      type={"text"}
                      required={"required"}
                      value={descricao}
                      manipulationFunction={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />

                    <Select
                      id="TipoEvento"
                      name={"tipoEventos"}
                      required={"required"}
                      value={tipoEventos}
                      manipulationFunction={(e) => {
                        setTipoEventos(e.target.value);
                      }}
                      options={optionsTipoEventos}
                    />

                    <Input
                      id="Date"
                      placeholdder={"dd/mm/aaaa"}
                      name={"date"}
                      type={"date"}
                      required={"required"}
                      value={date}
                      manipulationFunction={(e) => {
                        setDate(e.target.value);
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
                      id="Nome"
                      placeholdder={"Nome"}
                      name={"nome"}
                      type={"text"}
                      required={"required"}
                      value={nome}
                      manipulationFunction={(e) => {
                        setNome(e.target.value);
                      }}
                    />

                    <Input
                      id="Descricao"
                      placeholdder={"Descricao"}
                      name={"descricao"}
                      type={"text"}
                      required={"required"}
                      value={descricao}
                      manipulationFunction={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />

                    <Select
                      id="TipoEvento"
                      name={"tipoEventos"}
                      required={"required"}
                      value={tipoEventos}
                      manipulationFunction={(e) => {
                        setTipoEventos(e.target.value);
                      }}
                      options={optionsTipoEventos}
                    />

                    <Input
                      id="Date"
                      placeholdder={"dd/mm/aaaa"}
                      name={"date"}
                      type={"date"}
                      required={"required"}
                      value={date}
                      manipulationFunction={(e) => {
                        setDate(e.target.value);
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
              dados={eventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default EventosPage;