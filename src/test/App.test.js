import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('app has 3 children: header, routes, and cart', () => {
    const { container } = render(<App />);
    expect(container.children).toHaveLength(3);
  });
  it('first child is a header', () => {
    const { container } = render(<App />);
    expect(container.children[0].classList).toContain('header');
  });
});
