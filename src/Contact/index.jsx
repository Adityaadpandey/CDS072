import React from 'react';
import './index.scss';

function Contact() {
  return (
    <div className="contact-us">
      <h2>Contact Us - Railway Department</h2>
      <p>If you have any inquiries or need assistance, please feel free to reach out to us.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
   
  );
}

export default Contact;