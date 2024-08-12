import React, { useEffect, useRef } from 'react';
import { ReactComponent as Icon1 } from '../assets/computer-stroke-rounded.svg';
import { ReactComponent as Icon2 } from '../assets/react-stroke-rounded.svg';
import { ReactComponent as Icon3 } from '../assets/icons8-flutter.svg';
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
                        }, index * 200); // Delay each card by 200ms
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

    return (
        <div className="expertise-container" id='expertise'>
            <h1>My Expertise</h1>
            <div className="expertise-cards">
                <div
                    className="expertise-card"
                    ref={(el) => (cardsRef.current[0] = el)}
                >
                    <div className="title-container">
                        <div className="icon software-icon"><Icon1 /></div>
                        <h2>Software Development</h2>
                    </div>
                    <h3>
                        <div className="h3-content">
                        Skilled in both functional and object-oriented programming with experience in Java, Python, C++, Dart, JavaScript, and TypeScript.
                        </div>
                    </h3>
                </div>
                <div
                    className="expertise-card"
                    ref={(el) => (cardsRef.current[1] = el)}
                >
                    <div className="title-container">
                        <div className="icon frontend-icon"><Icon2 /></div>
                        <h2>Frontend Dev</h2>
                    </div>
                    <h3>
                        <div className="h3-content">
                            Experienced in building responsive and user-friendly interfaces with HTML5, CSS, JavaScript, TypeScript, React, and Angular frameworks.
                        </div>
                    </h3>
                </div>
                <div
                    className="expertise-card"
                    ref={(el) => (cardsRef.current[2] = el)}
                >
                    <div className="title-container">
                        <div className="icon flutter-icon"><Icon3 /></div>
                        <h2>Flutter Dev</h2>
                    </div>
                    <h3>
                        <div className="h3-content">
                            Skilled in developing mobile apps using the Flutter framework.
                        </div>
                    </h3>
                </div>
            </div>
            <img src={BackgroundImage} alt="Background" className="expertise-background" />
        </div>
    );
}

export default Expertise;
