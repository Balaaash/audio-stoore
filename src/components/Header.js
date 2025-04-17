import React from 'react';
import { ReactComponent as HeartIcon } from '../icons/heart.svg'; // Иконка для избранного
import { ReactComponent as CartIcon } from '../icons/cart.svg'; // Иконка для корзины

const Header = () => {
  return (
    <header>
      <div className="logo">QPICK</div>
      <div className="icons">
        <HeartIcon className="icon" />
        <CartIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;

