import './Nav.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="demo">
        <NavLink to="/">
          <h2>DEMO Streaming</h2>
        </NavLink>
      </div>
      <div className="logReg">
        <div className="divLogin">Log in</div>
        <div className="divRegister">Start your free trial</div>
      </div>
    </nav>
  );
};

export default Nav;
