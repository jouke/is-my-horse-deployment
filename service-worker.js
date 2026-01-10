/* eslint-disable no-restricted-globals */

// This is a basic Service Worker to satisfy the registration in main.tsx.
// It allows the app to be installed as a PWA but does not provide offline capabilities.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Network-only strategy: pass all requests through to the network
});