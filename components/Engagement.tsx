import React from 'react';
import { ENGAGEMENT } from '../constants';

export const Engagement: React.FC = () => {
  return (
    <section id="engagement">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Community Engagement</h2>
          <p className="section-subtitle">Contributing to society and building communities</p>
        </div>
        <div className="engagement-grid">
          {ENGAGEMENT.map((item, index) => (
            <div key={index} className="engagement-card">
              <div className="engagement-badge">
                {item.badge}
              </div>
              <h3 className="engagement-title">{item.title}</h3>
              <p className="engagement-org">{item.organization}</p>
              <p className="engagement-location">{item.location}</p>
              <div className="engagement-description">
                <ul>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
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