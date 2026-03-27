import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, useInView } from 'framer-motion'

type FormData = {
  name: string
  email: string
  phone: string
  suburb: string
  service: string
  message: string
}

export default function QuoteSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(26,24,21,0.2)',
    padding: '14px 0',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: '#1A1815',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 9,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#9A8A7A',
    fontWeight: 400,
    display: 'block',
    marginBottom: 4,
  }

  const services = ['Composite Decking', 'Hardwood Decking', 'Cladding / Facade', 'Interior Renovation', 'Alfresco Kitchen', 'Full Build']

  return (
    <section id="contact" style={{ background: '#F2EDE6' }} ref={ref}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 700 }}>
        {/* Left panel */}
        <div style={{ padding: '120px 72px', borderRight: '1px solid rgba(26,24,21,0.07)' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}
          >
            <div style={{ width: 32, height: 1, background: '#B8977A' }} />
            <span className="label-sm">Get in Touch</span>
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: 32 }}>
            <motion.h2
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, color: '#1A1815', lineHeight: 1.15 }}
            >
              Let's talk about<br /><em>your project.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B5E52', fontWeight: 300, lineHeight: 1.8, marginBottom: 56, maxWidth: 380 }}
          >
            We respond within 24 hours with a detailed, itemised proposal. No hidden costs, no surprises.
          </motion.p>

          {[
            { icon: '✓', text: 'Response within 24 hours' },
            { icon: '✓', text: 'Free site visit & consultation' },
            { icon: '✓', text: 'Detailed itemised quote' },
            { icon: '✓', text: 'No obligation' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20 }}
            >
              <span style={{ color: '#B8977A', fontSize: 14 }}>{item.icon}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#4A3F35', fontWeight: 300 }}>{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Right form panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ padding: '120px 72px' }}
        >
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 24 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: '#1A1815' }}>Thank you.</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B5E52', fontWeight: 300, lineHeight: 1.8 }}>
                We'll be in touch within 24 hours with a detailed proposal for your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(() => setSubmitted(true))} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input {...register('name', { required: true })} placeholder="Your name" style={{ ...inputStyle, borderBottomColor: errors.name ? '#C4785A' : 'rgba(26,24,21,0.2)' }} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input {...register('email', { required: true })} type="email" placeholder="your@email.com" style={{ ...inputStyle, borderBottomColor: errors.email ? '#C4785A' : 'rgba(26,24,21,0.2)' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input {...register('phone')} placeholder="04xx xxx xxx" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Suburb</label>
                  <input {...register('suburb')} placeholder="Your suburb" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Service Required</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
                  {services.map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                      <input type="radio" {...register('service')} value={s} style={{ accentColor: '#B8977A' }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#4A3F35', fontWeight: 300 }}>{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Tell us about your project</label>
                <textarea
                  {...register('message')}
                  placeholder="Brief description, timeline, budget range..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                <span>Submit Request</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
