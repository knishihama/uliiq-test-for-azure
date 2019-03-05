importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ac78ba12225432140dd.js",
    "revision": "98360250c526e23e5b4722f0c1fb6bba"
  },
  {
    "url": "/_nuxt/130ad69d863342f41765.js",
    "revision": "62aa30741293387874a5e9f09a9c2d53"
  },
  {
    "url": "/_nuxt/1f211edd4538f79d9ae3.js",
    "revision": "3b2ca293e607d7cdf909d8a777d6463e"
  },
  {
    "url": "/_nuxt/1f2dbd8ad4a1240db866.js",
    "revision": "d90c0bc45225fcf61a3b0d09ded224ef"
  },
  {
    "url": "/_nuxt/263a16665ad585d57795.js",
    "revision": "028388499ccdc0130761c71ea9c44bb8"
  },
  {
    "url": "/_nuxt/2878f2c65930867012cd.js",
    "revision": "3ae6adcb86ffd911fd89a094dafe6eb3"
  },
  {
    "url": "/_nuxt/2d42d593648b28f99628.js",
    "revision": "1e9ffb65492d46a6c8ab3f09dc515d4c"
  },
  {
    "url": "/_nuxt/30e4af62ccc8312d26f1.js",
    "revision": "b877d537bfb7b80fa80419d7e518079a"
  },
  {
    "url": "/_nuxt/32a93ae3253622220c0e.js",
    "revision": "9ade805c55fddd098b3fec4b3b18b6e0"
  },
  {
    "url": "/_nuxt/44f4dccc62f70db02569.js",
    "revision": "f1d5aa6bfd481410333bb96bc4ff110c"
  },
  {
    "url": "/_nuxt/533377dc6899accab1da.js",
    "revision": "6f5a15ac689e0f86602fd91561b18ea4"
  },
  {
    "url": "/_nuxt/66d94d5e6f48c63576d1.js",
    "revision": "da8a978564ae0edbdff8965400066e64"
  },
  {
    "url": "/_nuxt/7228d304eee9c6fe4346.js",
    "revision": "77f0598e6477b0dd2c4c258eba1868f9"
  },
  {
    "url": "/_nuxt/7ef47e176675c29544d1.js",
    "revision": "f3e9c3f441eebbb8fb2e5535653ba5da"
  },
  {
    "url": "/_nuxt/85d0b6be82c8d2f457aa.js",
    "revision": "dacce27b41f8dea9aae7a155fba76a8f"
  },
  {
    "url": "/_nuxt/9a63233a9d0598319d45.js",
    "revision": "f59de57f359bd7c7504e304050a161cc"
  },
  {
    "url": "/_nuxt/a72d4ffe94264fd0e28f.js",
    "revision": "fe72167dd83765921f5005f097b56168"
  },
  {
    "url": "/_nuxt/adf5db26b7099eb8abe8.js",
    "revision": "dd108feef40bdef0b9c5373ed3d1e13d"
  },
  {
    "url": "/_nuxt/da4cbe6852e03a9ef805.js",
    "revision": "1d640c8b6e4995c428171885dad57341"
  },
  {
    "url": "/_nuxt/e9085d36495a524fd7c8.js",
    "revision": "7073a5a14545180977e4e54b884dcda9"
  },
  {
    "url": "/_nuxt/f52e1ccc65ca3ed019e3.js",
    "revision": "7ad99212dd24a865a1ab11f4b064ad62"
  },
  {
    "url": "/_nuxt/fc3df1064017e0c4554d.js",
    "revision": "7636c6f86077cdae283d764c39d8a0bf"
  }
], {
  "cacheId": "nuxt-community-typescript",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
