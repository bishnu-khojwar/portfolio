import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Academic and personal projects</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-emoji">
                  {project.emoji}
                </div>
                <div className="ripple"></div>
              </div>
              <div className="project-content">
                <span className="project-type-badge">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};