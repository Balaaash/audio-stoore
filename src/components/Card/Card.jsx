import React from 'react';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import './Card.css';

const Card = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        {product.rating && <Rating value={product.rating} />}
        <p className="card-description">{product.description}</p>
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;