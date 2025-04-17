import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Загрузка из sessionStorage
  useEffect(() => {
    const saved = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(saved);
  }, []);

  // Сохранение в sessionStorage
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = product => {
    setCartItems(prev => {
      const exist = prev.find(i => i.id === product.id);
      if (exist) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, qty) => {
    setCartItems(prev =>
      prev
        .map(i =>
          i.id === id
            ? { ...i, quantity: qty }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
