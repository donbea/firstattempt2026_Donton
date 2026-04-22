'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main>
      <Navbar />
      <section style={{ minHeight:'100vh', background:'linear-gradient(160deg,#070A3A,#0A0E52)', display:'flex', alignItems:'center', paddingTop:88, paddingBottom:60, paddingLeft:24, paddingRight:24 }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:"url('/images/bagobo-pattern.png')", backgroundSize:'200px', opacity:0.05 }}/>
        <div style={{ maxWidth:560, margin:'0 auto', width:'100%', position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <Image src="/images/addu-seal.png" alt="AdDU" width={64} height={64} style={{ objectFit:'contain', marginBottom:16 }} />
            <h1 style={{ fontFamily:'Playfair Display', fontSize:'2rem', fontWeight:700, color:'white', marginBottom:6 }}>Register as Alumni</h1>
            <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.9rem' }}>Join the Blue Knight community portal</p>
          </div>
          <div className="glass" style={{ padding:36, borderRadius:16 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
              <div>
                <label style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.6)', fontWeight:600, marginBottom:6, display:'block' }}>First Name</label>
                <input className="input-dark" placeholder="Juan" />
              </div>
              <div>
                <label style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.6)', fontWeight:600, marginBottom:6, display:'block' }}>Last Name</label>
                <input className="input-dark" placeholder="Dela Cruz" />
              </div>
            </div>
            {[
              { label:'Alumni ID / Student Number', placeholder:'e.g. 2015-12345' },
              { label:'Email Address', placeholder:'juan@email.com' },
              { label:'Password', placeholder:'Create a strong password' },
              { label:'Confirm Password', placeholder:'Repeat your password' },
            ].map((f,i) => (
              <div key={i} style={{ marginBottom:16 }}>
                <label style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.6)', fontWeight:600, marginBottom:6, display:'block' }}>{f.label}</label>
                <input className="input-dark" type={f.label.includes('Password') ? 'password' : 'text'} placeholder={f.placeholder} />
              </div>
            ))}
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.6)', fontWeight:600, marginBottom:6, display:'block' }}>Graduation Year</label>
              <select className="input-dark" style={{ cursor:'pointer' }}>
                {Array.from({length:30},(_,i)=>2024-i).map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <button className="btn-gold" style={{ width:'100%', justifyContent:'center', fontSize:'1rem', padding:'14px' }}>Create Account →</button>
            <p style={{ textAlign:'center', marginTop:16, color:'rgba(255,255,255,0.4)', fontSize:'0.82rem' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color:'var(--gold)', fontWeight:600 }}>Log In</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
