'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ email: '', name: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Waitlist signup:', {
        email: formData.email.trim(),
        name: formData.name.trim() || 'Anonymous',
        timestamp: new Date().toISOString()
      })
      
      setShowSuccess(true)
      setFormData({ email: '', name: '' })
      
      setTimeout(() => {
        setIsSubmitting(false)
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.benefit-card, .waitlist-section')
    elements.forEach(element => observer.observe(element))

    return () => {
      elements.forEach(element => observer.unobserve(element))
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --primary-color: #667eea;
          --accent-color: #f5576c;
          --text-dark: #1a202c;
          --text-medium: #4a5568;
          --text-light: #718096;
          --bg-white: #ffffff;
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.08);
          --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.12);
          --shadow-xl: 0 24px 64px rgba(0, 0, 0, 0.16);
          --border-radius: 24px;
          --border-radius-lg: 32px;
          --border-radius-sm: 16px;
          --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.7;
          color: var(--text-dark);
          background: #fafbfc;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          background: var(--primary-gradient);
          padding: 100px 24px 140px;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -15%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 25s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite reverse;
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: particle-float 15s infinite ease-in-out;
        }

        .particle:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 20s;
        }

        .particle:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 60%;
          left: 80%;
          animation-delay: 3s;
          animation-duration: 18s;
        }

        .particle:nth-child(3) {
          width: 100px;
          height: 100px;
          top: 40%;
          left: 70%;
          animation-delay: 6s;
          animation-duration: 22s;
        }

        .particle:nth-child(4) {
          width: 50px;
          height: 50px;
          top: 80%;
          left: 20%;
          animation-delay: 9s;
          animation-duration: 16s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -30px) scale(1.05) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.95) rotate(240deg); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.15; }
          25% { transform: translateY(-40px) translateX(20px) scale(1.1); opacity: 0.25; }
          50% { transform: translateY(-80px) translateX(-20px) scale(0.9); opacity: 0.15; }
          75% { transform: translateY(-40px) translateX(20px) scale(1.05); opacity: 0.2; }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-icon {
          font-size: 80px;
          margin-bottom: 32px;
          animation: fadeInUp 0.8s ease-out;
          display: inline-block;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          color: var(--bg-white);
          margin-bottom: 24px;
          position: relative;
          letter-spacing: -0.03em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          animation: fadeInUp 0.8s ease-out 0.2s both;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--bg-white);
          max-width: 800px;
          margin: 0 auto 40px;
          opacity: 0.95;
          font-weight: 400;
          line-height: 1.8;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .main-content {
          background: transparent;
          margin: -80px auto 0;
          max-width: 1200px;
          position: relative;
          z-index: 2;
        }

        .waitlist-section {
          background: var(--bg-white);
          padding: 64px 48px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-xl);
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
        }

        .waitlist-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: var(--accent-gradient);
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .waitlist-form {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 12px;
          font-size: 1rem;
        }

        .form-input {
          width: 100%;
          padding: 18px 24px;
          border: 2px solid #e2e8f0;
          border-radius: var(--border-radius-sm);
          font-size: 1rem;
          font-family: inherit;
          transition: var(--transition-fast);
          background: var(--bg-white);
          color: var(--text-dark);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-input::placeholder {
          color: var(--text-light);
        }

        .submit-button {
          width: 100%;
          padding: 20px 48px;
          background: var(--accent-gradient);
          color: var(--bg-white);
          border: none;
          border-radius: var(--border-radius-sm);
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 12px 40px rgba(245, 87, 108, 0.4);
          position: relative;
          overflow: hidden;
          margin-top: 8px;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(245, 87, 108, 0.5);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          display: ${showSuccess ? 'block' : 'none'};
          background: var(--success-gradient);
          color: var(--bg-white);
          padding: 32px;
          border-radius: var(--border-radius-sm);
          text-align: center;
          margin-top: 24px;
          font-weight: 600;
          font-size: 1.125rem;
          box-shadow: var(--shadow-md);
          animation: fadeInUp 0.5s ease-out;
        }

        .success-icon {
          font-size: 48px;
          margin-bottom: 16px;
          display: block;
        }

        .benefits-section {
          padding: 80px 24px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 20px;
          color: var(--text-dark);
          letter-spacing: -0.03em;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 5px;
          background: var(--primary-gradient);
          border-radius: 10px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-medium);
          font-size: 1.25rem;
          max-width: 750px;
          margin: 32px auto 64px;
          font-weight: 400;
          line-height: 1.9;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 56px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .benefit-card {
          background: var(--bg-white);
          padding: 48px 32px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          border: 1px solid rgba(0, 0, 0, 0.04);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary-gradient);
          transform: scaleX(0);
          transition: var(--transition);
        }

        .benefit-card:hover::before {
          transform: scaleX(1);
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .benefit-icon {
          font-size: 56px;
          margin-bottom: 24px;
          display: block;
        }

        .benefit-title {
          font-weight: 700;
          font-size: 1.375rem;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .benefit-text {
          color: var(--text-light);
          font-size: 1.0625rem;
          line-height: 1.8;
        }

        .value-section {
          background: var(--primary-gradient);
          padding: 80px 24px;
          color: var(--bg-white);
          margin-top: 80px;
          border-radius: var(--border-radius-lg);
          position: relative;
          overflow: hidden;
        }

        .value-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .value-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .value-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 32px;
          text-align: center;
          line-height: 1.2;
        }

        .value-text {
          font-size: 1.25rem;
          line-height: 1.9;
          text-align: center;
          opacity: 0.95;
          margin-bottom: 40px;
        }

        .value-highlight {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 32px;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.3);
          text-align: center;
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .footer {
          background: linear-gradient(135deg, var(--text-dark) 0%, #0f1419 100%);
          color: var(--bg-white);
          padding: 64px 40px 48px;
          text-align: center;
          margin-top: 80px;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          line-height: 2;
          margin-bottom: 12px;
        }

        .footer-text a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-text a:hover {
          color: rgba(255, 255, 255, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out;
        }

        @media (max-width: 1024px) {
          .hero {
            min-height: 550px;
            padding: 80px 24px 120px;
          }
          .hero-title {
            font-size: 3.25rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .particle {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 500px;
            padding: 64px 20px 100px;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
          .hero-icon {
            font-size: 64px;
            margin-bottom: 24px;
          }
          .section-title {
            font-size: 2.25rem;
          }
          .section-subtitle {
            font-size: 1.125rem;
            margin: 24px auto 48px;
          }
          .waitlist-section {
            padding: 48px 32px;
          }
          .benefits-section {
            padding: 64px 20px;
          }
          .value-section {
            padding: 64px 24px;
          }
          .value-title {
            font-size: 2rem;
          }
          .value-text {
            font-size: 1.125rem;
          }
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero {
            min-height: 100vh;
            min-height: 100dvh;
            padding: 48px 20px 64px;
          }
          .hero-title {
            font-size: 2rem;
            line-height: 1.2;
            margin-bottom: 20px;
          }
          .hero-subtitle {
            font-size: 1.125rem;
            line-height: 1.65;
          }
          .hero-icon {
            font-size: 56px;
          }
          .waitlist-section {
            padding: 40px 24px;
            margin-bottom: 64px;
          }
          .section-title {
            font-size: 2rem;
          }
          .benefits-section {
            padding: 56px 20px;
          }
          .value-section {
            padding: 56px 20px;
          }
          .value-title {
            font-size: 1.75rem;
          }
          .form-input,
          .submit-button {
            padding: 16px 20px;
            font-size: 1rem;
          }
        }
      `}</style>

      <header className="hero">
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-icon">🐾</div>
          <h1 className="hero-title">
            Keep Your Pet Healthy.<br />
            Save Money.<br />
            Save Other Animals.
          </h1>
          <p className="hero-subtitle">
            All-in-one vet care subscription. Preventive care that protects your pet while helping shelter pets get the care they need.
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="waitlist-section">
          <div className="waitlist-form">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px', color: 'var(--text-dark)' }}>
              Join the Waitlist
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-medium)', marginBottom: '40px', fontSize: '1.125rem' }}>
              Be the first to know when this revolutionary model arrives at your vet
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name (Optional)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            
            {showSuccess && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <div>Thank you for joining! We&apos;ll notify you as soon as this service becomes available at your vet.</div>
              </div>
            )}
          </div>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">What&apos;s Included</h2>
          <p className="section-subtitle">
            One subscription. Everything your pet needs. All focused on preventing problems before they start.
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">✂️</span>
              <h3 className="benefit-title">Grooming & Care</h3>
              <p className="benefit-text">
                Professional grooming, regular vet visits, loyalty rewards, and exclusive discounts—all in one place.
              </p>
            </div>
            
            <div className="benefit-card">
              <span className="benefit-icon">🛡️</span>
              <h3 className="benefit-title">Preventive Focus</h3>
              <p className="benefit-text">
                Catch health issues early. Prevent costly emergencies. Save your pet and your wallet.
              </p>
            </div>
            
            <div className="benefit-card">
              <span className="benefit-icon">❤️</span>
              <h3 className="benefit-title">Help Others</h3>
              <p className="benefit-text">
                A portion of every subscription goes to vet care for shelter pets. See the impact you&apos;re making.
              </p>
            </div>
          </div>
        </section>

        <section className="value-section" style={{ marginTop: 0 }}>
          <div className="value-content">
            <h2 className="value-title">Your Pet. Their Health. Our Mission.</h2>
            <p className="value-text">
              When you subscribe, you&apos;re not just caring for your pet—you&apos;re helping shelter pets get the veterinary care they need. A portion of every subscription goes directly to vet care for shelter animals.
            </p>
            <div className="value-highlight">
              <strong>Stay connected.</strong> Receive in-depth updates showing exactly which pets received care thanks to you. Visit the shelters yourself—we&apos;ll guide you through everything if you&apos;d like to see your impact firsthand.
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: 'rgba(255, 255, 255, 0.9)' }}>
            NextServe
          </div>
          <div className="footer-text">
            <a href="mailto:nextserveagency@gmail.com">nextserveagency@gmail.com</a>
          </div>
          <div className="footer-text" style={{ marginTop: '24px', opacity: 0.5, fontSize: '0.875rem' }}>
            © 2024 NextServe. All rights reserved.
          </div>
          <div className="footer-text" style={{ marginTop: '8px', opacity: 0.5, fontSize: '0.875rem' }}>
            We respect your privacy. Your information will only be used to notify you about service availability.
          </div>
        </div>
      </footer>
    </>
  )
}
