import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './providers/Products';
import { CartProvider } from './providers/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>

  </ProductsProvider>
);


