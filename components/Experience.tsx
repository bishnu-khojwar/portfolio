import React from 'react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Building reliable systems and driving DevOps excellence</p>
        </div>
        <div className="experience-grid">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  {item.icon}
                </div>
                <div className="experience-info">
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <span className="experience-period">{item.period}</span>
                </div>
              </div>
              <div className="experience-highlights">
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};