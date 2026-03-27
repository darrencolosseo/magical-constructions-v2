import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} style={{ position: 'relative', height: '85vh', minHeight: 600, overflow: 'hidden' }} id="projects">
      {/* Parallax image */}
      <motion.div style={{ position: 'absolute', inset: '-10%', y: imageY }}>
        <img
          src="/images/service-builds.jpg"
          alt="Featured project"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,24,21,0.85) 0%, rgba(26,24,21,0.2) 60%, transparent 100%)' }} />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 72px', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}
            >
              <div style={{ width: 32, height: 1, background: '#B8977A' }} />
              <span className="label-sm" style={{ color: 'rgba(248,245,240,0.6)' }}>Featured Project</span>
            </motion.div>
            <div style={{ overflow: 'hidden', marginBottom: 12 }}>
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(36px, 4.5vw, 64px)',
                  fontWeight: 300,
                  color: '#F8F5F0',
                  lineHeight: 1.1,
                }}
              >
                Northwood Complete Transformation
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(248,245,240,0.55)', fontWeight: 300, letterSpacing: '0.04em' }}
            >
              Full build · Cladding · Decking · Alfresco — Northwood, Sydney
            </motion.p>
          </div>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="btn-outline"
            style={{ color: '#F8F5F0', borderColor: 'rgba(248,245,240,0.35)', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F8F5F0'; e.currentTarget.style.color = '#1A1815' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F8F5F0' }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  )
}
