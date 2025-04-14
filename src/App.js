// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <div className="app">
            <Header />
            
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:category" element={<Catalog />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;