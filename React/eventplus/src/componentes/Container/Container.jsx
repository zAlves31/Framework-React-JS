import React from 'react';
import './Container.css'

const Container = ({Children}) => {
    return (
        <div className='container'>
            {Children}
        </div>
    );
};

export default Container;