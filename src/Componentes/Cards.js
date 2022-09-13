import React from 'react';
import {CardGroup, Card } from 'react-bootstrap';
import entretenimientos from '../Images/entret-eg.jpg';
import conjuntos from '../Images/conjuntos-eg.jpg';
import alquiler from '../Images/alquileres-eg.jpg';
import './cards.css';

const Cards = () => {
    return (
        
          <CardGroup className='cardGroup'>
            <Card className='card'>
               <Card.Img className='imgCard' variant="top" src={entretenimientos} alt='entretenimientos'/>
               <Card.Body>
               <Card.Text>
                  Te organizamos:
                  <br /> 
                  Fiestas temáticas y
                  Torneos.
               </Card.Text>
               </Card.Body>
            </Card>
            <Card className='card'>
               <Card.Img className='imgCard' variant="top" src={conjuntos} alt='conjuntos'/>
               <Card.Body>
               <Card.Text>
                  Los conjuntos están compuestos por:
                  <br /> 
                  Pantalones, Remeras, Camperas, Buzos y Gorras.{' '}
               </Card.Text>
               </Card.Body>
            </Card>
            <Card className='card'>
              <Card.Img className='imgCard' variant="top" src={alquiler} alt='alquiler'/>
              <Card.Body>
              <Card.Title className='title'>Alquiler</Card.Title>
              <Card.Text>
                 Para ocasiones especiales, te ofrecemos el alquiler de:
                 <br />
                  Trajes y
                  Vestidos.
              </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        
    );
}



export default Cards;