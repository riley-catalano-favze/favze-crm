// Favze CRM Service Worker
// Enables PWA installation. The CRM syncs to Supabase, so we keep the SW
// minimal — just enough to satisfy the installability criteria.
// No aggressive caching here: Supabase handles cloud sync and the CRM pages
// are HTML files that need to stay fresh.

const CACHE_NAME = 'favze-crm-v1';

// Only cache the bare minimum needed for a splash/offline fallback
const PRECACHE = [
  '/',
  '/favze-crm.html',
  '/styles.css',
  '/manifest.json',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE).catch(() => {}))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Network first — always serve fresh content when online
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(r => r || caches.match('/favze-crm.html'))
    )
  );
});
