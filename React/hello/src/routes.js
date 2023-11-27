import React, { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

// Imports dos componentes - PÁGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import MeusPedidosPage from "./pages/MeusPedidosPage/MeusPedidosPage";
import DadosPage from "./pages/DadosPage/DadosPage";

import {ThemeContext} from "./context/ThemeContext";

const Rotas = () => {
  const [theme, setTheme] = useState("");

  function getThemeLocalStorage(){
    setTheme( localStorage.getItem("theme") !== null
     ? localStorage.getItem("theme") 
     : "light"
    );
  }

  useState();

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Nav />
      
      <Routes>
        <Route element={ <HomePage /> }  path={"/"} exact />
        <Route element={ <ProdutoPage /> }  path={"/produtos"} />
        <Route element={ <LoginPage /> }  path={"/login"}  />
        <Route element={ <MeusPedidosPage /> }  path={"/meus-pedidos"}  />
        <Route element={ <DadosPage /> }  path={"/importante"}  />
        <Route element={ <HomePage /> }  path={"*"}  />
      </Routes>
      
    </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
