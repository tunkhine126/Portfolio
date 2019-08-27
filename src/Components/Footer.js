import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <SocialIcon className="github" url="https://github.com/tunkhine126" target="_blank" bgColor="#a031e1"/> GitHub {''}
      <SocialIcon className="medium" url="https://medium.com/@tunkhine126" target="_blank" /> Medium {''}
      <SocialIcon className="twitter" url="https://twitter.com/TunTheCoder" target="_blank" /> Twitter {''}
      <SocialIcon className="instagram" url="https://www.instagram.com/tkhine126/" target="_blank" /> Instagram {''}
      <br/>
      <div className="creator">Created by Tun Khine</div>
    </div>
  );
}

export default Footer;
