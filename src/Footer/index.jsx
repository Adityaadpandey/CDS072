import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h3>About Us</h3>
          <p>We are committed to providing the best services for our customers with quality and dedication.</p>
        </div>

        <div className="section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li    >
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="section">
          <h3>Follow Us</h3>
          <div className="social">
            <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      
      <div className="bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;