import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Hero.css';
import familyImage from '../images/healthcare.jpg'; 

function Hero() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="home" className={`hero ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to One Life Health Care</h1>
          <p>Your partner in personalized, global healthcare solutions.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={familyImage} alt="Family healthcare" />
        </div>
      </div>
    </section>
  );
}

export default Hero;