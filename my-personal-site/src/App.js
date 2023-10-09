import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'portfolio', 'resume'];
    const scrollY = window.scrollY + window.innerHeight / 2;
    const currentSection = sections.reverse().find(section => {
      const element = document.getElementById(section);
      return element.offsetTop <= scrollY;
    });

    setActiveSection(currentSection || 'home');
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav>
        <a onClick={() => scrollToElement('home')} className={activeSection === 'home' ? 'active' : ''}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a onClick={() => scrollToElement('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</a>
        <a onClick={() => scrollToElement('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
        <a onClick={() => scrollToElement('resume')} className={activeSection === 'resume' ? 'active' : ''}>Experience</a>
      </nav>


      <div id="home"><Home /></div>
      <div id="about"><AboutMe /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="resume"><Resume /></div>
      <Footer />
    </div>
  );
};

export default App;
