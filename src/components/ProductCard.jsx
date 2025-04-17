import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="rating">⭐ {product.rating}</p>
        <p className="price">{product.price} ₴</p>
        <button onClick={() => onAddToCart(product)}>Купить</button>
      </div>
    </div>
  );
};

export default ProductCard;







