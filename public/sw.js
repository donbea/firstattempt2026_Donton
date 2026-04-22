// ================================================================
// Blue Links PWA — Service Worker (sw.js)
// Ateneo de Davao University Alumni Portal
// ================================================================

const CACHE_NAME = 'bluelinks-v1';
const OFFLINE_URL = '/offline.html';

// Assets to pre-cache during install (the "app shell")
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/images/addu-seal.png',
  '/images/addu-seal-white.png',
  '/images/addu-building.png',
  '/images/addu-blue-building.png',
  '/images/bagobo-pattern.png',
  '/images/blue-knight.png',
  '/images/knight-shield.png',
  '/images/hero.JPG',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
];

// ---------------------------------------------------------------
// INSTALL — Pre-cache the app shell
// ---------------------------------------------------------------
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Blue Links Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching app shell assets');
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch((err) =>
            console.warn(`[SW] Could not pre-cache: ${url}`, err)
          )
        )
      );
    })
  );
  self.skipWaiting(); // Activate immediately
});

// ---------------------------------------------------------------
// ACTIVATE — Remove stale caches from previous versions
// ---------------------------------------------------------------
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      )
    )
  );
  self.clients.claim(); // Take control of all open tabs
});

// ---------------------------------------------------------------
// FETCH — Smart routing by asset type
// ---------------------------------------------------------------
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests from our own origin
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // IMAGES → Cache-First (large files, rarely change)
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        }).catch(() => new Response('', { status: 408 }));
      })
    );
    return;
  }

  // JS / CSS → Cache-First (content-hashed, safe to cache forever)
  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // HTML / Navigation → Network-First, fall back to cache → offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // EVERYTHING ELSE → Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
