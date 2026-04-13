'use client'
import { useState } from 'react'

const jobs = [
  { title:'Senior Software Engineer', company:'Davao Tech Solutions', type:'Full-Time', location:'Davao City', salary:'₱60k–₱90k', posted:'1/15/2024', priority:true, tag:'Information Technology', status:null },
  { title:'Systems Analyst', company:'Global Engineering Corp', type:'Full-Time', location:'Davao City', salary:'₱45k–₱70k', posted:'1/12/2024', priority:true, tag:'Information Technology', status:null },
  { title:'Product Designer', company:'Global Engineering Corp', type:'Remote', location:'Remote', salary:'₱80k–₱120k', posted:'5 days ago', priority:false, tag:'Design', status:'Shortlisted' },
  { title:'Junior Full Stack Developer', company:'SkyTech Davao', type:'Full-Time', location:'Davao City', salary:'₱90k–₱110k', posted:'1 week ago', priority:true, tag:'Engineering', status:'Accepted' },
]

const partners = [
  { name:'SkyTech Davao', role:'Junior Full Stack Developer', salary:'₱90k–₱110k', location:'Davao City' },
  { name:'Shinsen Davao', role:'Senior Full Stack Developer', salary:'₱100k–₱150k', location:'Davao City' },
]

const statusStyle = { 
  Shortlisted: { bg:'rgba(22,163,74,0.1)', color:'#166534', border:'rgba(22,163,74,0.25)' },
  Accepted:    { bg:'rgba(45,52,148,0.1)', color:'var(--secondary)', border:'rgba(45,52,148,0.25)' },
  'Under Review': { bg:'rgba(245,192,37,0.1)', color:'#92700A', border:'rgba(245,192,37,0.3)' }
}

