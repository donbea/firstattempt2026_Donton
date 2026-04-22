'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background:'#070A3A', borderTop:'1px solid rgba(245,192,37,0.15)', padding:'60px 24px 32px', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:"url('/images/bagobo-pattern.png')", backgroundSize:'600px', opacity:0.8 }}/>
      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:40, marginBottom:48 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <Image src="/images/blue-knight.png" alt="Blue Links" width={40} height={40} style={{ objectFit:'contain' }} />
              <div>
                <div style={{ fontFamily:'Playfair Display', fontWeight:700, color:'white', letterSpacing:2, fontSize:'1rem' }}>BLUE LINKS</div>
                <div style={{ fontSize:'0.58rem', color:'var(--gold)', letterSpacing:1.5 }}>ATENEO DE DAVAO</div>
              </div>
            </div>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.85rem', lineHeight:1.7, maxWidth:220, marginBottom:20 }}>
              The official alumni portal of Ateneo de Davao University. Rediscover. Reunite. Reconnect.
            </p>
            <Image src="/images/addu-seal.png" alt="AdDU Seal" width={48} height={48} style={{ objectFit:'contain', opacity:0.7 }} />
          </div>

          {[
            { title:'Portal', links:['Home','Dashboard','Job Board','Network','Events'] },
            { title:'Account', links:['Login','Register','Profile','Settings','Digital ID'] },
            { title:'University', links:['About AdDU','Registrar','Alumni Affairs','Contact Us'] },
          ].map((col,i) => (
            <div key={i}>
              <div style={{ fontSize:'0.68rem', color:'var(--gold)', fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:16 }}>{col.title}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {col.links.map((link,j) => (
                  <a key={j} href="#" style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.875rem', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color='var(--gold)'}
                    onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.4)'}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <p style={{ color:'rgba(255,255,255,0.3)', fontSize:'0.8rem' }}>© 2024 Ateneo de Davao University. All Rights Reserved.</p>
          <div style={{ display:'flex', gap:20 }}>
            {['Privacy Policy','Terms of Use','Support'].map((link,i) => (
              <a key={i} href="#" style={{ color:'rgba(255,255,255,0.3)', fontSize:'0.8rem', textDecoration:'none' }}
                onMouseEnter={e => e.target.style.color='var(--gold)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.3)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
