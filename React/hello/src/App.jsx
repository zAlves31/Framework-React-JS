import './App.css';
import Rotas from './routes';


function App() {
  //Criar as propriedades titulo, texto, textoLink
  //passar as propriedades em cada um dios 3 componentes abaixo
  return (
    <div className="App">
      <Rotas />
      {/* <h1>Hello Word React</h1>
      <Title nome="Joao" sobrenome="Bautista"/>

      <Container>
        <CardEvento titulo="JavaScript" descricao="Breve descrição do evento, pode ser um paragrafo pequeno" textolink="Conectar"/>
        <CardEvento titulo="C#" descricao="Breve descrição do evento, pode ser um paragrafo pequeno" textolink="Conectar"/>
        <CardEvento titulo="HTML" descricao="Breve descrição do evento, pode ser um paragrafo pequeno" textolink="Conectar"/>
      </Container>

      <Container>
        <Contador />
      </Container> */}
      
    </div>
  );
}

export default App;
