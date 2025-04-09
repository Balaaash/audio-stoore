import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Audio Accessories</h1>
          <p>Discover the perfect sound experience</p>
          <Link to="/catalog" className="cta-button">Shop Now</Link>
        </div>
      </section>
      
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {/* Здесь могут быть избранные товары */}
        </div>
      </section>
    </div>
  );
};

export default Home;