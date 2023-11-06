import React from "react";
import "./Nav.css";

import logMobile from "../../assets/images/logo-white.svg";
import logDesktop from "../../assets/images/logo-pink.svg";

import { Link } from "react-router-dom";

const Nav = ({exibeNavbar, setExibeNavbar}) => {

  console.log(`Exibe o meneu? ${exibeNavbar}`);
  return (
    <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
      <span className="navbar__close" onClick={() =>{setExibeNavbar(false)}} >X</span>

      <Link to="/" className="eventlogo">
        <img
          className="eventlogo__logo-image"
          src={window.innerWidth >= 992 ? logDesktop : logMobile}
          alt="Event Plus logo"
        />
      </Link>

      <div className="navbar__items-box">
        <Link className="navbar__item" to="/">Home</Link>
        <Link className="navbar__item" to="/eventos">Eventos</Link>
        <Link className="navbar__item" to="/tipo-eventos">Tipos de Eventos</Link>
        <Link className="navbar__item" to="/login">Usuários</Link>
        <Link className="navbar__item" to="/testes">Pagina Teste</Link>
      </div>

    </nav>
  );
};

export default Nav;