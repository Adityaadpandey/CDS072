import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Follow Us</h1>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;