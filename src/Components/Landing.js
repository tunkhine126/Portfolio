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

  return (
    <div className="bg" id="top">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-8 mx-auto" id="aboutMe">
            <img src={Tun} alt="Tun Khine" style={{ alignSelf: 'center', height: 120, width: 120, borderWidth: 1, }} />
            <h1 className="bannerText">Tun Khine</h1>
            <p className="bannerPara" >A full stack developer based in Atlanta, GA.</p>
              <p> 
                <img src={ImageReact} alt="React Logo" width={40} height={40} /> &nbsp;
                <img src={ImageRedux} alt="Redux Logo" width={40} height={40} /> &nbsp;
                <img src={ImageJS} alt="JaveScript Logo" width={40} height={40} /> &nbsp;
                <img src={ImageRuby} alt="Ruby Logo" width={40} height={40} /> &nbsp;
                <img src={ImageRails} alt="Ruby on Rails Logo" width={40} height={40} /> &nbsp;
                <img src={ImagePGSQL} alt="PostgreSQL Logo" width={40} height={40} /> &nbsp;
                <img src={ImageGitHub} alt="Github Logo" width={40} height={40} /> &nbsp;
                <img src={ImageHTML} alt="HTML 5 Logo" width={40} height={40} /> &nbsp;
                <img src={ImageCSS} alt="CSS Logo" width={40} height={40} /> &nbsp;
                <img src={ImageBootstrap} alt="Bootstrap Logo" width={40} height={40} /> &nbsp;
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;