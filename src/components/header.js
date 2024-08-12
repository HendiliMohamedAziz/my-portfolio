import React, { useState } from "react";
import "./header.css"; 
import Background from "../assets/Background"; 
import ScrollButton from "../assets/ScrollButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header" id="home">
      <div className="header-content">
        <div className="logo">MohamedAzizHendili._</div>
        <button 
          className="hamburger-button" 
          type="button" 
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMobileMenu}>
            <span className="nav-number">01</span> // HOME
          </a>
          <a href="#aboutme" onClick={closeMobileMenu}>
            <span className="nav-number">02</span> // ABOUT ME
          </a>
          <a href="#expertise" onClick={closeMobileMenu}>
            <span className="nav-number">03</span> // EXPERTISE
          </a>
          <a href="#work" onClick={closeMobileMenu}>
            <span className="nav-number">04</span> // WORK
          </a>
          <a href="#contact" onClick={closeMobileMenu}>
            <span className="nav-number">05</span> // CONTACT
          </a>
        </nav>
      </div>
      <div className="header-background">
        <Background />
      </div>
      <div className="hero">
        <h1>Mohamed Aziz Hendili</h1>
        <p>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.</p>
      </div>
      <div className="scroll-button-container">
        <ScrollButton />
      </div>
    </header>
  );
};

export default Header;
