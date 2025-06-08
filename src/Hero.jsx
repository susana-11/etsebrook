

import React from "react";
import "./App.css"; 
import { FaMapMarkerAlt, FaCircle } from "react-icons/fa";

import { FaEnvelope } from 'react-icons/fa';

import { FaPhoneAlt } from 'react-icons/fa';





const Hero = () => {
  return (
<section id="hero" className="hero-section">
<div className="hero-container">
  <div className="hero-image-wrapper">
<img
src="./profile.jpg"
            alt="Etsebruk Profile"
className="hero-image"
          />
</div>
<div className="hero-text">
<h1 className="hero-greeting">
            Hi, I'm Etsebruk Amanuel
</h1>
<p className="hero-role">I'm a passionate Full Stack Developer based in Addis Ababa, Ethiopia. I craft modern, responsive web applications using technologies like React, Node.js, and MongoDB. I'm always eager to take on exciting projects, collaborate with others, and turn ideas into impactful digital experiences.
</p>
<div className="hero-status">
<span className="hero-location">
<FaMapMarkerAlt className="icon" />
Addis Ababa, Ethiopia
</span>
<span className="hero-location" style={{ display: 'flex', alignItems: 'center' }}>
  <a href="mailto: susipo1611@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    <FaEnvelope className="icon" style={{ marginRight: '4x' , width: '25px ', 
  height: '25px'}} />
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
  onClick={() => window.location.href = 'tel:+251968933915'}
>
  Connect by Phone
</button>

</div>
{}
</div>


</div>
</section>
  );
};

export default Hero;



