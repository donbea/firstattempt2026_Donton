import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

export const metadata = { title: 'About AdDU — Blue Links' }

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          {/* Hero */}
          <div style={{ background:'linear-gradient(135deg,#070A3A,#0A0E52)', borderRadius:20, padding:'60px 48px', marginBottom:48, position:'relative', overflow:'hidden', textAlign:'center' }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:"url('/images/bagobo-pattern.png')", backgroundSize:'200px', opacity:0.06 }}/>
            <div style={{ position:'relative', zIndex:1 }}>
              <Image src="/images/addu-seal.png" alt="AdDU Seal" width={80} height={80} style={{ objectFit:'contain', marginBottom:20 }} />
              <h1 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'white', marginBottom:12 }}>Ateneo de Davao University</h1>
              <p style={{ fontFamily:'Dancing Script', fontSize:'1.4rem', color:'var(--gold)' }}>Fortes in Fide — Strong in Faith</p>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24, marginBottom:40 }}>
            {[
              { icon:'🎓', title:'Our Mission', text:'To form persons of competence, conscience, and compassion who are committed to serve God, the Church, the nation, and the world through excellent Jesuit education.' },
              { icon:'🏛', title:'Our History', text:'Founded in 1948 by the Society of Jesus, Ateneo de Davao University has grown to become one of Mindanao\'s premier Catholic universities, serving over 15,000 students.' },
              { icon:'⚓', title:'Jesuit Values', text:'Guided by the Ignatian principle of Magis — the pursuit of excellence for the greater glory of God and the service of all humanity, especially the marginalized.' },
            ].map((item,i) => (
              <div key={i} className="card-light" style={{ padding:28 }}>
                <div style={{ fontSize:'2rem', marginBottom:12 }}>{item.icon}</div>
                <h3 style={{ fontFamily:'Playfair Display', fontWeight:700, color:'var(--navy)', marginBottom:10 }}>{item.title}</h3>
                <p style={{ color:'rgba(10,14,82,0.6)', lineHeight:1.7, fontSize:'0.9rem' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginBottom:40 }}>
            {[['1948','Founded'],['15,000+','Students'],['50,000+','Alumni'],['4','Campuses']].map(([num,label],i) => (
              <div key={i} className="card-light" style={{ padding:24, textAlign:'center' }}>
                <div style={{ fontFamily:'Playfair Display', fontSize:'2rem', fontWeight:700, color:'var(--gold)', marginBottom:4 }}>{num}</div>
                <div style={{ fontSize:'0.8rem', color:'rgba(10,14,82,0.5)', fontWeight:600 }}>{label}</div>
              </div>
            ))}
          </div>

          <div id="alumni-affairs" className="card-light" style={{ padding:32, marginBottom:20 }}>
            <h2 style={{ fontFamily:'Playfair Display', fontWeight:700, color:'var(--navy)', marginBottom:16 }}>Alumni Affairs Office</h2>
            <p style={{ color:'rgba(10,14,82,0.6)', lineHeight:1.7, marginBottom:16 }}>The Alumni Affairs Office serves as the bridge between the university and its graduates, fostering lifelong connections and providing support for alumni career development, networking, and community engagement.</p>
            <button className="btn-primary">Contact Alumni Affairs →</button>
          </div>

          <div id="registrar" className="card-light" style={{ padding:32 }}>
            <h2 style={{ fontFamily:'Playfair Display', fontWeight:700, color:'var(--navy)', marginBottom:16 }}>Registrar's Office</h2>
            <p style={{ color:'rgba(10,14,82,0.6)', lineHeight:1.7, marginBottom:16 }}>Request official transcripts, diplomas, and other academic documents through the Office of the Registrar. Processing time is 3–5 business days for standard requests.</p>
            <button className="btn-gold">Request Documents</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
