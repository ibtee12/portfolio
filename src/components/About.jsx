import React from 'react';
import {
  GraduationCap,
  Layers,
  Code2,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './About.css';

export default function About({ onOpenResume }) {
  const { personal, stats } = resumeData;

  const aboutCards = [
    {
      icon: <GraduationCap size={22} className="about-card-icon" />,
      number: "RUET '22",
      label: "CSE Series / Batch",
      desc: "3rd Year Undergraduate in Computer Science & Engineering at Rajshahi University of Engineering & Technology.",
    },
    {
      icon: <Layers size={22} className="about-card-icon" />,
      number: "3+",
      label: "Featured Full-Stack Platforms",
      desc: "Production-grade apps including DriveFleet (Car Rental & Fleet LMS), Matrix Math Care, and Digital Life Lessons.",
    },
    {
      icon: <Code2 size={22} className="about-card-icon" />,
      number: "React & Next.js",
      label: "Core Frontend Toolkit",
      desc: "Specialized in component architecture, state management, REST APIs, and clean, responsive vanilla CSS.",
    },
    {
      icon: <MapPin size={22} className="about-card-icon" />,
      number: "Rajshahi",
      label: "Based in Bangladesh",
      desc: "Open to remote, hybrid, and on-site frontend software engineering opportunities worldwide.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      {/* Editorial Section Header */}
      <div className="section-header">
        <span className="section-index" aria-hidden="true">01</span>
        <div className="section-heading-block">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Frontend developer &amp; CSE undergrad building intuitive, scalable digital products.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I am a 3rd-year Computer Science and Engineering undergraduate at{' '}
            <strong className="text-emphasis">Rajshahi University of Engineering &amp; Technology (RUET, CSE '22 Batch)</strong>{' '}
            located in Rajshahi, Bangladesh. I specialize in frontend engineering with a strong full-stack foundation across the React ecosystem, Node.js, Express, and MongoDB.
          </p>

          <p>
            My approach centers on craft: combining clean code, responsive layouts, performance optimization, and refined typography to build interfaces that feel effortless to use. Whether architecting dynamic car rental fleet dashboards with real-time search or building role-based learning management systems, I focus on scalable component design and robust security.
          </p>

          <p>
            When I'm not writing code, I actively explore emerging frontend patterns, solve algorithmic problems, and refine design systems to bridge the gap between design vision and technical execution.
          </p>

          <div className="about-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
            </a>
            {onOpenResume && (
              <button onClick={onOpenResume} className="btn btn-secondary">
                <span>View Full Resume</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="about-stats">
          {aboutCards.map((card, idx) => (
            <div key={idx} className="about-stat-card">
              <div className="about-stat-top">
                <div className="stat-icon-wrapper">{card.icon}</div>
                <span className="stat-card-idx">0{idx + 1}</span>
              </div>
              <h3 className="about-stat-number">{card.number}</h3>
              <p className="about-stat-label">{card.label}</p>
              <p className="about-stat-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
