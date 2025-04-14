import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import Rating from '../Rating/Rating';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);
  const [quickAdd, setQuickAdd] = React.useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setQuickAdd(true);
    setTimeout(() => setQuickAdd(false), 2000);
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="card-header">
          {!product.inStock && (
            <span className="out-of-stock">Нет в наличии</span>
          )}
          <button
            className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`}
            onClick={handleFavorite}
            aria-label={isFavorite(product.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
          >
            ♥
          </button>
        </div>

        <div className="product-image">
          <img
            src={process.env.PUBLIC_URL + product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
            }}
          />
        </div>

        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          
          <div className="product-meta">
            <Rating value={product.rating} />
            <span className="product-category">
              {product.category === 'wired' ? 'Проводные' : 'Беспроводные'}
            </span>
          </div>

          <div className="product-pricing">
            <span className="current-price">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
            {product.oldPrice > product.price && (
              <span className="old-price">
                {product.oldPrice.toLocaleString('ru-RU')} ₽
              </span>
            )}
          </div>
        </div>

        <div className="card-actions">
          <button
            className={`add-to-cart-btn ${quickAdd ? 'added' : ''} ${!product.inStock ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {quickAdd ? '✓ Добавлено' : product.inStock ? 'Купить' : 'Нет в наличии'}
          </button>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    rating: PropTypes.number,
    category: PropTypes.oneOf(['wired', 'wireless']).isRequired,
    inStock: PropTypes.bool,
    colors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductCard;