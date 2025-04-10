import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Apple BYZ S852I', price: 2927, quantity: 1 }
  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>QPICK</h1>
      </header>

      <main className="cart-main">
        <section className="cart-section">
          <h2>Корзина</h2>
          
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={`https://via.placeholder.com/80?text=${item.name}`} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="item-price">{item.price.toLocaleString()} ₽</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <div className="total-row">
              <span>ИТОГО</span>
              <span>{totalPrice.toLocaleString()} ₽</span>
            </div>
          </div>

          <button className="checkout-button">Перейти к оформлению</button>
        </section>

        <div className="order-summary">
          <div className="summary-price">{totalPrice.toLocaleString()} ₽</div>
        </div>
      </main>

      <footer className="cart-footer">
        <div className="footer-links">
          <Link to="/">QPICK</Link>
          <Link to="/favorites">Избранное</Link>
          <Link to="/cart">Корзина</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <div className="footer-info">
          <Link to="/terms">Условия сервиса</Link>
          <div className="language-switcher">
            <span>Каз</span>
            <span className="active">Рус</span>
            <span>Eng</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;