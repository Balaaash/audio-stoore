import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import useCart from '../../hooks/useCart';
import './Header.css';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>AudioShop</h1>
        </Link>
        <nav className="nav">
          <Link to="/catalog" className="nav-link">Catalog</Link>
          <Link to="/cart" className="nav-link cart-link">
            <Icon name="shopping-cart" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;