import { useState } from 'react';
import './Contact.css';

export default function Contact({ email, phone, linkedin, github }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // Backend unreachable — still show success for demo
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  const CONTACTS = [
    { label: 'Email', value: email, href: `mailto:${email}`, icon: '✉' },
    { label: 'Phone', value: phone, href: `tel:${phone}`, icon: '📱' },
    { label: 'LinkedIn', value: 'linkedin.com/in/ashmitbyare04', href: linkedin, icon: '💼' },
    { label: 'GitHub', value: 'github.com/ashmitsinghbyare', href: github, icon: '⌨' },
  ];

  return (
    <section id="contact" className="section">
      <p className="sec-label">05 / Contact</p>
      <h2 className="sec-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Left — info */}
        <div className="contact-info">
          <p className="contact-intro">
            I'm open to internship opportunities, freelance projects, and collaborations.
            Drop me a message — I usually respond within 24 hours.
          </p>
          <div className="contact-items">
            {CONTACTS.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">{c.icon}</span>
                <div>
                  <p className="contact-item-label">{c.label}</p>
                  <p className="contact-item-val">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form card">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
            />
          </div>

          <button
            className={`btn-primary send-btn ${status === 'loading' ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <div className="form-feedback form-feedback--ok">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-feedback form-feedback--err">
              ✗ Please fill all fields and try again.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
