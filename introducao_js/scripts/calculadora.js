function calcular(){
    event.preventDefault();

    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let resultado;
    console.log(n1);
    console.log(n2);

    if ( isNaN(n1) || isNaN(n2) ) {
        alert("E necessario digitar apenas numeros")
        return;
    }

    if (op == '+'){
        resultado = somar(n1, n2);
    }else if(op == '-'){
        resultado = subtrair (n1, n2);
    }else if(op == '*'){
        resultado = multiplicacao (n1, n2);
    }else if(op == '/'){
        resultado = divisao (n1, n2);
    }else{
        resultado = "Operação invalida";
    }
    
    document.getElementById('result').innerText = resultado;

    
}

function somar(x,y){
    return x + y;
}

function subtrair(x,y){
    return x - y;
}

function multiplicacao(x,y){
    return x * y;
}

function divisao(x,y){
    if (y == 0){
        return "Não é um número"
    }
    return x/y;
}