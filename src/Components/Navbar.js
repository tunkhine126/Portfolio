import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Tun from '../Images/TkHsCircCrop.png'

const NavigationBar = () => {

return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img src={Tun} alt="logo" style={{ alignSelf: 'center', height: 60, width: 60, borderWidth: 1, }} /> </Navbar.Brand>
          <Navbar.Brand>Tun Khine</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="#aboutMe">About me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contactMe">Contact me</Nav.Link>
            </Nav>
      </Navbar>
  </div>
  )
}

export default NavigationBar;
  