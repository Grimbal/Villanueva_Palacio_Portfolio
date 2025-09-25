import React, { useState } from 'react';
import './Skills.css';

import profilePicture from '../../assets/profile.jpg';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/js.png';
import reactIcon from '../../assets/react.png';
import gitIcon from '../../assets/git.png';
import uiuxIcon from '../../assets/uiux.png';

// Import the animation hook
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll.ts';

const SKILLS_PER_PAGE = 3; 
const allSkills = [
    { name: 'HTML5', icon: htmlIcon, level: 90 },
    { name: 'CSS3', icon: cssIcon, level: 85 },
    { name: 'JavaScript', icon: jsIcon, level: 75 },
    { name: 'React', icon: reactIcon, level: 70 },
    { name: 'Node.js', icon: htmlIcon, level: 60 },
    { name: 'Figma', icon: cssIcon, level: 55 },
    { name: 'UI/UX', icon: uiuxIcon, level: 100 },
    { name: 'Python', icon: reactIcon, level: 65 },
    { name: 'Adobe Photoshop', icon: gitIcon, level: 60 },
];

const Skills: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    
     
    const { ref: skillsRef, isVisible: skillsVisible } = useAnimateOnScroll(0.1, false);

    const handleNext = () => {
        if (startIndex + SKILLS_PER_PAGE < allSkills.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleSkills = allSkills.slice(startIndex, startIndex + SKILLS_PER_PAGE);

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Skills</h2>
            <div
                ref={skillsRef}
                className={`skills-container ${skillsVisible ? 'is-visible' : ''}`}
            >
                <div className="skills-left">
                    <img src={profilePicture} alt="Profile" className="skills-profile-pic" />
                </div>
                <div className="skills-right">
                    {visibleSkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-icon-name">
                                <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                            <div className="skill-progress-bar">
                                <div 
                                    className="skill-progress-fill" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                    <div className="skills-nav-arrows">
                        <span 
                            className={`arrow-left ${startIndex === 0 ? 'disabled' : ''}`}
                            onClick={handlePrev}
                        >&#8249;</span>
                        <span 
                            className={`arrow-right ${startIndex + SKILLS_PER_PAGE >= allSkills.length ? 'disabled' : ''}`}
                            onClick={handleNext}
                        >&#8250;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;