import React from 'react';
import './VisionSection.css'
import Titulo from '../Titulo/Titulo'

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Titulo
                tituloTexto={"Visao"}
                charmanderClass='vision__title'
                color='white'
                /> 
                <p className='vision__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non vero ut beatae autem esse rerum voluptatum vitae incidunt voluptatem omnis quam inventore, eius officiis eveniet dicta molestiae id corrupti porro!</p>
            </div>
        </section>
    );
};

export default VisionSection;