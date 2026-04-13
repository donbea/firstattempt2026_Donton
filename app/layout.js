import './globals.css'

export const metadata = {
  title: 'Blue Links — Ateneo de Davao Alumni Portal',
  description: 'Rediscover. Reunite. Reconnect. The official alumni portal of Ateneo de Davao University.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
