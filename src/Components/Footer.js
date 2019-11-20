import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-8 mx-auto" id="footer">
            <SocialIcon className="footer-icon" url="https://www.linkedin.com/in/tun-khine-741852133/" target="_blank" alt="LinkedIn Logo Link" style={{ height: 40, width: 40 }}/> &ensp;
            <SocialIcon className="footer-icon" url="https://github.com/tunkhine126" target="_blank" bgColor="#a031e1" alt="Github Logo Link" style={{ height: 40, width: 40 }}/> &ensp;
            <SocialIcon className="footer-icon" url="https://medium.com/@tunkhine126" target="_blank" bgColor="#FFFFFF" alt="Medium Logo Link" style={{ height: 40, width: 40 }}/> &ensp;
            <SocialIcon className="footer-icon" url="https://twitter.com/TunTheCoder" target="_blank" alt="Twitter Logo Link" style={{ height: 40, width: 40 }}/> &ensp;
            <SocialIcon className="footer-icon" url="https://www.instagram.com/tkhine126/" target="_blank" alt="Instagram Logo Link" style={{ height: 40, width: 40 }}/> 
            <br/>
          <div className="creator-text">
            <p>Created by Tun Khine</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
