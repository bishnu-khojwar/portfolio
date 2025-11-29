import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};