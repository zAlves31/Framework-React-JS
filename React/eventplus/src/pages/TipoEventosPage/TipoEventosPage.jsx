import React from 'react';
import './TipoEventosPage.css';
import Titulo from '../../components/Titulo/Titulo';
import MainContent from '../../components/MainContent/MainContent';
import Container  from '../../components/Container/Container';

const TipoEventosPage = () => {
    return (
        <>
            <MainContent>
                <section className='cadastro-evento-section'>
                    <Container>
                        <div className='cadastro-evento-box'>
                            {/* Titulo */}
                            <Titulo tituloTexto={"Cadastro Tipo de Eventos"}/>
                            {/* imagem de ilustracao */}
                            <ImageIllustrator  />

                            <form className='ftipo-evento'>
                                <p>Formulario sera criado aqui</p>
                            </form>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
       
    );
};

export default TipoEventosPage;