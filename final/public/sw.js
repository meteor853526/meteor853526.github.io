// const staticCacheName = 'site-static1-v3';
// const dynamicCacheName = 'site-dynamic-v3';
// const assets = [
//     // '/',
//     // '/index.html',
//     // '/js/app.js',
//     // '/js/ui.js',
//     // '/js/materialize.min.js',
//     // '/css/styles.css',
//     // '/css/materialize.min.css',
//     // '/img/dish.png',
//     // 'https://fonts.googleapis.com/icon?family=Material+Icons',
//     // 'https://fonts.gstatic.com/s/materialicons/v118/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
//     // '/pages/fallback.html'
// ];



// var self = this;
// // cache size limit function
// const limitCacheSize = (name, size) => {
//     caches.open(name).then(cache => {
//         cache.keys().then(keys =>{
//             if(keys.length > size){
//                 cache.delete(keys[0]).then(limitCacheSize(name, size));
//             }
//         })
//     })
// };


// // install service worker
// self.addEventListener('install',evt =>{
//     evt.waitUntil( // 緩存完才會進入網頁
//         caches.open(staticCacheName).then(cache =>{
//             console.log('cacheing shell assets');
//             cache.addAll(assets);
//         })
//     );
//     //console.log('service worker has been installed');
// });
// // activate event 
// self.addEventListener('activate',evt =>{
//     //console.log('service worker has been activated');
//     evt.waitUntil(
//         caches.keys().then(keys =>{
//             return Promise.all(keys
//                 .filter(key =>key !== staticCacheName && key !== dynamicCacheName)
//                 .map(key => caches.delete(key))
//             )
//         })
//     );
// });
// // fetch event
// self.addEventListener('fetch',evt =>{
    
//         evt.respondWith(
//             caches.match(evt.request).then(cacheRes =>{
//                 // 如果cacheRes有的話 優先選擇
//                 // cachRes為空時則fetch
//                 return cacheRes || fetch(evt.request).then(fetchRes => {
//                     return caches.open(dynamicCacheName).then(cache=>{
//                         cache.put(evt.request.url,fetchRes.clone());
//                         limitCacheSize(dynamicCacheName,15);
//                         return fetchRes;
//                     })
//                 });
//             }).catch(() => {
//                 if(evt.request.url.indexOf('.html') > -1) {
//                     return caches.match('/pages/fallback.html');
//                 }
//             })
//         );
    
    
    
// })