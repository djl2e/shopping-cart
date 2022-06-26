/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import data from '../../../data/data';
import '../../../css/ProductCard.css';

function ProductCard(props) {
  const { productId, addProductToCart } = props;
  const productData = data[productId];
  const buttonId = `button${productId}`;
  const imgSrc = `../../../img/product${productId}.jpg`;

  return (
    <div className="card">
      <img src={require(imgSrc)} alt="phone case" />
      <div className="card-info">
        <h3>{productData.name}</h3>
        <p>{productData.price}</p>
        <button type="submit" onClick={addProductToCart} id={buttonId}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
