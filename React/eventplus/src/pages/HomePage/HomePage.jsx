import React from 'react';
import './HomePage.css';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/Main/MainContent';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container  from '../../components/Container/Container';
import Titulo from '../../components/Titulo/Titulo';

const HomePage = () => {
    return (
       <div>
            
            <MainContent>
                <Banner/>
                <section className='proximos-eventos'>
                    <Container>
                        <Titulo tituloTexto="Proximos Eventos"/>
                        <div className='events-box'>
                            <NextEvent 
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"10/11/2023"}
                                idEvent={"fuhfusbusnvn9dsins"}
                            />

                            <NextEvent 
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"10/11/2023"}
                                idEvent={"fuhfusbusnvn9dsins"}
                            />

                            <NextEvent 
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"10/11/2023"}
                                idEvent={"fuhfusbusnvn9dsins"}
                            />

                            <NextEvent
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"10/11/2023"}
                                idEvent={"fuhfusbusnvn9dsins"}
                             />
                        </div>
                    </Container>
                </section>
                <VisionSection/>
                <ContactSection/>
            </MainContent>
       </div>
    );
};

export default HomePage;