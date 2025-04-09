import React from 'react';
import Counter from '../Counter/Counter';
import './CartItem.css';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.name}</h3>
        <p className="cart-item-price">${item.price} each</p>
      </div>
      <div className="cart-item-controls">
        <Counter 
          value={item.quantity} 
          onChange={(newQuantity) => onQuantityChange(item.id, newQuantity)}
        />
        <button 
          className="remove-button" 
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
      <div className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;