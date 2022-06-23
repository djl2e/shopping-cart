import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  it('container with classname header', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(container.children[0].classList).toContain('header');
  });
  it('header has two components: logo and links', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(container.children[0].children).toHaveLength(2);
  });
  it('nav contains 4 options', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByRole('navigation').children).toHaveLength(4);
  });
});
