import React from 'react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';
import { ReactComponent as HeartIcon } from './images/icons/heart.svg'; // Иконка для избранного
import { ReactComponent as CartIcon } from './images/icons/cart.svg'; // Иконка для корзины

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

