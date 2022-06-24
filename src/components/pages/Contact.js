import React from 'react';
import storeImg from '../../img/store.jpg';
import '../../css/Contact.css';

function Contact() {
  return (
    <div className="page contact">
      <img src={storeImg} alt="phone case store" id="store-img" />
      <div className="contact-info">
        <h2 id="city">Philadelphia</h2>
        <p id="contact-description">Our flagship store located at the heart of University City - Penn Campus</p>
        <div className="address-container">
          <h3>Address</h3>
          <p>010 S 41st</p>
          <p>Philadelphia, PA 19104</p>
        </div>
        <div className="hours-container">
          <h3>Hours</h3>
          <p>Monday - Friday: 11am to 5pm</p>
          <p>Saturday: 12pm to 3pm</p>
        </div>
        <div className="contact-container">
          <h3>Contact</h3>
          <p>123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
