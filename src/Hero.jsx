

import React from "react";
import "./App.css"; // Adjust the path if your CSS is in another file
import { FaMapMarkerAlt, FaCircle } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';





const Hero = () => {
  return (
<section id="hero" className="hero-section">
<div className="hero-container">
<div className="hero-text">
<h1 className="hero-greeting">
            Hi, I'm Etsebruk Amanuel
</h1>
<p className="hero-role">A passionate Full Stack Developer based in Addis Ababa, Ethiopia.
  I specialize in building modern, responsive web application using technologies like React, Node.js and MongoDB.
  I`m always open to exciting opportunities and collaboration.
</p>
<div className="hero-status">
<span className="hero-location">
<FaMapMarkerAlt className="icon" />
Addis Ababa, Ethiopia
</span>
<span className="hero-location" style={{ display: 'flex', alignItems: 'center' }}>
  <a href="mailto: susipo1611@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    <FaEnvelope className="icon" style={{ marginRight: '8px' }} />
   susipo1611@gmail.com
  </a>
</span>

<button
  style={{
    padding: '10px 20px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  }}
  onClick={() => window.location.href = 'tel:+1234567890'}
>
  Connect by Phone
</button>

</div>
{/*<a href="/etsebruk-cv.pdf" download className="cv-button">
            Download CV
</a>*/}
</div>

<div className="hero-image-wrapper">
<img
src="/profile.jpg"
            alt="Etsebruk Profile"
className="hero-image"
          />
</div>
</div>
</section>
  );
};

export default Hero;



