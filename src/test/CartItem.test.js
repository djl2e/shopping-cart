import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';

const decreaseQuantity = jest.fn();
const increaseQuantity = jest.fn();

describe('Cart Item', () => {
  it('Cart Item has one image', () => {
    render(
      <BrowserRouter>
        <CartItem
          productId={0}
          quantity={1}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </BrowserRouter>,
    );
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
  it('Cart Item Info div has 3 children', () => {
    const { container } = render(
      <BrowserRouter>
        <CartItem
          productId={0}
          quantity={1}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </BrowserRouter>,
    );
    const infoContainer = container.getElementsByClassName('cart-item-info');
    expect(infoContainer[0].children).toHaveLength(3);
  });
  if ('Quantity Container has 3 children', () => {
    const { container } = render(
      <BrowserRouter>
        <CartItem
          productId={0}
          quantity={1}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </BrowserRouter>,
    );
    const quantityContainer = container.getElementsByClassName('quantity-container');
    expect(quantityContainer[0].children).toHaveLength(3);
  }) {
    it('two buttons', () => {
      render(
        <BrowserRouter>
          <CartItem
            productId={0}
            quantity={1}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        </BrowserRouter>,
      );
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });
  }
  it('Click Decrease Button once', () => {
    const { container } = render(
      <BrowserRouter>
        <CartItem
          productId={0}
          quantity={1}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </BrowserRouter>,
    );
    const decreaseButton = container.getElementsByClassName('decrease-button');
    userEvent.click(decreaseButton[0]);
    expect(decreaseQuantity).toHaveBeenCalledTimes(1);
  });
  it('Click Increase Button three times', () => {
    const { container } = render(
      <BrowserRouter>
        <CartItem
          productId={0}
          quantity={1}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      </BrowserRouter>,
    );
    const increaseButton = container.getElementsByClassName('increase-button')[0];
    for (let i = 0; i < 3; i++) {
      userEvent.click(increaseButton);
    }
    expect(increaseQuantity).toHaveBeenCalledTimes(3);
  });
});
