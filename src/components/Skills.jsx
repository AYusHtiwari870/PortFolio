const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    color: 'var(--accent-blue)',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
  },
  {
    title: 'Frontend',
    icon: '◈',
    color: 'var(--accent-green)',
    skills: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux'],
  },
  {
    title: 'Backend',
    icon: '⚙',
    color: 'var(--accent-orange)',
    skills: ['Node.js', 'Express', 'FastAPI', 'Spring Boot', 'REST APIs', 'JWT'],
  },
  {
    title: 'AI / ML',
    icon: '◆',
    color: '#A371F7',
    skills: ['TensorFlow', 'Scikit-learn', 'OpenAI API', 'Gemini API', 'Pandas', 'NumPy'],
  },
  {
    title: 'Database',
    icon: '⊞',
    color: 'var(--accent-blue)',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    icon: '⬡',
    color: 'var(--accent-green)',
    skills: ['Docker', 'AWS', 'Git', 'GitHub', 'Postman', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <p className="section-label">03 — Skills</p>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {skillCategories.map((cat, i) => (
            <div key={i} style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--bg-border)',
              borderRadius: '12px',
              padding: '24px',
              transition: 'transform 0.2s, border-color 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.borderColor = cat.color
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'var(--bg-border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  color: cat.color,
                }}>{cat.icon}</span>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{cat.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-base)',
                    border: '1px solid var(--bg-border)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.target.style.color = cat.color
                    e.target.style.borderColor = cat.color
                    e.target.style.background = `${cat.color}10`
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = 'var(--text-secondary)'
                    e.target.style.borderColor = 'var(--bg-border)'
                    e.target.style.background = 'var(--bg-base)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
