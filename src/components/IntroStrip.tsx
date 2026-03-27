import { motion } from 'framer-motion'

export default function IntroStrip() {
  return (
    <section style={{ background: '#F2EDE6', borderTop: '1px solid #E2D8CE', borderBottom: '1px solid #E2D8CE', padding: '56px 48px', textAlign: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#3A3028',
          maxWidth: 760,
          margin: '0 auto',
          lineHeight: 1.55,
          letterSpacing: '-0.01em',
        }}
      >
        "Every project is approached as if it's our own home — with honesty, precision, and pride in every finish."
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 28 }}>
        <div style={{ width: 32, height: 1, background: '#C4A882' }} />
        <span className="label-sm" style={{ color: '#9A8A7A' }}>Magical Constructions · Sydney</span>
        <div style={{ width: 32, height: 1, background: '#C4A882' }} />
      </motion.div>
    </section>
  )
}
