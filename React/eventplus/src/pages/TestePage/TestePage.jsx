import React, { useState } from "react";
import Input from '../../componentes/Input/Input'
import Button from '../../componentes/Button/Button'

const TestePage = () => {
    const [n1,setN1] = useState(0);
    const [n2,setN2] = useState(0);
    const [total, setTotal] = useState()

    function handleCalcular() {
      setTotal (n1 + n2);
    }

  return (
    <div>
      <h1>Pagina de Poc`s</h1>
      <h2>Calculator</h2>

      <form action="">
        <Input 
        type="number" 
        placeholder="Digite o primeiro numero" 
        name="n1" 
        id="n1" 
        value={n1}
        onChange={(e) => {setN1(e.target.value)}}
        />
        <br/>
        <Input  
        type="number" 
        placeholder="Digite o segundo numero" 
        name="n2" 
        id="n2" 
        value={n2}
        onChange={(e) =>{setN2(e.target.value)}}
        />

        <br/>

        <Button  
          textButton="Calcular" 
          type="submit"
          onClick={handleCalcular}
        />

        <span>Resultado: <strong id='res'>{total}</strong></span>


      </form>
      <p>Valor do N1: {n1}</p>
      <p>Valor do N2: {n2}</p>
    </div>
  );
};

export default TestePage;
