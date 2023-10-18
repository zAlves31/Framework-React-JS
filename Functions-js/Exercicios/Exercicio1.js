//Exercicio criar uma desestruturacao para um objeto Filme
//Trazer somente 3 propriedades
//crie um arquivo a parte e tente executar sem consulta

const Filmes = [{
    Titulo:"Transformers: Age of Extinction",
    Genero:"Ficção científica",
    AnoLancamento:"2014",
    ClassificacaoIndicativa:"12 anos",
    PlataformaDisponivel:"Netflix"
}, {
    Titulo:"Os Incríveis",
    Genero:"Infantil/Aventura",
    AnoLancamento:"2004",
    ClassificacaoIndicativa:"Livre",
    PlataformaDisponivel:"Disney+"
}, {
    Titulo:"Os Simpsons - o Filme",
    Genero:"Comédia/Animação ",
    AnoLancamento:" 2007 ‧",
    ClassificacaoIndicativa:"12 anos",
    PlataformaDisponivel:"Star+"
}];

const {Titulo, Genero, PlataformaDisponivel} = Filmes;

Filmes.forEach((filmes) => {
    const {Titulo, Genero, PlataformaDisponivel} = filmes
    console.log(`
FILME:
    Titulo: ${Titulo}
    Genero: ${Genero}
    Plataforma Disponivel: ${PlataformaDisponivel}
`);
});
