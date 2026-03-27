import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Parallax image */}
      <motion.div style={{ position: 'absolute', inset: '-10%', y: imageY }}>
        <img
          src="/images/hero-bg.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </motion.div>

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(26,24,21,0.72) 0%, rgba(26,24,21,0.35) 55%, rgba(26,24,21,0.15) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,24,21,0.5) 0%, transparent 50%)' }} />

      {/* Content */}
      <motion.div
        style={{ position: 'relative', zIndex: 10, padding: '0 72px', maxWidth: 900, y: textY, opacity }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}
        >
          <div style={{ width: 40, height: 1, background: '#B8977A' }} />
          <span className="label-sm" style={{ color: 'rgba(248,245,240,0.7)' }}>Sydney · Est. 2020</span>
        </motion.div>

        {/* Headline */}
        <div style={{ overflow: 'hidden', marginBottom: 8 }}>
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(56px, 7vw, 96px)',
              fontWeight: 300,
              color: '#F8F5F0',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
            }}
          >
            Built for
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 48 }}>
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(56px, 7vw, 96px)',
              fontWeight: 300,
              color: '#F8F5F0',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              fontStyle: 'italic',
            }}
          >
            the finest homes.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: 'rgba(248,245,240,0.65)',
            maxWidth: 480,
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: 48,
            letterSpacing: '0.01em',
          }}
        >
          Premium cladding, composite decking & architectural builds — crafted with precision for Sydney's most discerning homes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a href="#contact" className="btn-primary" style={{ background: '#B8977A' }}>
            <span>Request a Quote</span>
          </a>
          <a href="#projects" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,245,240,0.7)',
            fontWeight: 400,
            display: 'flex', alignItems: 'center', gap: 12,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F8F5F0')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,240,0.7)')}
          >
            <span>View Projects</span>
            <span style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}>→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
          display: 'flex', borderTop: '1px solid rgba(248,245,240,0.1)',
        }}
      >
        {[
          { value: '150+', label: 'Projects Completed' },
          { value: '8+', label: 'Years Experience' },
          { value: '5★', label: 'Google Rating' },
          { value: '100%', label: 'Sydney Based' },
        ].map((stat, i) => (
          <div key={i} style={{
            flex: 1,
            padding: '24px 32px',
            borderRight: i < 3 ? '1px solid rgba(248,245,240,0.1)' : 'none',
            background: 'rgba(26,24,21,0.4)',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: '#F8F5F0', lineHeight: 1 }}>{stat.value}</div>
            <div className="label-sm" style={{ color: 'rgba(248,245,240,0.5)', marginTop: 6 }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: 120, right: 72, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <div style={{ width: 1, height: 48, background: 'rgba(184,151,122,0.6)' }} />
      </motion.div>
    </section>
  )
}
