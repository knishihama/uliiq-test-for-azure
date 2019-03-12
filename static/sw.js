importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00b1b04d4ceeb1dba31e.js",
    "revision": "5d6cf6f59b3bbe4797081964f49351ff"
  },
  {
    "url": "/_nuxt/2dcb632877c0312b4a12.js",
    "revision": "24c0f8161640d58988bc2754b5ec4cae"
  },
  {
    "url": "/_nuxt/3192607dd511fe6343e2.js",
    "revision": "055f78476ccf8fbb74fbbc442d46943f"
  },
  {
    "url": "/_nuxt/32df36fd8e502b1bc2f4.js",
    "revision": "41509dae3e701f8c1bfe226cd8a36de0"
  },
  {
    "url": "/_nuxt/3c9b0ba20ab1e40515dc.js",
    "revision": "7e4bca8a895f652810ef3a95ce8cf86c"
  },
  {
    "url": "/_nuxt/3d089e43d97a1031661a.js",
    "revision": "ababce04141468a2697b00c6c0ae1d34"
  },
  {
    "url": "/_nuxt/3d4bd55b8c0f5cfc0935.js",
    "revision": "3e8239078359d3eb8695bc78743beef9"
  },
  {
    "url": "/_nuxt/41ab936923296b50f494.js",
    "revision": "7c6e27beaa66054e481ad76af5fca909"
  },
  {
    "url": "/_nuxt/4cd85175e111bda026da.js",
    "revision": "5006e3ba30909c23debd3b93c6de70e3"
  },
  {
    "url": "/_nuxt/4e5b6acca998f4b572d9.js",
    "revision": "0bddca49573e6fdd69650ca56ea91ea6"
  },
  {
    "url": "/_nuxt/78df6ea43378ba20c57c.js",
    "revision": "6c55313936e18e7a7971f70f89f03977"
  },
  {
    "url": "/_nuxt/8119fd26c93be1ec9881.js",
    "revision": "627800b132a9be37d17edbcfa6941396"
  },
  {
    "url": "/_nuxt/890ad3a6e07046820e7b.js",
    "revision": "a9edd2656f8659daaff1b29c7a046d5d"
  },
  {
    "url": "/_nuxt/8920d4e07d15449aa2f6.js",
    "revision": "f3458fc85dbecef0722842dab8a3147b"
  },
  {
    "url": "/_nuxt/8b295b9f07efc56fd552.js",
    "revision": "63ac9b099981cb0aef92605cc2de83ac"
  },
  {
    "url": "/_nuxt/c7049d71f751ac009c57.js",
    "revision": "35cada4c034702fb5858b8e7c8186829"
  },
  {
    "url": "/_nuxt/c8a45e95d87b87ae6d13.js",
    "revision": "5cd701cbcacd6e005f39f58f79577c33"
  },
  {
    "url": "/_nuxt/cb5f04f085c5869dc2c7.js",
    "revision": "aa6125b71777c939831f6e4eb8332dc0"
  },
  {
    "url": "/_nuxt/ce775b4dd176e7b2ae06.js",
    "revision": "09e0de42e96942614f4eded10e54bb8d"
  },
  {
    "url": "/_nuxt/e274ae0c28e5bbcd1d00.js",
    "revision": "03745a1194aef4b388832f3577cb96dc"
  },
  {
    "url": "/_nuxt/e5b1dc418ce9ab0fc039.js",
    "revision": "a6331103d26695c0b90af1035d3f8e04"
  },
  {
    "url": "/_nuxt/ee60223ddefcc03f7cdc.js",
    "revision": "7027aaed255677504d88c8efab10bad8"
  },
  {
    "url": "/_nuxt/f6f9553b7854ac97ec53.js",
    "revision": "228068e75acb3adec22d61a18e5b32b5"
  },
  {
    "url": "/_nuxt/fe3b96a45683c79cabdd.js",
    "revision": "90400e3c881da6dec121836cb801b361"
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
