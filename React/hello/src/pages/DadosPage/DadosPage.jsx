import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const DadosPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <h1>Dados Page</h1>
            <span>{ theme }</span>
        </div>
        
    );
};

export default DadosPage;