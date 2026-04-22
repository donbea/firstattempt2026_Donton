'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function DigitalIDPage() {
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:700, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:40 }}>
            <span className="section-label">Your Identity</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'2.4rem', fontWeight:700, color:'var(--navy)', marginBottom:10 }}>Digital Alumni ID</h1>
            <p style={{ color:'rgba(10,14,82,0.5)' }}>Your official Ateneo de Davao University Alumni Card</p>
          </div>

          {/* ID Card */}
          <div style={{ background:'linear-gradient(135deg,#070A3A 0%,#0A0E52 50%,#1A3AB8 100%)', borderRadius:20, padding:36, position:'relative', overflow:'hidden', marginBottom:24, boxShadow:'0 20px 60px rgba(7,10,58,0.4)' }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:"url('/images/bagobo-pattern.png')", backgroundSize:'200px', opacity:0.06 }}/>
            <div style={{ position:'absolute', top:-40, right:-40, width:200, height:200, borderRadius:'50%', background:'rgba(245,192,37,0.06)' }}/>

            <div style={{ position:'relative', zIndex:1 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:32 }}>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <Image src="/images/addu-seal.png" alt="AdDU Seal" width={44} height={44} style={{ objectFit:'contain' }} />
                  <div>
                    <div style={{ fontFamily:'Playfair Display', fontWeight:700, color:'white', fontSize:'0.9rem', letterSpacing:2 }}>BLUE LINKS</div>
                    <div style={{ fontSize:'0.55rem', color:'var(--gold)', letterSpacing:1.5 }}>ATENEO DE DAVAO UNIVERSITY</div>
                  </div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:'0.6rem', color:'rgba(255,255,255,0.4)', letterSpacing:1 }}>ALUMNI ID</div>
                  <div style={{ fontFamily:'monospace', color:'var(--gold)', fontWeight:700, fontSize:'0.9rem' }}>BL-2018-04821</div>
                </div>
              </div>

              <div style={{ display:'flex', gap:24, alignItems:'center', marginBottom:28 }}>
                <div style={{ width:80, height:80, borderRadius:'50%', background:'linear-gradient(135deg,var(--gold),var(--gold-light))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', fontWeight:800, color:'var(--navy)', border:'3px solid rgba(245,192,37,0.4)', flexShrink:0 }}>S</div>
                <div>
                  <div style={{ fontFamily:'Playfair Display', fontSize:'1.6rem', fontWeight:700, color:'white' }}>Stephany Reyes</div>
                  <div style={{ color:'var(--gold)', fontSize:'0.85rem', fontWeight:600, marginBottom:4 }}>Class of 2018 · Information Technology</div>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(22,163,74,0.15)', border:'1px solid rgba(22,163,74,0.3)', borderRadius:20, padding:'3px 12px', fontSize:'0.72rem', color:'#4ADE80' }}>✓ Verified Alumni</div>
                </div>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:16, background:'rgba(255,255,255,0.05)', borderRadius:12, padding:16, marginBottom:20 }}>
                {[['Degree','B.S. Information Technology'],['Department','School of Engineering'],['Status','Active Alumni']].map(([k,v],i) => (
                  <div key={i}>
                    <div style={{ fontSize:'0.6rem', color:'rgba(255,255,255,0.4)', letterSpacing:1.5, textTransform:'uppercase', marginBottom:3 }}>{k}</div>
                    <div style={{ fontSize:'0.78rem', color:'white', fontWeight:600 }}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                <div>
                  <div style={{ fontSize:'0.6rem', color:'rgba(255,255,255,0.35)', marginBottom:2 }}>ISSUED · VALID UNTIL</div>
                  <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.6)' }}>June 2018 · Lifetime</div>
                </div>
                <div style={{ textAlign:'center' }}>
                  <div style={{ background:'white', padding:8, borderRadius:8, display:'inline-block' }}>
                    <div style={{ width:64, height:64, background:'#070A3A', display:'grid', gridTemplateColumns:'repeat(8,1fr)', gap:1 }}>
                      {Array.from({length:64}).map((_,i) => <div key={i} style={{ background: Math.random()>0.5 ? '#070A3A' : 'white' }}/>)}
                    </div>
                  </div>
                  <div style={{ fontSize:'0.55rem', color:'rgba(255,255,255,0.3)', marginTop:4 }}>SCAN TO VERIFY</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
            <button className="btn-primary">⬇ Download PDF</button>
            <button className="btn-gold">📤 Share ID</button>
            <button className="btn-outline-navy">🖨 Print</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
