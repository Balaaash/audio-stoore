// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// СЮДА — импортируем CartProvider
import { CartProvider } from './context/CartContext';

import Header from './components/Header';
import Footer from './components/Footer';

import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />

        {/* Оборачиваем всё, что между Header и Footer */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;

