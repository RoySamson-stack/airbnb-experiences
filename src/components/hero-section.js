import React from 'react';
import Group from "../img/Group77.png"


function HeroSection() {
    return (
      <div className="hero-section">
        <img src={Group} className="hero-img" alt="hero-image" />
        <div className="hero-title">
          <h1 className="hero-header">Online Experiences</h1>
          <p className="hero-text">Join unique interactive activates led by one of a king hosts all without leaving home.</p>
        </div>
      </div>
    );
}

export default HeroSection;