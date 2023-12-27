const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 1,
  },
  env: {
    viewportWidth: 1680,
    viewportHeight: 1050,
  },
});
