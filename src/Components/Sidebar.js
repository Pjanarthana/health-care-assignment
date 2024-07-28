import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>&times;</button>
      <ul>
        <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
        <li><a href="#features" onClick={toggleSidebar}>Features</a></li>
        <li><a href="#testimonials" onClick={toggleSidebar}>Testimonials</a></li>
        <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;