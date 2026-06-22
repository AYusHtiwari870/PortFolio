const experiences = [
  {
    company: 'GRAS Tech Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: '2024',
    type: 'Internship',
    color: 'var(--accent-blue)',
    points: [
      'Built RESTful APIs using Node.js and Express, integrated with MongoDB for data persistence',
      'Developed responsive React components for client-facing dashboards',
      'Worked with JWT authentication and session management for secure user flows',
      'Collaborated in Agile sprints, participated in code reviews and standups',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
  },
  {
    company: 'Unified Mentor',
    role: 'Frontend Developer Intern',
    period: '2023',
    type: 'Internship',
    color: 'var(--accent-green)',
    points: [
      'Developed pixel-perfect UI components using React and Tailwind CSS',
      'Optimized frontend performance — reduced initial load time by 35%',
      'Integrated REST APIs and managed state with React hooks',
      'Collaborated with designers to implement responsive mobile-first layouts',
    ],
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
  },
  {
    company: 'BBDU — IEEE Student Branch',
    role: 'Vice Chairman',
    period: '2023 – Present',
    type: 'Leadership',
    color: 'var(--accent-orange)',
    points: [
      'Leading technical events, workshops, and hackathons for 200+ members',
      'Organized inter-college coding competitions and AI/ML seminars',
      'Mentored junior students on open-source contributions and placements',
    ],
    tech: ['Leadership', 'Event Management', 'Mentoring'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'rgba(22,27,34,0.4)', borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <p className="section-label">02 — Experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="section-divider" />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '15px', top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-green), var(--accent-orange))',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '56px' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-49px', top: '20px',
                  width: '14px', height: '14px',
                  borderRadius: '50%',
                  background: exp.color,
                  border: '3px solid var(--bg-base)',
                  boxShadow: `0 0 0 3px ${exp.color}40`,
                }} />

                <div style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: '12px',
                  padding: '28px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = exp.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bg-border)'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '12px',
                        color: 'var(--text-muted)', background: 'var(--bg-base)',
                        border: '1px solid var(--bg-border)',
                        padding: '3px 10px', borderRadius: '4px', display: 'block', marginBottom: '6px',
                      }}>{exp.period}</span>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '11px',
                        color: exp.color, background: `${exp.color}15`,
                        border: `1px solid ${exp.color}40`,
                        padding: '2px 8px', borderRadius: '4px',
                      }}>{exp.type}</span>
                    </div>
                  </div>

                  <ul style={{ marginTop: '16px', marginBottom: '20px', paddingLeft: '0', listStyle: 'none' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{
                        color: 'var(--text-secondary)', fontSize: '14px',
                        lineHeight: 1.7, marginBottom: '8px',
                        display: 'flex', gap: '10px',
                      }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '4px' }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {exp.tech.map(t => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '12px',
                        color: 'var(--text-muted)', background: 'var(--bg-base)',
                        border: '1px solid var(--bg-border)',
                        padding: '3px 10px', borderRadius: '4px',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
