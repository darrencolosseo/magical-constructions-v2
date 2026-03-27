import { Globe, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#1C1A18', color: '#FAF7F4' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 56px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 500, color: '#FAF7F4', marginBottom: 8 }}>Magical Constructions</div>
          <div style={{ fontFamily: "'Inter'", fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5E52', marginBottom: 24 }}>Premium Builds · Sydney</div>
          <p style={{ fontSize: 13, color: '#9A8A7A', lineHeight: 1.75, fontWeight: 300, maxWidth: 300 }}>
            Sydney-based builders specialising in composite decking, cladding, facades and architectural residential builds.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'Inter'", fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5E52', marginBottom: 20 }}>Navigation</div>
          {['Services', 'Projects', 'Process', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ display: 'block', fontSize: 13, color: '#9A8A7A', fontWeight: 300, marginBottom: 10, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FAF7F4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A8A7A')}>{l}</a>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "'Inter'", fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5E52', marginBottom: 20 }}>Contact</div>
          {[
            { icon: Globe, text: '@magicalconstructions', href: 'https://www.instagram.com/magicalconstructions/' },
            { icon: Mail, text: 'hello@magicalconstructions.com.au', href: 'mailto:hello@magicalconstructions.com.au' },
            { icon: MapPin, text: 'Sydney, NSW', href: '#' },
          ].map(({ icon: Icon, text, href }) => (
            <a key={text} href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#9A8A7A', fontWeight: 300, marginBottom: 12, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FAF7F4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A8A7A')}>
              <Icon size={13} strokeWidth={1.5} />{text}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #2A2520', padding: '20px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Inter'", fontSize: 11, color: '#4A4038', fontWeight: 300, letterSpacing: '0.08em' }}>© 2026 Magical Constructions. All rights reserved.</span>
        <span style={{ fontFamily: "'Inter'", fontSize: 11, color: '#4A4038', fontWeight: 300, letterSpacing: '0.08em' }}>ABN: XX XXX XXX XXX</span>
      </div>
    </footer>
  )
}
