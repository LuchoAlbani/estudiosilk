import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#home">
          <img src="images/silk_logo-02.png" alt="Logo de Estudiosilk" />
        </a>
      </div>
      <div className="divider"></div>
      <nav>
        <ul>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#quiz">QUIZ</a></li>
          <li><a href="#services">SERVICIOS</a></li>
          <li><a href="#we-are">NOSOTROS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
