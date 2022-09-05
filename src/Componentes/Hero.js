import React from 'react';
import marca from '../Images/EgreMax-marca.jpg';
import imagen from '../Images/Bariloche1.jpg';
import './hero.css';

const Hero = () => {
    return (
        <div className='containerHero'>
            <img className='imgHero'src={imagen} alt='bariloche' />
            <img className='imgMarca' src={marca} alt="marca" />
        </div>
    );
};

export default Hero;