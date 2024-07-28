import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

function Header({ toggleSidebar }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container header-content">
        <div className="logo">One Life Health Care</div>
        <div className="header-right">
          <ThemeToggle />
          <button className="menu-toggle" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;