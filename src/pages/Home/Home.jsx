import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero секция */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Premium Audio Accessories</h1>
          <Link to="/catalog" className="shop-now-button">
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Секция с избранными товарами */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {/* Здесь будут карточки избранных товаров */}
        </div>
      </section>
    </div>
  );
};

export default Home;