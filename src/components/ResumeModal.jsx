import React from 'react';
import { X, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, projects, skills, education } = resumeData;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="resume-modal-header">
          <div className="modal-header-title">
            <span className="modal-badge">Resume Preview</span>
            <h3>Nahyan Yasir Ibtee · Curriculum Vitae</h3>
          </div>
          <div className="modal-header-actions">
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="printable-resume-sheet">
          {/* Header */}
          <div className="sheet-header">
            <div className="sheet-header-profile">
              {personal.avatar && (
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="sheet-profile-img"
                />
              )}
              <div>
                <h1 className="sheet-name">{personal.name}</h1>
                <span className="sheet-role">{personal.title}</span>
              </div>
            </div>
            <div className="sheet-contacts">
              <div className="sheet-contact-item">
                <Mail size={12} />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="sheet-contact-item">
                <Phone size={12} />
                <span>{personal.phone}</span>
              </div>
              <div className="sheet-contact-item">
                <MapPin size={12} />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="sheet-links-bar">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={12} /> github.com/ibtee12
            </a>
            <span>·</span>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={12} /> linkedin.com/in/nahyan-ibtee
            </a>
            <span>·</span>
            <a href={personal.liveDemo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={12} /> Live Projects
            </a>
          </div>

          <div className="sheet-grid">
            {/* Main Column */}
            <div className="sheet-main-col">
              {/* Objective */}
              <div className="sheet-section">
                <h4 className="sheet-section-title">Career Objective</h4>
                <p className="sheet-text">{personal.bio}</p>
              </div>

              {/* Projects */}
              <div className="sheet-section">
                <h4 className="sheet-section-title">Featured Projects</h4>
                {projects.map((proj) => (
                  <div key={proj.id} className="sheet-project">
                    <div className="sheet-project-header">
                      <strong className="sheet-proj-name">{proj.title}</strong>
                      <div className="sheet-proj-links">
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live
                        </a>
                        {proj.githubUrl && (
                          <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        )}
                        {proj.clientGithubUrl && (
                          <a href={proj.clientGithubUrl} target="_blank" rel="noopener noreferrer">
                            Client
                          </a>
                        )}
                        {proj.serverGithubUrl && (
                          <a href={proj.serverGithubUrl} target="_blank" rel="noopener noreferrer">
                            Server
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="sheet-proj-summary">{proj.summary}</p>
                    <ul className="sheet-proj-bullets">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <strong>{feat.title}: </strong>
                          {feat.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Column */}
            <div className="sheet-side-col">
              {/* Education */}
              <div className="sheet-section">
                <h4 className="sheet-section-title">Education</h4>
                {education.map((edu, idx) => (
                  <div key={idx} className="sheet-edu">
                    <div className="sheet-edu-degree">{edu.degree}</div>
                    <div className="sheet-edu-school">{edu.institution}</div>
                    <div className="sheet-edu-meta">
                      {edu.duration} · {edu.stage}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="sheet-section">
                <h4 className="sheet-section-title">Skills</h4>
                <div className="sheet-skills-group">
                  <span className="sheet-skill-category">Frontend</span>
                  <div className="sheet-tags">
                    {skills
                      .filter((s) => s.category === 'frontend')
                      .map((s) => (
                        <span key={s.name} className="sheet-tag">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="sheet-skills-group">
                  <span className="sheet-skill-category">Backend &amp; Database</span>
                  <div className="sheet-tags">
                    {skills
                      .filter((s) => s.category === 'backend')
                      .map((s) => (
                        <span key={s.name} className="sheet-tag">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="sheet-skills-group">
                  <span className="sheet-skill-category">Tools &amp; Deploy</span>
                  <div className="sheet-tags">
                    {skills
                      .filter((s) => s.category === 'tools')
                      .map((s) => (
                        <span key={s.name} className="sheet-tag">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="sheet-skills-group">
                  <span className="sheet-skill-category">Languages &amp; Data</span>
                  <div className="sheet-tags">
                    {skills
                      .filter((s) => s.category === 'cs')
                      .map((s) => (
                        <span key={s.name} className="sheet-tag">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="sheet-skills-group">
                  <span className="sheet-skill-category">Interpersonal</span>
                  <div className="sheet-tags">
                    {skills
                      .filter((s) => s.category === 'soft')
                      .map((s) => (
                        <span key={s.name} className="sheet-tag soft">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
