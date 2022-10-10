import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ruteo from './Ruteo';
import { BrowserRouter as Router} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Deja el BrowserRouter en index.js porque da problemas en cualquier otra parte.
root.render(
  <React.StrictMode>
    <Router>
      <Ruteo />
    </Router>
  </React.StrictMode>
);