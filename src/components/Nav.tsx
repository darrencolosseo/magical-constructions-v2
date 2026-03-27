import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '18px 48px' : '28px 48px',
          background: scrolled ? 'rgba(248,245,240,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,24,21,0.06)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: scrolled ? '#1A1815' : '#F8F5F0', letterSpacing: '0.02em', transition: 'color 0.4s ease' }}>MC</span>
          <span style={{ width: 1, height: 18, background: scrolled ? 'rgba(26,24,21,0.2)' : 'rgba(248,245,240,0.3)', transition: 'background 0.4s ease' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: scrolled ? '#6B5E52' : 'rgba(248,245,240,0.7)', transition: 'color 0.4s ease' }}>Magical Constructions</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: scrolled ? '#4A3F35' : 'rgba(248,245,240,0.85)',
                fontWeight: 400,
                position: 'relative',
                paddingBottom: 2,
                transition: 'color 0.4s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget.querySelector('.link-line') as HTMLElement
                if (el) el.style.transform = 'scaleX(1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget.querySelector('.link-line') as HTMLElement
                if (el) el.style.transform = 'scaleX(0)'
              }}
            >
              {link.label}
              <span className="link-line" style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: '#B8977A', transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
              }} />
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '12px 28px', background: scrolled ? '#1A1815' : 'rgba(248,245,240,0.15)', border: scrolled ? 'none' : '1px solid rgba(248,245,240,0.5)', backdropFilter: scrolled ? 'none' : 'blur(4px)', transition: 'all 0.4s ease' }}>
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
          className="hamburger"
          aria-label="Menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ display: 'block', width: 22, height: 1, background: scrolled ? '#1A1815' : '#F8F5F0', transformOrigin: 'center', transition: 'background 0.4s ease' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: 'block', width: 22, height: 1, background: scrolled ? '#1A1815' : '#F8F5F0', transition: 'background 0.4s ease' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ display: 'block', width: 22, height: 1, background: scrolled ? '#1A1815' : '#F8F5F0', transformOrigin: 'center', transition: 'background 0.4s ease' }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: '#F8F5F0', zIndex: 99,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 40,
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 36,
                  fontWeight: 400,
                  color: '#1A1815',
                  letterSpacing: '0.02em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="btn-primary"
            >
              <span>Get a Quote</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
