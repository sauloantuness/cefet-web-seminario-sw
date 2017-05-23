var cacheName = 'web-seminario-v1';

var filesToCache = [
  '/',
  '/index.html',
  '/jquery-3.2.1.min.js',
  '/script.js',
  '/style.css',
  '/images/logo.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

// var messages = JSON.parse(localStorage.getItem('messages'));
var messages = [
  'Quote cached 1',
  'Quote cached 2',
  'Quote cached 3',
  'Quote cached 4',
  'Quote cached 5'
];

self.addEventListener('fetch', function(e) {
  var dataUrl = 'https://api.whatdoestrumpthink.com';

  if (e.request.url.indexOf(dataUrl) > -1 && !navigator.onLine ) {
    var message = 'SW says: No quote for you!';

    if (messages.length)
      message = messages[Math.floor(Math.random()*messages.length)];

    e.respondWith(
      new Response(JSON.stringify({message: message}), {
        headers: { "Content-Type" : "application/json" }
      })
    );
  } else {
    e.respondWith(
      fetch(e.request)
    );
  }
});
