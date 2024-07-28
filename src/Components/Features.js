import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Features.css';

function Features() {
  const { isDarkMode } = useContext(ThemeContext);

  const features = [
    { title: 'Global Access', description: 'Access healthcare services from anywhere in the world.' },
    { title: 'Personalized Care', description: 'Tailored health plans designed just for you.' },
    { title: '24/7 Support', description: 'Round-the-clock assistance for your peace of mind.' },
  ];

  return (
    <section id="features" className={`features ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2>Our Features</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;