import React, { useState, useEffect } from 'react';
import './HeroSection.css';


import codeIcon from '../../assets/icon1.png';
import atIcon from '../../assets/icon2.png';
import bracketsIcon from '../../assets/icon3.png';

const HeroSection: React.FC = () => {
     
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    
    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };


    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div
                className="cursor-glow"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}
            ></div>

            <div className="hero-content">
                <div className="hero-icons">
                    <img src={codeIcon} alt="Code Icon" />
                    <img src={atIcon} alt="At Icon" />
                    <img src={bracketsIcon} alt="Brackets Icon" />
                </div>
                <h1 className="hero-title">
                    WELCOME TO MY <br /> PORTFOLIO WEBSITE
                </h1>
                <a href="#home" className="hero-btn">
          Continue
        </a>
            </div>
        </section>
    );
};

export default HeroSection;