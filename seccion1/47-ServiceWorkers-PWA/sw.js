const nombreCache = 'apv-v7'; // Nombrar el cache...
const offlinePage = '/error.html'
const archivos = [
    '/',
    '/index.html',
    offlinePage,
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
];
//Cuando se instala el service worker
self.addEventListener('install', event => {
    console.log('Instalando Service Worker');
    event.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
});

// Activar el service worker
self.addEventListener('activate', event => {
    console.log('Service Worker activado', event)
   
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => key !== nombreCache).map(key => caches.delete(key)) // Borra los demas
        )
      })
    )
  })

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', event => {
    console.log('Fetch...', event);
    event.respondWith(
        caches.match(event.request)
        .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match(offlinePage)))
    )
});
 