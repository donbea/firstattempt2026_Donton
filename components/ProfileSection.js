'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ProfileSection() {
  const [stealth, setStealth] = useState(true)
  const blocked = [
    { name:'TechCorp Solutions', added:'Added 2 months ago' },
    { name:'Global Finance Inc.', added:'Added yesterday' },
    { name:'Apex Innovations', added:'Current Employer' },
  ]

  return (
    <section id="network" style={{ background:'var(--white)', padding:'100px 24px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <span className="section-label">Your Account</span>
          <h2 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Profile & Settings</h2>
          <hr className="gold-line" style={{ width:80, margin:'20px auto 0' }}/>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:24 }}>

          {/* Profile */}
          <div className="card-light" style={{ overflow:'hidden' }}>
            <div style={{ background:'linear-gradient(135deg, #070A3A, #0A0E52)', padding:'32px 28px', textAlign:'center', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:"url('/bagobo-pattern.png')", backgroundSize:'180px', opacity:0.07 }}/>
              <div style={{ position:'absolute', top:14, right:14, cursor:'pointer', color:'rgba(255,255,255,0.5)', fontSize:'1rem' }}>✏️</div>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ width:72, height:72, borderRadius:'50%', background:'linear-gradient(135deg,var(--gold),var(--gold-light))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem', fontWeight:800, color:'var(--navy)', margin:'0 auto 12px', border:'3px solid rgba(245,192,37,0.4)' }}>S</div>
                <div style={{ fontFamily:'Playfair Display', fontSize:'1.25rem', fontWeight:700, color:'white', marginBottom:4 }}>Stephany</div>
                <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.55)', marginBottom:12 }}>Class of 2026 • Information Technology</div>
                <span style={{ background:'rgba(22,163,74,0.15)', border:'1px solid rgba(22,163,74,0.3)', color:'#4ADE80', fontSize:'0.75rem', padding:'4px 14px', borderRadius:20, fontWeight:600 }}>✓ Verified Alumni</span>
              </div>
            </div>

            <div style={{ padding:'20px 24px' }}>
              <div style={{ fontSize:'0.68rem', color:'rgba(10,14,82,0.4)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', marginBottom:12 }}>Account Management</div>
              {[['👤','Personal Information','Manage your contact details'],['🎓','Academic Records','Degree and graduation details'],['🪪','Alumni ID','View digital alumni card'],['💼','Job Preferences','Career opportunities & interests']].map(([icon,label,sub],i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'13px 0', borderBottom:'1px solid rgba(10,14,82,0.06)', cursor:'pointer' }}>
                  <span style={{ fontSize:'1.1rem' }}>{icon}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:'0.875rem', fontWeight:600, color:'var(--navy)' }}>{label}</div>
                    <div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.45)' }}>{sub}</div>
                  </div>
                  <span style={{ color:'rgba(10,14,82,0.25)' }}>›</span>
                </div>
              ))}
              <div style={{ fontSize:'0.68rem', color:'rgba(10,14,82,0.4)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', margin:'16px 0 12px' }}>App Settings</div>
              <div style={{ display:'flex', alignItems:'center', gap:14, padding:'13px 0', borderBottom:'1px solid rgba(10,14,82,0.06)', cursor:'pointer' }}>
                <span>⚙️</span>
                <div style={{ flex:1 }}><div style={{ fontSize:'0.875rem', fontWeight:600, color:'var(--navy)' }}>Settings</div><div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.45)' }}>Privacy, security, & notifications</div></div>
                <span style={{ color:'rgba(10,14,82,0.25)' }}>›</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:14, padding:'13px 0', cursor:'pointer' }}>
                <span>🚪</span>
                <div style={{ flex:1 }}><div style={{ fontSize:'0.875rem', fontWeight:600, color:'#DC2626' }}>Logout</div><div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.45)' }}>Sign out of your account</div></div>
                <span style={{ color:'rgba(10,14,82,0.25)' }}>›</span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="card-light" style={{ padding:28 }}>
            <h3 style={{ fontFamily:'Playfair Display', fontSize:'1.15rem', fontWeight:700, color:'var(--navy)', marginBottom:24 }}>Settings</h3>
            {[['🕵️','Stealth Mode','Manage who can see you'],['🔑','Password','Edit password'],['🔔','Notifications','Manage notifications']].map(([icon,label,sub],i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:14, border:'1px solid rgba(10,14,82,0.08)', borderRadius:12, padding:'14px 16px', marginBottom:12, cursor:'pointer', transition:'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--secondary)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(10,14,82,0.08)'}>
                <span style={{ fontSize:'1.2rem' }}>{icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:'0.875rem', fontWeight:600, color:'var(--navy)' }}>{label}</div>
                  <div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.45)' }}>{sub}</div>
                </div>
                <span style={{ color:'rgba(10,14,82,0.3)' }}>›</span>
              </div>
            ))}

            {/* AdDU building */}
            <div style={{ borderRadius:12, overflow:'hidden', height:160, position:'relative', marginTop:16 }}>
              <Image src="/images/addu-building.png" alt="AdDU" fill style={{ objectFit:'cover' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(7,10,58,0.85), transparent)' }}/>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'16px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <Image src="/images/addu-seal.png" alt="AdDU Seal" width={36} height={36} style={{ objectFit:'contain' }} />
                  <div>
                    <div style={{ fontFamily:'Playfair Display', fontSize:'0.875rem', color:'white', fontWeight:700 }}>Ateneo de Davao University</div>
                    <div style={{ fontSize:'0.68rem', color:'var(--gold)' }}>Fortes in Fide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy / Stealth */}
          <div className="card-light" style={{ padding:28 }}>
            <h3 style={{ fontFamily:'Playfair Display', fontSize:'1.15rem', fontWeight:700, color:'var(--navy)', marginBottom:6 }}>Privacy Settings</h3>
            <p style={{ fontSize:'0.78rem', color:'rgba(10,14,82,0.45)', marginBottom:20 }}>Stealth Mode</p>

            <div style={{ border:'1px solid rgba(10,14,82,0.1)', borderRadius:12, padding:16, display:'flex', alignItems:'flex-start', gap:12, marginBottom:20 }}>
              <span style={{ fontSize:'1.2rem', marginTop:2 }}>🕵️</span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:600, color:'var(--navy)', fontSize:'0.875rem', marginBottom:4 }}>Enable Stealth Mode</div>
                <div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.5)', lineHeight:1.5 }}>Your profile and activity will be hidden from the companies listed below.</div>
              </div>
              <div onClick={() => setStealth(!stealth)} style={{ width:44, height:24, borderRadius:12, background: stealth ? 'var(--secondary)' : 'rgba(10,14,82,0.15)', position:'relative', cursor:'pointer', transition:'all 0.3s', minWidth:44 }}>
                <div style={{ width:20, height:20, borderRadius:'50%', background:'white', position:'absolute', top:2, left: stealth ? 22 : 2, transition:'left 0.3s', boxShadow:'0 1px 4px rgba(0,0,0,0.2)' }}/>
              </div>
            </div>

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
              <span style={{ fontSize:'0.7rem', color:'rgba(10,14,82,0.4)', fontWeight:700, textTransform:'uppercase', letterSpacing:1.5 }}>Blocked Companies</span>
              <span style={{ fontSize:'0.75rem', color:'var(--secondary)', fontWeight:700 }}>{blocked.length} Active</span>
            </div>

            <input className="input-light" placeholder="Add a company to block list..." style={{ marginBottom:14 }} />

            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {blocked.map((c,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:12, border:'1px solid rgba(10,14,82,0.08)', borderRadius:10, padding:'11px 14px' }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:'rgba(45,52,148,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.9rem' }}>🏢</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:600, color:'var(--navy)', fontSize:'0.85rem' }}>{c.name}</div>
                    <div style={{ fontSize:'0.72rem', color:'rgba(10,14,82,0.45)' }}>{c.added}</div>
                  </div>
                  <button style={{ background:'none', border:'none', color:'#DC2626', cursor:'pointer', fontSize:'1rem' }}>🗑</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop:16, background:'rgba(45,52,148,0.06)', border:'1px solid rgba(45,52,148,0.15)', borderRadius:10, padding:'12px 14px', fontSize:'0.78rem', color:'rgba(10,14,82,0.55)', lineHeight:1.5 }}>
              ℹ️ Recruiters from companies in this list will see your profile as "Anonymous Candidate" without photos or identifying details.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
