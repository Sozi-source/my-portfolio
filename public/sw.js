// public/sw.js
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/assets/icons/icon-72x72.webp',
  '/assets/icons/icon-96x96.webp',
  '/assets/icons/icon-128x128.webp',
  '/assets/icons/icon-144x144.webp',
  '/assets/icons/icon-152x152.webp',
  '/assets/icons/icon-192x192.webp',
  '/assets/icons/icon-384x384.webp',
  '/assets/icons/icon-512x512.webp',
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});