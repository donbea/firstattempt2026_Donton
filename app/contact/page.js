'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:1000, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="section-label">Get In Touch</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Contact Us</h1>
            <hr className="gold-line" style={{ width:80, margin:'24px auto 0' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
            <div>
              <div className="card-light" style={{ padding:32, marginBottom:20 }}>
                <h3 style={{ fontFamily:'Playfair Display', fontWeight:700, color:'var(--navy)', marginBottom:20 }}>Send a Message</h3>
                {[{label:'Full Name',ph:'Your name'},{label:'Email',ph:'your@email.com'},{label:'Subject',ph:'How can we help?'}].map((f,i) => (
                  <div key={i} style={{ marginBottom:16 }}>
                    <label style={{ fontSize:'0.78rem', fontWeight:600, color:'var(--navy)', marginBottom:6, display:'block' }}>{f.label}</label>
                    <input className="input-light" placeholder={f.ph} />
                  </div>
                ))}
                <div style={{ marginBottom:20 }}>
                  <label style={{ fontSize:'0.78rem', fontWeight:600, color:'var(--navy)', marginBottom:6, display:'block' }}>Message</label>
                  <textarea className="input-light" rows={5} placeholder="Write your message here..." style={{ resize:'vertical' }} />
                </div>
                <button className="btn-gold" style={{ width:'100%', justifyContent:'center' }}>Send Message →</button>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {[
                { icon:'📍', title:'Address', text:'E. Jacinto Street, Davao City, 8000 Davao del Sur, Philippines' },
                { icon:'📞', title:'Phone', text:'(082) 221-2411 local 8200' },
                { icon:'📧', title:'Email', text:'alumni@addu.edu.ph' },
                { icon:'🕐', title:'Office Hours', text:'Monday – Friday, 8:00 AM – 5:00 PM' },
              ].map((item,i) => (
                <div key={i} className="card-light" style={{ padding:20, display:'flex', gap:16, alignItems:'flex-start' }}>
                  <span style={{ fontSize:'1.5rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight:700, color:'var(--navy)', marginBottom:4 }}>{item.title}</div>
                    <div style={{ color:'rgba(10,14,82,0.55)', fontSize:'0.875rem' }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
