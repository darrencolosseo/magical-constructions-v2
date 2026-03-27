import { useState } from 'react'
import { motion } from 'framer-motion'

const cats = ['All', 'Decking', 'Cladding', 'Interior', 'Alfresco']
const items = [
  { img: 'gallery-01.jpg', name: 'Composite Estate Deck', suburb: 'Harrington Park', cat: 'Decking' },
  { img: 'gallery-02.jpg', name: 'Merbau Hardwood', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-03.jpg', name: 'Golden Hour Reflection', suburb: 'Oatley', cat: 'Decking' },
  { img: 'gallery-04.jpg', name: 'Batten Ceiling Interior', suburb: 'Sydney', cat: 'Interior' },
  { img: 'gallery-05.jpg', name: 'Composite Pool Surround', suburb: 'Harrington Park', cat: 'Decking' },
  { img: 'gallery-06.jpg', name: 'Freshly Oiled Deck', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-07.jpg', name: 'Aluminium Batten Facade', suburb: 'Northwood', cat: 'Cladding' },
  { img: 'gallery-08.jpg', name: 'Alfresco Kitchen', suburb: 'Baulkham Hills', cat: 'Alfresco' },
  { img: 'gallery-09.jpg', name: 'Charcoal Deck & Cladding', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-10.jpg', name: 'Estate Composite Deck', suburb: 'Harrington Park', cat: 'Decking' },
  { img: 'gallery-11.jpg', name: 'Hardwood & Stone', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-12.jpg', name: 'Alfresco + Cladding', suburb: 'Towradgi', cat: 'Cladding' },
]

function Item({ item, active }: { item: typeof items[0]; active: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', cursor: 'pointer', opacity: active ? 1 : 0.2, transition: 'opacity 0.4s, transform 0.4s', transform: active ? 'scale(1)' : 'scale(0.98)' }}>
      <img src={`/images/${item.img}`} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
      {/* Hover overlay — light cream, not dark */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(250,247,244,0.88)', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: '#1C1A18', textAlign: 'center', padding: '0 16px' }}>{item.name}</div>
        <div className="label-sm" style={{ color: '#9A8A7A' }}>{item.suburb}</div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('All')
  return (
    <section id="projects" style={{ background: '#FAF7F4', padding: '120px 56px', borderTop: '1px solid #E2D8CE' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}>
          <div className="label-sm" style={{ marginBottom: 16 }}>Our Work</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 500, color: '#1C1A18', letterSpacing: '-0.02em' }}>
              Recent<br /><em style={{ fontStyle: 'italic', fontWeight: 400 }}>projects.</em>
            </h2>
            {/* Filter pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {cats.map(c => (
                <button key={c} onClick={() => setActive(c)} style={{
                  padding: '8px 20px', border: `1px solid ${active === c ? '#1C1A18' : '#E2D8CE'}`,
                  background: active === c ? '#1C1A18' : 'transparent',
                  color: active === c ? '#FAF7F4' : '#6B5E52',
                  fontFamily: "'Inter'", fontSize: 11, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'all 0.25s',
                }}>{c}</button>
              ))}
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {items.map(item => (
            <Item key={item.img} item={item} active={active === 'All' || item.cat === active} />
          ))}
        </div>
      </div>
    </section>
  )
}
