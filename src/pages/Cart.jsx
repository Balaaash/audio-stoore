import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import deleteIcon from '../images/icons/delete.svg';

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearItem } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container cart-page">
      {/* Заголовок страницы */}
      <h1 className="cart-title">Корзина</h1>

      {/* Основная сетка: 2 колонки */}
      <div className="cart-layout">
        {/* Левая колонка: список товаров */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-card__img" />
              <div className="cart-card__info">
                <h2 className="cart-card__name">{item.name}</h2>
                <p className="cart-card__price">{item.price.toLocaleString()} ₽</p>
                <div className="cart-card__controls">
                  <button onClick={() => removeFromCart(item)} className="qty-btn">−</button>
                  <span className="qty">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="qty-btn">+</button>
                </div>
              </div>
              <div className="cart-card__actions">
                <button onClick={() => clearItem(item)} className="delete-btn">
                  <img src={deleteIcon} alt="Удалить" />
                </button>
                <p className="cart-card__total">{(item.price * item.quantity).toLocaleString()} ₽</p>
              </div>
            </div>
          ))}
        </div>

        {/* Правая колонка: итоговая панель */}
        <div className="cart-summary">
          <p className="summary-label">Итого</p>
          <p className="summary-price">{totalPrice.toLocaleString()} ₽</p>
          <button className="checkout-btn">Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}


