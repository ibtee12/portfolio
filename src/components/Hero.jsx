import React from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  FileText,
  Code,
  GraduationCap,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = resumeData;

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column: Text & Content */}
        <div className="hero-main-content">
          {/* Top Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">
              <Sparkles size={14} className="eyebrow-icon" />
              <span>Junior Frontend Developer</span>
            </span>
            <div className="eyebrow-location">
              <MapPin size={13} />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Headline & Bio */}
          <div className="hero-content">
            <h1 className="hero-headline">
              Hi, I’m <span className="highlight-text">{personal.name}</span>
            </h1>
            <p className="hero-tagline">
              Computer Science &amp; Engineering undergrad at{' '}
              <span className="text-emphasis">RUET (3rd Year)</span> crafting clean, responsive, and
              performant web applications.
            </p>
            <p className="hero-bio">{personal.bio}</p>
          </div>

          {/* Quick Stats Grid */}
          <div className="hero-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Actions & Social Links */}
          <div className="hero-actions-wrapper">
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
              {onOpenResume && (
                <button onClick={onOpenResume} className="btn btn-ghost hero-cv-btn">
                  <FileText size={16} />
                  <span>Resume / CV</span>
                </button>
              )}
            </div>

            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-link"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image Card */}
        <div className="hero-image-column">
          <div className="profile-card-wrapper">
            {/* Ambient Background Glow */}
            <div className="profile-glow-ring" />

            <div className="profile-image-frame">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="profile-photo"
                loading="eager"
              />
              <div className="profile-overlay-gradient" />
            </div>

            {/* Floating Badges */}
            <div className="profile-badge floating-badge-status">
              <span className="status-dot animate-pulse-dot" />
              <span>Open to Opportunities</span>
            </div>

            <div className="profile-badge floating-badge-edu">
              <GraduationCap size={14} className="badge-edu-icon" />
              <span>RUET CSE '22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
