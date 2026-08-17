import React, { useEffect, useRef } from 'react';
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
            title: 'Business Analysis',
            description: 'Functional specifications, user stories, process modeling, and workshop facilitation. Banking-environment experience (Société Générale) with Agile/Scrum methodologies.',
            colorClass: 'business-icon',
        },
        {
            emoji: '📈',
            title: 'BI & Reporting',
            description: 'Advanced dashboard design with Power BI and Tableau. Snowflake data modeling for decision-driven reporting and business analysis.',
            colorClass: 'frontend-icon',
        },
        {
            emoji: '⚙️',
            title: 'Data Engineering',
            description: 'ETL/ELT pipeline development, real-time data processing with Apache Spark and Kafka. Automation and optimization of large-scale data flows.',
            colorClass: 'flutter-icon',
        },
    ];

    return (
        <div className="expertise-container" id='expertise'>
            <span className="section-eyebrow">// 03 · EXPERTISE</span>
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
        </div>
    );
}

export default Expertise;
