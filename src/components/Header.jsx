import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../images/icons/heart.svg';
import { ReactComponent as CartIcon } from '../images/icons/cart.svg';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header>
      <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        QPICK
      </div>
      <div className="icons">
        <HeartIcon className="icon" />
        <CartIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;


