import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//PAGINAS
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage';
import TipoEventosPage from "../pages/TipoEventosPage/TipoEventosPage"
import EventosPage from "../pages/EventosPage/EventosPage"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EventosAlunoPage from '../pages/EventosAlunoPage/EventosAlunoPage';
import { PrivateRoute } from './PrivateRoute';



const routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<HomePage/>} path={"/"} exact />

                <Route 
                    path="/tipo-eventos"
                    element={
                        <PrivateRoute redirectTo='/'>
                            <TipoEventosPage />
                        </PrivateRoute>
                    } 
                />

                <Route 
                    path={"/eventos"}
                    element={
                        <PrivateRoute redirectTo='/'>
                            <EventosPage />
                        </PrivateRoute>
                        
                    }  
                />

                <Route 
                    path={"/eventos-aluno"}
                    element={
                        <PrivateRoute redirectTo='/'>
                            <EventosAlunoPage />
                        </PrivateRoute>
                        
                    }  
                />

                <Route element={<LoginPage/>} path={"/login"} />


            </Routes>
            <Footer/> 
            </BrowserRouter>
        </div>
    );
};

export default routes;