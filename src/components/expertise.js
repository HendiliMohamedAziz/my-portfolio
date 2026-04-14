import React, { useEffect, useRef } from 'react';
import BackgroundImage from '../assets/hello-world-html-code-768x384.webp';
import './expertise.css';

const Expertise = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('appear');
                        }, index * 200);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardsRef.current) {
            cardsRef.current.forEach((card) => observer.observe(card));
        }

        return () => {
            if (cardsRef.current) {
                cardsRef.current.forEach((card) => observer.unobserve(card));
            }
        };
    }, []);

    const cards = [
        {
            emoji: '📊',
            title: 'Analyse Métier',
            description: 'Spécifications fonctionnelles, User stories, modélisation de processus et conduite d\'ateliers. Expérience en environnement bancaire (Société Générale) avec méthodologies Agile/Scrum.',
            colorClass: 'business-icon',
        },
        {
            emoji: '📈',
            title: 'BI & Reporting',
            description: 'Conception de tableaux de bord avancés avec Power BI et Tableau. Modélisation de données Snowflake pour le reporting décisionnel et l\'analyse métier.',
            colorClass: 'frontend-icon',
        },
        {
            emoji: '⚙️',
            title: 'Data Engineering',
            description: 'Développement de pipelines ETL/ELT, traitement de données en temps réel avec Apache Spark et Kafka. Automatisation et optimisation de flux de données à grande échelle.',
            colorClass: 'flutter-icon',
        },
    ];

    return (
        <div className="expertise-container" id='expertise'>
            <h1>My Expertise</h1>
            <div className="expertise-cards">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="expertise-card"
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <div className="title-container">
                            <div className={`icon ${card.colorClass}`} style={{ fontSize: '2.5rem' }}>{card.emoji}</div>
                            <h2>{card.title}</h2>
                        </div>
                        <h3>
                            <div className="h3-content">
                                {card.description}
                            </div>
                        </h3>
                    </div>
                ))}
            </div>
            <img src={BackgroundImage} alt="Background" className="expertise-background" />
        </div>
    );
}

export default Expertise;
