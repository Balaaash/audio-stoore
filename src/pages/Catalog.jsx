import React from 'react';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

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

export default function Catalog() {
  const handleAddToCart = (product) => {
    // 1) Получаем текущую корзину
    const raw = sessionStorage.getItem('cart');
    const cart = raw ? JSON.parse(raw) : [];

    // 2) Ищем товар в корзине
    const idx = cart.findIndex(item => item.id === product.id);

    if (idx > -1) {
      // если есть — увеличиваем количество
      cart[idx].quantity += 1;
    } else {
      // если нет — добавляем с quantity = 1
      cart.push({ ...product, quantity: 1 });
    }

    // 3) Сохраняем обратно в sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // 4) (необязательно) — мы можем оповестить других через событие
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

