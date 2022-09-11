const { defineConfig } = require("cypress");

require('dotenv').config()

module.exports = defineConfig({
  projectId: 'qbbfbo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://test.develop.delosandes.xyz'
  },
  chromeWebSecurity: false
});
