import React from 'react';
import IconLink from './IconLink';
import vkIcon from '../images/icons/vk.svg';
import tgIcon from '../images/icons/telegram.svg';
import waIcon from '../images/icons/whatsapp.svg';

export default function Footer() {
  return (
    // <- здесь располагается «фон» плитки + центрирование
    <div className="footer-tile-wrapper">
      {/* <- сама белая плитка */}
      <div className="footer-tile container">
        {/* левая колонка */}
        <div className="footer-col footer-col--left">
          <div className="logo">QPICK</div>
        </div>

        {/* центральная колонка */}
        <div className="footer-col footer-col--center">
          <nav className="footer-nav">
            <ul>
              <li><a href="#">Избранное</a></li>
              <li><a href="#">Корзина</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </nav>
          <div className="lang-switch">
            <a href="#" className="active">Рус</a>
            <span>/</span>
            <a href="#">Eng</a>
          </div>
        </div>

        {/* правая колонка */}
        <div className="footer-col footer-col--right">
          <a href="#" className="footer-link">Условия сервиса</a>
          <div className="footer-social">
            <IconLink href="https://vk.com" label="VK">
              <img src={vkIcon} alt="VK" className="icon" />
            </IconLink>
            <IconLink href="https://t.me" label="Telegram">
              <img src={tgIcon} alt="Telegram" className="icon" />
            </IconLink>
            <IconLink href="https://wa.me" label="WhatsApp">
              <img src={waIcon} alt="WhatsApp" className="icon" />
            </IconLink>
          </div>
        </div>
      </div>
    </div>
  );
}





