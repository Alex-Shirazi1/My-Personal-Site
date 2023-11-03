import React from 'react';
import '../App.css';
import Contact from './Contact';

const AboutMe = () => {
    return (
        <div className="about-container">
            <div className="profile-section">
                <div className="contact-mobile-hidden">
                    <Contact />
                </div>
            </div>
            <div className="info-section">
                <div className="bio-section">
                    <h1 className="section-title">Alex Shirazi</h1>
                    <p className="bio">
                        Hi, I'm a software engineer who recently graduated from San Francisco State University and recieved my B.S. in Computer Science. My education gave me a strong base in theory and hands-on skills, preparing me to take on real-world tech challenges. I have an interest in artificial intelligence, machine learning, web-development, full-stack development, and mobile app development. I’ve focused on developing my problem-solving skills and have grown to be detail-oriented and analytical in my projects.
                    </p>
                    <p className="bio">
                        I believe in lifelong learning and am always looking to improve and adapt my skills. The tech world is always changing, and I’m passionate about keeping up with new trends and innovations. Each challenge is a chance to learn and grow, and every project is an opportunity to create useful and effective digital solutions. As I step into my professional career, my aim is to contribute to projects that combine latest technology with positive impacts for users and communities. I’m excited about the blend of technology, innovation, and problem-solving and look forward to the opportunities ahead.
                    </p>

                </div>
                <div className="skills-section">
                    <h1 className="section-title">Skills</h1>
                    <ul className="skills-list">
                        <li>Swift</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>AWS</li>
                        <li>node.js</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
