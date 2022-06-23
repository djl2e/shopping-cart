import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Cart />
    </div>
  );
}

export default App;
