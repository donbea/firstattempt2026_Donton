'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home',      href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Job Board', href: '/job-board' },
    { label: 'Network',   href: '/network' },
    { label: 'Events',    href: '/events' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(7,10,58,0.97)' : 'rgba(7,10,58,0.75)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(245,192,37,0.15)',
      transition: 'all 0.3s'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', height: 68, gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <Link href="/">
            <Image src="/images/blue-knight.png" alt="Blue Links" width={42} height={42} style={{ objectFit: 'contain' }} />
          </Link>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.05rem', letterSpacing: 3, color: 'white' }}>BLUE LINKS</div>
            <div style={{ fontSize: '0.58rem', color: 'var(--gold)', letterSpacing: 1.5, marginTop: -2 }}>ATENEO DE DAVAO UNIVERSITY</div>
          </Link>
        </div>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, marginLeft: 20 }}>
          <Link href="/login" className="btn-outline-white" style={{ padding: '8px 20px', fontSize: '0.85rem', textDecoration: 'none' }}>Log In</Link>
          <Link href="/register" className="btn-gold" style={{ padding: '9px 20px', fontSize: '0.85rem', textDecoration: 'none' }}>Get Started</Link>
        </div>
      </div>
    </nav>
  )
}
