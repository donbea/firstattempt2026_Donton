import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = { title: 'Terms of Use — Blue Links' }

export default function TermsPage() {
  const sections = [
    { title:'1. Acceptance of Terms', text:'By accessing or using Blue Links, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.' },
    { title:'2. Eligibility', text:'Blue Links is exclusively for verified alumni of Ateneo de Davao University. You must provide accurate information during registration, including your alumni ID and graduation details.' },
    { title:'3. User Conduct', text:'You agree not to use the platform for any unlawful purpose, to harass or harm other users, to post false or misleading information, or to interfere with the proper functioning of the service.' },
    { title:'4. Intellectual Property', text:'All content on Blue Links, including text, graphics, logos, and software, is the property of Ateneo de Davao University and is protected by applicable intellectual property laws.' },
    { title:'5. Limitation of Liability', text:'Blue Links is provided on an "as is" basis. The university makes no warranties, express or implied, and shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.' },
    { title:'6. Changes to Terms', text:'We reserve the right to modify these terms at any time. We will notify users of significant changes via email or a prominent notice on the platform.' },
  ]
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <div style={{ marginBottom:40 }}>
            <span className="section-label">Legal</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'2.4rem', fontWeight:700, color:'var(--navy)', marginBottom:8 }}>Terms of Use</h1>
            <p style={{ color:'rgba(10,14,82,0.45)', fontSize:'0.85rem' }}>Last updated: December 1, 2024</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {sections.map((s,i) => (
              <div key={i} className="card-light" style={{ padding:28 }}>
                <h3 style={{ fontFamily:'Playfair Display', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>{s.title}</h3>
                <p style={{ color:'rgba(10,14,82,0.65)', lineHeight:1.8, fontSize:'0.9rem' }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
