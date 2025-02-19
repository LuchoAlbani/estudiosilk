import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';  
import App from './App.jsx';
import Bloggers from './components/Bloggers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Bloggers />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
