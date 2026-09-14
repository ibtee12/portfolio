import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Education.css';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="section education-section">
      <div className="section-header">
        <span className="section-label">03 // ACADEMIC FOUNDATION</span>
        <h2 className="section-title">EDUCATION &amp; MILESTONES</h2>
        <p className="section-desc">
          Rigorous computer science foundation covering algorithms, data structures, and software engineering at RUET.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="edu-card-left">
              <div className="edu-icon-box">
                <GraduationCap size={24} />
              </div>
              <div className="edu-stage-tag">{edu.stage}</div>
            </div>

            <div className="edu-card-body">
              <div className="edu-meta-top">
                <span className="edu-duration">
                  <Calendar size={13} />
                  {edu.duration}
                </span>
                <span className="edu-location">
                  <MapPin size={13} />
                  {edu.location}
                </span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <p className="edu-description">{edu.description}</p>

              <div className="edu-badges-list">
                {edu.badges.map((b, bIdx) => (
                  <span key={bIdx} className="badge">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
