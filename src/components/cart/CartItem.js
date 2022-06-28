/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import data from '../../data/data';
import '../../css/CartItem.css';

function CartItem(props) {
  const {
    productId, quantity, decreaseQuantity, increaseQuantity,
  } = props;
  const decreaseButtonId = `decrease${productId}`;
  const increaseButtonId = `increase${productId}`;
  const productData = data[productId];

  return (
    <div className="cart-item">
      <img src={require(`../../img/product${productId}.jpg`)} alt="cart item" />
      <div className="cart-item-info">
        <h3>{productData.name}</h3>
        <p>{productData.price}</p>
        <div className="quantity-container">
          <button type="submit" className="decrease-button" id={decreaseButtonId} onClick={decreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button type="submit" className="increase-button" id={increaseButtonId} onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
