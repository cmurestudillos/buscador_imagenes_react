import React from 'react';
// Logo 
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={logo} alt=" Logo" width="32" height="32" className="d-inline-block align-top mr-4" />
            Buscador Imagenes
          </span>
        </div>
      </nav>
    );
}
 
export default Header;