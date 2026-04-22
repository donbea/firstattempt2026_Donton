import './globals.css'

export const metadata = {
  title: 'Blue Links — Ateneo de Davao Alumni Portal',
  description: 'Rediscover. Reunite. Reconnect. The official alumni portal of Ateneo de Davao University.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Blue Links',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' }],
  },
}

// Next.js 14+: themeColor must live in viewport, not metadata
export const viewport = {
  themeColor: '#003087',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ── PWA Required Meta Tags ── */}
        <meta name="application-name"                content="Blue Links" />
        <meta name="apple-mobile-web-app-capable"    content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title"      content="Blue Links" />
        <meta name="mobile-web-app-capable"          content="yes" />
        <meta name="msapplication-TileColor"         content="#003087" />
        <meta name="msapplication-TileImage"         content="/icons/icon-144x144.png" />

        {/* ── Web App Manifest ── */}
        <link rel="manifest" href="/manifest.json" />

        {/* ── Apple Touch Icons ── */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />

        {/* ── Favicon ── */}
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/icon-72x72.png" />
      </head>
      <body>
        {children}

        {/* ── Service Worker Registration ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function (reg) {
                      console.log('[Blue Links] SW registered ✓ scope:', reg.scope);
                    })
                    .catch(function (err) {
                      console.error('[Blue Links] SW registration failed:', err);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
