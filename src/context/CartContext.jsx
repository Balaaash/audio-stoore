// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Создаём контекст
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Провайдер, который будет оборачивать всё приложение
export function CartProvider({ children }) {
  // Инициализируем из sessionStorage или пустым массивом
  const [cartItems, setCartItems] = useState(() => {
    const saved = sessionStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  // При любом изменении cartItems сохраняем в sessionStorage
  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Функция добавления товара
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Функция уменьшения / удаления товара
  const removeFromCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (!exists) return prev;
      if (exists.quantity === 1) {
        return prev.filter(item => item.id !== product.id);
      }
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
