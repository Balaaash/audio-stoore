// src/components/CartItem/CartItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <div className="item-price">{item.price.toLocaleString()} ₽</div>
      </div>
      <div className="item-controls">
        <div className="quantity-selector">
          <button 
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button 
          className="remove-button"
          onClick={() => onRemove(item.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;