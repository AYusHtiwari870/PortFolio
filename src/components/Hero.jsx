import { useState, useEffect } from 'react'

const roles = [
  'Full Stack Developer',
  'Java Backend Engineer',
  'AI/ML Enthusiast',
  'React Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(c => !c), 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex(i => (i + 1) % roles.length)
      }, 200)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '60%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(63,185,80,0.06) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        {/* Terminal greeting */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--accent-green)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ color: 'var(--accent-orange)' }}>▶</span>
          <span>Hello World! I&apos;m</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '16px',
          letterSpacing: '-1px',
        }}>
          Ayush Tiwari
        </h1>

        {/* Terminal typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(18px, 3vw, 28px)',
          color: 'var(--text-secondary)',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span style={{ color: 'var(--accent-blue)' }}>&gt; </span>
          <span style={{ color: 'var(--text-primary)' }}>{displayed}</span>
          <span style={{
            display: 'inline-block', width: '2px', height: '1.2em',
            background: 'var(--accent-blue)',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s',
            marginLeft: '1px', verticalAlign: 'middle',
          }} />
        </div>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '520px',
          lineHeight: 1.8,
          marginBottom: '40px',
        }}>
          Final-year B.Tech CSE (AI) student at BBDU Lucknow. Building scalable full-stack apps
          and AI-powered solutions. Vice Chairman, IEEE Student Branch.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--accent-blue)',
            color: '#0D1117',
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: '8px',
            transition: 'all 0.2s',
            border: '1px solid var(--accent-blue)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#79bbff'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-blue)'}>
            View Projects →
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            fontWeight: 500,
            padding: '12px 28px',
            borderRadius: '8px',
            transition: 'all 0.2s',
            border: '1px solid var(--bg-border)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bg-border)'; e.currentTarget.style.color = 'var(--text-primary)' }}>
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '48px' }}>
          {[
            { label: 'GitHub', url: 'https://github.com/AYusHtiwari870', icon: 'GH' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/-ayush-tiwari', icon: 'LI' },
          ].map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                display: 'flex', alignItems: 'center', gap: '6px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-blue)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <span style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: '4px',
                padding: '3px 7px',
                fontSize: '11px',
              }}>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
