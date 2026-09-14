import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  // Theme state with localStorage persistence, default dark
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('nahyan_portfolio_theme');
    return saved ? saved : 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nahyan_portfolio_theme', theme);
  }, [theme]);

  // Track scroll progress for top indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      {/* Editorial Film Grain Overlay */}
      <div className="grain-layer" aria-hidden="true" />

      {/* Top Scroll Progress Indicator */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Full-bleed Hero & Ambient Atmosphere */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* Signature Continuous Marquee Ticker */}
      <MarqueeStrip />

      <main className="main-content">
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
