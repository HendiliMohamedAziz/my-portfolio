import React from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('aboutme');
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="scroll-button" onClick={handleScroll}>
        <div className="scroll-icon">
          <div className="arrow-down"></div>
        </div>
      </div>
    );
};

export default ScrollButton;
