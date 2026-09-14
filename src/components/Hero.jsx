import React from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  FileText,
  GraduationCap,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = resumeData;

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column: Editorial Headline & Bio */}
        <div className="hero-main-content">
          {/* Eyebrow / Technical Tag */}
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">
              <span className="eyebrow-symbol">//</span>
              <span>JUNIOR FRONTEND DEVELOPER</span>
            </span>
            <div className="eyebrow-location">
              <MapPin size={12} />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Main Display Headline */}
          <div className="hero-content">
            <h1 className="hero-headline">
              NAHYAN <span className="hero-name-accent">YASIR IBTEE</span>
            </h1>

            {/* Editorial Stack Line */}
            <div className="hero-stack-ticker">
              <span className="ticker-dot">●</span>
              <span className="ticker-text">REACT.JS // NEXT.JS // FULL-STACK WEB ARCHITECTURE</span>
            </div>

            <p className="hero-tagline">
              Computer Science &amp; Engineering undergrad at{' '}
              <strong className="text-emphasis">RUET (CSE '22 Batch)</strong> crafting clean,
              production-grade, and responsive web applications.
            </p>

            <p className="hero-bio">{personal.bio}</p>
          </div>

          {/* Editorial Stats Grid */}
          <div className="hero-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <span className="stat-idx">0{idx + 1}.</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs & Social Links */}
          <div className="hero-actions-wrapper">
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={14} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
              {onOpenResume && (
                <button onClick={onOpenResume} className="btn btn-ghost hero-cv-btn">
                  <FileText size={14} />
                  <span>Resume</span>
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
                <GithubIcon size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-link"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Card */}
        <div className="hero-image-column">
          <div className="profile-card-wrapper">
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

            {/* Editorial Badges */}
            <div className="profile-badge floating-badge-status">
              <span className="status-dot animate-pulse-dot" />
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="profile-badge floating-badge-edu">
              <GraduationCap size={13} className="badge-edu-icon" />
              <span>RUET CSE '22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
