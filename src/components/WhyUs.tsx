import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Camera, MapPin, Layers } from 'lucide-react'

const pillars = [
  { icon: Award, title: 'Every job like our own home', desc: 'We apply the same standard of care and craftsmanship to your project that we would apply to our own.' },
  { icon: Camera, title: 'Real photos, real results', desc: 'Every image on this site is from an actual Magical Constructions project. No stock. No staging.' },
  { icon: MapPin, title: 'Sydney-based, always available', desc: 'Our entire team is local. We respond fast, communicate clearly, and show up when we say we will.' },
  { icon: Layers, title: 'Full project management', desc: 'We handle everything from council checks to final inspection. You stay informed at every step.' },
]

function Pillar({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const Icon = pillar.icon
  const colRef = useRef(null)
  const colInView = useInView(colRef, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={colRef}
      initial={{ opacity: 0, y: 30 }}
      animate={colInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRight: index < 3 ? '1px solid rgba(26,24,21,0.07)' : 'none',
        paddingRight: index < 3 ? 48 : 0,
        paddingLeft: index > 0 ? 48 : 0,
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <Icon size={20} strokeWidth={1.2} color="#B8977A" />
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: '#1A1815', marginBottom: 16, lineHeight: 1.3 }}>{pillar.title}</h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B5E52', fontWeight: 300, lineHeight: 1.75 }}>{pillar.desc}</p>
    </motion.div>
  )
}

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ padding: '140px 72px', background: '#F8F5F0' }}>
      <div ref={ref} style={{ marginBottom: 80 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}
        >
          <div style={{ width: 32, height: 1, background: '#B8977A' }} />
          <span className="label-sm">The Magical Difference</span>
        </motion.div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
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
              No shortcuts.<br /><em>No excuses.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ maxWidth: 360, fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B5E52', fontWeight: 300, lineHeight: 1.8, textAlign: 'right' }}
          >
            Sydney's premium homes deserve premium craftsmanship. We believe in doing the job once, doing it right, and standing behind every project we deliver.
          </motion.p>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: 1, background: 'rgba(26,24,21,0.08)', transformOrigin: 'left', marginBottom: 72 }}
      />

      {/* Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {pillars.map((pillar, i) => (
          <Pillar key={i} pillar={pillar} index={i} />
        ))}
      </div>
    </section>
  )
}
