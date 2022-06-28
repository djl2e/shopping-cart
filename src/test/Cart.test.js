import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/cart/Cart';

const decreaseQuantity = jest.fn();
const increaseQuantity = jest.fn();
const closeCart = jest.fn();

describe('Cart component', () => {
  it('check cart className when off', () => {
    const cartItems = {};
    const { container } = render(
      <Cart
        isCartOpen={false}
        cartItems={cartItems}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        closeCart={closeCart}
      />,
    );
    expect(container.getElementsByClassName('cart off')).toHaveLength(1);
  });
  it('two buttons for closing cart', () => {
    const cartItems = {};
    render(
      <Cart
        isCartOpen={false}
        cartItems={cartItems}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        closeCart={closeCart}
      />,
    );
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
  it('two products with more than or equal to 1 quantity', () => {
    const cartItems = [[0, 0], [1, 1], [2, 0], [3, 1]];
    const { container } = render(
      <Cart
        isCartOpen={false}
        cartItems={cartItems}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        closeCart={closeCart}
      />,
    );
    const itemContainer = container.getElementsByClassName('cart-item-container')[0];
    expect(itemContainer.children).toHaveLength(2);
  });
});
