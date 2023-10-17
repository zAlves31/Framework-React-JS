const mumeros = [1, 2, 5, 10, 300];

console.log(numero)

const nMenor10 = numeros.filter((n)=>{
    return n < 10;
})

console.log(nMenor10)

const comentarios = [
    {comentario: "bla bla bla", exibe: true},
    {comentario: "Evento e uma merda", exibe: false},
    {comentario: "Otimo Evento!", exibe: true}
];

const comentariosOk = comentarios.filter( (c) => {
    return c.exibe === true;
});

console.log(comentariosOk);