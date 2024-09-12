/* eslint-disable no-restricted-globals */
// src/service-worker.js

// Install Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    // You can perform basic setup tasks here if needed, but no caching
});

// Fetch Requests
self.addEventListener('fetch', (event) => {
    // No caching or fetch handling to keep the page unoptimized
    console.log('Fetch event:', event.request.url);
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    // No cache cleanup to ensure nothing is being cached
});