"use client";

import { sendContactEmail } from '@/app/actions';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    setStatus(null);
    const result = await sendContactEmail(formData);
    if (result?.error) {
      setStatus(`Error: ${result.error}`);
    } else if (result?.success) {
      setStatus('Success! Your message has been sent. We will get back to you shortly.');
    }
    setLoading(false);
  };

  return (
    <div className="container perspective-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="section-header reveal visible tilt-element">
        <div className="section-label"><span className="dot"></span> Get In Touch</div>
        <h1 className="section-title">Contact GrowthGrid</h1>
        <p className="section-subtitle">Have questions or need a custom plan? Send us a message.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
        
        {/* Contact Info */}
        <div className="tilt-element" style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Direct Contact</h2>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <i className="fa-solid fa-envelope" style={{ color: 'var(--blue-400)' }}></i>
            hello@growthgrid.com
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <i className="fa-brands fa-whatsapp" style={{ color: 'var(--blue-400)' }}></i>
            +91 99999 99999
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <i className="fa-solid fa-location-dot" style={{ color: 'var(--blue-400)' }}></i>
            New Delhi, India
          </p>
        </div>

        {/* Contact Form */}
        <div className="tilt-element" style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Send us an Email</h2>
          {status && (
            <div style={{ padding: '15px', marginBottom: '20px', borderRadius: '8px', background: status.includes('Error') ? 'rgba(255,0,0,0.1)' : 'rgba(0,255,0,0.1)', color: status.includes('Error') ? '#ff6b6b' : '#51cf66', border: `1px solid ${status.includes('Error') ? '#ff6b6b' : '#51cf66'}` }}>
              {status}
            </div>
          )}
          <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" name="name" placeholder="Your Name" required style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)', fontSize: '1rem' }} />
            <input type="email" name="email" placeholder="Your Email" required style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)', fontSize: '1rem' }} />
            <textarea name="message" placeholder="How can we help you?" required style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-subtle)', minHeight: '150px', fontSize: '1rem' }} />
            <button type="submit" className="btn-primary" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <p style={{ marginTop: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            *To make this form work, add your Gmail App Password to your .env file as GMAIL_USER and GMAIL_PASS.
          </p>
        </div>

      </div>
    </div>
  );
}
