export default function TermsOfService() {
  return (
    <div className="container perspective-container" style={{ paddingTop: '120px', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <div className="section-header reveal visible tilt-element">
        <h1 className="section-title">Terms of Service</h1>
        <p className="section-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="tilt-element" style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)', marginTop: '40px', lineHeight: '1.8' }}>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing our website and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2 style={{ marginTop: '20px' }}>2. Services Provided</h2>
        <p>GrowthGrid provides web development, SEO, and digital growth services for local businesses. Specific deliverables will be outlined in individual client agreements.</p>
        
        <h2 style={{ marginTop: '20px' }}>3. User Responsibilities</h2>
        <p>You agree to use our site for lawful purposes only. You must not use our site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
        
        <h2 style={{ marginTop: '20px' }}>4. Modifications</h2>
        <p>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these page periodically.</p>
      </div>
    </div>
  );
}
