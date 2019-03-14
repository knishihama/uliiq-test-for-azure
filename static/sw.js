importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0861faa04e28b1e7538e.js",
    "revision": "f11d25cce24e98901a801f8e45033a8e"
  },
  {
    "url": "/_nuxt/1effc146494f0c2e1b30.js",
    "revision": "45147ba45bdfc9eae1a90074dd095b4c"
  },
  {
    "url": "/_nuxt/2468aba6b6a8435eb1e7.js",
    "revision": "e98c76e89b7addf9414843ff7404248c"
  },
  {
    "url": "/_nuxt/2bd26ff67ce146670959.js",
    "revision": "9e085b62a6a153abf4981ef4597db137"
  },
  {
    "url": "/_nuxt/2f17cf189a674e24ffae.js",
    "revision": "86b4666f6d404cc424ecc187ec02c8c3"
  },
  {
    "url": "/_nuxt/3f642a3c14fb6140a8c7.js",
    "revision": "75492980a3de60299580c4ecad479fea"
  },
  {
    "url": "/_nuxt/4a3763c7d5e547618d35.js",
    "revision": "473328fd3f018852ec5da967d63ce1f6"
  },
  {
    "url": "/_nuxt/61c0d9758240c51a225f.js",
    "revision": "3148df1264ef8cf2a64341068e16cde7"
  },
  {
    "url": "/_nuxt/63db2e3eeeb67eee4d03.js",
    "revision": "7274a5daa24713c9b13ddffe52b54def"
  },
  {
    "url": "/_nuxt/700e8f4088e07545d995.js",
    "revision": "0508ff6b15b0f51585d769c226b26c36"
  },
  {
    "url": "/_nuxt/765317b1492ebcf99d8d.js",
    "revision": "8365de82a12cd65dba3a13585162f1ee"
  },
  {
    "url": "/_nuxt/84b325f8d7f31458db22.js",
    "revision": "77422a3d3e540de5a5564d9e360429b6"
  },
  {
    "url": "/_nuxt/8d6c209e215e04632579.js",
    "revision": "c5a242ca54893dbc62ae4e53fed30782"
  },
  {
    "url": "/_nuxt/8f0f046531bd8dfbf3b9.js",
    "revision": "2aabddaa2f494e138f7d3f83ad2d6009"
  },
  {
    "url": "/_nuxt/927f67b85a897571d42b.js",
    "revision": "87d67d40224a906980701c7b9ab50274"
  },
  {
    "url": "/_nuxt/93a880382959b14ee54f.js",
    "revision": "3c75b2d931fea2c184062933e2d5b52f"
  },
  {
    "url": "/_nuxt/9ef3f209f9564f7123e5.js",
    "revision": "3cf3510d68e81cbcae45c30d4bb91044"
  },
  {
    "url": "/_nuxt/b0af074877e848ced38d.js",
    "revision": "90c53199993889c917533cdeb3e381d7"
  },
  {
    "url": "/_nuxt/b1c96daa192c214290ac.js",
    "revision": "1d69c0f27a75714ad3af11f8ba485257"
  },
  {
    "url": "/_nuxt/bcaa429f3ce335abd223.js",
    "revision": "248ee61ef2b3024f81a76f34001ff4a7"
  },
  {
    "url": "/_nuxt/d3854462181fe5ad2caa.js",
    "revision": "dba0e94fc11e639431ee117b48bbe2f7"
  },
  {
    "url": "/_nuxt/f01cd77a15b979facfee.js",
    "revision": "a668ae30381da4f9ce8be83ce82c5b6b"
  },
  {
    "url": "/_nuxt/fb497156d834afcc781f.js",
    "revision": "c1773c23e8d8eff88a9be51f89419aba"
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
