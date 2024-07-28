import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Testimonials.css';

function Testimonials() {
  const { isDarkMode } = useContext(ThemeContext);

  const testimonials = [
    { name: 'John Doe', text: 'One Life Health Care has transformed how I manage my health. Highly recommended!' },
    { name: 'Jane Smith', text: 'The personalized care and global access to healthcare professionals is unparalleled.' },
  ];

  return (
    <section id="testimonials" className={`testimonials ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;