import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2200
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      start = Math.round(ease * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed', sub: 'Across Sydney' },
    { value: 8, suffix: '+', label: 'Years Experience', sub: 'Est. 2020' },
    { value: 100, suffix: '%', label: 'Sydney Based', sub: 'Local team' },
    { value: 5, suffix: '★', label: 'Google Rating', sub: 'Verified reviews' },
  ]

  return (
    <section ref={ref} style={{ background: '#1A1815', padding: '80px 72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '40px 48px',
              borderRight: i < 3 ? '1px solid rgba(248,245,240,0.06)' : 'none',
            }}
          >
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 56,
              fontWeight: 300,
              color: '#F8F5F0',
              lineHeight: 1,
              marginBottom: 12,
            }}>
              {inView ? <Counter target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.5)', fontWeight: 400, marginBottom: 4 }}>{stat.label}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#B8977A', fontWeight: 300 }}>{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
