'use client'

export default function ShieldLogo({ size = 60, className = '' }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 5 L90 20 L90 60 Q90 90 50 110 Q10 90 10 60 L10 20 Z" fill="#1A3060" stroke="#D4A843" strokeWidth="2"/>
      <path d="M50 12 L83 24 L83 60 Q83 86 50 103 Q17 86 17 60 L17 24 Z" fill="#122348"/>
      {/* Knight helmet simplified */}
      <circle cx="50" cy="42" r="14" fill="none" stroke="#D4A843" strokeWidth="1.5"/>
      <path d="M40 38 Q50 28 60 38" stroke="#D4A843" strokeWidth="1.5" fill="none"/>
      <rect x="43" y="42" width="14" height="10" rx="2" fill="#D4A843" opacity="0.8"/>
      <path d="M43 50 L38 58" stroke="#D4A843" strokeWidth="1.5"/>
      <path d="M57 50 L62 58" stroke="#D4A843" strokeWidth="1.5"/>
      <path d="M38 58 L62 58" stroke="#D4A843" strokeWidth="1.5"/>
      <path d="M43 46 L57 46" stroke="#122348" strokeWidth="1" opacity="0.6"/>
    </svg>
  )
}
