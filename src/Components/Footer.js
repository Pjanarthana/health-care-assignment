import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Footer.css';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

function Footer() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>One Life Health Care</h3>
            <p>Your global healthcare partner</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
                <img src={facebook} alt='facebook' width={40} height={40}></img>
                <img src={twitter} alt='twitter'  width={40} height={40}></img>
                <img src={instagram} alt='instagram'  width={40} height={40}></img>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 One Life Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;