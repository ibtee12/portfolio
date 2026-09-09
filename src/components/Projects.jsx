import React from 'react';
import { Layers, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-label">Selected Works</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">
          Real-world, full-stack web applications featuring role-based dashboards, interactive
          analytics, real-time communication, and Stripe payment integration.
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
