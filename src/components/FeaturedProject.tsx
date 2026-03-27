import { motion } from 'framer-motion'

export default function FeaturedProject() {
  return (
    <section style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
      <img
        src="/images/why-us.jpg"
        alt="Merbau Hardwood Deck — Oatley, Sydney"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,26,24,0.85) 0%, rgba(28,26,24,0.2) 50%, transparent 100%)' }} />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 56px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ fontFamily: "'Inter'", fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,247,244,0.6)', marginBottom: 12 }}>Featured Project</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 500, color: '#FAF7F4', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: 560 }}>
            Merbau Hardwood Deck<br /><em style={{ fontStyle: 'italic', fontWeight: 400 }}>Oatley, Sydney</em>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <a href="#projects" style={{
            display: 'inline-block', border: '1px solid rgba(250,247,244,0.5)', color: '#FAF7F4',
            padding: '14px 28px', fontFamily: "'Inter'", fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(250,247,244,0.1)'; e.currentTarget.style.borderColor = '#FAF7F4'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(250,247,244,0.5)'; }}
          >View All Projects</a>
        </motion.div>
      </div>
    </section>
  )
}
