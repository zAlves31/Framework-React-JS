import React, { useContext } from "react";
import iconeLogout from "../../assets/images/icone-logout.svg";
import "./PerfilUsuario.css";
import { Link } from "react-router-dom";
import {UserContex} from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PerfilUsuario = () => {

  const {userData, setUserData} = useContext(UserContex);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUserData({})
    navigate("/");
  }

  return (
    <div className="perfil-usuario">
      {userData.nome ? (
        <>
          <span className="perfil-usuario__menuitem">{userData.nome}</span>

          <img
          onClick={logout}
          title="Deslogar"
          className="perfil-usuario__icon"
          src={iconeLogout}
          alt="imagem ilustrativa de uma porta de saída do usuário "
          />

        </>
      ) : (
        <Link to="/Login" className="perfil-usuario__menuitem__botao">Login</Link>
      )}
      

      <span className="perfil-usuario__menuitem"></span>

      
    </div>
  );
};

export default PerfilUsuario;
