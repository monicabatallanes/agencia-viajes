import React from 'react';
import icono from '../Images/icono-whatsapp.png';
import './whatsapp.css';

const Whatsapp = () => {
    return (
        <div className='contenedor-boton'>
            <a href="https://api.whatsapp.com/send?phone=543814642565&text=Bienvenido%20a%20Egremax,%20en%20que%20podemos%20ayudarte?" alt='Ir a Whatsapp' target='_blank' rel="noreferrer">
                <img className='boton' src={icono} alt="Icono whatsapp" />

            </a>
        </div>
    );
};

export default Whatsapp;