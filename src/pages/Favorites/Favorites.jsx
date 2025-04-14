// src/pages/Favorites/Favorites.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useFavorites } from '../../context/FavoritesContext';
import { products } from '../../data';
import './Favorites.css';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  
  // Получаем полные данные о товарах
  const favoriteProducts = [...products.wired, ...products.wireless]
    .filter(product => favorites.includes(product.id));

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>Избранное</h1>
        <Link to="/catalog" className="back-to-catalog">
          ← Вернуться в каталог
        </Link>
      </div>

      {favoriteProducts.length > 0 ? (
        <div className="favorites-grid">
          {favoriteProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onRemove={() => removeFromFavorites(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <div className="empty-icon">♥</div>
          <h2>В избранном пока нет товаров</h2>
          <p>Добавляйте понравившиеся товары, нажимая на значок сердца</p>
          <Link to="/catalog" className="browse-products">
            Перейти в каталог
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;