import React, { useState } from "react";
import "./Contador.css";

const Contador = () => {
  const[contador, setContador] = useState(0); //

    function handleIncrementar() {
        setContador( contador + 1);
    }

    function handledecrementar() {
        setContador( contador === 0 ? 0 : contador - 1)
    }

    function handlemultiplicar() {
        setContador( contador *7);
    }

    return (
        <div>
            <h1>Contador</h1>

            <p>{ contador }</p>

            <button 
            onClick={() => {handleIncrementar()}}
            >
                Incrementar
            </button>

            <button 
            onClick={() => {handledecrementar()}}
            >
                Decrementar
            </button>

            <button 
            onClick={() => {handlemultiplicar()}}
            >
                Multiplicar
            </button>
        </div>
    );
    
};

export default Contador;
