module.exports = {
  e2e: {
    experimentalMemoryManagement: true, // Habilitar manejo experimental de memoria
    numTestsKeptInMemory: 0, // Mantener solo el test actual en memoria
    setupNodeEvents(on, config) {
      // Configuraciones adicionales de Node si es necesario
    },
    experimentalSessionAndOrigin: true,
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
    updatedSiteTitle: 'Título actualizado: Automatizacion Uniandes ' + new Date(),
    poolDRPost: 'https://api.mockaroo.com/api/9b8ba860?key=28962a10&count=',
    poolDRWord: 'https://api.mockaroo.com/api/56263e40?key=28962a10&count=',
    poolDRContributor: 'https://api.mockaroo.com/api/896d1430?key=28962a10&count=',
    poolDROwner: 'https://api.mockaroo.com/api/d1de2bf0?key=28962a10&count=',
    postPagePublishedUrl: "http://localhost:2369/ghost/#/posts?type=published",
    urlMockarooPost:"https://api.mockaroo.com/api/4d41dac0?count=1&key=d84032b0",
    mockaroo:'https://my.api.mockaroo.com/',
    apiKeyMockarooPablo:'be0c2310',
    poolDRTag: 'https://my.api.mockaroo.com/tag.json?key=86ded800',
    poolDRVideo: 'https://my.api.mockaroo.com/video.json?key=86ded800',
    poolEdit: 'https://my.api.mockaroo.com/edit.json?key=86ded800',
    poolDelete: 'https://my.api.mockaroo.com/delete.json?key=86ded800'
  },
  "screenshotsFolder": "cypress/screenshots"
};
