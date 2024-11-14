module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "http://localhost:2368/ghost/#/signin", // Define tu URL base
    email: "prueba@gmail.com",
    password: "prueba123456",
    postPageUrl: "http://localhost:2368/ghost/#/posts"
  }
};
