import React, { useContext, useEffect } from "react";
import trashDelete from "../../assets/images/trash-delete-red.png";

import { Button, Input } from "../FormComponents/FormComponents";
import "./Modal.css";
import { UserContex } from "../../context/AuthContext";

const Modal = ({
  modalTitle = "Feedback",
  comentaryText = "Não informado. Não informado. Não informado.",
  showHideModal = false,
  fnDelete = null,
  fnGet = null,
  fnPost = null,

}) => {

  const {userData} = useContext(UserContex)
  console.clear();
  console.log(userData);

  useEffect(() => {
    async function carregarDados() {
      fnGet(userData.userId, userData.idEvento);
    }

    carregarDados();
  }, []);

  return (
    <div className="modal">
      <article className="modal__box">
        
        <h3 className="modal__title">
          {modalTitle}
          <span className="modal__close" onClick={()=> showHideModal(true)}>x</span>
        </h3>

        <div className="comentary">
          <h4 className="comentary__title">Comentário</h4>
          <img
            src={trashDelete}
            className="comentary__icon-delete"
            alt="Ícone de uma lixeira"
            onClick={() => {fnDelete}}
          />

          <p className="comentary__text">{comentaryText}</p>

          <hr className="comentary__separator" />
        </div>

        <Input
          placeholdder="Escreva seu comentário..."
          className="comentary__entry"
        />

        <Button
          textButton="Comentar"
          className="comentary__button"
          manipulationFunction={() =>{
            fnPost();
          }}
        />
      </article>
    </div>
  );
};

export default Modal;