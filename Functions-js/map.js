// const mumeros = [1, 2, 5, 10, 300];

// const arrDobro = numeros.map( (n) => {
//     return n * 2;
// })

// console.log(numeros);
// console.log(arrDobro);

//crie 2 arrays nomes e sobrenomes
const nomes = ["Joao", "Eduardo", "Jose", "Lucimara", "Crystal"]
const sobrenomes = ["Alves", "Bautista", "Maria", "Gonzaga", "Bautista"]
//crie um terceiro array de nomesCompletos
const nomesCompletos = nomes.map( (nome,indice) =>{ 
    return`${nome} ${sobrenomes[indice]}`;
});

//ao final exiba os nomes completos no console com foreach
nomesCompletos.forEach( (nc) => {
    console.log(nc);
});

//e necessario contem pelo menos 5 nomes


//utilize arrow funcitions como calback functions
