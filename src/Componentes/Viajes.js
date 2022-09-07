import React from 'react';
import viajes from '../Images/viajes-eg.jpg';
import './viajes.css';

const Viajes = () => {
    return (
        <>
        <div className='titulo'>
            <h1 >Nuestros servicios</h1>
        </div>
        <section className='container row'>
            <div className='viajes col'> 
                <h2>Viajes</h2>
                <p>Los destinos que te ofrecemos son: </p>
                <p>  * Bariloche</p>
                <p>  * Carlos Paz</p>
                <p>  * Camboriú</p>
                <p>  * Costa Argentina</p>
            </div>
            <div className='viajes col'>
              <img className='img-viajes' src={viajes} alt="viajes" />
            </div>
        </section>
        </>
        
    );
};

export default Viajes;