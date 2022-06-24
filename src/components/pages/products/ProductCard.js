import React from 'react';
import data from '../../../data/data';

function ProductCard(props) {
  const { productId, addProductToCart } = props;
  const productData = data[productId];
  const buttonId = `button${productId}`;

  return (
    <div className="card">
      <img src={require(`../../../img/product${productId}.jpg`)} alt="phone case" />
      <div className="card-info">
        <h3>{productData[0]}</h3>
        <p>{productData[1]}</p>
        <button type="submit" onClick={addProductToCart} id={buttonId}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
