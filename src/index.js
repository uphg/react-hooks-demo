import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './view/App/App.js';
import reportWebVitals from './api/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
