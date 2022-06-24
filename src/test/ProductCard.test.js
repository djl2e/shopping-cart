import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { jest } from '@jest/globals';
import data from '../data/data';
import ProductCard from '../components/pages/products/ProductCard';

const firstProductData = data[0];
const addProductToCart = jest.fn();

describe('Product cards in the products page', () => {
  it('Accurate data - product title - flowing in', () => {
    expect(firstProductData.name).toMatch(/daybreak/i);
  });
  it('Accurate data - product price - flowing in', () => {
    expect(firstProductData.price).toBe(15.99);
  });
  it('One image per card', () => {
    render(
      <BrowserRouter>
        <ProductCard productId={0} addProductToCart={addProductToCart} />
      </BrowserRouter>,
    );
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
  it('3 elements under card info', () => {
    const { container } = render(
      <BrowserRouter>
        <ProductCard productId={0} addProductToCart={addProductToCart} />
      </BrowserRouter>,
    );
    const cardInfo = container.getElementsByClassName('card-info');
    expect(cardInfo[0].children).toHaveLength(3);
  });
  it('submit button calls addProductToCart function', () => {
    render(
      <BrowserRouter>
        <ProductCard productId={0} addProductToCart={addProductToCart} />
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(addProductToCart).toHaveBeenCalledTimes(1);
  });
});
