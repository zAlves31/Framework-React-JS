import React, { useEffect, useState } from "react";
import "./TipoEventosPage.css";
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIllustrator/ImageIllustrator";
import tipoEventoImage from "../../assets/images/tipo-evento.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, { eventsTypeResource } from "../../Services/Service";
import TableTp from "./TableTp/TableTp";
import Notification from "../../components/Notification/Notification";
import Spinner from "../../components/Spinner/Spinner"

const TipoEventosPage = () => {
  //STATES
  const [frmEdit, setFrmEdit] = useState(false); //esta em modo de edicao

  const [titulo, setTitulo] = useState("");

  const [idEvento, setIdEvento] = useState(null);

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
    e.preventDefault(); //evita o submit do formulario
    if (titulo.trim().length < 3) {
      alert("o titulo deve ter pelo menos 3 caracteres!");
    }

    try {
      //Passando state do titulo para cadastrar TiposEvento("titulo":). Vai virar um json na api
      const retorno = await api.post(eventsTypeResource, { titulo: titulo });

      if (retorno.status == 201) {
        theMagic("Cadastrado com sucesso");
        const buscaEventos = await api.get(eventsTypeResource);

        setTipoEventos(buscaEventos.data);
      }
    } catch (error) {
      alert("Deu ruim no submit");
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    try{
      const retorno = await api.put(eventsTypeResource + "/" + idEvento, {titulo : titulo});

      if(retorno.status === 204){
        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `Cadastro atualizado com sucesso`,
          imgIcon: "Success",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
          showMessage: true,
        });

        const retorno = await api.get(eventsTypeResource);
        setTipoEventos(retorno.data)
    }
    }
    
    catch(error){
      setNotifyUser({
        titleNote: "Erro",
        textNote: `Erro na operacao. por favor verifique a conexao`,
        imgIcon: "danger",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
        showMessage: true,
      });
    }
  }

  //mostra o formulario de edicao
  async function showUpdateForm(idElement) {
    setFrmEdit(true);
    setIdEvento(idElement)
    try{
      const promise = await api.get(`${eventsTypeResource}/${idElement}`, idElement)
      setTitulo(promise.data.titulo)
      console.log(retorno.data)
    }
    catch(error){ } 
  }

  //cancela a tela/acao de edicao (volta para o form de cadastro)
  function editActionAbort() {
    setFrmEdit(false);
    setTitulo("");
    setIdEvento(null);
  }

  //apaga o tipo de evento de api
  async function handleDelete(idElement) {
    if (window.confirm("Confirma a exclusão?")) {
      try {
        const caminho = await api.delete(`${eventsTypeResource}/${idElement}`, {
          idElement,
        });

        if (caminho.status == 204) {
          theMagic("Excluido com sucesso");
          const buscaEventos = await api.get(eventsTypeResource);

          setTipoEventos(buscaEventos.data);
        }
      } catch (error) {
        console.log("Deu erro no delete");
        console.log(error);
      }
    }
  }

  function theMagic(textNote) {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote,
      imgIcon: "Success",
      imgAlt:
        "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
      showMessage: true,
    });
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
              <Titulo tituloTexto={"Cadastro Tipo de Eventos"} />

              <ImageIlustrator imageRender={tipoEventoImage} />

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
            <Titulo tituloTexto={"Lista Tipos de Eventos"} color="white" />
            <TableTp
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