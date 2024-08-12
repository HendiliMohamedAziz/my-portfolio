import React from 'react';
import "./work.css";
import videoSrc from '../assets/iphone-coin-spin.mp4';
import arrowImage from '../assets/arrow.png';

const MyWork = () => {
    return (
        <div className="work-container" id='work'>
            <div className="textSection">
                <h1 className="title">My Work</h1>
                <p className="description">
                    Developed a range of applications, including a sports platform and a white-label e-commerce solution, utilizing Symfony, Flutter, and Java FX. Created real-time data visualizations for an online radio website with Python, Kafka, and Spark. Contributed to sports analytics modules for football using Talend, PostgreSQL, Power BI, and Angular. Passionate about integrating innovative technologies and delivering practical, data-driven solutions.
                </p>
            </div>
            <div className="videoSection">
                <div className="videoContainer">
                    <video autoPlay loop muted playsInline className="video">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="featuredProject">
                    <img src={arrowImage} alt="Arrow" className="arrowImage" />
                    <h2 className="projectTitle">Featured Project</h2>
                    <p className="projectName">"white-label" App</p>
                    <a href="https://drive.google.com/file/d/1uDsIWR4-HxcnLgLTzuq3FKwMv8HK06nU/view?usp=sharing" className="viewProjectButton" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>
    );
};

export default MyWork;
