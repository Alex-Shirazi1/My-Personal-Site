import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {

  const [activeSection, setActiveSection] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const handleScroll = () => {
    const sections = ['about', 'resume', 'portfolio'];
    const scrollY = window.scrollY + window.innerHeight / 2;
    const currentSection = sections.reverse().find(section => {
      const element = document.getElementById(section);
      return element.offsetTop <= scrollY;
    });

    setActiveSection(currentSection || 'about');
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav>
        <a onClick={toggleProfile} className="profile-symbol">
        <FontAwesomeIcon icon={faBars}/>
        </a>
        <a onClick={() => scrollToElement('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</a>

        <a onClick={() => scrollToElement('resume')} className={activeSection === 'resume' ? 'active' : ''}>Experience</a>
        <a onClick={() => scrollToElement('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
      </nav>

      <div className="contact-card">
        <div className={`profile-slide ${isProfileOpen ? 'open' : ''}`}>
          <Contact />
        </div>
      </div>

      <div id="about"><AboutMe /></div>
      <div id="resume"><Resume /></div>
      <div id="portfolio"><Portfolio /></div>
      <Footer />
    </div>
  );
};

export default App;
