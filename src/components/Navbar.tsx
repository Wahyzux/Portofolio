import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-logo">Portofolio</a>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#certifications">CERTIFICATIONS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="theme-switch-wrapper" onClick={toggleTheme}>
          <div className={`theme-switch-track ${theme}`}>
            <div className="theme-switch-thumb">
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
