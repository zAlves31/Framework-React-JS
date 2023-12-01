import React, { useContext } from "react";
import "./Nav.css";

import logMobile from "../../assets/images/logo-white.svg";
import logDesktop from "../../assets/images/logo-white.svg";

import { Link } from "react-router-dom";
import { UserContex } from "../../context/AuthContext";

const Nav = ({ exibeNavbar, setExibeNavbar }) => {
  const {userData} = useContext(UserContex) 

  return (
    <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
      <span
        onClick={() => {
          setExibeNavbar(false);
        }}
        className="navbar__close"
      >
        X
      </span>

      <Link to="/" className="eventlogo">
        <img
          className="eventlogo__logo-image"
          src={window.innerWidth >= 992 ? logDesktop : logMobile}
          alt="Event Plus logo"
        />
      </Link>

      <div className="navbar__items-box">
        <Link to="/" className="navbar__item">Home</Link>

        {userData.nome && userData.role === "Administrador" ? (
          <>
            <Link to="/tipo-eventos" className="navbar__item">Tipos de Eventos</Link>
            <Link to="/eventos" className="navbar__item">Eventos</Link>
          </>
        ) : userData.nome && userData.role === "Comum" ? (
            <Link className="navbar__item" to="/eventos">
              Eventos Aluno
            </Link>
        ) : null}

      </div>
    </nav>
  );
};

export default Nav;