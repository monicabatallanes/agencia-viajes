import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../Images/EgreMax-marca-Rojo-03.jpg';
import './barraNav.css';

const BarraNav = () => {
    return (
        
        
        <Container className='container-nav'>
          <Navbar.Brand href="#home">
            <img className='logo' src={logo} alt='logoEgremax'/>
          </Navbar.Brand>
          
          <Nav >
            <Nav.Link className='links' href="#inicio">Inicio</Nav.Link>
            <Nav.Link className='links' href="#servicios">Servicios</Nav.Link>
            <Nav.Link className='links' href="#contacto">Contacto</Nav.Link>
          </Nav>
          
          
        </Container>
      
        
    );
};

export default BarraNav;