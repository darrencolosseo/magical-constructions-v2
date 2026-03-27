import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { name: 'Composite Decking', tag: 'Outdoor Living', img: '/images/service-decking-composite.jpg', desc: 'Large-format boards, pool surrounds & precision framing. Built to last decades.' },
  { name: 'Hardwood Decking', tag: 'Natural Timber', img: '/images/service-decking-hardwood.jpg', desc: 'Spotted gum, merbau & ironbark. Freshly oiled. Finished to perfection.' },
  { name: 'Cladding & Facades', tag: 'Exterior Architecture', img: '/images/service-cladding.jpg', desc: 'Architectural batten profiles & castellated facade transformations.' },
  { name: 'Interior Renovations', tag: 'Interior Finishes', img: '/images/service-interior.jpg', desc: 'Timber batten ceilings, feature walls & high-end interior finishes.' },
  { name: 'Alfresco Kitchens', tag: 'Outdoor Entertaining', img: '/images/service-alfresco.jpg', desc: 'Custom outdoor kitchens built for the way Australians really live.' },
  { name: 'Full Builds', tag: 'End-to-End', img: '/images/service-builds.jpg', desc: 'Architecturally considered. Flawlessly executed. Start to finish.' },
]

function Card({ s, i }: { s: typeof services[0]; i: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', aspectRatio: '4/3', marginBottom: 20 }}>
        <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
      </div>
      {/* Text */}
      <div style={{ paddingBottom: 32, borderBottom: '1px solid #E2D8CE' }}>
        <div className="label-sm" style={{ marginBottom: 10 }}>{s.tag}</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, color: '#1C1A18', marginBottom: 10, letterSpacing: '-0.01em' }}>{s.name}</h3>
        <p style={{ fontSize: 13, color: '#6B5E52', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{s.desc}</p>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: hovered ? '#1C1A18' : '#9A8A7A', transition: 'color 0.2s',
        }}>
          Learn More <ArrowUpRight size={12} strokeWidth={1.5} />
        </span>
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ background: '#FAF7F4', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 72, borderBottom: '1px solid #E2D8CE', paddingBottom: 40 }}>
          <div>
            <div className="label-sm" style={{ marginBottom: 16 }}>What We Build</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 500, color: '#1C1A18', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Every service,<br /><em style={{ fontStyle: 'italic', fontWeight: 400 }}>crafted with care.</em>
            </h2>
          </div>
          <p style={{ maxWidth: 340, fontSize: 14, color: '#6B5E52', lineHeight: 1.7, fontWeight: 300 }}>
            From the first site visit to the final coat of oil, we manage every aspect of your project with precision and care.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 40px' }}>
          {services.map((s, i) => <Card key={s.name} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
