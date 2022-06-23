import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { cardClicked } = props;

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Logo Image</Link>
      </div>
      <nav className="header-options">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <button type="submit" id="cart-button" onClick={cardClicked}>Cart Image</button>
      </nav>
    </div>
  );
}

export default Header;
