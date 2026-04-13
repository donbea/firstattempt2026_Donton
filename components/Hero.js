// components/Hero.jsx
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero.JPG"
        alt="Ateneo de Davao University"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-navy-900/70">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <Image
            src="/images/knight-shield.png"
            alt="University Seal"
            width={150}
            height={150}
            className="mb-6"
          />
          <h1 className="text-5xl font-display text-white text-center">
            BLUE LINKS
          </h1>
          <div style={{ fontSize: '0.58rem', color: 'var(--gold)', letterSpacing: 1.5, fontSize: '1.05rem', marginLeft: 8, marginTop: 6 }}>
            The Ateneo Alumni Hub
          </div>
        </div>
      </div>
    </div>
  );
}