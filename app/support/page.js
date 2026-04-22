'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SupportPage() {
  const faqs = [
    { q:'How do I verify my alumni status?', a:'Submit your student ID number and graduation year during registration. Our team will verify within 2–3 business days.' },
    { q:'I forgot my password. How do I reset it?', a:'Click "Forgot Password?" on the login page and enter your registered email. A reset link will be sent within a few minutes.' },
    { q:'How do I update my professional information?', a:'Go to Profile → Edit Profile. You can update your current employer, position, and contact details at any time.' },
    { q:'Can I hide my profile from companies?', a:'Yes. Enable Stealth Mode in Settings → Privacy Settings to hide your profile from company searches.' },
    { q:'How do I apply for a job on the Job Board?', a:'Browse the Job Board, click on a listing, and click "Apply Now". Your Blue Knight Priority status gives you preferred access.' },
  ]
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="section-label">Help Center</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Support</h1>
            <p style={{ color:'rgba(10,14,82,0.55)', maxWidth:440, margin:'0 auto' }}>Find answers to common questions or reach out to our support team.</p>
            <hr className="gold-line" style={{ width:80, margin:'24px auto 0' }} />
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:48 }}>
            {[
              { icon:'💬', title:'Live Chat', sub:'Chat with us now', btn:'Start Chat' },
              { icon:'📧', title:'Email Support', sub:'alumni-support@addu.edu.ph', btn:'Send Email' },
              { icon:'📞', title:'Phone', sub:'(082) 221-2411 loc. 8200', btn:'Call Now' },
            ].map((c,i) => (
              <div key={i} className="card-light" style={{ padding:24, textAlign:'center' }}>
                <div style={{ fontSize:'2rem', marginBottom:10 }}>{c.icon}</div>
                <div style={{ fontWeight:700, color:'var(--navy)', marginBottom:4 }}>{c.title}</div>
                <div style={{ fontSize:'0.78rem', color:'rgba(10,14,82,0.5)', marginBottom:16 }}>{c.sub}</div>
                <button className="btn-primary" style={{ fontSize:'0.82rem', padding:'8px 20px' }}>{c.btn}</button>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily:'Playfair Display', fontWeight:700, color:'var(--navy)', marginBottom:24, fontSize:'1.5rem' }}>Frequently Asked Questions</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {faqs.map((faq,i) => (
              <div key={i} className="card-light" style={{ padding:24 }}>
                <div style={{ fontWeight:700, color:'var(--navy)', marginBottom:8 }}>❓ {faq.q}</div>
                <div style={{ color:'rgba(10,14,82,0.6)', lineHeight:1.7, fontSize:'0.9rem' }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
