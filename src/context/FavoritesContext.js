// src/context/FavoritesContext.js
import { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Загрузка из localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    if (!favorites.includes(product.id)) {
      setFavorites([...favorites, product.id]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(id => id !== productId));
  };

  const isFavorite = (productId) => favorites.includes(productId);

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Хук для удобного использования
export const useFavorites = () => useContext(FavoritesContext);