



import React, { useState, useEffect } from 'react';
import Header from './Header';

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import Footer from './Footer';
import Service from './Service';

import './App.css';

function App() {
const [theme, setTheme] = useState('light');
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleTheme = () => {
setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

const toggleMenu = () => {
setIsMenuOpen((prev) => !prev);
  };

const handleLinkClick = () => {
setIsMenuOpen(false);
  };

useEffect(() => {
document.body.className = theme;
  }, [theme]);

  return (
<div className={`app ${theme}`}>
<Header
        theme={theme}
toggleTheme={toggleTheme}
isMenuOpen={isMenuOpen}
toggleMenu={toggleMenu}
handleLinkClick={handleLinkClick}
      />
<main>
<section id="home">
<Hero theme={theme} />
</section>
<section id="about">
<About theme={theme} />
</section>
<section id="skills">
<Skills theme={theme} />
</section>

<section id="service">
<Service theme={theme} />
</section>

<section id="projects">
<Projects theme={theme} />
</section>

<section id="contact">
<Contact theme={theme} />
</section>

</main>
<Footer theme={theme} />
</div>
  );
}

export default App;
