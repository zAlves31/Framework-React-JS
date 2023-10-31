import React from "react";
import './CardEvento.css';

const CardEvento = (props) => {
    return (
        <section className="section-card">
            <div className="card-evento">
                <h3 className="card-evento__titulo">{props.titulo}</h3>
                <p className="card-evento__texto">{props.descricao}</p>
                <h4 className="card-evento__conectar">{props.textolink}</h4>
            </div>
            
        </section>
       
    );
};



export default CardEvento;