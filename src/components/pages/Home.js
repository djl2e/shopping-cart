import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-info">
        <p id="sub-home-text">Voted Best Phone Case of 2021</p>
        <p id="main-home-text">Let Our Case Complete Your Fashion Phase</p>
        <Link to="/products">
          <button type="submit" id="shop-button">Shop Now</button>
        </Link>
      </div>
      <img alt="main page" />
    </div>
  );
}

export default Home;
