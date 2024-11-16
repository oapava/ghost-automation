module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "http://localhost:2368",
    email: "o.pava@uniandes.edu.com",
    password: "andres2124",
    postPageUrl: "http://localhost:2368/ghost/#/posts",
    pageUrl: "http://localhost:2368/ghost/#/pages",
    postMembersPageUrl: "http://localhost:2368/ghost/#/posts?visibility=members",
    postDraftPageUrl: "http://localhost:2368/ghost/#/posts?type=draft",
    tagsUrl: "http://localhost:2368/ghost/#/tags",
    mambersUrl: "http://localhost:2368/ghost/#/members",
    titlePostBasic: "Post basico 1",
    titlePostBold: "Post en negrita 1",
    tagName: "Tecnología",
    tagSlug: "tecnologia",
    newMemberEmail: "p.riverah",
    domainEmail: "@uniandes.edu.co",
    newMemberName: "Pablo Rivera",
    updatedSiteTitle: 'Título actualizado: Automatizacion Uniandes ' + new Date()
  },
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true, 
};
