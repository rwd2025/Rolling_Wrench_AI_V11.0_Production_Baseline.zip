const CACHE_NAME = "rolling-wrench-v11-1-service-toggle";
const ASSETS = ["./","./index.html","./app.js","./style.css","./manifest.json"];
self.addEventListener("install", event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(()=>null))); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k === CACHE_NAME ? null : caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", event => { if(event.request.method !== "GET") return; event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html")))); });
