import React, { useState } from "react";
import { FaBars, FaTimes, FaDownload, FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        {/* Left: Mobile menu toggle */}
        <div className="left">
          <button className="menu-toggle" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Center: Desktop menu */}
        <div className="center desktop-menu">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#service">Service</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right: Theme toggle and CV download */}
        <div className="right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        <a href="/my-resume.docx" download className="cv-button">
  <FaDownload />
  <span>Download Resume (Word)</span>
</a>




        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#hero" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#service" onClick={handleLinkClick}>Service</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
