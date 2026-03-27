import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', title: 'Free Consultation', desc: 'We visit your site, understand your vision and discuss your budget — no obligations, no fees.' },
  { num: '02', title: 'Detailed Quote', desc: 'A comprehensive, itemised quote delivered within 48 hours. No hidden costs, no surprises.' },
  { num: '03', title: 'Precision Build', desc: 'Our experienced tradespeople execute with meticulous attention to detail and daily communication.' },
  { num: '04', title: 'Final Handover', desc: 'A thorough walkthrough, complete documentation, and ongoing support after completion.' },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{ padding: '140px 72px', background: '#F2EDE6' }}>
      <div ref={ref} style={{ marginBottom: 80 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}
        >
          <div style={{ width: 32, height: 1, background: '#B8977A' }} />
          <span className="label-sm">How We Work</span>
        </motion.div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(42px, 5vw, 68px)',
              fontWeight: 300,
              color: '#1A1815',
              lineHeight: 1.1,
            }}
          >
            From first call<br /><em>to final finish.</em>
          </motion.h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
        {/* Connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', top: 28, left: '12.5%', right: '12.5%',
            height: 1, background: '#B8977A', transformOrigin: 'left', zIndex: 0,
          }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '0 40px 0 0', position: 'relative' }}
          >
            {/* Step circle */}
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              border: '1px solid #B8977A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 40, background: '#F2EDE6',
              position: 'relative', zIndex: 1,
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 400, color: '#B8977A' }}>{step.num}</span>
            </div>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              fontWeight: 400,
              color: '#1A1815',
              marginBottom: 16,
              lineHeight: 1.2,
            }}>{step.title}</h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: '#6B5E52',
              fontWeight: 300,
              lineHeight: 1.75,
            }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
