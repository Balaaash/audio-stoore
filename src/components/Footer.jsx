import React from 'react';
import { ReactComponent as VkIcon } from '../images/icons/vk.svg';
import { ReactComponent as TelegramIcon } from '../images/icons/telegram.svg';
import { ReactComponent as WhatsappIcon } from '../images/icons/whatsapp.svg';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container footer-content">
      <div className="footer-col">
        <div className="logo">QPICK</div>
        <nav className="footer-nav">
          <ul>
            <li>Избранное</li>
            <li>Корзина</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>

      <div className="footer-col">
        <nav className="footer-nav">
          <ul>
            <li>Условия сервиса</li>
          </ul>
        </nav>

        <div className="lang-switch">
          <span className="active">Рус</span> | Eng
        </div>
      </div>

      <div className="footer-col footer-social">
        <VkIcon className="icon" />
        <TelegramIcon className="icon" />
        <WhatsappIcon className="icon" />
      </div>
    </div>
  </footer>
);

export default Footer;



