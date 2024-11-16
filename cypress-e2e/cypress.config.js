module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "http://localhost:2369",
    email: "prueba@gmail.com",
    password: "Pruebas.12345",

    // email: "o.pava@uniandes.edu.com",
    // password: "andres2124",
    postPageUrl: "http://localhost:2369/ghost/#/posts",
    pageUrl: "http://localhost:2369/ghost/#/pages",
    postMembersPageUrl: "http://localhost:2369/ghost/#/posts?visibility=members",
    postDraftPageUrl: "http://localhost:2369/ghost/#/posts?type=draft",
    titlePostBasic: "Post basico 1",
    titlePostBold: "Post en negrita 1",
    tagsUrl: "http://localhost:2369/ghost/#/tags",
    mambersUrl: "http://localhost:2369/ghost/#/members",
    tagName: "Tecnología",
    tagSlug: "tecnologia",
    newMemberEmail: "p.riverah",
    domainEmail: "@uniandes.edu.co",
    newMemberName: "Pablo Rivera",
    updatedSiteTitle: 'Título actualizado: Automatizacion Uniandes ' + new Date()
  },
  "screenshotsFolder": "cypress/screenshots"
};
