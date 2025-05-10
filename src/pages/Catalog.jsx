import React from 'react';
import ProductCard from '../components/ProductCard';
import appleBYZS852I from '../images/apple-byz-s852i.jpg';
import appleEarPods from '../images/apple-earpods.jpg';
import appleAirPods from '../images/apple-airpods.jpg';
import gerlaxCH04 from '../images/gerlax-ch-04.jpg';
import borofoneBO4 from '../images/borofone-bo4.jpg';
import appleEarPods1 from '../images/apple-earpods1.jpg';

const products = [
  { id: 1, name: "Apple BYZ S852I", price: 2927, rating: 4.7, image: appleBYZS852I },
  { id: 2, name: "Apple EarPods", price: 2327, rating: 4.5, image: appleEarPods },
  { id: 3, name: "Apple EarPods1", price: 2327, rating: 4.5, image: appleEarPods1 },
  { id: 4, name: "Apple BYZ S852I", price: 2927, rating: 4.7, image: appleBYZS852I },
  { id: 5, name: "Apple EarPods", price: 2327, rating: 4.5, image: appleEarPods },
  { id: 6, name: "Apple EarPods1", price: 2327, rating: 4.5, image: appleEarPods1 },
  { id: 7, name: "Apple AirPods", price: 9527, rating: 4.7, image: appleAirPods },
  { id: 8, name: "GERLAX CH-04", price: 6527, rating: 4.7, image: gerlaxCH04 },
  { id: 9, name: "BOROFONE BO4", price: 7527, rating: 4.7, image: borofoneBO4 },
];

export default function Catalog() {
  const handleAddToCart = (product) => {
    const raw = sessionStorage.getItem('cart');
    const cart = raw ? JSON.parse(raw) : [];

    const idx = cart.findIndex(item => item.id === product.id);

    if (idx > -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));

    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <section className="products">
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          onAddToCart={() => handleAddToCart(p)}
        />
      ))}
    </section>
  );
}

