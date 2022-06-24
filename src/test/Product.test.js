import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import data from '../data/data';
import Products from '../components/pages/products/Products';

const numProducts = data.length;
const addProductToCart = jest.fn();

describe('product page', () => {
  it('number of products', () => {
    const { container } = render(
      <BrowserRouter>
        <Products addProductToCart={addProductToCart} />
      </BrowserRouter>,
    );
    const products = container.getElementsByClassName('products');
    expect(products[0].children).toHaveLength(numProducts);
  });
});
