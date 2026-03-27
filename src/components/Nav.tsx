import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Services', 'Projects', 'Process', 'Contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 56px',
        height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(250,247,244,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #E2D8CE' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.5s ease',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: '#1C1A18', letterSpacing: '-0.01em' }}>MC</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9A8A7A' }}>Magical Constructions</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: '0.08em', color: '#5C5248', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1C1A18')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5C5248')}
            >{l}</a>
          ))}
          <a href="#contact" style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase',
            padding: '10px 24px', background: '#1C1A18', color: '#FAF7F4',
            transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#3A3530')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1C1A18')}
          >Get a Quote</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(true)} style={{ display: 'none', color: '#1C1A18' }}>
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: '#FAF7F4', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
            <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: 24, right: 56, color: '#1C1A18' }}><X size={20} strokeWidth={1.5} /></button>
            {[...links, 'Quote'].map((l, i) => (
              <motion.a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 400, color: '#1C1A18' }}>
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
