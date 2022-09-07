import React from 'react';
import cenas from '../Images/cenas-eg.jpg';
import './cenas.css';

const Cenas = () => {
    return (
        <section className='container-cenas row w-100'>
           <div className='col'>
            <img className='img-cenas' src={cenas} alt='cenasegr'/>
           </div>
           <div className='text col'>
            <h2>Cenas de egresados: </h2>
            <p> * Primarios</p>
            <p> * Secundarios</p>
            <p> * Facultades</p>
            <p> * Corporativas</p>
           </div>
            
        </section>
    );
};

export default Cenas;