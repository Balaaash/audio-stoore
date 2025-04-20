// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header  from './components/Header';
import Footer  from './components/Footer';
import Catalog from './pages/Catalog';
import Cart    from './pages/Cart';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="page-wrapper">
          <Header />

          {/* Вся страница будет занимать flex:1 */}
          <main className="page-content">
            <Routes>
              <Route path="/"    element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

