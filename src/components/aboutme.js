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
                    Ingénieur en Data Engineering & Business Intelligence, je conçois des solutions data end-to-end — de la modélisation Snowflake aux pipelines ETL/ELT, en passant par des tableaux de bord Tableau et Power BI à forte valeur décisionnelle. Passé par Société Générale en tant que Business Analyst IT, j'ai développé une double compétence technique et fonctionnelle : analyse des besoins, rédaction de spécifications et collaboration étroite avec les équipes produit en environnement Agile. Aujourd'hui consultant BI/Data chez Codway, je m'appuie sur cette expérience pour accompagner des clients exigeants dans leur transformation data.
                </p>
            </div>
            <img src={profileImage} alt="Profile" className="about-me-image" />
        </div>
    );
};

export default AboutMe;
