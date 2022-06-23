import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
  it('container with classname header', () => {
    const { container } = render(<Header />);
    expect(container.classList).toContain('header');
  });
  it('header has two components: logo and links', () => {
    const { container } = render(<Header />);
    expect(container.children).toHaveLength(2);
  });
  it('nav contains 4 options', () => {
    render(<Header />);
    expect(screen.getByRole('navigation').children).toHaveLength(4);
  });
});
