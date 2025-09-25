import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-logo">
                <a href="#hero">
                    <span className="logo-name">GrimVill</span>
                </a>
            </div>
            <nav className="header-nav">
                <ul>
                    <li>
                        <a 
                            href="#home"
                            className={
                                activeSection === 'home' && window.scrollY <= 200 ? '' : activeSection === 'home' ? 'active-link' : ''
                            }
                        >
                            Home
                        </a>
                    </li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''}>About</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active-link' : ''}>Projects</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? 'active-link' : ''}>Skills</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;