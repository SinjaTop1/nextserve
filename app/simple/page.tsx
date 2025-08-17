export default function SimplePage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>NextServe - Simple Test</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        🚀 Turn Your Veterinary Practice Into a Predictable, Profitable Business
      </p>
      <p style={{ marginBottom: '30px' }}>
        We help veterinary clinics create reliable recurring revenue, attract new clients, 
        and cut admin time in half — with just 2–3 hours of your time to get started.
      </p>
      <a 
        href="mailto:info@nextserve.com" 
        style={{ 
          backgroundColor: '#10b981', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Book Free Call
      </a>
    </div>
  )
}
