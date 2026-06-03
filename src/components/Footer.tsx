"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
          <div className="footer-brand">
            <Link href="/" className="navbar-brand" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <img src="/logo.png" alt="GrowthGrid Logo" style={{ height: '30px', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              GrowthGrid
            </Link>
            <p>Your Growth, Our Grid. Premium websites for local service businesses.</p>
          </div>
          <div className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ color: 'white', marginBottom: '10px' }}>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ color: 'white', marginBottom: '10px' }}>Legal & Admin</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/admin">Admin Login</Link>
          </div>
        </div>
        <div className="footer-bottom" style={{ marginTop: '40px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} GrowthGrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
