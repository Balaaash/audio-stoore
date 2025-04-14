import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 AudioShop. Все права защищены</p>
        <div className="footer-links">
          <a href="/terms">Условия использования</a>
          <a href="/privacy">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;