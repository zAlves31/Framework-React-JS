import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='arrumar'>
                <Link to="/">Home</Link>
                <Link to="/tipo-eventos">TipoEventos</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/login">Login</Link>
                <Link to="/contatos">Contatos</Link>
                <Link to="/teste">Teste</Link>
            </nav>
        </header>
    );
};

export default Header;