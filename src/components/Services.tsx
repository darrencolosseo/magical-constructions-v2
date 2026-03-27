import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { title: 'Composite Decking', category: 'Outdoor Living', img: '/images/service-decking-composite.jpg', desc: 'Large-format boards, pool surrounds & precision framing built to last decades.' },
  { title: 'Hardwood Decking', category: 'Outdoor Living', img: '/images/service-decking-hardwood.jpg', desc: 'Spotted gum, blackbutt & ironbark — sourced, cut and finished on-site.' },
  { title: 'Cladding & Facades', category: 'Exteriors', img: '/images/service-cladding.jpg', desc: "Aluminium batten, fibre cement & timber — transforming your home's first impression." },
  { title: 'Interior Renovations', category: 'Interiors', img: '/images/service-interior.jpg', desc: 'Full-scope internal remodels with architectural joinery and premium finishes.' },
  { title: 'Alfresco Kitchens', category: 'Outdoor Living', img: '/images/service-alfresco.jpg', desc: 'Custom outdoor kitchens and entertaining spaces built for the Sydney lifestyle.' },
  { title: 'Full Builds', category: 'Construction', img: '/images/service-builds.jpg', desc: 'End-to-end project management for extensions, granny flats and new builds.' },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '4/5',
      }}
    >
      {/* Image */}
      <motion.img
        src={service.img}
        alt={service.title}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Default overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(26,24,21,0.75) 0%, transparent 50%)',
      }} />

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(26,24,21,0.65)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div className="label-sm" style={{ color: '#B8977A', marginBottom: 8 }}>{service.category}</div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 26,
          fontWeight: 400,
          color: '#F8F5F0',
          lineHeight: 1.2,
          marginBottom: 12,
        }}>{service.title}</h3>

        <motion.p
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: 'rgba(248,245,240,0.75)',
            fontWeight: 300,
            lineHeight: 1.65,
            marginBottom: 20,
          }}
        >
          {service.desc}
        </motion.p>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: "'Inter', sans-serif", fontSize: 10,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#B8977A', fontWeight: 400,
          }}
        >
          <span>Learn More</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" style={{ padding: '140px 72px', background: '#F8F5F0' }}>
      {/* Header */}
      <div ref={ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72 }}>
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}
          >
            <div style={{ width: 32, height: 1, background: '#B8977A' }} />
            <span className="label-sm">What We Build</span>
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
              Every service,<br /><em>crafted with care.</em>
            </motion.h2>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            maxWidth: 320,
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: '#6B5E52',
            fontWeight: 300,
            lineHeight: 1.8,
            textAlign: 'right',
          }}
        >
          From the first site visit to the final coat of oil, we manage every aspect of your project with precision and care.
        </motion.p>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
