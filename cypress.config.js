/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseurl: 'http://localhost:5000',
  },
})
