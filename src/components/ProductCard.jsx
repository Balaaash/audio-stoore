// src/components/ProductCard.jsx
import React from 'react';
import { ReactComponent as HeartIcon } from '../images/icons/heart.svg';
import { ReactComponent as StarIcon } from '../images/icons/star.svg';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    {/* только «избранное» */}
    <div className="card-icons">
      <HeartIcon className="icon" />
    </div>

    <img src={product.image} alt={product.name} className="product-img" />

    <div className="card-content">
      <div className="card-header">
        <h3 className="product-name">{product.name}</h3>
        <span className="price-current">{product.price} ₴</span>
      </div>

      <div className="card-footer">
        <div className="product-rating">
          <StarIcon className="icon-star" />
          <span>{product.rating}</span>
        </div>
        <button className="btn-buy-text" onClick={() => onAddToCart(product)}>
          Купить
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;









