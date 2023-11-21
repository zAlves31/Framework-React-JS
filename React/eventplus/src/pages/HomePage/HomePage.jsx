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
import Notification from "../../components/Notification/Notification";



const HomePage = () => {
    const [NextEvents, setNextEvents] = useState([])
    const [notifyUser, setNotifyUser] = useState();

    useEffect(() => {
        async function getNextEvents(){
            try{
                const promise = await api.get(nextEventResource);
                const dados = await promise.data;

                setNextEvents(dados);
            }catch(error){
                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote,
                    imgIcon: "Success",
                    imgAlt:
                      "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
                    showMessage: true,
                  });
            }
        }

        getNextEvents();
    },[]);

    return (
       <div>
            
            <MainContent>
                {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
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