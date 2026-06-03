"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Replaced Text with Logo */}
          <img src="/logo.png" alt="GrowthGrid Logo" style={{ height: '40px', objectFit: 'contain' }} onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\'%3E%3Crect width=\\'32\\' height=\\'32\\' rx=\\'8\\' fill=\\'%233b82f6\\'/%3E%3Ctext x=\\'50%25\\' y=\\'55%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'white\\' font-family=\\'Inter,sans-serif\\' font-weight=\\'900\\' font-size=\\'18\\'%3EG%3C/text%3E%3C/svg%3E'; }} />
          GrowthGrid
        </Link>

        {/* Desktop Nav */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
          <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#process" onClick={() => setMenuOpen(false)}>Process</Link>
          <Link href="#demo" onClick={() => setMenuOpen(false)}>Demo</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)} style={{ whiteSpace: 'nowrap', padding: '10px 16px' }}>
            Get Free Demo <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* 3D Hamburger Menu */}
        <div className={`hamburger-3d ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="cube-face front">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cube-face back">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
