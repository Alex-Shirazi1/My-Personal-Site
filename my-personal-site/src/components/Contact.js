import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <h2>Let's Connect!</h2>
            <div className="contact-icons">
                <a href="https://github.com/Alex-Shirazi1" target="_blank" rel="noopener noreferrer" className="icon-item">
                    <FontAwesomeIcon icon={faGithub} size="4x" className="icon github" />
                    <p>GitHub</p>
                </a>
                <div className="icon-item email-icon-item">
                 <FontAwesomeIcon icon={faEnvelope} size="4x" className="icon email" />
                <p>alexxshirazi@gmail.com</p>
                </div>
                <a href="https://www.linkedin.com/in/alex-shirazi-6821b0183" target="_blank" rel="noopener noreferrer" className="icon-item">
                    <FontAwesomeIcon icon={faLinkedin} size="4x" className="icon linkedin" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;
