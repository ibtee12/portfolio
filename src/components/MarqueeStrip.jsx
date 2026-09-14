import React from 'react';
import './MarqueeStrip.css';

export default function MarqueeStrip() {
  const items = [
    "React 18",
    "JavaScript (ES6+)",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Firebase Auth",
    "RUET CSE '22",
    "RESTful APIs",
    "Vite",
    "Modern Vanilla CSS",
    "Git & GitHub",
  ];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((item, index) => (
            <React.Fragment key={`marquee-1-${index}`}>
              <span>{item}</span>
              <span className="marquee-sep">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content">
          {items.map((item, index) => (
            <React.Fragment key={`marquee-2-${index}`}>
              <span>{item}</span>
              <span className="marquee-sep">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
