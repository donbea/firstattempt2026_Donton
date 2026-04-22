'use client'
import Image from 'next/image'

const news = [
  { cat: 'Campus Update', title: 'Grand Alumni Homecoming 2024: Registration Now Open', preview: 'Join thousands of Blue Knights this November for our biggest reunion yet.', color: 'var(--gold)' },
  { cat: 'Infrastructure', title: 'Inauguration of the Martinez Sports Complex', preview: 'A new chapter for AdDU sports begins with world-class facilities.', color: 'var(--secondary)' },
  { cat: 'Alumni Spotlight', title: 'Blue Knight wins National Innovation Award', preview: 'Class of 2015 alumna recognized for breakthroughs in sustainable tech.', color: '#22C55E' },
]

const events = [
  { month: 'DEC', day: '07', title: 'Alumni Webinar: Tech Trends', time: '6:00 PM • Zoom', type: 'Virtual' },
  { month: 'DEC', day: '14', title: 'Blue Knight Golf Cup', time: '8:00 AM • AdDU Campus', type: 'Sports' },
  { month: 'DEC', day: '20', title: 'Grand Alumni Homecoming', time: '4:00 PM • Jacinto Hall', type: 'Social' },
]

export default function DashboardSection() {
  return (
    <section id="dashboard" style={{ background: 'var(--white)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Alumni Dashboard</span>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>
            Welcome back, Blue Knight
          </h2>
          <p style={{ color: 'rgba(10,14,82,0.55)', maxWidth: 480, margin: '0 auto' }}>
            Stay connected, stay informed. Everything your alumni community needs in one place.
          </p>
          <hr className="gold-line" style={{ width: 80, margin: '24px auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>

          {/* Profile card */}
          <div className="card-light" style={{ overflow: 'hidden' }}>
            <div style={{
              background: 'linear-gradient(135deg, #070A3A, #0A0E52)',
              padding: '28px',
              position: 'relative', overflow: 'hidden'
            }}>
              {/* Tribal pattern in header */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: "url('/bagobo-pattern.png')",
                backgroundSize: '180px', opacity: 0.06
              }}/>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Ateneo de Davao Blue Knight</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)',
                    border: '2px solid rgba(245,192,37,0.4)'
                  }}>S</div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>Welcome back, Stephany!</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>Class of 2018 • Information Technology</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <button className="btn-outline-navy" style={{ flex: 1, fontSize: '0.82rem', padding: '9px' }}>Update Profile</button>
                <button className="btn-primary" style={{ flex: 1, fontSize: '0.82rem', padding: '9px', justifyContent: 'center' }}>Digital ID</button>
              </div>

              <div style={{ fontSize: '0.68rem', color: 'rgba(10,14,82,0.4)', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Quick Access</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[['📄','Documents'],['💼','Job Board'],['🤝','Donation'],['👥','Network']].map(([icon, label], i) => (
                  <div key={i} style={{
                    border: '1px solid rgba(10,14,82,0.1)', borderRadius: 10, padding: '14px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                    cursor: 'pointer', transition: 'all 0.2s', background: 'rgba(10,14,82,0.02)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(45,52,148,0.08)'; e.currentTarget.style.borderColor='rgba(45,52,148,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(10,14,82,0.02)'; e.currentTarget.style.borderColor='rgba(10,14,82,0.1)'; }}>
                    <span style={{ fontSize: '1.4rem' }}>{icon}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--navy)', fontWeight: 600 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="card-light" style={{ padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>Latest News</h3>
              <a href="#" style={{ color: 'var(--secondary)', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>View All →</a>
            </div>

            {/* Building image */}
            <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 20, height: 140, position: 'relative' }}>
              <Image src="/addu-tower.png" alt="AdDU Campus" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,10,58,0.7), transparent)' }}/>
              <div style={{ position: 'absolute', bottom: 12, left: 14 }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Featured</span>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>Grand Alumni Homecoming 2024</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {news.map((item, i) => (
                <div key={i} style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: 14, cursor: 'pointer' }}>
                  <div style={{ fontSize: '0.68rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>{item.cat}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy)', marginBottom: 3, lineHeight: 1.4 }}>{item.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(10,14,82,0.5)', lineHeight: 1.5 }}>{item.preview}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card-light" style={{ padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>Upcoming Events</h3>
              <a href="#" style={{ color: 'var(--secondary)', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>Calendar →</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {events.map((ev, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  border: '1px solid rgba(10,14,82,0.08)', borderRadius: 12, padding: '14px 16px',
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.background='rgba(245,192,37,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(10,14,82,0.08)'; e.currentTarget.style.background='transparent'; }}>
                  <div style={{
                    minWidth: 48, textAlign: 'center',
                    background: 'linear-gradient(135deg, #070A3A, #0A0E52)',
                    borderRadius: 8, padding: '6px 4px'
                  }}>
                    <div style={{ fontSize: '0.58rem', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{ev.month}</div>
                    <div style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{ev.day}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy)' }}>{ev.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(10,14,82,0.5)' }}>⏰ {ev.time}</div>
                  </div>
                  <span style={{ fontSize: '0.68rem', padding: '4px 10px', borderRadius: 20, background: 'rgba(10,14,82,0.07)', color: 'var(--secondary)', fontWeight: 600 }}>{ev.type}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, background: 'linear-gradient(135deg, #070A3A, #0A0E52)', borderRadius: 12, padding: 20, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/bagobo-pattern.png')", backgroundSize: '180px', opacity: 0.07 }}/>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 700, marginBottom: 4 }}>🎉 Grand Alumni Homecoming 2024</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', marginBottom: 14 }}>Registration is now open. Join thousands of Blue Knights.</div>
                <button className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '11px' }}>Register Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
