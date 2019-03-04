importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09532de3de56e40b0fcc.js",
    "revision": "8995d1eb070d65d2bd4ce71decb92b0a"
  },
  {
    "url": "/_nuxt/0f7e0a137d2c05b01ab4.js",
    "revision": "f7fbddec2986b480d04ad9d1ce5c887b"
  },
  {
    "url": "/_nuxt/1fa47d925310b64a0fcc.js",
    "revision": "63f0fc98d11c5da3a9d234de02afbd05"
  },
  {
    "url": "/_nuxt/23a97b3aad6a4819d3e5.js",
    "revision": "1ac01fed13439bf2b3c6f171eb3a3425"
  },
  {
    "url": "/_nuxt/37bb7fabb1af612c76ec.js",
    "revision": "8d3c4c0c745d52c2a5f4ab2c073a2988"
  },
  {
    "url": "/_nuxt/419a9bdc93e34ecf3e2c.js",
    "revision": "ae30d1224e3df33a7549c7315ae74456"
  },
  {
    "url": "/_nuxt/41bb21e42d291ed2099e.js",
    "revision": "c7db19d231b77f178d4c875f1abf2065"
  },
  {
    "url": "/_nuxt/5008cbfd637d150f8669.js",
    "revision": "334d1414f27af222d33737b4aec1414e"
  },
  {
    "url": "/_nuxt/5e12279cd40fdb47eee6.js",
    "revision": "b6e477e6a7ee9850af49df68112d0f26"
  },
  {
    "url": "/_nuxt/5f0c1bb819d1d54d6812.js",
    "revision": "bcc3d1aadb6480ef7445bfaeb24a7f28"
  },
  {
    "url": "/_nuxt/69c43e83955a2adbcbe9.js",
    "revision": "4a272c98ca14d1dbda75c6345c609a7c"
  },
  {
    "url": "/_nuxt/74eeabfc527cea4baa0c.js",
    "revision": "88f3f8b7968afb2278538f395a896507"
  },
  {
    "url": "/_nuxt/830337b836e503159e2f.js",
    "revision": "77ff752dc27b8932fd7b85196907bfe7"
  },
  {
    "url": "/_nuxt/933fd1d4957185aa72dc.js",
    "revision": "48387b263d33b38dde1816ab7acda31c"
  },
  {
    "url": "/_nuxt/960f180e7e190240e7bf.js",
    "revision": "7c9e31e2e9fa03e8afd924acd236a0b3"
  },
  {
    "url": "/_nuxt/af252e251ccd3db4da6c.js",
    "revision": "59f51339dba3d07abafe0762f599be4b"
  },
  {
    "url": "/_nuxt/af48cd709ee4ed699495.js",
    "revision": "e04245d3c70e0d53473d558b8f037a74"
  },
  {
    "url": "/_nuxt/b939984eae21f5b69500.js",
    "revision": "c56f83c8d05329cc8a1aca73018664e9"
  },
  {
    "url": "/_nuxt/cbd87469f02bdc198500.js",
    "revision": "fdf45dd4e1e5b5ff17a285e58733c8d1"
  },
  {
    "url": "/_nuxt/ded5b4666e5255a0cd1a.js",
    "revision": "69b01555fdcf08e52896331bf82339f5"
  },
  {
    "url": "/_nuxt/e79b598487507df8b9fd.js",
    "revision": "dd1e64cc8b28496ab6ceb6d3240d6e2a"
  },
  {
    "url": "/_nuxt/ff688ff1f6a0df73432c.js",
    "revision": "1546f80cb28f8d4f34f72bd81fc5f439"
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
