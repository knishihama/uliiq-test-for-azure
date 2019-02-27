const {Nuxt} = require('nuxt')
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
process.argv[2] = 'start' // set argument to 'start'
require('nuxt/bin/nuxt') // execute command 'nuxt