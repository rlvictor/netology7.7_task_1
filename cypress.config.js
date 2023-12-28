const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "txdxn7",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 1,
  },
});
