import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-4 min-h-[calc(100vh-128px)] mx-auto max-w-5xl">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;