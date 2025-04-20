import React, { useState, useEffect } from 'react';
import deleteIcon from '../images/icons/delete.svg';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const load = () => {
      const raw = sessionStorage.getItem('cart');
      setCart(raw ? JSON.parse(raw) : []);
    };
    load();

    window.addEventListener('cartUpdated', load);
    return () => window.removeEventListener('cartUpdated', load);
  }, []);

  const save = (newCart) => {
    setCart(newCart);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
  };

  const increment = (item) => {
    const updated = cart.map(p =>
      p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    save(updated);
  };

  const decrement = (item) => {
    let updated = cart.map(p =>
      p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p
    );
    updated = updated.filter(p => p.quantity > 0);
    save(updated);
  };

  const removeItem = (item) => {
    const updated = cart.filter(p => p.id !== item.id);
    save(updated);
  };

  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="container cart-page">
      <h1 className="cart-title">Корзина</h1>

      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-card">
              <div className="cart-card__media">
                <img src={item.image} alt={item.name} className="cart-card__img" />
                <div className="cart-card__qty">
                  <button onClick={() => decrement(item)} className="qty-btn">−</button>
                  <span className="qty">{item.quantity}</span>
                  <button onClick={() => increment(item)} className="qty-btn">+</button>
                </div>
              </div>
              <div className="cart-card__info">
                <h2 className="cart-card__name">{item.name}</h2>
                <p className="cart-card__price">{item.price.toLocaleString()} ₽</p>
              </div>
                <div className="cart-card__actions">
                <button onClick={() => removeItem(item)} className="delete-btn">
                  <img src={deleteIcon} alt="Удалить" />
                </button>
                  <p className="cart-card__total">
                    {(item.price * item.quantity).toLocaleString()} ₽
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p className="summary-label">Итого</p>
            <p className="summary-price">{totalPrice.toLocaleString()} ₽</p>
            <button className="checkout-btn">Перейти к оформлению</button>
          </div>
        </div>
      )}
    </div>
  );
}



