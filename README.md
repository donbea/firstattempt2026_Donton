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
> *We will make activity 15, attached file is from my activity 14, and pasted below are the instructions for activity 15. To master the "Vibe Coding" workflow—using Generative AI to architect and implement advanced system features—by converting a static framework-based project into a high-performance, offline-ready Progressive Web Application (PWA).
Instructions:
The Git Workflow Repository: Continue using your public GitHub repository from Activity #14. Branching: Create a new branch specifically for this transformation: git checkout -b feature/pwa-ready. Why? In a professional environment, major architectural shifts like PWA conversion are always handled in a feature branch to preserve the stability of the "Main" codebase.
The "Vibe Coding" Process: "Vibe Coding" isn't just copy-pasting; it’s a conversational flow with your AI (Cursor, ChatGPT, Claude, etc.). The Goal: Use AI to guide you through the PWA Requirements Checklist: (1) Generating a valid manifest.json (with University Branding). (2) Registering a Service Worker. (3) Implementing Caching Strategies so the app loads instantly and works offline. (4) Managing the App Icons (using the assets provided in the Branding Kit).
Documentation (The AI Log) ReadMe Update: In your feature/pwa-ready branch, update your README.md. Include: The "Master Prompt" that successfully initiated your PWA conversion and a list of any "hallucinations" or errors you had to fix manually.
The Deliverable: The "Architecture Deep-Dive" Video Upload an unlisted video (YouTube/Google Drive) showcasing your process. Your video must follow this specific sequence: (1) The Prompt: Show the initial prompt you used to tell the AI about your specific JS framework (e.g., "I am using SolidJS, help me make it a PWA"). (2) The Reasoning: Briefly explain why the AI suggested certain files (e.g., Why do we need the Service Worker?). (3) IDE Walkthrough: Show the code changes. Highlight the manifest.json, the Service Worker registration, and where the offline assets are cached. (4) The "Install" Demo: Run your project and show the "Install App" icon appearing in the browser address bar. (5) The "Offline" Stress Test: * Open Browser's DevTools → Application Tab → Service Workers. --- Check the "Offline" checkbox. --- Refresh the page. Everything—including images—must still load perfectly.
Submission (1) Push all changes to GitHub. (2) Paste the Video Link in the text editor on this submission link.*

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
