import React, {useEffect, useState} from 'react';
import './HomePage.css';

import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container  from '../../components/Container/Container';
import Titulo from '../../components/Titulo/Titulo';
import api from '../../Services/Service';
import { nextEventResource } from '../../Services/Service';



const HomePage = () => {
    const [NextEvents, setNextEvents] = useState([])

    useEffect(() => {
        async function getNextEvents(){
            try{
                const promise = await api.get(nextEventResource);
                const dados = await promise.data;

                setNextEvents(dados);
            }catch(error){
                alert("Deu ruim na API!")
            }
        }

        getNextEvents();
    },[]);

    return (
       <div>
            
            <MainContent>
                <Banner/>
                <section className='proximos-eventos'>
                    <Container>
                        <Titulo tituloTexto="Proximos Eventos"/>
                        <div className='events-box'>
                            {
                                NextEvents.map((e) =>{
                                    return(
                                        <NextEvent 
                                            title={e.nomeEvento}
                                            description={e.descricao}
                                            eventDate={e.dataEvento}
                                            idEvent={e.idEvento}
                                    />
                                    ); 
                                })
                            }

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