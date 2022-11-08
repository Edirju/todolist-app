import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
//const modal = ReactDOM.createPortal(document.getElementById('modal'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



