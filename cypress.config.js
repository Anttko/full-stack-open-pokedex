/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000'
  }
})
