import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-8 mx-auto" id="aboutMe">
            <SocialIcon className="linkedin" url="https://www.linkedin.com/in/tun-khine-741852133/" target="_blank" /> &ensp;
            <SocialIcon className="github" url="https://github.com/tunkhine126" target="_blank" bgColor="#a031e1" /> &ensp;
            <SocialIcon className="medium" url="https://medium.com/@tunkhine126" target="_blank" bgColor="#FFFFFF" /> &ensp;
            <SocialIcon className="twitter" url="https://twitter.com/TunTheCoder" target="_blank" /> &ensp;
            <SocialIcon className="instagram" url="https://www.instagram.com/tkhine126/" target="_blank" /> &ensp;
            <br/>
          <div className="creator">Created by Tun Khine</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
