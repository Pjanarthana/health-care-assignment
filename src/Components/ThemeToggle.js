import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;