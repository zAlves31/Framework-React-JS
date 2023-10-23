const urlViaCep = "https://viacep.com.br/ws"
const ulrCepProfeossor = "http://172.16.35.155:300/myceps"

function cadastar(e) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cep = document.getElementById("cep").value
    const endereco = document.getElementById("endereco").value.trim();
    const numero = document.getElementById("numero").value
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    if (validaForm(nome, endereco, cep)) {
        alert("Prencher todos os campos");
        return;
    }
}

function cadastar(e) {
    e.preventDefalt();
    alert("Cadastrar ...")
}

async function buscarEndereco(cep) {
    const resource = `/${cep}/json/`
    try{
        const promise = await fetch(ulrCepProfeossor+resource)
        const endereco = await promise.json()
        console.log(endereco);
        return
        document.getElementById("endereco").value =`${endereco.logadouro}`
        document.getElementById("cidade").value =`${endereco.localidade}`
        document.getElementById("estado").value =`${endereco.uf}`
    }
    catch (error){
        console.log(error);

        document.getElementById("not-found").innerText ="cep invalido"
    }
}