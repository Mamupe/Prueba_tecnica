import './Footer.css';

import React from 'react';

import facebook from '../../assets/social/facebook-white.svg';
import instagram from '../../assets/social/instagram-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
import appStore from '../../assets/store/app-store.svg';
import googleplay from '../../assets/store/play-store.svg';
import microsoft from '../../assets/store/windows-store.svg';

export const Footer = () => {
  return (
    <div className="footerContainer">
      <ul>
        <li>Home &nbsp;|</li>
        <li> &nbsp;&nbsp;Terms and Conditions &nbsp;|</li>
        <li> &nbsp;&nbsp;Privacy Policy &nbsp;|</li>
        <li> &nbsp;&nbsp;Collection Stament &nbsp;|</li>
        <li> &nbsp;&nbsp;Help &nbsp;|</li>
        <li>&nbsp;&nbsp;Manage Account </li>
      </ul>
      <p>Copyrght© 2016 Streaming. All Rights Reserved.</p>
      <div className="socialStore">
        <div className="divSocial">
          <img className="social" src={facebook} alt="facebook" />
          <img className="social" src={twitter} alt="twitter" />
          <img className="social" src={instagram} alt="instagram" />
        </div>
        <div className="divStore">
          <img className="store" src={microsoft} alt="microsoft" />
          <img className="store" src={googleplay} alt="googleplay" />
          <img className="store" src={appStore} alt="appstore" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
