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
                <span className="section-eyebrow">// 02 · ABOUT ME</span>
                <h2>About Me</h2>
                <p>
                    Data Engineering &amp; Business Intelligence Engineer with end-to-end data solution design expertise — from Snowflake data modeling to ETL/ELT pipelines and high-impact Tableau and Power BI dashboards. Previously a Business Analyst IT at Société Générale, I developed a dual technical and functional skill set: requirements gathering, functional specification writing, and close collaboration with product teams in Agile environments. Now a BI/Data Consultant at Codway, I leverage this experience to guide demanding clients through their data transformation journeys.
                </p>
            </div>
            <img src={profileImage} alt="Profile" className="about-me-image" />
        </div>
    );
};

export default AboutMe;
