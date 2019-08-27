import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
// import Tun from '../Images/TkHsCircCrop.png'

const NavigationBar = () => {

return (
  <div>
    <Navbar className="navBar" bg="dark" variant="dark" fixed="top">
      {/* <Navbar.Brand>
        <img src={Tun} alt="logo" style={{ alignSelf: 'center', height: 60, width: 60, borderWidth: 1, }} /> </Navbar.Brand> */}
          <Navbar.Brand className="navbar-name" href="#top">Tun Khine</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link className="navbar-links" href="#aboutMe">About me</Nav.Link>
              <Nav.Link className="navbar-links"href="#projects">Projects</Nav.Link>
              <Nav.Link className="navbar-links"href="#articles">Articles</Nav.Link>
              <Nav.Link className="navbar-links"href="#contactMe">Contact me</Nav.Link>
            </Navbar.Collapse>
      </Navbar>
  </div>
  )
}

export default NavigationBar;
  