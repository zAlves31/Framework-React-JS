import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Imports dos componentes - PAGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/EventosPage/EventosPage";
import MedicosPage from "./pages/TipoEventos/TipoEventos";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <HomePage /> } path={"/"} exact />
                <Route element={ <LoginPage /> } path={"/Pagina Eventos"} />
                <Route element={ <MedicosPage /> } path={"/Tipos Evento"} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;