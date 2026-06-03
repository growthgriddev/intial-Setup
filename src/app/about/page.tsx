import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container perspective-container" style={{ paddingTop: '120px', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <div className="section-header reveal visible tilt-element">
        <div className="section-label"><span className="dot"></span> Our Story</div>
        <h1 className="section-title">About GrowthGrid</h1>
      </div>

      <div className="tilt-element" style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)', marginTop: '40px' }}>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
          At GrowthGrid, we believe that every local business deserves a world-class online presence. We started with a simple mission: to bridge the gap between traditional service businesses and modern digital consumers.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
          Our team specializes in creating stunning, conversion-optimized websites that don't just look good—they actually turn local searches into paying customers. By integrating powerful tools like WhatsApp Lead Capture and automated follow-ups, we give you the growth systems you need to scale.
        </p>
        <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Why We Are Different</h3>
        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Speed & Quality:</strong> We deliver premium 3D aesthetics that wow your customers.</li>
          <li><strong>Zero Friction:</strong> Our WhatsApp integration ensures leads never drop off.</li>
          <li><strong>Transparent Process:</strong> You get a free demo website before paying a single rupee.</li>
        </ul>

        <div style={{ marginTop: '40px' }}>
          <Link href="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
}
