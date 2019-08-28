import React from 'react';
// import { Card } from 'react-bootstrap'
import Tun from '../Images/TkHsCircCrop.png'

const Landing = () => {
  // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div className="bg" id="top">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-8 mx-auto" id="aboutMe">
            <img src={Tun} alt="logo" style={{ alignSelf: 'center', height: 120, width: 120, borderWidth: 1, }} />
            <h1 className="bannerText">Tun Khine</h1>
            <p className="bannerPara" >A full stack developer based in Atlanta, GA.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;