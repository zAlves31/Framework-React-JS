const arrPessoas = []; //array vazio

function calcular(e) {
  e.preventDefault(); //capturar o evento de submit do formulário (para)

  // pegar os dados do form
  const nome = document.getElementById("nome").value.trim();
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
    alert("É necessário preecher os números corretamente");
    return;
  }

  // calcular o imc
  const imc = calcularImc(altura, peso);
  // gera o texto da situação
  const txtSituacao = retornaSituacao(imc);

  // gera o objeto com os dados da pessoa
  const pessoa = { nome, altura, peso, imc, situacao: txtSituacao }; //ojeto literal

  //adiciona a pessoa na lista
  arrPessoas.push(pessoa);

  // listar as pessoas
  listarPessoas();
}

// return peso / altura ** 2;
//     return peso / (altura * altura);
function calcularImc(altura, peso) {
  return peso / Math.pow(altura, 2);
}

/*
    Resultado	        Situação
    Menor que 18.5      Magreza Severa
    Entre 18.5 e 24.99	Peso normal
    Entre 25 e 29.99	Acima do peso
    Entre 30 e 34.99	Obesidade I
    Entre 35 e 39.99	Obesidade II (severa)
    Acima de 40	        Cuidado!!! else
*/
function retornaSituacao(imc) {
  if (imc < 18.5) {
    return "Magreza Severa!";
  } else if (imc <= 24.99) {
    return "Peso normal";
  } else if (imc <= 29.99) {
    return "Acima do peso";
  } else if (imc <= 34.99) {
    return "Obesidade I";
  } else if (imc <= 39.99) {
    return "Obesidade II";
  } else {
    return "Cuidado!";
  }
}

// lista as pessoas na tabela
function listarPessoas() {
//   let textoQualquer = [];

//   textoQualquer.push("<p>EDUARDO</p>"); //0
//   textoQualquer.push("<p>JONAS</p>"); //1
//   textoQualquer.push("<p>CARLOS</p>"); //2

//   let temp = "";

//   textoQualquer.forEach((e) => {
//     temp += e;
//   });

//   document.getElementById("teste").innerHTML = temp;

  let template = "";//string vazia

  arrPessoas.forEach((p) => {//preenche ou acumula valores na sttring
    template += `
        <tr>
            <td>${p.nome}</td>
            <td>${p.altura}</td>
            <td>${p.peso}</td>
            <td>${p.imc}</td>
            <td>${p.situacao}</td>
        </tr>`;
  });

//injeta a string completa no html
  document.getElementById('cadastro').innerHTML = template;
}
