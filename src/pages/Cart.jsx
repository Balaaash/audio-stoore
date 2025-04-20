import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(stored);
  }, []);

  const removeItem = id => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    sessionStorage.setItem('cart', JSON.stringify(updated));
  };

  const updateQuantity = (id, delta) => {
    const updated = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    setCartItems(updated);
    sessionStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="site-container">
      <h2 className="section-title">Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="cart-page">
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price} ₴</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, +1)}>+</button>
                  </div>
                </div>
                <button className="btn-remove" onClick={() => removeItem(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Итого: <strong>{total} ₴</strong></p>
            <button className="btn-checkout" onClick={() => navigate('/checkout')}>Оформить заказ</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;