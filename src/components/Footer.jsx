import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './Footer.css';

export default function Footer() {
  const { personal } = resumeData;
  const [dhakaTime, setDhakaTime] = useState('');

  useEffect(() => {
    const updateDhakaTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setDhakaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateDhakaTime();
    const interval = setInterval(updateDhakaTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-brand-title">NAHYAN YASIR IBTEE</span>
            <span className="footer-brand-desc">
              JUNIOR FRONTEND DEVELOPER · RUET CSE '22 BATCH
            </span>
          </div>

          {/* Live Dhaka Time Clock */}
          <div className="footer-time-card">
            <Clock size={14} className="time-icon" />
            <span className="time-label">Dhaka (BST):</span>
            <span className="time-value">{dhakaTime || '6:00 PM'}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Nahyan Yasir Ibtee · Built with React &amp; Modern CSS
          </p>

          <div className="footer-socials">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <span className="footer-dot">·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <span className="footer-dot">·</span>
            <a href={`mailto:${personal.email}`} className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
