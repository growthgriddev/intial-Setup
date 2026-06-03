export default function PrivacyPolicy() {
  return (
    <div className="container perspective-container" style={{ paddingTop: '120px', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <div className="section-header reveal visible tilt-element">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="tilt-element" style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)', marginTop: '40px', lineHeight: '1.8' }}>
        <h2>1. Information We Collect</h2>
        <p>We only collect information that you voluntarily provide to us via our contact forms, such as your name, email address, and any messages you send.</p>
        
        <h2 style={{ marginTop: '20px' }}>2. How We Use Information</h2>
        <p>The information we collect is used solely to respond to your inquiries and provide you with the services requested. We do not sell or rent your personal information to third parties.</p>
        
        <h2 style={{ marginTop: '20px' }}>3. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
        
        <h2 style={{ marginTop: '20px' }}>4. Contact Us</h2>
        <p>If there are any questions regarding this privacy policy, you may contact us using the information on our Contact page.</p>
      </div>
    </div>
  );
}
