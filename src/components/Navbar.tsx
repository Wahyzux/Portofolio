import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
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
        <a href="#" className="btn btn-outline nav-download">DOWNLOAD CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
