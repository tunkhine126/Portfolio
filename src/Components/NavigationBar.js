import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import FaCode from 'react-icons/lib/fa/code';

const NavigationBar = () => {

return (
  <div>
    <Navbar className="navBar" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand className="navbar-name" href="#top">
        <FaCode className="code-icon" size={35} style={{ color: '#A031FF' }} />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="navbar-links" href="#aboutMe">About me</Nav.Link>
        <Nav.Link className="navbar-links" href="#projects">Projects</Nav.Link>
        <Nav.Link className="navbar-links" href="#articles">Articles</Nav.Link>
        <Nav.Link className="navbar-links" href="https://learn.co/tunkhine126/resume" target="_blank">Resume</Nav.Link>
        <Nav.Link className="navbar-links" href="https://mail.google.com/mail/?view=cm&fs=1&to=tunkhine126@gmail.com" target="_blank">Contact me</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </div>
 )
}

export default NavigationBar;
  