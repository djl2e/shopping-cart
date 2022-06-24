import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../components/pages/Contact';

describe('Contact page', () => {
  it('contact page has an image with id store-img', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );
    expect(screen.getByRole('img').id).toMatch(/store-img/i);
  });
  it('contact info secion has 5 sections', () => {
    const { container } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );
    const contactInfo = container.getElementsByClassName('contact-info');
    expect(contactInfo[0].children).toHaveLength(5);
  });
});
