module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "http://localhost:2368/ghost/#/signin",
    email: "o.pava@uniandes.edu.com",
    password: "andres2124",
    postPageUrl: "http://localhost:2368/ghost/#/posts"
  }
};
