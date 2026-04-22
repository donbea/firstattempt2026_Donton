'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }} className="header-section">

      {/* Building background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/images/hero.JPG" alt="AdDU" fill style={{ objectFit: 'cover', opacity: 0.18 }} />
      </div>

      {/* Bagobo tribal pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: "url('/images/bagobo-pattern.png')",
        backgroundRepeat: 'repeat', backgroundSize: '200px',
        opacity: 0.06
      }}/>

      {/* Gold bottom border */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', zIndex: 2 }}/>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 28px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 2 }}>

        {/* Left text */}
        <div>
          <div className="anim-up" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <div style={{ height: 1, width: 40, background: 'var(--gold)' }}/>
            <span style={{ fontSize: '0.72rem', letterSpacing: 4, color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase' }}>Ateneo de Davao University</span>
          </div>

          <h1 className="anim-up" style={{
            fontFamily: 'Playfair Display', fontSize: 'clamp(3.2rem, 6vw, 5rem)',
            fontWeight: 700, lineHeight: 1.08, color: 'white', marginBottom: 16
          }}>
            BLUE<br /><span className="gold-shimmer">LINKS</span>
          </h1>

          <p className="anim-up-2" style={{
            fontFamily: 'Dancing Script', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: 'var(--gold)', marginBottom: 24
          }}>
            Rediscover. Reunite. Reconnect.
          </p>

          <p className="anim-up-2" style={{
            color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75,
            maxWidth: 480, marginBottom: 40
          }}>
            Step into the alumni portal with a Magis welcome. Rekindle the connections that defined your journey and keep your network alive with fellow Blue graduates.
          </p>

          <div className="anim-up-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn-gold" style={{ fontSize: '1rem', padding: '14px 36px' }}>Get Started →</button>
            <button className="btn-outline-white" style={{ fontSize: '1rem', padding: '14px 30px' }}>Already a member? Log In</button>
          </div>

          {/* Stats */}
          <div className="anim-up-3" style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            {[['10,000+','Alumni Members'],['500+','Partner Companies'],['95%','Employment Rate']].map(([num, label], i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)' }}>{num}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: logo & feature cards */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div className="anim-float" style={{ marginBottom: 8 }}>
            <Image src="/images/knight-shield.png" alt="Blue Knight" width={160} height={160} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(245,192,37,0.3))' }} />
          </div>

          {[
            { icon: '🌐', label: 'Your Global Circle', sub: 'Connect with alumni across the globe' },
            { icon: '🎓', label: 'Blue Graduates United', sub: 'Stay linked to the Ateneo community worldwide' },
            { icon: '💼', label: 'Blue Knight Priority Jobs', sub: 'Exclusive career opportunities for alumni' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{
              width: '100%', padding: '14px 20px',
              display: 'flex', alignItems: 'center', gap: 14,
              borderLeft: '3px solid var(--gold)', cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'white' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 2, textAlign: 'center' }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', marginBottom: 6, letterSpacing: 2 }}>SCROLL</div>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold), transparent)', margin: '0 auto' }}/>
      </div>
    </section>
  )
}
