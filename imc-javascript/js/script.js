function calcular() {
    event.preventDefault();

    //pegar os dados do form
    const nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || nome.trim() == "") {
        alert("E necessario preencher os numeros corretamente");
        return;
    }

    const imc = calcularImc(altura, peso)

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(situacao);
    //validar se estao prenchidos

}

function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2);
    //return peso/altura ** 2;
    //return peso / (altura * altura);
}

function retornarSituacao(imc) {
    //validar o imc
    if (imc <= 18.5) {
        return "Magreza Severa";
    }else if(imc <= 24.99){
        return "Peso Normal";
    }else if(imc <= 29.99){
        return "Acima do peso";
    }else if (imc <= 34.99){
        return "Obesidade I";
    }else if (imc <= 39.99){
        return "Obesidade II";
    }
    return 'situacao';
}