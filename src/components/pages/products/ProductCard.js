/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import data from '../../../data/data';
import '../../../css/ProductCard.css';

function ProductCard(props) {
  const { productId, increaseQuantity, cartClicked } = props;
  const productData = data[productId];
  const buttonId = `increase${productId}`;

  return (
    <div className="card">
      <img src={require(`../../../img/product${productId}.jpg`)} alt="phone case" />
      <div className="card-info">
        <h3>{productData.name}</h3>
        <p>{productData.price}</p>
        <button type="submit" onClick={(e) => { increaseQuantity(e); cartClicked(e); }} id={buttonId}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
