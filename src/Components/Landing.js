import React from 'react';

import Tun from '../Images/TkHsCircCrop.png';
import ImageReact from '../Images/React.svg';
import ImageRuby from '../Images/ruby.svg';
import ImageRails from '../Images/rails.svg';
import ImageRedux from '../Images/redux.svg';
import ImageJS from '../Images/js.svg';
import ImagePGSQL from '../Images/pgsql.svg';
import ImageGitHub from '../Images/github.svg';
import ImageHTML from '../Images/html.svg';
import ImageCSS from '../Images/css.svg';
import ImageBootstrap from '../Images/bootstrap.svg';

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
              <p> 
                <img src={ImageReact} alt=" " width={40} height={40} />
                <img src={ImageRedux} alt=" " width={40} height={40} />
                <img src={ImageJS} alt=" " width={40} height={40} />
                <img src={ImageRuby} alt=" " width={40} height={40} />
                <img src={ImageRails} alt=" " width={40} height={40} />
                <img src={ImagePGSQL} alt=" " width={40} height={40} />
                <img src={ImageGitHub} alt=" " width={40} height={40} />
                <img src={ImageHTML} alt=" " width={40} height={40} />
                <img src={ImageCSS} alt=" " width={40} height={40} />
                <img src={ImageBootstrap} alt=" " width={40} height={40} />
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;