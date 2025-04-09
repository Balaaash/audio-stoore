// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header/Header';
import './Layout.css';
import './Footer.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children || <div>Default content if no children</div>}
      </main>
      <footer className="footer">
        <div className="container">
          <p>Simple Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;