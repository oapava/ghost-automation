module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "http://localhost:2369",
    email: "automatizador@uniandes.edu.co",
    password: "Uniandes.e13",
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
