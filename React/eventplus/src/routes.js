import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Imports dos componentes - PAGINAS
import HomePage from "./pages/HomePage/HomePage";
import EventosPage from "./pages/EventosPage/EventosPage";
import TipoEventos from "./pages/TipoEventos/TipoEventos";
import LoginPage from "./pages/LoginPage/LoginPage";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <HomePage /> } path={"/"} exact />
                <Route element={ <EventosPage /> } path={"/eventos"} />
                <Route element={ <TipoEventos /> } path={"/tipos-eventos"} />
                <Route element={ <LoginPage /> } path={"/login"} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;