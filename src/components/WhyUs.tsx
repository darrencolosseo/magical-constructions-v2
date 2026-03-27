import { motion } from 'framer-motion'
import { Award, Camera, MapPin, Layers } from 'lucide-react'

const features = [
  { icon: Award, title: 'Every job like our own home', desc: 'We apply the same care and standard to your project that we would to our own.' },
  { icon: Camera, title: 'Real photos, real results', desc: 'Every image on this site is from an actual Magical Constructions project. No stock.' },
  { icon: MapPin, title: 'Sydney-based & accountable', desc: 'Local team, local knowledge. Available when you need us, responsive always.' },
  { icon: Layers, title: 'Concept to completion', desc: 'We manage the entire project — design, materials, labour, finishing. All of it.' },
]

export default function WhyUs() {
  return (
    <section style={{ background: '#FFFFFF', padding: '120px 56px', borderTop: '1px solid #E2D8CE' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', borderBottom: '1px solid #E2D8CE', paddingBottom: 48 }}>
          <div>
            <div className="label-sm" style={{ marginBottom: 16 }}>The Magical Difference</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 500, color: '#1C1A18', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              No shortcuts.<br /><em style={{ fontStyle: 'italic', fontWeight: 400 }}>No excuses.</em>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: '#6B5E52', lineHeight: 1.75, fontWeight: 300 }}>
            Sydney's premium homes deserve premium craftsmanship. We believe in doing the job once, doing it right, and standing behind every project we deliver.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ paddingTop: 32, paddingRight: 40, ...(i > 0 && { paddingLeft: 40, borderLeft: '1px solid #E2D8CE' }), borderTop: '2px solid #1C1A18' }}>
                <Icon size={20} strokeWidth={1.5} color="#9A8A7A" style={{ marginBottom: 20 }} />
                <h3 style={{ fontFamily: "'Inter'", fontSize: 13, fontWeight: 500, color: '#1C1A18', marginBottom: 12, lineHeight: 1.4 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#6B5E52', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
