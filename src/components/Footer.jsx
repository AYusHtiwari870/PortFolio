export default function Footer() {
  const handleEmailClick = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('sikhartiwari93@gmail.com')
    alert('Email address copied to clipboard: sikhartiwari93@gmail.com 📋')
    window.location.assign('mailto:sikhartiwari93@gmail.com')
  }

  return (
    <footer style={{
      borderTop: '1px solid var(--bg-border)',
      padding: '32px 0',
      background: 'var(--bg-surface)',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <a href="#home" style={{
          fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700,
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-green))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          ayush.dev
        </a>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
          Designed & Built by{' '}
          <span style={{ color: 'var(--accent-blue)' }}>Ayush Tiwari</span>
          {' '}· {new Date().getFullYear()}
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/AYusHtiwari870' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-ayush-tiwari' },
            { label: 'Email', href: 'mailto:sikhartiwari93@gmail.com', onClick: handleEmailClick },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer"
              onClick={l.onClick}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
