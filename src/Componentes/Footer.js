import React from 'react';
import './footer.css';
import egremax from '../Images/EgreMax-ByN.jpg'

const Footer = () => {
    return (
        <footer className='container-footer row'>
            <div className='contenedor-logo col'>
                <div>
                  <img className='logo-footer' src={egremax} alt="logo" />
                </div>
                <div className='col'>
                  <p className='marca'>Egremax</p>
                  <p>Agente estudiantil</p>
                </div>
            </div>
            <div className='col'>
                <p>Dirección: </p>
                <p>Todos los derechos reservados.</p>
            
            </div>
            
        </footer>
    );
};

export default Footer;