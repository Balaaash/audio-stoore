import React from 'react';
import { Link } from 'react-router-dom';
import favoriteIcon from '../images/icons/heart.svg';
import cartIcon     from '../images/icons/cart.svg';

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header container">
        <Link to="/" className="header-logo">
          QPICK
        </Link>

        <div className="header-actions">
          <Link to="/favorites" className="action-link">
            <img src={favoriteIcon} alt="Избранное" />
            <span className="badge">2</span>
          </Link>
          <Link to="/cart" className="action-link">
            <img src={cartIcon} alt="Корзина" />
            <span className="badge">1</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