export default function JobsSection() {
  const [tab, setTab] = useState('browse')

  return (
    <section id="job-board" style={{
      position: 'relative', padding: '100px 24px', overflow: 'hidden'
    }} className="header-section">
      {/* Tribal bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:"url('/images/bagobo-pattern.png')", backgroundSize:'600px', opacity:0.5 }}/>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign:'center', marginBottom: 60 }}>
          <span className="section-label">Career Opportunities</span>
          <h2 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:700, color:'white', marginBottom:14 }}>Job Board</h2>
          <p style={{ color:'rgba(255,255,255,0.55)', maxWidth:460, margin:'0 auto' }}>Exclusive opportunities curated for Blue Knight alumni — partner firms and priority listings.</p>
          <hr className="gold-line" style={{ width:80, margin:'24px auto 0' }} />
        </div>

        {/* Tab */}
        <div style={{ display:'flex', gap:0, marginBottom:32, background:'rgba(255,255,255,0.07)', borderRadius:10, padding:4, width:'fit-content', margin:'0 auto 36px' }}>
          {[['browse','Job Board'],['apps','My Applications']].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              padding:'10px 28px', borderRadius:8, border:'none', cursor:'pointer',
              background: tab===id ? 'linear-gradient(135deg, var(--btn-start), var(--btn-end))' : 'transparent',
              color: tab===id ? 'white' : 'rgba(255,255,255,0.5)',
              fontFamily:'DM Sans', fontWeight:600, fontSize:'0.875rem', transition:'all 0.2s'
            }}>{label}</button>
          ))}
        </div>

        {/* Search */}
        <div style={{ display:'flex', gap:12, maxWidth:700, margin:'0 auto 16px' }}>
          <div style={{ flex:1, position:'relative' }}>
            <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.35)' }}>🔍</span>
            <input className="input-dark" style={{ paddingLeft:40 }} placeholder="Search roles, companies, or keywords" />
          </div>
          <button className="btn-gold" style={{ whiteSpace:'nowrap', padding:'12px 20px', fontSize:'0.875rem' }}>Filters ⚙</button>
        </div>

        {/* Filter tags */}
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginBottom:36, flexWrap:'wrap' }}>
          {['Information Technology','Davao City'].map((f,i) => (
            <span key={i} className="tag-bk" style={{ background:'rgba(45,52,148,0.2)', color:'#A5B4FC', borderColor:'rgba(99,102,241,0.3)', cursor:'pointer' }}>{f} ✕</span>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:24 }}>

          {/* Left: browse */}
          <div>
            <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', marginBottom:14 }}>Partner Firms in Davao</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:28 }}>
              {partners.map((p,i) => (
                <div key={i} className="card-navy" style={{ padding:18, cursor:'pointer', transition:'all 0.2s', border:'1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor='var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                  <div style={{ fontWeight:700, fontSize:'0.875rem', color:'white', marginBottom:4 }}>{p.name}</div>
                  <div style={{ fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', marginBottom:10 }}>{p.role}</div>
                  <span className="tag-bk" style={{ marginBottom:8, display:'block' }}>🛡 Blue Knight Priority</span>
                  <div style={{ fontSize:'0.8rem', color:'var(--gold)', fontWeight:600 }}>{p.salary}</div>
                  <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)' }}>📍 {p.location}</div>
                </div>
              ))}
            </div>

            <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', marginBottom:14 }}>Jobs For You</div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {jobs.filter(j => !j.status).map((job,i) => (
                <div key={i} className="card-navy" style={{ padding:20, cursor:'pointer', transition:'all 0.2s', border:'1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor='var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                  <div style={{ fontWeight:700, fontSize:'0.95rem', color:'white', marginBottom:3 }}>{job.title}</div>
                  <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.5)', marginBottom:10 }}>{job.company}</div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:12 }}>
                    {job.priority && <span className="tag-bk">🛡 Blue Knight Priority</span>}
                    <span className="tag-it">{job.tag}</span>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ display:'flex', gap:14, fontSize:'0.72rem', color:'rgba(255,255,255,0.45)', flexWrap:'wrap' }}>
                      <span>📍 {job.location}</span>
                      <span>🗓 {job.type}</span>
                      <span style={{ color:'var(--gold)', fontWeight:600 }}>{job.salary}</span>
                    </div>
                    <button className="btn-gold" style={{ fontSize:'0.78rem', padding:'7px 16px' }}>Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: applications */}
          <div>
            <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', marginBottom:14 }}>My Applications</div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {jobs.filter(j => j.status).map((job,i) => {
                const s = statusStyle[job.status] || statusStyle['Under Review']
                return (
                  <div key={i} className="card-navy" style={{ padding:20, cursor:'pointer', transition:'all 0.2s', border:'1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor='var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                      <div>
                        <div style={{ fontWeight:700, fontSize:'0.9rem', color:'white' }}>{job.title}</div>
                        <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.5)' }}>{job.company}</div>
                      </div>
                      <span style={{ fontSize:'0.7rem', padding:'3px 10px', borderRadius:20, background:s.bg, color:s.color, border:`1px solid ${s.border}`, fontWeight:600, whiteSpace:'nowrap' }}>● {job.status}</span>
                    </div>
                    {job.status==='Shortlisted' && (
                      <div style={{ background:'rgba(22,163,74,0.08)', border:'1px solid rgba(22,163,74,0.2)', borderRadius:8, padding:'10px 12px', fontSize:'0.78rem', color:'rgba(255,255,255,0.7)', marginBottom:10 }}>
                        🎯 Your profile stood out! The hiring manager would like to schedule an initial screening.
                      </div>
                    )}
                    <div style={{ display:'flex', gap:6, marginBottom:10 }}>
                      {job.priority && <span className="tag-bk">🛡 Blue Knight Priority</span>}
                      <span className="tag-it">{job.tag}</span>
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)' }}>Applied {job.posted} • {job.location}</div>
                      {job.status==='Shortlisted' && <button className="btn-primary" style={{ fontSize:'0.78rem', padding:'6px 16px' }}>Book Interview</button>}
                      {job.status==='Accepted' && <button className="btn-gold" style={{ fontSize:'0.78rem', padding:'6px 16px' }}>View Details →</button>}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Offer card */}
            <div style={{ marginTop:20, background:'linear-gradient(135deg, #070A3A, #0A0E52)', border:'1px solid rgba(245,192,37,0.25)', borderRadius:14, padding:24, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:"url('images/bagobo-pattern.png')", backgroundSize:'180px', opacity:0.07 }}/>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ fontFamily:'Playfair Display', fontSize:'1.05rem', color:'white', fontWeight:700, marginBottom:6 }}>🎉 Offer Received!</div>
                <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.6)', marginBottom:4 }}>Junior Full Stack Developer — SkyTech Davao</div>
                <div style={{ fontSize:'0.85rem', color:'var(--gold)', fontWeight:700, marginBottom:16 }}>Annual Salary: ₱750k • Start: Nov 15</div>
                <div style={{ display:'flex', gap:10 }}>
                  <button className="btn-gold" style={{ flex:1, justifyContent:'center', fontSize:'0.85rem', padding:'10px' }}>Accept Offer →</button>
                  <button className="btn-outline-white" style={{ flex:1, justifyContent:'center', fontSize:'0.85rem', padding:'10px' }}>Decline</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
