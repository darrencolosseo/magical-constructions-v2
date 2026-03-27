import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'grid', gridTemplateColumns: '60fr 40fr', overflow: 'hidden', position: 'relative' }}>
      {/* Left: full-height image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/images/hero-bg.jpg"
          alt="Magical Constructions — Premium Sydney Builder"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Subtle dark overlay only at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(28,26,24,0.5) 0%, transparent 100%)' }} />
        {/* Caption bottom left */}
        <div style={{ position: 'absolute', bottom: 40, left: 48, color: '#FAF7F4' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>
            Northwood, Sydney · Aluminium Batten Facade
          </span>
        </div>
      </div>

      {/* Right: content panel */}
      <div style={{
        background: '#FAF7F4',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 64px',
        borderLeft: '1px solid #E2D8CE',
        position: 'relative',
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <div className="label-sm" style={{ marginBottom: 24 }}>Sydney · Est. 2020</div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 4vw, 60px)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: '#1C1A18',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            Crafted<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>for the finest</em><br />
            Sydney homes.
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 300,
            color: '#6B5E52', lineHeight: 1.75, maxWidth: 340, marginBottom: 48,
          }}>
            Premium composite decking, cladding & architectural builds — delivered with meticulous attention to every detail.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#contact" style={{
              display: 'inline-block', background: '#1C1A18', color: '#FAF7F4',
              padding: '16px 32px', fontFamily: "'Inter'", fontSize: 11, fontWeight: 400,
              letterSpacing: '0.18em', textTransform: 'uppercase', alignSelf: 'flex-start',
              transition: 'background 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3A3530')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1C1A18')}
            >Request a Quote</a>

            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: "'Inter'", fontSize: 11, fontWeight: 400, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: '#9A8A7A',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1C1A18')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A8A7A')}
            >View Our Work →</a>
          </div>
        </motion.div>

        {/* Bottom: stat strip */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', borderTop: '1px solid #E2D8CE', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {[['150+', 'Projects'], ['5★', 'Google Rated']].map(([n, l], i) => (
            <div key={l} style={{
              padding: '20px 32px',
              borderLeft: i > 0 ? '1px solid #E2D8CE' : 'none',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 500, color: '#1C1A18' }}>{n}</div>
              <div className="label-sm" style={{ marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
