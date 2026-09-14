import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  FileText,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = resumeData;

  // Typing text effect like dev.ittahad.site
  const titles = [
    "RUET CSE '22 Undergraduate",
    "Junior Frontend Developer",
    "React & Next.js Architect",
    "Full-Stack Web Enthusiast",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause at full text
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="hero">
      {/* Subtle Coordinate Grid & Ambient Glowing Orbs */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid-lines" />
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <div className="hero-content-container">
        <div className="hero-text-col">
          {/* Greeting Line */}
          <p className="hero-greeting">
            <span className="hero-greeting-line" />
            <span>Junior Frontend Developer &bull; RUET CSE '22</span>
          </p>

          {/* Name Display */}
          <h1 className="hero-name">
            <span className="hero-name-legal">Nahyan Yasir</span>
            <span className="hero-name-alias">Ibtee</span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="hero-title" aria-live="polite">
            <span className="typing-text">{displayedText}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </div>

          {/* Clean Description */}
          <p className="hero-description">
            Computer Science &amp; Engineering undergrad at{' '}
            <strong className="text-emphasis">RUET (CSE '22 Batch)</strong> in Rajshahi, Bangladesh.
            Crafting responsive, high-performance web applications with React, Next.js, Node.js, and clean CSS architecture.
          </p>

          {/* Location Badge */}
          <div className="hero-location-tag">
            <MapPin size={13} className="location-pin-icon" />
            <span>Rajshahi, Bangladesh</span>
            <span className="location-sep">•</span>
            <span className="status-live-dot" />
            <span className="status-live-text">Available for Frontend Roles</span>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View work</span>
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact</span>
              <Mail size={15} />
            </a>
            {onOpenResume && (
              <button onClick={onOpenResume} className="btn btn-ghost hero-cv-btn">
                <FileText size={15} />
                <span>Resume</span>
              </button>
            )}
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="social-link"
              aria-label="Email"
              title="Send Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Hero Portrait Column */}
        <div className="hero-portrait-col">
          <div className="hero-portrait">
            <div className="hero-portrait-ring" aria-hidden="true" />
            <div className="hero-portrait-frame">
              <img
                src={personal.avatar}
                alt="Nahyan Yasir Ibtee"
                width="280"
                height="280"
                loading="eager"
              />
            </div>
            <p className="hero-portrait-caption">
              <span>RUET CSE '22</span>
              <span className="caption-sep">/</span>
              <span>FRONTEND</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <p>Scroll</p>
      </div>
    </section>
  );
}
