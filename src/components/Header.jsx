import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../images/icons/heart.svg';
import { ReactComponent as CartIcon } from '../images/icons/cart.svg';

const Header = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(sessionStorage.getItem('favorites')) || []);
    setCart(JSON.parse(sessionStorage.getItem('cart')) || []);
  }, []);

  return (
    <header className="site-header">
      <div className="site-container">
        <div className="logo" onClick={() => navigate('/')}>
          QPICK
        </div>

        <div className="header-icons">
          <div className="icon-wrapper" onClick={() => navigate('/favorites')}>
            <HeartIcon className="icon" />
            {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
          </div>

          <div className="icon-wrapper" onClick={() => navigate('/cart')}>
            <CartIcon className="icon" />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
