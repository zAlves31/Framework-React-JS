const camisaLacoste ={
    descricao: "Camisa Lacoste",
    preco: 589.97,
    tamanho: "m",
    cor: "Amarela",
    presente: true
    
}

const {descricao, preco} = camisaLacoste;
const {presente} = camisaLacoste;

console.log(`
PRODUTO:
    Descricao: ${descricao}
    Preco: ${preco}
    Presente: ${presente ? "sim" : "Nao"}
`);

    //Exercicio criar uma desestruturacao para um objeto Filme
    //Trazer somente 3 propriedades
    //crie um arquivo a parte e tente executar sem consulta