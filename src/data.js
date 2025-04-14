export const products = {
  wired: [
    {
      id: 1,
      name: 'Apple BYZ S8521',
      image: process.env.PUBLIC_URL + '/images/products/apple-byz.png',
      rating: 4.7,
      price: 2927,
      oldPrice: 3527,
      description: 'Проводные наушники с микрофоном',
      colors: ['black', 'white'],
      inStock: true,
      category: 'wired'
    },
    {
      id: 2,
      name: 'Apple EarPods',
      image: process.env.PUBLIC_URL + '/images/products/apple-earpods.png',
      rating: 4.5,
      price: 2327,
      oldPrice: 2327,
      description: 'Проводные наушники',
      colors: ['white'],
      inStock: true,
      category: 'wired' 
    },
    {
      id: 3,
      name: 'Apple EarPods',
      image: process.env.PUBLIC_URL + '/images/products/apple-earpods-2.png',
      rating: 4.5,
      price: 2327,
      oldPrice: 2377,
      description: 'Проводные наушники (версия с кнопкой)',
      colors: ['white'],
      inStock: true,
      category: 'wired'
    },
    {
      id: 4,
      name: 'Apple BYZ S8521',
      image: process.env.PUBLIC_URL + '/images/products/apple-byz-v2.png',
      rating: 4.7,
      price: 2927,
      oldPrice: 2977,
      description: 'Проводные наушники с микрофоном (новый дизайн)',
      colors: ['black'],
      inStock: false,
      category: 'wired'
    },
    {
      id: 5,
      name: 'Apple EarPods',
      image: process.env.PUBLIC_URL + '/images/products/apple-earpods-limited.png',
      rating: 4.5,
      price: 2327,
      oldPrice: 2337,
      description: 'Проводные наушники (ограниченная серия)',
      colors: ['white', 'red'],
      inStock: true,
      category: 'wired'
    }
  ],
  wireless: [
    {
      id: 6,
      name: 'Apple AirPods',
      image: process.env.PUBLIC_URL + '/images/products/apple-airpods.png',
      rating: 4.7,
      price: 9527,
      oldPrice: 9527,
      description: 'Беспроводные наушники с футляром',
      colors: ['white'],
      inStock: true,
      category: 'wireless'
    },
    {
      id: 7,
      name: 'GERLAX GH-04',
      image: process.env.PUBLIC_URL + '/images/products/gerlax-gh04.png',
      rating: 4.7,
      price: 6527,
      oldPrice: 6527,
      description: 'Беспроводные наушники с шумоподавлением',
      colors: ['black', 'blue'],
      inStock: true,
      category: 'wireless'
    },
    {
      id: 8,
      name: 'BOROFONE BO4',
      image: process.env.PUBLIC_URL + '/images/products/borofone-bo4.png',
      rating: 4.7,
      price: 7527,
      oldPrice: 7527,
      description: 'Беспроводные спортивные наушники',
      colors: ['black', 'red'],
      inStock: true,
      category: 'wireless'
    }
  ]
};

// Функция для получения всех товаров
export const getAllProducts = () => {
  return [...products.wired, ...products.wireless];
};

// Функция для получения товара по ID
export const getProductById = (id) => {
  return getAllProducts().find(product => product.id === id);
};

// Данные для футера
export const footerData = {
  links: [
    { id: 1, text: 'QPICK', url: '/' },
    { id: 2, text: 'Избранное', url: '/favorites' },
    { id: 3, text: 'Корзина', url: '/cart' },
    { id: 4, text: 'Контакты', url: '/contacts' }
  ],
  info: [
    { id: 1, text: 'Условия сервиса', url: '/terms' }
  ],
  languages: [
    { id: 1, code: 'ru', name: 'Рус', isActive: true },
    { id: 2, code: 'en', name: 'Eng', isActive: false }
  ]
};

// Данные корзины (пример)
export const initialCartItems = [
  {
    id: 1,
    productId: 1,
    quantity: 1,
    selectedColor: 'black',
    addedAt: new Date().toISOString()
  }
];

// Заглушка для изображений
export const placeholderImage = process.env.PUBLIC_URL + '/images/placeholder.jpg';