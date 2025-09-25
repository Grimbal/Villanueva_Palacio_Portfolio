import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
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
    <div className="App">
      
      <div 
        className="pattern-reveal-layer"
        style={{
          '--mask-x': `${mousePosition.x}px`,
          '--mask-y': `${mousePosition.y}px`
        } as React.CSSProperties}
      ></div>
      <div className="website-content">
        <Header />
        <HeroSection />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        </div>
        <Footer />
        
    </div>
  );
}

export default App;