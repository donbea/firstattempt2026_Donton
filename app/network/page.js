'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const alumni = [
  { name: 'Maria Santos',    batch: 'Class of 2015', course: 'Computer Science',    company: 'Google Philippines',  role: 'Senior Engineer',      mutual: 12 },
  { name: 'Jose Reyes',      batch: 'Class of 2017', course: 'Business Admin',      company: 'BDO Unibank',         role: 'Investment Analyst',   mutual: 8  },
  { name: 'Ana Dela Cruz',   batch: 'Class of 2016', course: 'Communication',       company: 'ABS-CBN',             role: 'News Producer',        mutual: 5  },
  { name: 'Miguel Torres',   batch: 'Class of 2018', course: 'Information Tech',    company: 'SkyTech Davao',       role: 'Full Stack Developer', mutual: 15 },
  { name: 'Carla Mendoza',   batch: 'Class of 2014', course: 'Nursing',             company: 'Davao Medical Center','role': 'Head Nurse',          mutual: 3  },
  { name: 'Ramon Villanueva',batch: 'Class of 2019', course: 'Engineering',         company: 'DMCI Holdings',       role: 'Project Engineer',     mutual: 7  },
]

export default function NetworkPage() {
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign:'center', marginBottom: 56 }}>
            <span className="section-label">Alumni Network</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Your Blue Knight Network</h1>
            <p style={{ color:'rgba(10,14,82,0.55)', maxWidth:460, margin:'0 auto' }}>Connect with fellow Ateneo de Davao alumni across industries and generations.</p>
            <hr className="gold-line" style={{ width:80, margin:'24px auto 0' }} />
          </div>

          {/* Search */}
          <div style={{ display:'flex', gap:12, maxWidth:600, margin:'0 auto 40px' }}>
            <input className="input-light" placeholder="Search alumni by name, batch, or company..." style={{ flex:1 }} />
            <button className="btn-primary" style={{ whiteSpace:'nowrap' }}>Search</button>
          </div>

          {/* Filter pills */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:40 }}>
            {['All','Class of 2015','Class of 2016','Class of 2017','Class of 2018','IT','Engineering','Business'].map((f,i) => (
              <button key={i} style={{
                padding:'6px 16px', borderRadius:20, border:'1.5px solid rgba(10,14,82,0.15)',
                background: i===0 ? 'var(--navy)' : 'white', color: i===0 ? 'white' : 'var(--navy)',
                fontSize:'0.8rem', fontWeight:600, cursor:'pointer', transition:'all 0.2s', fontFamily:'DM Sans'
              }}>{f}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px,1fr))', gap:20 }}>
            {alumni.map((a,i) => (
              <div key={i} className="card-light" style={{ padding:24, transition:'all 0.2s', cursor:'pointer' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(10,14,82,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 20px rgba(10,14,82,0.07)'}>
                <div style={{ display:'flex', gap:16, alignItems:'flex-start', marginBottom:16 }}>
                  <div style={{ width:52, height:52, borderRadius:'50%', background:'linear-gradient(135deg,var(--navy),var(--secondary))', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:800, fontSize:'1.2rem', flexShrink:0 }}>
                    {a.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight:700, color:'var(--navy)', fontSize:'0.95rem' }}>{a.name}</div>
                    <div style={{ fontSize:'0.78rem', color:'var(--gold)', fontWeight:600 }}>{a.batch}</div>
                    <div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.5)' }}>{a.course}</div>
                  </div>
                </div>
                <div style={{ background:'rgba(10,14,82,0.04)', borderRadius:8, padding:'10px 14px', marginBottom:14 }}>
                  <div style={{ fontSize:'0.8rem', fontWeight:600, color:'var(--navy)' }}>{a.role}</div>
                  <div style={{ fontSize:'0.75rem', color:'rgba(10,14,82,0.5)' }}>{a.company}</div>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:'0.72rem', color:'rgba(10,14,82,0.4)' }}>🤝 {a.mutual} mutual connections</span>
                  <button className="btn-primary" style={{ fontSize:'0.78rem', padding:'7px 16px' }}>Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
