import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity } = useContext(CartContext);
  const totalCount = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalSum = cartItems.reduce((s, i) => s + i.quantity * i.price, 0);

  const changeQty = (id, delta) => {
    const item = cartItems.find(i => i.id === id);
    updateQuantity(id, item.quantity + delta);
  };

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      {cartItems.length === 0
        ? <p>Ваша корзина пуста. <Link to="/">Вернуться к покупкам</Link></p>
        : <>
            <table>
              <thead><tr><th>Товар</th><th>Цена</th><th>Кол-во</th><th>Сумма</th></tr></thead>
              <tbody>
                {cartItems.map(i => (
                  <tr key={i.id}>
                    <td>{i.name}</td>
                    <td>{i.price} ₴</td>
                    <td>
                      <button onClick={() => changeQty(i.id, -1)}>-</button>
                      <span>{i.quantity}</span>
                      <button onClick={() => changeQty(i.id, +1)}>+</button>
                    </td>
                    <td>{i.price * i.quantity} ₴</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="summary">
              <p>Всего товаров: {totalCount}</p>
              <p>Общая сумма: {totalSum} ₴</p>
            </div>
            <Link to="/" className="back-button">Продолжить покупки</Link>
          </>}
    </div>
  );
};

export default Cart;
