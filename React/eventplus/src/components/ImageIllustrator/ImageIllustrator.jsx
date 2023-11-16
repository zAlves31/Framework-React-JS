import React from 'react';
import './ImageIllustrator.css'
import imgeDefault from '../../assets/images/default-image.jpeg'


const ImageiIlustrator = ({alteText, imageRender = imgeDefault, additionalClass}) => {
    let imageResource

    return (
        <figure className='illustrator-box'>
            <img
                src={imageRender}
                alt={alteText}
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
               
    );
};

export default ImageiIlustrator;