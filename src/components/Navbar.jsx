import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'Projects', href: '#projects' },
    { num: '02', name: 'Skills', href: '#skills' },
    { num: '03', name: 'Education', href: '#education' },
    { num: '04', name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <span className="brand-logo">NI</span>
          <span className="brand-text">
            NAHYAN <span className="brand-dot">IBTEE</span>
          </span>
        </a>

        {/* Status Pill */}
        <div className="navbar-status">
          <span className="status-indicator">
            <span className="status-dot animate-pulse-dot" />
          </span>
          <span className="status-text">AVAILABLE FOR HIRE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="navbar-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              <span className="nav-link-num">{link.num}.</span>
              <span className="nav-link-text">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="btn btn-secondary navbar-resume-btn"
              title="View Resume"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="nav-link-num">{link.num}.</span>
                <span>{link.name}</span>
              </a>
            ))}
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="mobile-nav-link resume-mobile-btn"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
