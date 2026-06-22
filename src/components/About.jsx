export default function About() {
  const stats = [
    { value: '2+', label: 'Internships' },
    { value: '5+', label: 'Projects' },
    { value: '2026', label: 'Graduating' },
    { value: 'IEEE', label: 'Vice Chairman' },
  ]

  return (
    <section id="about" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Text */}
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px', fontSize: '15px' }}>
              I&apos;m a final-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence
              at Babu Banarasi Das University, Lucknow. I love building things that live on the internet —
              from interactive frontends to scalable backend systems.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px', fontSize: '15px' }}>
              I&apos;ve completed internships at <span style={{ color: 'var(--accent-blue)' }}>Unified Mentor</span> (Frontend)
              and <span style={{ color: 'var(--accent-blue)' }}>GRAS Tech Pvt. Ltd.</span> (Full Stack), where I worked
              with React, Node.js, and REST APIs in production environments.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '15px' }}>
              Outside of code, I serve as <span style={{ color: 'var(--accent-green)' }}>Vice Chairman</span> of the
              IEEE Student Branch at BBDU, where I organize technical workshops and hackathons.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['Java', 'React', 'Python', 'FastAPI', 'MongoDB', 'AWS'].map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--accent-green)',
                  background: 'rgba(63,185,80,0.08)',
                  border: '1px solid rgba(63,185,80,0.2)',
                  padding: '4px 12px',
                  borderRadius: '4px',
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Stats & terminal card */}
          <div>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '24px',
            }}>
              {/* Terminal title bar */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '10px 16px',
                borderBottom: '1px solid var(--bg-border)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                ))}
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                  about.json
                </span>
              </div>
              <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 2 }}>
                <div><span style={{ color: 'var(--text-muted)' }}>{'{'}</span></div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>"name"</span>
                  <span style={{ color: 'var(--text-muted)' }}>: </span>
                  <span style={{ color: 'var(--accent-green)' }}>"Ayush Tiwari"</span><span style={{ color: 'var(--text-muted)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>"role"</span>
                  <span style={{ color: 'var(--text-muted)' }}>: </span>
                  <span style={{ color: 'var(--accent-green)' }}>"Full Stack Developer"</span><span style={{ color: 'var(--text-muted)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>"university"</span>
                  <span style={{ color: 'var(--text-muted)' }}>: </span>
                  <span style={{ color: 'var(--accent-green)' }}>"BBDU Lucknow"</span><span style={{ color: 'var(--text-muted)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>"specialization"</span>
                  <span style={{ color: 'var(--text-muted)' }}>: </span>
                  <span style={{ color: 'var(--accent-green)' }}>"AI/ML"</span><span style={{ color: 'var(--text-muted)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>"openToWork"</span>
                  <span style={{ color: 'var(--text-muted)' }}>: </span>
                  <span style={{ color: 'var(--accent-blue)' }}>true</span>
                </div>
                <div><span style={{ color: 'var(--text-muted)' }}>{'}'}</span></div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--accent-blue)',
                    marginBottom: '4px',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
