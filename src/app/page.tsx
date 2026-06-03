"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // Parallax Orbs Logic
    const orbs = document.querySelectorAll('.orb') as NodeListOf<HTMLElement>;
    const handleMouseMove = (e: MouseEvent) => {
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 30;
        const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
        const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
        orb.style.setProperty('--tx', `${xOffset}px`);
        orb.style.setProperty('--ty', `${yOffset}px`);
      });

      // 3D Tilt Logic
      const tiltElements = document.querySelectorAll('.tilt-element') as NodeListOf<HTMLElement>;
      tiltElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; // max 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        // Only tilt if mouse is nearby or inside
        if (x > -100 && x < rect.width + 100 && y > -100 && y < rect.height + 100) {
          el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        } else {
          el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main ref={containerRef}>
      {/* ===== BACKGROUND ORBS ===== */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-badge reveal tilt-element">
            <i className="fa-solid fa-bolt"></i>
            Trusted Growth Partner for Local Businesses
          </div>
          <h1 className="reveal reveal-delay-1 tilt-element">Turn Local Searches Into<br />Paying Customers</h1>
          <p className="reveal reveal-delay-2">Your Growth, Our Grid. Premium websites and growth systems designed for local service businesses.</p>
          <div className="hero-buttons reveal reveal-delay-3">
            <Link href="#contact" className="btn-primary tilt-element">
              Get Free Demo <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link href="#showcase" className="btn-secondary tilt-element">
              View Sample <i className="fa-solid fa-eye"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="trust-bar" id="trust">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label"><span className="dot"></span> Why Choose Us</div>
            <h2 className="section-title">Why Businesses Choose GrowthGrid</h2>
            <p className="section-subtitle">Everything your business needs to dominate local search and convert visitors into customers.</p>
          </div>
          <div className="marquee-wrapper perspective-container">
            <div className="marquee-content">
              {/* Set 1 */}
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} style={{display: 'contents'}}>
                  <div className="trust-item tilt-element">
                    <div className="icon"><i className="fa-solid fa-mobile-screen"></i></div>
                    <h4>Mobile First</h4>
                  </div>
                  <div className="trust-item tilt-element">
                    <div className="icon"><i className="fa-solid fa-bolt"></i></div>
                    <h4>Fast Loading</h4>
                  </div>
                  <div className="trust-item tilt-element">
                    <div className="icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <h4>SEO Ready</h4>
                  </div>
                  <div className="trust-item tilt-element">
                    <div className="icon"><i className="fa-brands fa-whatsapp"></i></div>
                    <h4>WhatsApp Enabled</h4>
                  </div>
                  <div className="trust-item tilt-element">
                    <div className="icon"><i className="fa-solid fa-chart-line"></i></div>
                    <h4>Conversion Focused</h4>
                  </div>
                  <div className="trust-item tilt-element">
                    <div className="icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                    <h4>Modern Design</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services-section" id="services">
        <div className="container perspective-container">
          <div className="section-header reveal">
            <div className="section-label"><span className="dot"></span> Core Services</div>
            <h2 className="section-title">Everything You Need to Grow</h2>
            <p className="section-subtitle">Focused solutions that deliver real results for local service businesses.</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal reveal-delay-1 tilt-element">
              <div className="service-icon"><i className="fa-solid fa-globe"></i></div>
              <h3>Premium Websites</h3>
              <p>Stunning, conversion-optimized websites built to turn visitors into customers. Mobile-first, fast-loading, and SEO-ready.</p>
            </div>
            <div className="service-card reveal reveal-delay-2 tilt-element">
              <div className="service-icon"><i className="fa-brands fa-whatsapp"></i></div>
              <h3>WhatsApp Lead System</h3>
              <p>Direct WhatsApp integration that captures leads instantly. Automated messages and seamless communication.</p>
            </div>
            <div className="service-card reveal reveal-delay-3 tilt-element">
              <div className="service-icon"><i className="fa-solid fa-gears"></i></div>
              <h3>Business Automation</h3>
              <p>Automate follow-ups, reminders, and lead tracking. Save hours every week while ensuring no customer inquiry is missed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label"><span className="dot"></span> How It Works</div>
            <h2 className="section-title">Four Steps to Growth</h2>
            <p className="section-subtitle">From idea to launch in just days, not months.</p>
          </div>
          <div className="process-grid">
            <div className="process-step reveal reveal-delay-1 tilt-element">
              <div className="step-number">1</div>
              <h3>Free Demo</h3>
              <p>We build a free sample website tailored to your business niche.</p>
            </div>
            <div className="process-step reveal reveal-delay-2 tilt-element">
              <div className="step-number">2</div>
              <h3>Review & Feedback</h3>
              <p>You review the demo and share your feedback for customization.</p>
            </div>
            <div className="process-step reveal reveal-delay-3 tilt-element">
              <div className="step-number">3</div>
              <h3>Launch</h3>
              <p>We finalize and launch your optimized business website.</p>
            </div>
            <div className="process-step reveal reveal-delay-4 tilt-element">
              <div className="step-number">4</div>
              <h3>Grow</h3>
              <p>Start generating leads and watch your customer base expand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE ===== */}
      <section className="showcase-section" id="showcase">
        <div className="container perspective-container">
          <div className="section-header reveal">
            <div className="section-label"><span className="dot"></span> Our Work</div>
            <h2 className="section-title">Built for Your Industry</h2>
            <p className="section-subtitle">See how premium websites look for businesses just like yours.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-card reveal reveal-delay-1 tilt-element">
              <div className="showcase-image">
                <img src="/showcase-electrician.webp" alt="Electrician Website Demo" />
                <div className="showcase-overlay"></div>
              </div>
              <div className="showcase-info">
                <span className="niche-tag"><i className="fa-solid fa-bolt"></i> Electrician</span>
                <h3>PowerFix Electricals</h3>
                <p>Premium website with instant booking and WhatsApp integration.</p>
              </div>
            </div>
            <div className="showcase-card reveal reveal-delay-2 tilt-element">
              <div className="showcase-image">
                <img src="/showcase-ac-repair.webp" alt="AC Repair Website Demo" />
                <div className="showcase-overlay"></div>
              </div>
              <div className="showcase-info">
                <span className="niche-tag"><i className="fa-solid fa-wind"></i> AC Repair</span>
                <h3>CoolCare Services</h3>
                <p>Fast-loading site with service catalog and lead capture forms.</p>
              </div>
            </div>
            <div className="showcase-card reveal reveal-delay-3 tilt-element">
              <div className="showcase-image">
                <img src="/showcase-plumber.webp" alt="Plumber Website Demo" />
                <div className="showcase-overlay"></div>
              </div>
              <div className="showcase-info">
                <span className="niche-tag"><i className="fa-solid fa-wrench"></i> Plumber</span>
                <h3>QuickPipe Plumbing</h3>
                <p>Professional online presence with emergency call-to-action buttons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-card reveal tilt-element">
            <div className="section-label"><span className="dot"></span> Free Demo Website</div>
            <h2 className="section-title">See exactly how your business<br />website could look</h2>
            <p>Before spending a single rupee — get a free demo website tailored to your business niche. No commitment, no pressure.</p>
            <a href="https://wa.me/919999999999?text=Hi%20GrowthGrid%2C%20I%20want%20a%20free%20demo%20website!" className="btn-primary tilt-element" target="_blank" rel="noreferrer">
              Get My Free Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
