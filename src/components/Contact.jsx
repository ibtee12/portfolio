import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import './Contact.css';

export default function Contact() {
  const { personal } = resumeData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'needs_activation' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const endpoint = personal.formEndpoint || personal.email;
      const response = await fetch(`https://formsubmit.co/ajax/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        // FormSubmit requires one-time activation on first email receipt
        setStatus('needs_activation');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to deliver message. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Network error while delivering message. You can also reach out directly via email.'
      );
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-index" aria-hidden="true">05</span>
        <div className="section-heading-block">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Collaborations, frontend roles, or a technical chat — I’m listening.
          </p>
        </div>
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

            {status === 'success' && (
              <div className="form-feedback-box form-success-box animate-fade-in">
                <CheckCircle2 size={36} className="success-icon" />
                <h4>Message Delivered Directly!</h4>
                <p>
                  Thank you! Your message was sent straight to <strong>{personal.email}</strong>. I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary form-reset-btn"
                >
                  Send Another Message
                </button>
              </div>
            )}

            {status === 'needs_activation' && (
              <div className="form-feedback-box form-activation-box animate-fade-in">
                <AlertCircle size={36} className="activation-icon" />
                <h4>Inbox Activation Needed</h4>
                <p>
                  This is the first message submitted! FormSubmit has sent a quick confirmation email to <strong>{personal.email}</strong>.
                </p>
                <p className="activation-hint">
                  Please open <strong>{personal.email}</strong> and click <em>"Activate Form"</em> once. After that, this and all future messages will arrive directly into your inbox!
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary form-reset-btn"
                >
                  Back to Form
                </button>
              </div>
            )}

            {status === 'error' && (
              <div className="form-feedback-box form-error-box animate-fade-in">
                <AlertTriangle size={36} className="error-icon" />
                <h4>Delivery Issue</h4>
                <p>{errorMessage}</p>
                <div className="form-error-actions">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn btn-secondary"
                  >
                    Try Again
                  </button>
                  <a
                    href={`mailto:${personal.email}?subject=Portfolio Inquiry&body=${encodeURIComponent(
                      formState.message
                    )}`}
                    className="btn btn-primary"
                  >
                    Send via Email App
                  </a>
                </div>
              </div>
            )}

            {(status === 'idle' || status === 'submitting') && (
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
                    disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending to {personal.email}...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
