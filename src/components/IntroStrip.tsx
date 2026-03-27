import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function IntroStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} style={{ padding: '120px 72px', background: '#F8F5F0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative number */}
      <div style={{
        position: 'absolute', right: 72, top: '50%', transform: 'translateY(-50%)',
        fontFamily: "'Cormorant Garamond', serif", fontSize: 200, fontWeight: 300,
        color: 'rgba(26,24,21,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>
        MC
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {/* Line above */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: 1, height: 60, background: '#B8977A', margin: '0 auto 48px', transformOrigin: 'top' }}
        />

        <div style={{ overflow: 'hidden', marginBottom: 8 }}>
          <motion.p
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#1A1815',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
            }}
          >
            "Every project is approached as if it's our own home —
          </motion.p>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 56 }}>
          <motion.p
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#1A1815',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
            }}
          >
            with honesty, precision, and pride in every finish."
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}
        >
          <div style={{ width: 32, height: 1, background: '#B8977A' }} />
          <span className="label-sm">Darren, Founder — Magical Constructions</span>
          <div style={{ width: 32, height: 1, background: '#B8977A' }} />
        </motion.div>
      </div>
    </section>
  )
}
