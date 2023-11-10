import React from 'react';
import 'ImageIllustrator.css'
import tipoEventoImage from '../../assets/images/tipo-evento.svg'

const ImageiIlustrator = ({alteText, imageName, additionalClass}) => {
    let imageResource
    switch (imageName) {
        case 'tipo-evento':
            imageResource = tipoEventoImage
            break;
        case 'evento':
            imageResource = eventoImage
            break;
            
        default:
            break;
    }
    return (
        <figure className='illustrator-box'>
            <img
                src="{imageResource}" 
                alt="{alteText}" 
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
               
    );
};

export default ImageiIlustrator;