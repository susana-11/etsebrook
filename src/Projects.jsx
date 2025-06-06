// ProjectSection.jsx
import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Blog website',
    description: 'A personal blog website .',
    technologies: ['React' ,'  ,' ,  'Tailwind CSS'],
    image: ".//linkdin.PNG" ,
github: 'https://github.com'
  },
  {
    title: 'Nexus Local',
    description: 'A Job finder application.',
    technologies: ['Java'],
    image: "./app.png" ,
github: 'https://github.com'
  },
  {
    title: 'Aurora Cafe',
    description: 'Website for Aurora Cafe.',
    technologies: ['HTML,' ,'PHP'],
    image: "./auu.PNG",
github: 'https://github.com'
  },
  {
    title: 'Blog website',
    description: 'A personal blog website .',
    technologies: ['React',     'Tailwind CSS'],
    image: "./linkdin.PNG",
github: 'https://github.com'
  },
  {
    title: 'Nexus Local',
    description: 'A Job finder application.',
    technologies: ['Java'],
    image: "./app.png",
github: 'https://github.com'
  },
  {
    title: 'Portfolio website',
    description: 'A personal portfolio website.',
    technologies: ['JavaScript'],
    image: "./port.PNG",
github: 'https://github.com'
  }
];

const ProjectSection = () => {
  return (
<section className="projects-section">
<div className="projects-tag-wrapper">
  <h1 className='projects-tag'>Projects</h1>
</div>
<div className="projects-grid">
        {projects.map((project, index) => (
<div key={index} className="project-card">
<img src={project.image} alt={project.title} className="project-image" />
<h3>{project.title}</h3>
<p>{project.description}</p>
<div className="tech-tags">
              {project.technologies.map((tech, i) => (
<span key={i} className="tech-tag">{tech}</span>
              ))}
</div>
<a href={project.github} target="_blank" rel="noopenernoreferrer" className="github-link">
<FaGithub size={20} />
</a>
</div>
        ))}
</div>
</section>
  );
};

export default ProjectSection;






