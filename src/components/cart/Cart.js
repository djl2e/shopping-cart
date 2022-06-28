import React from 'react';
import '../../css/Cart.css';
import CartItem from './CartItem';

function Cart(props) {
  const {
    isCartOpen, cartItems, decreaseQuantity, increaseQuantity, closeCart, totalPrice,
  } = props;

  let cartClassName = 'cart';
  if (!isCartOpen) {
    cartClassName = 'cart off';
  }

  const items = [];
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    if (item[1] > 0) {
      items.push(<CartItem
        productId={item[0]}
        quantity={item[1]}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />);
    }
  }

  return (
    <div className={cartClassName}>
      <h2>Your Shopping Cart</h2>
      <div className="cart-item-container">
        {items}
      </div>
      <p id="total-price">{`Total: $${totalPrice}`}</p>
      <button id="checkout-button" type="submit" onClick={closeCart}>Checkout</button>
      <button id="close-button" type="submit" onClick={closeCart}>Close</button>
    </div>
  );
}

export default Cart;
