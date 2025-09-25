import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile.jpg';
import profilePicture2 from '../../assets/profile2.jpg';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll.ts';

const About: React.FC = () => {
    // Pass 'false' to make the animation re-trigger on every scroll
    const { ref: aboutContentRef, isVisible: aboutVisible } = useAnimateOnScroll(0.1, false);

    const { ref: educationCardsRef, isVisible: educationVisible } = useAnimateOnScroll(0.1, false);

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>

            <div 
                ref={aboutContentRef} 
                className={`about-content ${aboutVisible ? 'is-visible' : ''}`}
            >
                <div className="about-text">
                    <h3 className="greeting">Hello I'm</h3>
                    <h1 className="name">Grimbald R. Villanueva</h1>
                    <p className="bio">
                        I am a dedicated and driven third-year Bachelor of Science in Information Technology
                        student at Romblon State University -Romblon Campus. My academic journey has been a
                        deep dive into the dynamic world of technology, where I am actively building a strong
                        foundation in a wide range of subjects essential for a successful career in IT.
                    </p>
                </div>
                <div className="profile-picture">
                    <img src={profilePicture} alt="Grimbald R. Villanueva" className="main-img" />
                    <img src={profilePicture2} alt="Grimbald R. Villanueva" className="hover-img" />
                </div>
            </div>

            <h2 className="education-title">Education</h2>

            <div 
                ref={educationCardsRef}
                className={`education-cards ${educationVisible ? 'is-visible' : ''}`}
            >
                <div className="education-card">
                    <h3 className="card-title">Primary Level</h3>
                    <p className="school">Guimpingan Elementary School</p>
                    <p className="years">2011-2016</p>
                </div>

                <div className="education-card">
                    <h3 className="card-title">Junior High School</h3>
                    <p className="school">Romblon National High School</p>
                    <p className="years">2017-2021</p>
                </div>
                <div className="education-card">
                    <h3 className="card-title">Senior High School</h3>
                    <p className="school">Montfort Academy (MA) Inc.</p>
                    <p className="course">Visual Graphic Design</p>
                    <p className="course">Computer System Servicing</p>
                    <p className="years">2021-2023</p>
                </div>

                <div className="education-card">
                    <h3 className="card-title">Tertiary Level</h3>
                    <p className="school">Romblon State University - Romblon Campus</p>
                    <p className="course">Bachelor of Science in Information Technology</p>
                    <p className="years">2023</p>
                </div>
            </div>
        </section>
    );
};

export default About;