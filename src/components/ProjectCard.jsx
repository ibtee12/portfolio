import React from 'react';
import { ExternalLink, CheckCircle2, Globe, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

export default function ProjectCard({ project, index }) {
  const isAlt = index % 2 !== 0;

  return (
    <div className={`project-card ${isAlt ? 'project-card-alt' : ''}`}>
      {/* Mockup Preview Graphic */}
      <div className="project-preview">
        <div className="preview-window-frame">
          <div className="preview-header-bar">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="window-url-bar">
              <span className="url-protocol">https://</span>
              <span className="url-domain">
                {project.id === 'matrix-math-care' ? 'xyz-care.vercel.app' : 'digital-life-lessons.vercel.app'}
              </span>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-visit-link"
              title="Open Live App"
            >
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="preview-body-content">
            {/* Visual Abstract UI Dashboard Representation */}
            <div className="mock-app-ui">
              <div className="mock-sidebar">
                <div className="mock-avatar" />
                <div className="mock-line-short" />
                <div className="mock-line-short" />
                <div className="mock-line-short" />
              </div>
              <div className="mock-main">
                <div className="mock-hero-bar">
                  <div className="mock-pill" style={{ borderColor: project.colorAccent }}>
                    <span className="mock-dot" style={{ background: project.colorAccent }} />
                    <span>{project.badge}</span>
                  </div>
                  <div className="mock-metric-row">
                    <div className="mock-metric-chip">
                      <span className="mock-chip-val">Active</span>
                      <span className="mock-chip-sub">Production</span>
                    </div>
                    <div className="mock-metric-chip">
                      <span className="mock-chip-val">Full-Stack</span>
                      <span className="mock-chip-sub">React Architecture</span>
                    </div>
                  </div>
                </div>

                <div className="mock-cards-grid">
                  <div className="mock-widget">
                    <div className="mock-widget-header" />
                    <div className="mock-widget-line" />
                    <div className="mock-widget-line w-70" />
                  </div>
                  <div className="mock-widget">
                    <div className="mock-widget-header" />
                    <div className="mock-widget-line" />
                    <div className="mock-widget-line w-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="project-info">
        <div className="project-badge-row">
          <span className="badge">{project.badge}</span>
          <span className="project-status-tag">
            <span className="status-dot animate-pulse-dot" />
            Live Project
          </span>
        </div>

        <h3 className="project-title">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <p className="project-summary">{project.summary}</p>

        {/* Feature Highlights */}
        <div className="project-features-list">
          {project.features.map((feat, fIdx) => (
            <div key={fIdx} className="feature-item">
              <CheckCircle2 size={16} className="feature-icon" style={{ color: project.colorAccent }} />
              <div className="feature-text">
                <strong className="feature-title">{feat.title}: </strong>
                <span>{feat.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="project-tech-stack">
          {project.tech.map((t, tIdx) => (
            <span key={tIdx} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-btn"
          >
            <Globe size={15} />
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary project-btn"
            >
              <GithubIcon size={15} />
              <span>GitHub Repo</span>
            </a>
          )}

          {project.clientGithubUrl && (
            <a
              href={project.clientGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary project-btn"
            >
              <Code2 size={15} />
              <span>Client Repo</span>
            </a>
          )}

          {project.serverGithubUrl && (
            <a
              href={project.serverGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary project-btn"
            >
              <GithubIcon size={15} />
              <span>Server Repo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
