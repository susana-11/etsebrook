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

const downloadCV = () => {
const link = document.createElement("a");
link.href = "/CV.pdf"; 
link.download = "Etsebruk_Amanuel_CV.pdf";
link.click();
  };

  return (
<header className="header">
<div className="nav-container">
<div className="left">
<button className="menu-toggle" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
</button>
</div>

<div className="center desktop-menu">
  <a href="#hero">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#service">Service</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>

<div className="right">
<button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
</button>
<button className="cv-button" onClick={downloadCV}>
<FaDownload />
<span>CV</span>
</button>
</div>
</div>

      {isMenuOpen&& (
<div className="mobile-menu">
  
  <a href="#hero" onClick={handleLinkClick}>Home</a>
<a href="#about" onClick={handleLinkClick}>About</a>
<a href="#skills" onClick={handleLinkClick}>Skills</a>
<a href="#service" onClick={handleLinkClick}>service</a>
<a href="#projects" onClick={handleLinkClick}>Projects</a>
<a href="#contact" onClick={handleLinkClick}>Contact</a>
</div>
      )}
</header>
  );
}

export default Header;


