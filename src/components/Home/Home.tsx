import React from 'react';
import './Home.css';
import placeholderImage from '../../assets/tech.png';
import TypingText from './TypingText.tsx';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll.ts';

const Home: React.FC = () => {
    const fullText = 'Developer';

    // Pass 'false' as the second argument to re-trigger the animation on every scroll
    const { ref: homeRef, isVisible: homeVisible } = useAnimateOnScroll(0.1, false);

    return (
        <section
            id="home"
            className="home-section"
        >
            <div
                ref={homeRef}
                className={`home-content ${homeVisible ? 'is-visible' : ''}`}
            >
                <div className="home-text">
                    <h2 className="home-title">
                        Frontend<br />
                        <TypingText text={fullText} />
                    </h2>
                    <p className="home-subtitle">Information Technology Student</p>
                    <p className="home-bio">
                        Turning abstract ideas and ambitious imaginations into tangible, functioning realities through the power of code and digital innovation.
                    </p>
                    <a href="#about" className="home-btn">
                        Learn More
                    </a>
                </div>
                <div className="home-image">
                    <img src={placeholderImage} alt="Developer Illustration" />
                </div>
            </div>
        </section>
    );
};

export default Home;