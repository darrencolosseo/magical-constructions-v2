import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  { q: "The composite deck they built is extraordinary. Neighbours stop us to ask about it constantly.", name: 'James D.', location: 'Harrington Park' },
  { q: "Professional, precise and genuinely proud of their craft. Couldn't recommend more highly.", name: 'Sarah M.', location: 'Northwood' },
  { q: "They transformed our outdoor space completely. The alfresco kitchen is better than we imagined.", name: 'Michael T.', location: 'Baulkham Hills' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI(c => (c + 1) % quotes.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section style={{ background: '#FFFFFF', borderTop: '1px solid #E2D8CE', padding: '120px 56px', textAlign: 'center' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="label-sm" style={{ marginBottom: 48 }}>Client Testimonials</div>

      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div key={i}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 400, fontStyle: 'italic',
              color: '#1C1A18', lineHeight: 1.55, letterSpacing: '-0.01em', marginBottom: 40,
            }}>"{quotes[i].q}"</p>
            <div style={{ width: 32, height: 1, background: '#C4A882', margin: '0 auto 20px' }} />
            <div style={{ fontFamily: "'Inter'", fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1C1A18' }}>{quotes[i].name}</div>
            <div className="label-sm" style={{ marginTop: 4 }}>{quotes[i].location}</div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {quotes.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} style={{
              width: 6, height: 6, borderRadius: '50%',
              background: idx === i ? '#1C1A18' : '#E2D8CE',
              border: 'none', transition: 'background 0.3s', padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}
