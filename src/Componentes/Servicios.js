import React from 'react';
import './servicios.css';
import viajes from '../Images/viajes-eg.jpg';
import cenas from '../Images/cenas-eg.jpg';
import fiesta15 from '../Images/fiesta15-eg.jpg';
import fiesta15años from '../Images/fiesta15-egremax.jpg';

const Servicios = () => {
    return (
        <>
        <div className='titulo'>
            <h1>Te ofrecemos</h1>
        </div>
        <section id='servicios' className='container row'>
            <div className='contenedor-tarjeta'>
              <figure>
                <img className='img-viajes' src={viajes} alt="viajes" />
                <figcaption className='offside'>
                    <div className='texto'>
                    <h3> Nuestros destinos</h3>
                    <p>  * Bariloche</p>
                    <p>  * Carlos Paz</p>
                    <p>  * Camboriú</p>
                    <p>  * Costa Argentina</p>

                    </div>
                  
                </figcaption>
              </figure>
            </div>
            <div className='contenedor-tarjeta'>
              <figure>
                <img className='img-viajes' src={cenas} alt="cenas" />
                <figcaption className='offside'>
                    <div className='texto'>
                    <h3> Cenas de egresados de:</h3>
                    <p>  * Primario</p>
                    <p>  * Secundario</p>
                    <p>  * Facultades</p>
                    <p>  * Corporativas</p>

                    </div>
                  
                </figcaption>
              </figure>
            </div>
            <div className='contenedor-tarjeta'>
              <figure>
                <img className='img-viajes' src={fiesta15} alt="fiesta15años" />
                <h2> Celebramos tus 15 años</h2>
                <figcaption className='offside'>
                   <img className='img-viajes' src={fiesta15años} alt="fiesta_15" />
                  
                </figcaption>
              </figure>
            </div>
        </section>
        </>
        
    );
};

export default Servicios;