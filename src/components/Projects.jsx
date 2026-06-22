const projects = [
  {
    title: 'Physiqo',
    subtitle: 'AI-Powered Fitness Web App',
    description: 'Personalized fitness app with dual AI integration (Gemini + OpenAI with fallback). Features workout generation, body metrics tracking, JWT auth, and real-time AI coaching.',
    tech: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Python', 'MongoDB', 'Gemini', 'OpenAI'],
    github: 'https://github.com/',
    live: '#',
    featured: true,
    tag: '🏋️ Final Year Project',
  },
  {
    title: 'AI Interview Prep Portal',
    subtitle: 'Interactive Quiz Platform',
    description: 'Built a React-based interactive quiz platform covering Java, Spring Boot, DSA, and ML concepts for placement preparation.',
    tech: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/',
    live: '#',
    featured: false,
    tag: '📚 Tool',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'MERN Stack Full-Stack App',
    description: 'Full-stack e-commerce app with product listing, cart, order management, Stripe payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/',
    live: '#',
    featured: false,
    tag: '🛒 Full Stack',
  },
  {
    title: 'Real-Time Chat App',
    subtitle: 'WebSocket-Based Messaging',
    description: 'Real-time messaging app with WebSocket support, rooms, online user tracking, and message history persistence.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/',
    live: '#',
    featured: false,
    tag: '💬 Real-time',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'rgba(22,27,34,0.4)', borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <p className="section-label">04 — Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              background: 'var(--bg-surface)',
              border: `1px solid ${proj.featured ? 'rgba(88,166,255,0.4)' : 'var(--bg-border)'}`,
              borderRadius: '12px',
              padding: '28px',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.2s, border-color 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              if (!proj.featured) e.currentTarget.style.borderColor = 'rgba(88,166,255,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              if (!proj.featured) e.currentTarget.style.borderColor = 'var(--bg-border)'
            }}>
              {proj.featured && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-green))',
                }} />
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--text-muted)',
                  background: 'var(--bg-base)',
                  border: '1px solid var(--bg-border)',
                  padding: '3px 8px', borderRadius: '4px',
                }}>{proj.tag}</span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)',
                      transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                    GitHub ↗
                  </a>
                  <a href={proj.live} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)',
                      transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-green)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                    Live ↗
                  </a>
                </div>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {proj.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-blue)', marginBottom: '12px' }}>
                {proj.subtitle}
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1, marginBottom: '20px' }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {proj.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-base)',
                    border: '1px solid var(--bg-border)',
                    padding: '2px 8px', borderRadius: '3px',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '14px',
              color: 'var(--accent-blue)',
              border: '1px solid var(--accent-blue)',
              padding: '10px 28px', borderRadius: '8px',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(88,166,255,0.1)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}>
            View All on GitHub →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
