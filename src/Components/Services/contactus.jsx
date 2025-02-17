import React from 'react';
import './contactus.css'; // Import your CSS file

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="text-area">
        Leave us your phone number. We will call you back.
      </div>
      <div className="button-area">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Banner;