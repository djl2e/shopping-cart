import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import cartIcon from '../img/cart-icon.png';

function Header(props) {
  const { cartClicked } = props;

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Case4U</Link>
      </div>
      <nav className="header-options">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <button type="submit" id="cart-button" onClick={() => cartClicked()}>
          <img src={cartIcon} alt="cart icon" id="cart-img" />
        </button>
      </nav>
    </div>
  );
}

export default Header;
