import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('home page divided into two sections', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(container.children[0].children).toHaveLength(2);
  });

  it('three sections in left side', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(container.children[0].children[0].children).toHaveLength(3);
  });

  it('shop now button exists', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });
});
