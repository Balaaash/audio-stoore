// src/pages/ProductDetails/ProductDetails.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Rating from '../../components/Rating/Rating';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Загрузка данных товара (в реальном проекте - API запрос)
    const fetchProduct = async () => {
      try {
        // Здесь должен быть реальный запрос к API
        const foundProduct = [...products.wired, ...products.wireless].find(p => p.id === parseInt(id));
        if (!foundProduct) navigate('/404');
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors?.[0] || '');
      } catch (error) {
        console.error('Ошибка загрузки товара:', error);
        navigate('/');
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
    }, quantity);
  };

  if (!product) return <div className="loading">Загрузка...</div>;

  return (
    <div className="product-details">
      <div className="product-gallery">
        <div className="main-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        
        <div className="product-meta">
          <Rating value={product.rating} />
          <span className="sku">Артикул: {product.id}</span>
        </div>

        <div className="product-pricing">
          <span className="price">{product.price.toLocaleString()} ₽</span>
          {product.oldPrice > product.price && (
            <span className="old-price">{product.oldPrice.toLocaleString()} ₽</span>
          )}
        </div>

        {product.colors?.length > 0 && (
          <div className="color-selector">
            <h3>Цвет:</h3>
            <div className="colors">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={`color-option ${selectedColor === color ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={color}
                />
              ))}
            </div>
          </div>
        )}

        <div className="quantity-selector">
          <h3>Количество:</h3>
          <div className="quantity-controls">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>

        <button 
          className="add-to-cart"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
        </button>

        <div className="product-description">
          <h3>Описание</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;