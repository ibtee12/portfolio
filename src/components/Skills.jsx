import React, { useState } from 'react';
import { Sparkles, Code2, Database, Wrench, Terminal, Users } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Skills.css';

export default function Skills() {
  const { skills, skillCategories } = resumeData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'frontend':
        return <Code2 size={15} />;
      case 'backend':
        return <Database size={15} />;
      case 'tools':
        return <Wrench size={15} />;
      case 'cs':
        return <Terminal size={15} />;
      case 'soft':
        return <Users size={15} />;
      default:
        return <Sparkles size={15} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <span className="section-label">02 // TECHNICAL TOOLKIT</span>
        <h2 className="section-title">SKILLS &amp; TECHNOLOGIES</h2>
        <p className="section-desc">
          Core engineering toolkit focused on scalable frontend systems, asynchronous state management, secure database design, and algorithmic problem solving.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="skills-tabs">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {getCategoryIcon(cat.id)}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div
            key={skill.name}
            className={`skill-card ${skill.featured ? 'skill-card-featured' : ''}`}
          >
            <div className="skill-card-top">
              <span className="skill-name">{skill.name}</span>
              {skill.featured && (
                <span className="skill-star" title="Core Skill">
                  ★ Core
                </span>
              )}
            </div>
            <div className="skill-card-bottom">
              <span className="skill-level">{skill.level}</span>
              <span className="skill-category-tag">{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
