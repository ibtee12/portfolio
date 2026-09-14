import React from 'react';
import { resumeData } from '../data/resumeData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-index" aria-hidden="true">02</span>
        <div className="section-heading-block">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Dynamic web platforms featuring peer-to-peer fleet management, role-based LMS architecture, and clean user interfaces.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
