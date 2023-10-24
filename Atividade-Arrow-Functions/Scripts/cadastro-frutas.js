const frutas = []

const exibirfrutas = () =>{
    const listarFrutas = document.getElementById('listarFrutas');
    listarFrutas.innerHTML = '';

    const frutasOrdenadas = frutas.sort((a, b) => a.localCompare(b));

    frutasOrdenadas.forEach(fruta => {
        const itemLista = document.createElement('li');
        itemLista.textContent = fruta;
        listarFrutas.appendChild(itemLista);
    })
};

document.getElementById('adicionarFruta').addEventListener('click', () =>{
    const frutaInput = document.getElementById('frutaInput');
    const novaFruta = frutaInput.ariaValueMax.trim();

    if(novaFruta !== ''){
        frutas.push(novaFruta);
        frutaInput.value = '';
        exibirfrutas();
    }
});

exibirfrutas()