import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#FFFFFF', border: '1px solid #E2D8CE',
  padding: '14px 16px', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 300,
  color: '#1C1A18', outline: 'none', borderRadius: 0, transition: 'border-color 0.2s',
}

const services = ['Composite Decking', 'Hardwood Decking', 'Cladding / Facade', 'Interior Renovation', 'Alfresco Kitchen', 'Full Build']

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const { register, handleSubmit } = useForm()

  return (
    <section id="contact" style={{ background: '#F2EDE6', borderTop: '1px solid #E2D8CE', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        {/* Left: info */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="label-sm" style={{ marginBottom: 20 }}>Free Quote</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 500, color: '#1C1A18', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 24 }}>
            Tell us about<br /><em style={{ fontStyle: 'italic', fontWeight: 400 }}>your project.</em>
          </h2>
          <p style={{ fontSize: 15, color: '#6B5E52', lineHeight: 1.75, fontWeight: 300, marginBottom: 48, maxWidth: 380 }}>
            We respond within 24 hours with a detailed, itemised proposal. No hidden costs, no surprises.
          </p>
          {[['Response within 24 hours'], ['Free site visit & consultation'], ['Detailed itemised quote'], ['No obligation']].map(([t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <Check size={14} strokeWidth={2} color="#C4A882" />
              <span style={{ fontSize: 13, color: '#5C5248', fontWeight: 300 }}>{t}</span>
            </div>
          ))}
        </motion.div>

        {/* Right: form */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {submitted ? (
            <div style={{ background: '#FFFFFF', padding: 48, textAlign: 'center', border: '1px solid #E2D8CE', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #C4A882', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <Check size={20} strokeWidth={1.5} color="#C4A882" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 500, color: '#1C1A18', marginBottom: 12 }}>Request received.</h3>
              <p style={{ fontSize: 14, color: '#6B5E52', fontWeight: 300 }}>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(() => setSubmitted(true))} style={{ background: '#FFFFFF', padding: 48, border: '1px solid #E2D8CE', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input {...register('firstName', { required: true })} placeholder="First name" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#1C1A18')} onBlur={e => (e.currentTarget.style.borderColor = '#E2D8CE')} />
                <input {...register('lastName', { required: true })} placeholder="Last name" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#1C1A18')} onBlur={e => (e.currentTarget.style.borderColor = '#E2D8CE')} />
              </div>
              <input {...register('email', { required: true })} type="email" placeholder="Email address" style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = '#1C1A18')} onBlur={e => (e.currentTarget.style.borderColor = '#E2D8CE')} />
              <input {...register('phone')} type="tel" placeholder="Phone number" style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = '#1C1A18')} onBlur={e => (e.currentTarget.style.borderColor = '#E2D8CE')} />
              <input {...register('suburb')} placeholder="Your suburb" style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = '#1C1A18')} onBlur={e => (e.currentTarget.style.borderColor = '#E2D8CE')} />

              {/* Service selector */}
              <div>
                <div className="label-sm" style={{ marginBottom: 10 }}>Service required</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {services.map(s => (
                    <button type="button" key={s} onClick={() => setSelectedService(s)} style={{
                      padding: '10px 12px', border: `1px solid ${selectedService === s ? '#1C1A18' : '#E2D8CE'}`,
                      background: selectedService === s ? '#1C1A18' : 'transparent',
                      color: selectedService === s ? '#FAF7F4' : '#6B5E52',
                      fontFamily: "'Inter'", fontSize: 11, fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase',
                      transition: 'all 0.2s', cursor: 'pointer', textAlign: 'left',
                    }}>{s}</button>
                  ))}
                </div>
              </div>

              <textarea {...register('description')} rows={3} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#1C1A18')} onBlur={e => (e.currentTarget.style.borderColor = '#E2D8CE')} />

              <button type="submit" style={{
                background: '#1C1A18', color: '#FAF7F4', padding: '16px',
                fontFamily: "'Inter'", fontSize: 11, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase',
                transition: 'background 0.3s', marginTop: 8,
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3A3530')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1C1A18')}
              >Submit Request</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
