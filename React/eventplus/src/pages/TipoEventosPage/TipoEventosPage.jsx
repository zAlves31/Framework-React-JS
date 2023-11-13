import React, { useState } from 'react';
import './TipoEventosPage.css'
import Titulo from '../../components/Titulo/Titulo';
import MainContent from '../../components/MainContent/MainContent';
import Container  from '../../components/Container/Container';
import ImageiIlustrator from '../../components/ImageIllustrator/ImageiIlustrator';

import tipoEventoImage from '../../assets/images/tipo-evento.svg'

const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false);

    function handleSubmit(){
        alert('Bora Cadastrar') 
    }

    function handleUpdate(){
        alert('Bora Editar')
    }

    return (
        <>
            <MainContent>
                <section className='cadastro-evento-section'>
                    <Container>
                        <div className='cadastro-evento-box'>
                            {/* Titulo */}
                            <Titulo tituloTexto={"Cadastro Tipo de Eventos"}/>

                            {/* imagem de ilustracao */}
                            <ImageiIlustrator 
                                imageRender={tipoEventoImage}
                            />

                            <form 
                                className='ftipo-evento'
                                onSubmit={frmEdit ? handleUpdate: handleSubmit}
                            >
                                {/* cadastrar ou editar? */}
                                {
                                    !frmEdit ? (<p>Tela de Cadastro</p>) : (<p>Tela de Edicao</p>)
                                }
                            </form>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
       
    );
};

export default TipoEventosPage;