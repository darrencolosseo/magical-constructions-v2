import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let s = 0
    const inc = target / (2000 / 16)
    const t = setInterval(() => {
      s += inc
      if (s >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(s))
    }, 16)
    return () => clearInterval(t)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { n: 150, s: '+', l: 'Projects Completed' },
  { n: 8, s: '+', l: 'Years Experience' },
  { n: 100, s: '%', l: 'Sydney-Based' },
  { n: 5, s: '★', l: 'Google Rated' },
]

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      style={{ background: '#F2EDE6', borderTop: '1px solid #E2D8CE', borderBottom: '1px solid #E2D8CE', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {stats.map((st, i) => (
        <div key={st.l} style={{ padding: '48px 32px', textAlign: 'center', ...(i > 0 && { borderLeft: '1px solid #E2D8CE' }) }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 500, color: '#1C1A18', lineHeight: 1 }}>
            <Counter target={st.n} suffix={st.s} />
          </div>
          <div className="label-sm" style={{ marginTop: 10 }}>{st.l}</div>
        </div>
      ))}
    </motion.div>
  )
}
