// src/pages/Cart/Cart.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Корзина ({totalItems})</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Ваша корзина пуста</p>
          <Link to="/catalog" className="continue-shopping">
            Вернуться к покупкам
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span>Итого:</span>
              <span>{totalPrice.toLocaleString()} ₽</span>
            </div>
            
            <div className="cart-actions">
              <button 
                className="clear-cart"
                onClick={clearCart}
              >
                Очистить корзину
              </button>
              <button className="checkout-button">
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;