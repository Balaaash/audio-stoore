import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const Catalog = () => {
  const wiredHeadphones = [
    { id: 1, name: 'Apple BYZ S8521', rating: 4.7, price: 2927, oldPrice: 3527 },
    { id: 2, name: 'Apple EarPods', rating: 4.5, price: 2327, oldPrice: 2327 },
    { id: 3, name: 'Apple EarPods', rating: 4.5, price: 2327, oldPrice: 2327 },
    { id: 4, name: 'Apple BYZ S8521', rating: 4.7, price: 2927, oldPrice: 3527 },
    { id: 5, name: 'Apple EarPods', rating: 4.5, price: 2327, oldPrice: 2327 }
  ];

  const wirelessHeadphones = [
    { id: 6, name: 'Apple AirPods', rating: 4.7, price: 9527, oldPrice: 9527 },
    { id: 7, name: 'GERLAX GH-04', rating: 4.7, price: 6527, oldPrice: 6527 },
    { id: 8, name: 'BOROFONE BO4', rating: 4.7, price: 7527, oldPrice: 7527 }
  ];

  return (
    <div className="qpick-catalog">
      <header className="qpick-header">
        <h1>QPICK</h1>
        <div className="header-icons">
          <Link to="/favorites" className="icon-link">
            <span className="icon">❤️</span>
          </Link>
          <Link to="/cart" className="icon-link">
            <span className="icon">🛒</span>
          </Link>
        </div>
      </header>

      <main className="qpick-main">
        <section className="category-section">
          <h2>Наушники</h2>
          <div className="products-grid">
            {wiredHeadphones.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="category-section">
          <h2>Беспроводные наушники</h2>
          <div className="products-grid">
            {wirelessHeadphones.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="qpick-footer">
        <div className="footer-links">
          <Link to="/">QPICK</Link>
          <Link to="/favorites">Избранное</Link>
          <Link to="/cart">Корзина</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <div className="footer-info">
          <Link to="/terms">Условия сервиса</Link>
          <div className="language-switcher">
            <span className="active">Рус</span>
            <span>Eng</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={`https://via.placeholder.com/200x200/EEE?text=${product.name.replace(/\s+/g, '+')}`} 
          alt={product.name}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-rating">★ {product.rating}</div>
        <div className="product-prices">
          <span className="current-price">{product.price.toLocaleString()} ₽</span>
          {product.oldPrice && product.oldPrice !== product.price && (
            <span className="old-price">{product.oldPrice.toLocaleString()} ₽</span>
          )}
        </div>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
};

export default Catalog;