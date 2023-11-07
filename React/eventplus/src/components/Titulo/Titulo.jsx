import React from 'react';
import './Titulo.css'

const Titulo = ({tituloTexto, color="", charmanderClass = ""}) => {
    return (
        <h1 className={`titulo ${charmanderClass}`} style={{color: color}}>
            {tituloTexto} 
            <hr 
                className='titulo__underscore' 
                style={
                    color !== "" ? {borderColor: color} : {}
                }
            />
        </h1>
    );
};

export default Titulo;