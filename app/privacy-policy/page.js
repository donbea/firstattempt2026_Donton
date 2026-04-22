import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = { title: 'Privacy Policy — Blue Links' }

export default function PrivacyPage() {
  const sections = [
    { title:'1. Information We Collect', text:'We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support. This includes your name, email address, alumni ID, educational background, and professional information.' },
    { title:'2. How We Use Your Information', text:'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and events.' },
    { title:'3. Information Sharing', text:'We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except to trusted third parties who assist us in operating our platform, conducting our business, or serving you.' },
    { title:'4. Data Security', text:'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
    { title:'5. Your Rights', text:'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact our Data Protection Officer.' },
    { title:'6. Contact Us', text:'If you have any questions about this Privacy Policy, please contact us at privacy@addu.edu.ph or through our contact page.' },
  ]
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'var(--white)', paddingTop:100, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <div style={{ marginBottom:40 }}>
            <span className="section-label">Legal</span>
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'2.4rem', fontWeight:700, color:'var(--navy)', marginBottom:8 }}>Privacy Policy</h1>
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
