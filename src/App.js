import React, { useCallback, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Products from './components/pages/products/Products';
import Contact from './components/pages/Contact';
import Cart from './components/cart/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartClicked = useCallback(() => {
    setIsCartOpen(!isCartOpen);
  }, [isCartOpen]);

  return (
    <div className="container">
      <Header cartClicked={cartClicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Cart />
    </div>
  );
}

export default App;
