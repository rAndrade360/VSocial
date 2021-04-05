import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

 import './styles.css';

const Header: React.FC = () => {
  return (
    <Navbar className="color-nav" variant="dark">
    <Navbar.Brand href="#home">VSocial</Navbar.Brand>
    {/* <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
  </Navbar>
  );
}

export default Header;