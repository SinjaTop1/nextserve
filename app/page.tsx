'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ email: '', name: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mldaleje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          name: formData.name.trim() || 'Anonymous',
          _subject: 'NextServe Waitlist Signup',
          timestamp: new Date().toISOString()
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }
      
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
    if (!isMounted) return

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
  }, [isMounted])

  if (!isMounted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#fafbfc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <>
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
                  autoComplete="email"
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
                  autoComplete="name"
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
