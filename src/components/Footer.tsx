import { Globe, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#111009', color: '#F8F5F0' }}>
      {/* Top section */}
      <div style={{ padding: '100px 72px 64px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 80, borderBottom: '1px solid rgba(248,245,240,0.06)' }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, letterSpacing: '-0.01em', marginBottom: 8 }}>Magical Constructions</div>
          <div className="label-sm" style={{ color: '#B8977A', marginBottom: 32 }}>Premium Builds · Sydney</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(248,245,240,0.4)', fontWeight: 300, lineHeight: 1.8, maxWidth: 360 }}>
            Sydney-based builders specialising in composite decking, cladding, facades and architectural residential builds. Every project treated as our own.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="label-sm" style={{ color: 'rgba(248,245,240,0.3)', marginBottom: 28 }}>Navigation</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Services', 'Projects', 'Process', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(248,245,240,0.55)',
                fontWeight: 300, transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8F5F0')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,240,0.55)')}
              >{link}</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="label-sm" style={{ color: 'rgba(248,245,240,0.3)', marginBottom: 28 }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { Icon: Globe, text: '@magicalconstructions', href: 'https://instagram.com/magicalconstructions' },
              { Icon: Mail, text: 'hello@magicalconstructions.com.au', href: 'mailto:hello@magicalconstructions.com.au' },
              { Icon: MapPin, text: 'Sydney, NSW', href: '#' },
            ].map(({ Icon, text, href }) => (
              <a key={text} href={href} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                fontFamily: "'Inter', sans-serif", fontSize: 13,
                color: 'rgba(248,245,240,0.5)', fontWeight: 300, transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8F5F0')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,240,0.5)')}
              >
                <Icon size={14} strokeWidth={1.5} style={{ marginTop: 2, flexShrink: 0, color: '#B8977A' }} />
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '28px 72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(248,245,240,0.25)', fontWeight: 300 }}>
          © 2026 Magical Constructions. All rights reserved.
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(248,245,240,0.25)', fontWeight: 300 }}>
          ABN: XX XXX XXX XXX
        </span>
      </div>
    </footer>
  )
}
