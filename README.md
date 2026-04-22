# Blue Links — Ateneo de Davao University Alumni Portal

> **Rediscover. Reunite. Reconnect.**
> The official alumni portal of Ateneo de Davao University.

---

## Activity 15 — PWA Conversion (`feature/pwa-ready`)

### Overview

This branch transforms the static Next.js 14 export into a fully compliant **Progressive Web Application (PWA)**. The app now:

- 📲 Shows an **"Install App"** prompt in the browser address bar
- ⚡ Loads **instantly** on repeat visits via Cache-First strategies
- 🔌 Works **100% offline** — all pages and images load without a network connection
- 🎨 Uses **AdDU branding** — deep blue `#003087` background, university seal icon

---

## New Files Added

| File | Purpose |
|---|---|
| `public/manifest.json` | Web App Manifest — declares app name, icons, theme color, and display mode to the browser |
| `public/sw.js` | Service Worker — intercepts all network requests; implements caching strategies |
| `public/offline.html` | Branded fallback page shown when the user is offline and requests an uncached page |
| `public/icons/icon-*.png` | 8 AdDU-branded icons (72px → 512px) generated from `addu-seal.png` |

## Modified Files

| File | Change |
|---|---|
| `app/layout.js` | Added `<link rel="manifest">`, all PWA meta tags, Apple touch icons, and SW registration `<script>` |

---

## PWA Checklist

- [x] Valid `manifest.json` with `name`, `short_name`, `icons`, `start_url`, `display: standalone`
- [x] Icons at 192×192 and 512×512 (minimum requirement for installability)
- [x] `maskable` purpose on 192 and 512 icons (Android adaptive icons)
- [x] `theme_color` set in both manifest and `<meta>` (via Next.js `viewport` export)
- [x] Service Worker registered on page load
- [x] App shell (images, fonts, JS, CSS) pre-cached on SW install
- [x] Offline fallback page (`/offline.html`) served when network is unavailable
- [x] HTTPS required (provided by Vercel/GitHub Pages deployment)

---

## Caching Strategy

| Asset Type | Strategy | Reason |
|---|---|---|
| 🖼 Images | **Cache-First** | Large files, rarely change; instant load from cache |
| 📦 JS / CSS | **Cache-First** | Content-hashed by Next.js; always safe to serve from cache |
| 📄 HTML / Navigation | **Network-First → Cache fallback** | Serve fresh content when online; fall back to cached version offline |
| 🔀 Everything else | **Stale-While-Revalidate** | Show cached immediately, update in background |

---

## Master Prompt (AI Log)

> The following prompt was used with Claude to initiate the PWA conversion:
>
> *"I am using Next.js 14 with `output: 'export'` (fully static build, no server). My project is called Blue Links — an alumni portal for Ateneo de Davao University. The brand color is deep blue #003087. I need to convert this into a PWA. Please generate: (1) a valid manifest.json with AdDU branding and all required icon sizes from 72px to 512px, (2) a sw.js Service Worker that uses Cache-First for images and JS/CSS, Network-First for HTML navigation with an offline fallback, and Stale-While-Revalidate for everything else, (3) the Service Worker registration script for layout.js, (4) all required PWA meta tags for iOS, Android, and Windows. The app must show the Install button in Chrome's address bar and pass the offline stress test in DevTools."*

---

## Hallucinations & Errors Fixed Manually

1. **`next-pwa` package incompatibility** — AI initially suggested installing `next-pwa`. This package does **not** support `output: 'export'` mode in Next.js 14, causing a build error. **Fix:** Implemented the Service Worker manually with no external packages.

2. **`themeColor` in `metadata` export** — AI put `themeColor` inside `export const metadata`, which triggers a deprecation warning in Next.js 14+. **Fix:** Moved `themeColor` to `export const viewport` as required by the Next.js 14 API.

3. **`<script>` tag stripped during static export** — AI wrote the SW registration as a plain JSX `<script src="">` tag, which Next.js strips when building a static export. **Fix:** Used `dangerouslySetInnerHTML` to inline the registration script so it survives the static build.

4. **`offline.html` missing from PRECACHE_ASSETS** — The first SW draft referenced `/offline.html` as a fallback but never added it to the pre-cache list. If a user went offline on their very first visit, the fallback itself would 404. **Fix:** Added `/offline.html` explicitly to `PRECACHE_ASSETS`.

5. **Icons sourced from wrong image** — AI assumed the icon source was `public/images/logo.png`. The actual file is `public/images/addu-seal.png`. **Fix:** Used the correct path and generated all 8 icon sizes programmatically with a Pillow (Python) script.

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Static export → /out
```

To test PWA offline behavior:
1. Run `npm run build` then serve the `/out` folder with `npx serve out`
2. Open Chrome DevTools → Application → Service Workers
3. Check **Offline**, then refresh — the full app should still load

---

## Branch Structure

| Branch | Description |
|---|---|
| `main` | Stable Activity 14 codebase |
| `feature/pwa-ready` | ✅ This branch — PWA conversion (Activity 15) |
