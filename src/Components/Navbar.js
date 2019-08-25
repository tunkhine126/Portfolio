import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = () => {

return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Tun Khine</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#aboutMe">About me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contactMe">Contact me</Nav.Link>
        </Nav>
    </Navbar>
  </div>
  )
}

export default NavigationBar;
  