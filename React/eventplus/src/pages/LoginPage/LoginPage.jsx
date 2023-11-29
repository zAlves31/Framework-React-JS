import React, { useContext, useState } from "react";
import ImageiIlustrator from "../../components/ImageIllustrator/ImageIllustrator";
import logo from "../../assets/images/logo-pink.svg";
import loginImage from "../../assets/images/login.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import { loginResource } from '../../Services/Service';
import api from "../../Services/Service";
import "./LoginPage.css";
import { UserContex, userDecodeToken } from "../../context/AuthContext";


const LoginPage = () => {

    const [user,SetUser] = useState({email:"adm@gmail.com", senha:""});
    const {userData, setUserData} = useContext(UserContex);

  async function handleSubmit(e) {
    e.preventDefault();

    //validar usuario e senha:
    //tamanho minimo de caracteres: 3
    
    if (user.email.length >= 3 && user.senha.length >= 3) {
      try{
          const promise = await api.post(loginResource, {
            email: user.email,
            senha: user.senha

          })

          const useFullToken = userDecodeToken(promise.data.token);
          setUserData(useFullToken)
          localStorage.setItem("token", JSON.stringify(useFullToken));
          
      } catch(error){
        alert("Verifique os dados e a conexao com a internet!")
        console.log("Erros no Usuario Login");
        console.log(error);
      }
    }
    else{
      alert("Preencha os dados corretamente")
    }

    console.log("dados de login");
    console.log(user);
  }

  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageiIlustrator
            imageRender={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              className="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              manipulationFunction={(e) => {
                SetUser({...user, email: e.target.value.trim()})
            }}
              placeholdder={"Username:"}
            />
            <Input
              className="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              manipulationFunction={(e) => {
                SetUser({...user, senha: e.target.value.trim()})
            }}
              placeholdder={"*****"}
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              textButton="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              additionalClass="frm-login__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
