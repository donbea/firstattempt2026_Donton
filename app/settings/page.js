'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from 'react'

export default function SettingsPage() {
  const [stealth, setStealth] = useState(true)
  const [emailNotif, setEmailNotif] = useState(true)
  const [jobAlerts, setJobAlerts] = useState(true)
  const [eventReminders, setEventReminders] = useState(false)

  const Toggle = ({ value, onChange }) => (
    <div onClick={() => onChange(!value)} style={{
      width:44, height:24, borderRadius:12, cursor:'pointer', transition:'all 0.3s',
      background: value ? 'var(--secondary)' : 'rgba(10,14,82,0.15)', position:'relative', flexShrink:0
    }}>
      <div style={{ position:'absolute', top:2, left: value ? 22 : 2, width:20, height:20, borderRadius:'50%', background:'white', transition:'left 0.3s', boxShadow:'0 1px 4px rgba(0,0,0,0.2)' }}/>
    </div>
  )

  const Section = ({ title, children }) => (
    <div className="card-light" style={{ padding:28, marginBottom:20 }}>
      <h3 style={{ fontFamily:'Playfair Display', fontSize:'1.1rem', fontWeight:700, color:'var(--navy)', marginBottom:20, paddingBottom:12, borderBottom:'1px solid rgba(10,14,82,0.08)' }}>{title}</h3>
      {children}
    </div>
  )

  const Row = ({ icon, label, sub, right }) => (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid rgba(10,14,82,0.05)' }}>
      <div style={{ display:'flex', gap:12, alignItems:'center' }}>
        <span style={{ fontSize:'1.1rem' }}>{icon}</span>
        <div>
          <div style={{ fontSize:'0.9rem', fontWeight:600, color:'var(--navy)' }}>{label}</div>
          {sub && <div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.45)' }}>{sub}</div>}
        </div>
      </div>
      {right}
    </div>
  )

  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ marginBottom:40 }}>
            <span className="section-label">Your Account</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:700, color:'var(--navy)' }}>Settings</h1>
          </div>

          <Section title="🔒 Privacy Settings">
            <Row icon="🕵️" label="Stealth Mode" sub="Hide your profile from company searches" right={<Toggle value={stealth} onChange={setStealth} />} />
            <Row icon="👁" label="Profile Visibility" sub="Control who can view your full profile" right={<select className="input-light" style={{ width:'auto', padding:'6px 12px' }}><option>Alumni Only</option><option>Everyone</option><option>Private</option></select>} />
          </Section>

          <Section title="🔔 Notification Settings">
            <Row icon="📧" label="Email Notifications" sub="Receive updates via email" right={<Toggle value={emailNotif} onChange={setEmailNotif} />} />
            <Row icon="💼" label="Job Alerts" sub="Get notified about new job matches" right={<Toggle value={jobAlerts} onChange={setJobAlerts} />} />
            <Row icon="📅" label="Event Reminders" sub="Reminders before upcoming events" right={<Toggle value={eventReminders} onChange={setEventReminders} />} />
          </Section>

          <Section title="🔑 Security">
            <Row icon="🔐" label="Change Password" sub="Last changed 3 months ago" right={<button className="btn-outline-navy" style={{ fontSize:'0.8rem', padding:'7px 16px' }}>Update</button>} />
            <Row icon="📱" label="Two-Factor Authentication" sub="Add extra security to your account" right={<button className="btn-primary" style={{ fontSize:'0.8rem', padding:'7px 16px' }}>Enable</button>} />
          </Section>

          <Section title="🚫 Blocked Companies">
            {['TechCorp Solutions','Global Finance Inc.','Apex Innovations'].map((c,i) => (
              <Row key={i} icon="🏢" label={c} sub="Blocked from viewing your profile" right={<button style={{ background:'rgba(239,68,68,0.08)', color:'#DC2626', border:'1px solid rgba(239,68,68,0.2)', borderRadius:6, padding:'5px 12px', fontSize:'0.78rem', cursor:'pointer' }}>Remove</button>} />
            ))}
            <div style={{ paddingTop:16 }}>
              <input className="input-light" placeholder="Add a company to block list..." />
            </div>
          </Section>

          <div style={{ display:'flex', gap:12, justifyContent:'flex-end' }}>
            <button className="btn-outline-navy">Cancel</button>
            <button className="btn-gold">Save Changes</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
