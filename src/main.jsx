import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Loginpage from './Loginpage.jsx';
import ProductDetails from './ProductDetails.jsx';
import Cart from './Cart.jsx';
import { CartProvider } from './CartContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loginpage />,
  },
  {
    path: '/App',
    element: <App />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
  {
    path: '/cart',
    element: <Cart />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {}
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);