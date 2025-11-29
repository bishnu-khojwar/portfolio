import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              Bishnu Khojwar
            </div>
            <p className="footer-tagline">
              DevOps Engineer passionate about building scalable cloud infrastructure and automating complex workflows.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/bishnu-khojwar" target="_blank" rel="noopener noreferrer" className="social-link">
              <img alt="LinkedIn Icon" src="linkedin.png" height="20" width="20" />
              </a>
              <a href="mailto:bishnukhojwar18@gmail.com" className="social-link">📧</a>
              <a href="#about" className="social-link">👤</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#engagement">Engagement</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links-list">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Bishnu Khojwar. Built with passion for DevOps and Cloud.</p>
          {/* <div className="footer-bottom-links">
            <a href="#about">Privacy</a>
            <a href="#about">Terms</a>
            <a href="#contact">Contact</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};