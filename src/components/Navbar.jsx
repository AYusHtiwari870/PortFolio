import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--bg-border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '16px 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '18px',
          fontWeight: 700,
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-green))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Ayush.dev
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', alignItems: 'center' }}
            className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/Ayush_Tiwari_Resume.pdf" target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--accent-blue)',
                border: '1px solid var(--accent-blue)',
                padding: '6px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.background = 'rgba(88,166,255,0.1)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent' }}>
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          className="mobile-menu-btn" aria-label="Toggle menu">
          <div style={{ width: 22, height: 2, background: 'var(--text-primary)', marginBottom: 5, borderRadius: 2, transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: 'var(--text-primary)', marginBottom: 5, borderRadius: 2,
            opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
          <div style={{ width: 22, height: 2, background: 'var(--text-primary)', borderRadius: 2, transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--bg-border)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                padding: '12px 0',
                borderBottom: '1px solid var(--bg-border)',
              }}>
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '16px' }}>
            <a href="/Ayush_Tiwari_Resume.pdf" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: 'var(--accent-blue)',
                border: '1px solid var(--accent-blue)',
                padding: '10px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.target.style.background = 'rgba(88,166,255,0.1)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent' }}>
              Resume
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
