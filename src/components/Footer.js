import React from 'react';
import { ReactComponent as TelegramIcon } from '../icons/telegram.svg';
import { ReactComponent as VkIcon } from '../icons/vk.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="logo">QPICK</div>
      <div className="links">
        <button className="link-button">Избранное</button>
        <button className="link-button">Сравнение</button>
        <button className="link-button">Контакты</button>
      </div>
      <div className="social-icons">
        <TelegramIcon className="icon" />
        <VkIcon className="icon" />
        <InstagramIcon className="icon" />
      </div>
    </footer>
  );
};

export default Footer;



