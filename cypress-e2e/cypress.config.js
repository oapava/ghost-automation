module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "http://localhost:2368",
    email: "prueba@gmail.com",
    password: "Pruebas.12345",
    postPageUrl: "http://localhost:2368/ghost/#/posts",
    pageUrl: "http://localhost:2368/ghost/#/pages",
    titlePostBasic: "Post basico 1",
    titlePostBold: "Post en negrita 1"
  }
};
