import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <img src="images/silk_logo-02.png" alt="Logo de Estudiosilk footer" />
          <p>
            Combinamos creatividad y estrategia para transformar tu estilo en una herramienta de confianza y empoderamiento,
            haciéndote sentir segura y auténtica cada día.
          </p>
        </div>

        <div className="footer-redes">
          <div className="footer-links">
            <a href="#nosotros">NOSOTROS</a>
            <span>|</span>
            <a href="#contacto">CONTACTO</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/estudiosilk/" target="_blank">
              <img src="images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565777219419" target="_blank">
              <img src="images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.tiktok.com/@estudiosilk" target="_blank">
              <img src="images/tik-tok.png" alt="TikTok" />
            </a>
          </div>
        </div>

        <div className="divider-line"></div>

        <div className="footer-legal">
          <p>©2025 ESTUDIOSILK. TODOS LOS DERECHOS RESERVADOS</p>
          <div className="footer-links">
            <a href="#terms">Términos & Condiciones</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
