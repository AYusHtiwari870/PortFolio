import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [emailCopied, setEmailCopied] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleEmailClick = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('sikhartiwari93@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2500)
    
    // Try launching the mail client in the background
    window.location.assign('mailto:sikhartiwari93@gmail.com')
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')

    try {
      // Get a free access key instantly at https://web3forms.com
      // Replace the placeholder below with your key to start receiving form messages directly in your email!
      const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'

      if (accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        // If no key is set yet, we simulate a successful send for testing purposes
        await new Promise(r => setTimeout(r, 1200))
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        })

        const data = await response.json()
        if (data.success) {
          setStatus('sent')
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus('error')
        }
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }

    setTimeout(() => setStatus(null), 4000)
  }

  const contactLinks = [
    { 
      label: 'Email', 
      value: emailCopied ? 'Copied to clipboard! 📋' : 'sikhartiwari93@gmail.com', 
      href: 'mailto:sikhartiwari93@gmail.com', 
      icon: '✉',
      onClick: handleEmailClick
    },
    { label: 'LinkedIn', value: 'linkedin.com/in/-ayush-tiwari', href: 'https://www.linkedin.com/in/-ayush-tiwari', icon: '⬡' },
    { label: 'GitHub', value: 'github.com/AYusHtiwari870', href: 'https://github.com/AYusHtiwari870', icon: '◈' },
    { label: 'Location', value: 'Lucknow, Uttar Pradesh', href: null, icon: '◎' },
  ]

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-base)',
    border: '1px solid var(--bg-border)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="container">
        <p className="section-label">05 — Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          {/* Left: Info */}
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '15px', marginBottom: '40px' }}>
              I&apos;m currently open to full-time opportunities as a{' '}
              <span style={{ color: 'var(--accent-blue)' }}>Java Software Engineer</span>,{' '}
              <span style={{ color: 'var(--accent-green)' }}>Full Stack Developer</span>, or{' '}
              <span style={{ color: '#A371F7' }}>AI/ML Engineer</span>.
              Whether you have a question, an opportunity, or just want to say hi — my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactLinks.map(link => (
                <div key={link.label} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bg-border)'}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '16px',
                    color: 'var(--accent-blue)', width: '24px', textAlign: 'center',
                  }}>{link.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                      {link.label}
                    </div>
                    {link.href ? (
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        onClick={link.onClick}
                        style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                        {link.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{link.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Your Name
                </label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                  onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  name="email" value={form.email} onChange={handleChange}
                  placeholder="john@company.com"
                  type="email"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                  onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Message
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Hi Ayush, I'd like to discuss..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                  onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-orange)' }}>
                  ⚠ Please fill all fields.
                </p>
              )}
              {status === 'sent' && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-green)' }}>
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}

              <button onClick={handleSubmit} disabled={status === 'sending'}
                style={{
                  background: status === 'sending' ? 'var(--bg-border)' : 'var(--accent-blue)',
                  color: status === 'sending' ? 'var(--text-muted)' : '#0D1117',
                  border: 'none', borderRadius: '8px',
                  padding: '13px 28px',
                  fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => { if (status !== 'sending') e.target.style.background = '#79bbff' }}
                onMouseLeave={e => { if (status !== 'sending') e.target.style.background = 'var(--accent-blue)' }}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
