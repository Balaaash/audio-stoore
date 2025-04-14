// src/pages/Catalog/Catalog.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Catalog.css';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Загрузка товаров (в реальном проекте - API запрос)
    const loadProducts = async () => {
      // Здесь должен быть реальный запрос к API
      const data = [...products.wired, ...products.wireless]; // Ваша функция для загрузки
      setProducts(data);
      setFilteredProducts(data);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [sortOption, priceRange, selectedCategory, products]);

  const applyFilters = () => {
    let result = [...products];

    // Фильтрация по категории
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Фильтрация по цене
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Сортировка
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Стандартная сортировка (по умолчанию)
        break;
    }

    setFilteredProducts(result);
  };

  return (
    <div className="catalog-page">
      <div className="filters-sidebar">
        <h2>Фильтры</h2>
        
        <div className="filter-group">
          <h3>Категория</h3>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Все категории</option>
            <option value="wired">Проводные</option>
            <option value="wireless">Беспроводные</option>
          </select>
        </div>

        <div className="filter-group">
          <h3>Цена, ₽</h3>
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
            <div className="price-values">
              <span>{priceRange[0].toLocaleString()} ₽</span>
              <span>{priceRange[1].toLocaleString()} ₽</span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-container">
        <div className="sort-options">
          <span>Сортировка:</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">По возрастанию цены</option>
            <option value="price-desc">По убыванию цены</option>
            <option value="rating">По рейтингу</option>
          </select>
          <span className="products-count">{filteredProducts.length} товаров</span>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;