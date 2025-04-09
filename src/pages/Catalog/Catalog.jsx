import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { products } from '../../data';
import useCart from '../../hooks/useCart';
import './Catalog.css';

const Catalog = () => {
  const { addToCart } = useCart();

  return (
    <div className="catalog">
      <div className="catalog-header">
        <h2>Audio Accessories</h2>
        <Link to="/cart" className="view-cart-link">
          View Cart
        </Link>
      </div>
      
      <div className="catalog-grid">
        {products.map(product => (
          <Card 
            key={product.id} 
            product={product} 
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;