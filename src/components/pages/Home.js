import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home.css';
import mainPage from '../../img/main-page.jpg';

function Home() {
  return (
    <div className="page home">
      <div className="home-info">
        <p id="sub-home-text">Voted Best Phone Case of 2021</p>
        <p id="main-home-text">Let our phone case be the end line of your fashion chase</p>
        <Link to="/products">
          <button type="submit" id="shop-button">Shop Now</button>
        </Link>
      </div>
      <img src={mainPage} alt="main page" id="main-page-img" />
    </div>
  );
}

export default Home;
