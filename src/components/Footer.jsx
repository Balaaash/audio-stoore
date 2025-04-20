import React from 'react';
import IconLink from './IconLink';
import vkIcon from '../images/icons/vk.svg';
import tgIcon from '../images/icons/telegram.svg';
import waIcon from '../images/icons/whatsapp.svg';
import globeIcon from '../images/icons/globe.svg';

export default function Footer() {
  return (
    <div className="footer-tile-wrapper">
      <div className="footer-tile container">
        {/* Логотип */}
        <div className="footer-col footer-col--logo">
          <div className="logo">QPICK</div>
        </div>

        {/* Средний блок: две группы ссылок */}
        <div className="footer-col footer-col--middle">
          {/* 1) Избранное / Корзина / Контакты */}
          <div className="links-group">
            <a href="#" className="footer-link">Избранное</a>
            <a href="#" className="footer-link">Корзина</a>
            <a href="#" className="footer-link">Контакты</a>
          </div>
          {/* 2) Условия сервиса + переключатель языка */}
          <div className="info-group">
            <a href="#" className="footer-link">Условия сервиса</a>
            <div className="lang-switcher">
              <img src={globeIcon} alt="Язык" className="lang-icon" />
              <a href="#" className="lang-link">Рус</a>
              <span className="lang-separator">/</span>
              <a href="#" className="lang-link active">Eng</a>
            </div>
          </div>
        </div>

        {/* Социальные иконки */}
        <div className="footer-col footer-col--social">
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
  );
}






