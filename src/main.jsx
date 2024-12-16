import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';  // Aquí importas los estilos globales
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
