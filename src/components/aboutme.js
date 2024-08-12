import React, { useEffect, useRef, useState } from 'react';
import './aboutme.css';
import profileImage from '../assets/myimage.png';

const AboutMe = () => {
    const aboutMeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`about-me-container ${isVisible ? 'appear' : ''}`}
            id='aboutme'
            ref={aboutMeRef}
        >
            <div className="about-me-text">
                <h2>About Me</h2>
                <p>
                    Hi, I'm Mohamed Aziz Hendili, a Software Engineer and Front End & App Developer student. I am currently studying at the Private Higher School of Engineering and Technology - ESPRIT, after having completed my studies at the Higher Institute of Computer Science (ISI Ariana). I am passionate about creating innovative solutions and am dedicated to applying my skills to real-world challenges. Additionally, I have a keen interest in data analytics and business intelligence, which I incorporate into my development work to enhance insights and decision-making.
                </p>
            </div>
            <img src={profileImage} alt="Profile" className="about-me-image" />
        </div>
    );
};

export default AboutMe;
