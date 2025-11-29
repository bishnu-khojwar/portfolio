import React from 'react';
import { HERO_STATS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            👋 Available for opportunities
          </div>
          <h1>
            Bishnu Khojwar
          </h1>
          <p className="hero-subtitle">
            DevOps Engineer specializing in Cloud Infrastructure, Kubernetes, and CI/CD automation. Building scalable systems with 99.9% uptime.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="image-bg-circle"></div>
            <div className="profile-image">
               {/* Use placeholder since original image is missing */}
               <img src="BishnuPP.png" alt="Bishnu Khojwar Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div className="floating-elements">
              <div className="floating-icon">
                  🐳
              </div>
              <div className="floating-icon">
                  ☸️
              </div>
              <div className="floating-icon">
                  ☁️
              </div>
              <div className="floating-icon">
                  ⚙️
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                {stat.value}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};