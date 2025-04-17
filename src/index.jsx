import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем client из react-dom для React 18+
import './main.css'; // Подключение стилей
import App from './App';

// Создаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
