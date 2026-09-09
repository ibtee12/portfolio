import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './Contact.css';

export default function Contact() {
  const { personal } = resumeData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy error', err);
    }
    document.body.removeChild(textArea);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(personal.email)
        .then(() => setCopied(true))
        .catch(() => {
          fallbackCopy(personal.email);
          setCopied(true);
        });
    } else {
      fallbackCopy(personal.email);
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    const mailtoUrl = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(formState.message + '\n\nReply to: ' + formState.email)}`;

    setSubmitted(true);
    window.open(mailtoUrl, '_blank');
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-label">Get in touch</span>
        <h2 className="section-title">Let’s Connect &amp; Collaborate</h2>
        <p className="section-desc">
          I am actively seeking Junior Frontend Developer roles, full-stack opportunities, and impactful software engineering projects.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left: Contact Info Cards */}
        <div className="contact-info-column">
          {/* Email Card with 1-click Copy */}
          <div className="contact-card email-highlight-card">
            <div className="card-icon-title">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <span className="contact-sublabel">Email Address</span>
                <a href={`mailto:${personal.email}`} className="contact-main-val">
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className={`copy-email-btn ${copied ? 'copied' : ''}`}
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="contact-icon-box">
              <Phone size={20} />
            </div>
            <div>
              <span className="contact-sublabel">Phone / WhatsApp</span>
              <a href={`tel:${personal.phone}`} className="contact-main-val">
                {personal.phone}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <div className="contact-icon-box">
              <MapPin size={20} />
            </div>
            <div>
              <span className="contact-sublabel">Current Location</span>
              <span className="contact-main-val">{personal.location}</span>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="contact-card contact-social-row">
            <span className="contact-sublabel">Social Networks</span>
            <div className="social-pills-wrap">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Form */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">
              Have an opening or project idea? Drop a note directly to my inbox.
            </p>

            {submitted ? (
              <div className="form-success-box animate-fade-in">
                <Check size={28} className="success-icon" />
                <h4>Message Ready!</h4>
                <p>Opening your email client to send to <strong>{personal.email}</strong>...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Hi Nahyan, I loved your projects and would like to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
