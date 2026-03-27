import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Free Consultation', desc: 'We visit your site, understand your vision and discuss your budget — no obligations.' },
  { n: '02', title: 'Detailed Quote', desc: 'A precise itemised quote arrives within 48 hours of our site inspection.' },
  { n: '03', title: 'Precision Build', desc: 'Our team executes with meticulous attention to material quality and every finish.' },
  { n: '04', title: 'Final Handover', desc: "We walk through with you and won't leave until you're completely satisfied." },
]

export default function Process() {
  return (
    <section id="process" style={{ background: '#FFFFFF', padding: '120px 56px', borderTop: '1px solid #E2D8CE' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}>
          <div className="label-sm" style={{ marginBottom: 16 }}>How We Work</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 500, color: '#1C1A18', letterSpacing: '-0.02em' }}>
            From first call<br /><em style={{ fontStyle: 'italic', fontWeight: 400 }}>to final finish.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {steps.map((step, i) => (
            <motion.div key={step.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ padding: '0 40px 0 0', ...(i > 0 && { paddingLeft: 40, borderLeft: '1px solid #E2D8CE' }) }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, fontWeight: 400, color: '#E2D8CE', lineHeight: 1, marginBottom: 24 }}>{step.n}</div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C1A18', marginBottom: 12 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: '#6B5E52', lineHeight: 1.75, fontWeight: 300 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
