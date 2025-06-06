import React from 'react';
import './About.css';


const About = () => {
  return (
<section id="about" className="about-section">
<div className="projects-tag-wrapper">
  <h1 className='about-tag'>About</h1>
</div>
<div className="about-container">
<div className="about-image">
<img src="./profile.jpg"alt="Profile" />
</div>
<div className="about-text">
<p>
            I'm a passionate and detail-oriented fullstack Developer with a focus on building responsive, user-friendly web applications using React.js. I enjoy turning complex problems into simple, beautiful, and intuitive designs.

With a strong foundation in JavaScript, HTML, and CSS, I specialize in creating modern UI/UX experiences that not only look great but also perform seamlessly across devices. I'm constantly exploring new technologies and tools to improve my skills and deliver better solutions.

Whether it's collaborating on team projects or crafting solo builds, I take pride in writing clean, efficient code and continuously learning from each challenge.



</p>
<p>
            <span>Let's build something amazing together!
</span>
</p>
</div>
</div>
</section>
  );
};

export default About;

