'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function AuthSection() {
  const [mode, setMode] = useState('login')
  const [bio, setBio] = useState(true)

  return (
    <section id="login" style={{ background:'var(--white)', padding:'100px 24px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px,1fr))', gap:56, alignItems:'center' }}>

        {/* Left branding */}
        <div>
          <div style={{ marginBottom:28 }}>
            <Image src="images/knight-shield.png" alt="Blue Knight" width={80} height={80} style={{ objectFit:'contain' }} />
          </div>
          <h2 style={{ fontFamily:'Playfair Display', fontSize:'clamp(2rem,3.5vw,2.8rem)', fontWeight:700, color:'var(--navy)', lineHeight:1.15, marginBottom:14 }}>
            Welcome,<br /><span style={{ color:'var(--secondary)' }}>Blue Knight!</span>
          </h2>
          <p style={{ fontFamily:'Dancing Script', fontSize:'1.4rem', color:'var(--gold)', marginBottom:20 }}>
            Rediscover. Reunite. Reconnect.
          </p>
          <p style={{ color:'rgba(10,14,82,0.6)', lineHeight:1.75, marginBottom:32, maxWidth:380, fontSize:'0.95rem' }}>
            Enter your credentials to access the portal and reconnect with the Ateneo de Davao alumni community.
          </p>
          {['Exclusive job opportunities','Alumni network access','Digital Alumni ID','Events & reunions'].map((item,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, color:'rgba(10,14,82,0.65)', fontSize:'0.9rem', marginBottom:10 }}>
              <span style={{ color:'var(--gold)', fontSize:'1rem', fontWeight:700 }}>✓</span> {item}
            </div>
          ))}

          {/* AdDU logo at bottom */}
          <div style={{ marginTop:36, paddingTop:24, borderTop:'1px solid rgba(10,14,82,0.08)', display:'flex', alignItems:'center', gap:12 }}>
            <Image src="images/addu-seal.png" alt="AdDU Logo" width={40} height={40} style={{ objectFit:'contain' }} />
            <div>
              <div style={{ fontFamily:'Playfair Display', fontSize:'0.875rem', fontWeight:700, color:'var(--navy)' }}>Ateneo de Davao University</div>
              <div style={{ fontSize:'0.72rem', color:'rgba(10,14,82,0.45)' }}>Fortes in Fide</div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div>
          <div style={{ display:'flex', marginBottom:24, background:'rgba(10,14,82,0.06)', borderRadius:10, padding:4 }}>
            {[['login','Log In'],['signup','Register']].map(([m,label]) => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex:1, padding:'10px', borderRadius:8, border:'none', cursor:'pointer',
                background: mode===m ? 'linear-gradient(135deg,var(--btn-start),var(--btn-end))' : 'transparent',
                color: mode===m ? 'white' : 'rgba(10,14,82,0.5)',
                fontFamily:'DM Sans', fontWeight:600, fontSize:'0.875rem', transition:'all 0.2s'
              }}>{label}</button>
            ))}
          </div>

          <div className="card-light" style={{ padding:32 }}>
            {mode==='login' ? (
              <>
                <h3 style={{ fontFamily:'Playfair Display', fontSize:'1.3rem', color:'var(--navy)', fontWeight:700, marginBottom:6 }}>Sign In</h3>
                <p style={{ color:'rgba(10,14,82,0.45)', fontSize:'0.85rem', marginBottom:24 }}>Access your alumni portal</p>
                <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                  {[['Alumni ID / Email','Enter your ID or email','text'],['Password','Enter your password','password']].map(([label,placeholder,type],i) => (
                    <div key={i}>
                      <label style={{ fontSize:'0.7rem', color:'rgba(10,14,82,0.5)', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', display:'block', marginBottom:8 }}>{label}</label>
                      <input className="input-light" type={type} placeholder={placeholder} />
                    </div>
                  ))}
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.82rem' }}>
                    <label style={{ display:'flex', alignItems:'center', gap:8, color:'rgba(10,14,82,0.55)', cursor:'pointer' }}>
                      <input type="checkbox" style={{ accentColor:'var(--secondary)' }} /> Remember Me
                    </label>
                    <a href="#" style={{ color:'var(--secondary)', textDecoration:'none', fontWeight:600 }}>Forgot Password?</a>
                  </div>
                  <button className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:'1rem', padding:'14px' }}>Login →</button>
                  <div style={{ textAlign:'center', color:'rgba(10,14,82,0.35)', fontSize:'0.8rem' }}>OR</div>
                  <button className="btn-outline-navy" style={{ width:'100%', justifyContent:'center', fontSize:'0.9rem', padding:'12px' }}>🔒 Continue with Face ID</button>
                  <div style={{ textAlign:'center', background:'rgba(10,14,82,0.03)', border:'1px solid rgba(10,14,82,0.08)', borderRadius:10, padding:16 }}>
                    <p style={{ color:'rgba(10,14,82,0.55)', fontSize:'0.82rem', marginBottom:6 }}>AdDU graduate but no account yet?</p>
                    <button onClick={() => setMode('signup')} style={{ color:'var(--secondary)', background:'none', border:'none', cursor:'pointer', fontWeight:700, fontSize:'0.875rem', fontFamily:'DM Sans' }}>Register as Alumni →</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ fontFamily:'Playfair Display', fontSize:'1.3rem', color:'var(--navy)', fontWeight:700, marginBottom:6 }}>Alumni Registration</h3>
                <p style={{ color:'rgba(10,14,82,0.45)', fontSize:'0.85rem', marginBottom:20 }}>Register to reconnect with the Ateneo community</p>
                <div style={{ display:'flex', justifyContent:'center', marginBottom:20 }}>
                  <div style={{ width:72, height:72, borderRadius:'50%', background:'rgba(10,14,82,0.05)', border:'2px dashed rgba(10,14,82,0.2)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:'1.6rem' }}>👤</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {[['Full Name','Juan dela Cruz','text'],['Graduation Year','YYYY','text'],['Email','example@addu.edu.ph','email'],['Password','Enter your password','password']].map(([label,placeholder,type],i) => (
                    <div key={i}>
                      <label style={{ fontSize:'0.7rem', color:'rgba(10,14,82,0.5)', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', display:'block', marginBottom:6 }}>{label}</label>
                      <input className="input-light" type={type} placeholder={placeholder} />
                    </div>
                  ))}
                  <div style={{ background:'rgba(245,192,37,0.08)', border:'1px solid rgba(245,192,37,0.25)', borderRadius:12, padding:'14px 16px', display:'flex', alignItems:'center', gap:12 }}>
                    <span style={{ fontSize:'1.2rem' }}>🔐</span>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:600, fontSize:'0.875rem', color:'var(--navy)' }}>Enable Biometrics</div>
                      <div style={{ fontSize:'0.72rem', color:'rgba(10,14,82,0.5)', lineHeight:1.4 }}>Secure with FaceID or TouchID</div>
                    </div>
                    <div onClick={() => setBio(!bio)} style={{ width:44, height:24, borderRadius:12, background: bio ? 'var(--secondary)' : 'rgba(10,14,82,0.15)', position:'relative', cursor:'pointer', transition:'all 0.3s', minWidth:44 }}>
                      <div style={{ width:20, height:20, borderRadius:'50%', background:'white', position:'absolute', top:2, left: bio ? 22 : 2, transition:'left 0.3s' }}/>
                    </div>
                  </div>
                  <button className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:'1rem', padding:'14px' }}>Create Account</button>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
