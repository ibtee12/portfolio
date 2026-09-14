import React from 'react';
import { resumeData } from '../data/resumeData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-label">01 // SELECTED WORKS</span>
        <h2 className="section-title">FEATURED PROJECTS</h2>
        <p className="section-desc">
          High-performance full-stack web applications featuring peer-to-peer fleet management, role-based LMS architecture, real-time analytics, and Stripe payment integration.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
