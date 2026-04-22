'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const events = [
  { month:'DEC', day:'07', title:'Alumni Webinar: Tech Trends 2025', time:'6:00 PM • Zoom', type:'Virtual',  desc:'Join industry leaders as they discuss the future of technology and career opportunities for Blue Knights.', seats:120 },
  { month:'DEC', day:'14', title:'Blue Knight Golf Cup',              time:'8:00 AM • AdDU Campus', type:'Sports',   desc:'Annual golf tournament open to all alumni. Reconnect with batchmates on the greens.', seats:48 },
  { month:'DEC', day:'20', title:'Grand Alumni Homecoming 2024',      time:'4:00 PM • Jacinto Hall', type:'Social',   desc:'The biggest alumni event of the year. Celebrate your Blue Knight legacy with thousands of fellow graduates.', seats:500 },
  { month:'JAN', day:'10', title:'Entrepreneurship Summit',           time:'9:00 AM • AdDU Gym', type:'Business', desc:'Connect with alumni entrepreneurs and explore collaboration opportunities.', seats:200 },
  { month:'JAN', day:'18', title:'Medical Alumni Forum',              time:'2:00 PM • Health Sciences Bldg', type:'Medical',  desc:'Continuing education and networking for AdDU medical and nursing alumni.', seats:80 },
  { month:'FEB', day:'14', title:'Valentine Gala Night',              time:'7:00 PM • Marco Polo Hotel', type:'Social',   desc:'Elegant gala dinner for alumni and their partners. Formal attire required.', seats:150 },
]

const typeColors = {
  Virtual:  { bg:'rgba(99,102,241,0.1)',  color:'#6366F1', border:'rgba(99,102,241,0.25)' },
  Sports:   { bg:'rgba(22,163,74,0.1)',   color:'#16A34A', border:'rgba(22,163,74,0.25)' },
  Social:   { bg:'rgba(245,192,37,0.1)',  color:'#92700A', border:'rgba(245,192,37,0.3)' },
  Business: { bg:'rgba(10,14,82,0.08)',   color:'var(--navy)', border:'rgba(10,14,82,0.2)' },
  Medical:  { bg:'rgba(239,68,68,0.08)',  color:'#DC2626', border:'rgba(239,68,68,0.2)' },
}

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="section-label">Upcoming Events</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Alumni Events</h1>
            <p style={{ color:'rgba(10,14,82,0.55)', maxWidth:460, margin:'0 auto' }}>Stay connected with your Blue Knight community through reunions, webinars, and special events.</p>
            <hr className="gold-line" style={{ width:80, margin:'24px auto 0' }} />
          </div>

          <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:40 }}>
            {['All Events','Virtual','Sports','Social','Business','Medical'].map((f,i) => (
              <button key={i} style={{
                padding:'6px 18px', borderRadius:20, border:'1.5px solid rgba(10,14,82,0.15)',
                background: i===0 ? 'var(--navy)' : 'white', color: i===0 ? 'white' : 'var(--navy)',
                fontSize:'0.8rem', fontWeight:600, cursor:'pointer', fontFamily:'DM Sans'
              }}>{f}</button>
            ))}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {events.map((ev, i) => {
              const t = typeColors[ev.type] || typeColors.Social
              return (
                <div key={i} className="card-light" style={{ padding:24, display:'flex', gap:24, alignItems:'center', transition:'all 0.2s', cursor:'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(10,14,82,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 20px rgba(10,14,82,0.07)'}>
                  <div style={{ textAlign:'center', minWidth:64, background:'linear-gradient(135deg,#070A3A,#0A0E52)', borderRadius:12, padding:'12px 8px' }}>
                    <div style={{ fontSize:'0.65rem', color:'var(--gold)', fontWeight:700, letterSpacing:2 }}>{ev.month}</div>
                    <div style={{ fontFamily:'Playfair Display', fontSize:'2rem', fontWeight:700, color:'white', lineHeight:1 }}>{ev.day}</div>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:6 }}>
                      <span style={{ fontSize:'0.7rem', padding:'2px 10px', borderRadius:20, background:t.bg, color:t.color, border:`1px solid ${t.border}`, fontWeight:600 }}>{ev.type}</span>
                    </div>
                    <div style={{ fontWeight:700, color:'var(--navy)', fontSize:'1rem', marginBottom:4 }}>{ev.title}</div>
                    <div style={{ fontSize:'0.8rem', color:'var(--gold)', fontWeight:600, marginBottom:6 }}>🕐 {ev.time}</div>
                    <div style={{ fontSize:'0.82rem', color:'rgba(10,14,82,0.55)' }}>{ev.desc}</div>
                  </div>
                  <div style={{ textAlign:'right', flexShrink:0 }}>
                    <div style={{ fontSize:'0.72rem', color:'rgba(10,14,82,0.4)', marginBottom:10 }}>🪑 {ev.seats} seats</div>
                    <button className="btn-gold" style={{ fontSize:'0.82rem', padding:'9px 20px' }}>Register</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
