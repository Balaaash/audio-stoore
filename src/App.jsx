// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// <- вот он, из вашей папки context
import { CartProvider } from './context/CartContext';

import Header from './components/Header';
import Catalog from './pages/Catalog';
import Cart    from './pages/Cart';
import Footer  from './components/Footer';

export default function App() {
  return (
    <Router>
      <CartProvider>        {/* <- все дети получают доступ к контексту */}
        <Header />
        <main className="container">
          <Routes>
            <Route path="/"    element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

