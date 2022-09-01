import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import '../Images/EgreMax-marca-Rojo-03.jpg';

const BarraNav = () => {
    return (
        
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
    );
};

export default BarraNav;