import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="images/silk_logo-02.png" alt="Logo de Estudiosilk" />
        </Link>
      </div>
      <div className="divider"></div>
      <nav>
        <ul>
          <li><Link to="/blog">BLOG</Link></li>
          <li><a href="#quiz">QUIZ</a></li>
          <li><a href="#services">SERVICIOS</a></li>
          <li><a href="#we-are">NOSOTROS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
