import React from 'react';
import ProductCard from '../components/ProductCard';

// Импортируйте изображения
import appleBYZS852I from '../images/apple-byz-s852i.jpg';
import appleEarPods from '../images/apple-earpods.jpg';
import appleAirPods from '../images/apple-airpods.jpg';
import gerlaxCH04 from '../images/gerlax-ch-04.jpg';
import borofoneBO4 from '../images/borofone-bo4.jpg';

const products = [
  { id: 1, name: "Apple BYZ S852I", price: 2927, rating: 4.7, image: appleBYZS852I },
  { id: 2, name: "Apple EarPods", price: 2327, rating: 4.5, image: appleEarPods },
  { id: 3, name: "Apple EarPods", price: 2327, rating: 4.5, image: appleEarPods },
  { id: 4, name: "Apple AirPods", price: 9527, rating: 4.7, image: appleAirPods },
  { id: 5, name: "GERLAX CH-04", price: 6527, rating: 4.7, image: gerlaxCH04 },
  { id: 6, name: "BOROFONE BO4", price: 7527, rating: 4.7, image: borofoneBO4 },
  { id: 7, name: "Apple BYZ S852I", price: 2927, rating: 4.7, image: appleBYZS852I },
  { id: 8, name: "Apple EarPods", price: 2327, rating: 4.5, image: appleEarPods },
  { id: 9, name: "Apple AirPods", price: 9527, rating: 4.7, image: appleAirPods },
];

const Catalog = () => {
  const addToCart = (product) => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="catalog">
      <h2>Наушники</h2>
      <div className="product-list">
        {products.slice(0, 6).map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <h2>Беспроводные наушники</h2>
      <div className="product-list">
        {products.slice(6).map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;


