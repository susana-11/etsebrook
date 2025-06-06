import React from 'react';
import './Skills.css';

const skills = [
  {
    name: 'React',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Node.js',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'MongoDB',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Tailwind CSS',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
  },
];

function Skills() {
  return (
<section id='Skills' className="skills-section">
<div className="projects-tag-wrapper">
  <h1 className='service-title'>Skills</h1>
</div>
<div className="skills-container">
        {skills.map((skill, index) => (
<div className="skill-card" key={index}>
<img src={skill.image} alt={skill.name} className="spin" />
<p>{skill.name}</p>
</div>
        ))}
</div>
</section>
  );
}

export default Skills;

