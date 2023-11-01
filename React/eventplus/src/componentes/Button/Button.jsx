import React from 'react';

const Button = ({textButton,type,fnClick}) => {
    return (
        <button 
            onClick={fnClick}
            type={type}>
            {textButton}
        </button>
    );
};

export default Button;