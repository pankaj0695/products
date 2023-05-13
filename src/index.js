import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import configureProductsStore from './store/products-store';
import configureCounterStore from './store/counter-store';

configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
