import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />

        {/* вот здесь контейнер — он ограничит по ширине и отцентрирует */}
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
