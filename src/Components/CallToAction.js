import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/CallToAction.css';

function CallToAction() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="contact" className={`cta ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2>Ready to Take Control of Your Health?</h2>
        <p>Join One Life Health Care today and experience healthcare without boundaries.</p>
        <button className="cta-button">Sign Up Now</button>
      </div>
    </section>
  );
}

export default CallToAction;