/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Products from './components/pages/products/Products';
import Contact from './components/pages/Contact';
import Cart from './components/cart/Cart';
import data from './data/data';
import './css/App.css';

function App() {
  const numProducts = data.length;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([...Array(numProducts).keys()].map((key) => [key, 0]));

  let backgroundClassName = 'cart-background';
  if (!isCartOpen) {
    backgroundClassName = 'cart-background off';
  }

  function cartClicked() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function decreaseQuantity(e) {
    const targetProduct = e.target.id.slice(8);
    if (cartItems[targetProduct]) {
      const cartItemsCopy = [...cartItems];
      const itemCopy = cartItemsCopy[targetProduct];
      itemCopy[1] -= 1;
      cartItemsCopy[targetProduct] = itemCopy;
      setCartItems(cartItemsCopy);
    }
  }

  function increaseQuantity(e) {
    const targetProduct = e.target.id.slice(8);
    const cartItemsCopy = [...cartItems];
    const itemCopy = cartItemsCopy[targetProduct];
    itemCopy[1] += 1;
    cartItemsCopy[targetProduct] = itemCopy;
    setCartItems(cartItemsCopy);
  }

  return (
    <div className="container">
      <Header cartClicked={cartClicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <div className={backgroundClassName} onClick={closeCart} />
      <Cart
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        decreaseQuantity={(e) => { decreaseQuantity(e); }}
        increaseQuantity={(e) => { increaseQuantity(e); }}
        closeCart={closeCart}
      />
    </div>
  );
}

export default App;
