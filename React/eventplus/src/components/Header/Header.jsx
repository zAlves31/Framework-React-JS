import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <link to="/">Home</link>
                <link to="/tipos-eventos">Tipo Eventos</link>
                <link to="/eventos">Eventos</link>
                <link to="/login">Login</link>
            </nav>
            
        </header>
    );
};

export default Header;