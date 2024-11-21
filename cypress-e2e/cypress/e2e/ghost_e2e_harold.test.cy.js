import Given from "../steps/givenSteps";
import When from "../steps/whenSteps_harold";
import Then from "../steps/thenSteps";

describe('Crear un post', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

    it('Escenario 10: Crear Pagina con contenido en HTML', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtmlPool();

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtml();
    });

    it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoPool();

        // THEN: Validar la publicación de la página
        Then.validatePageWithVideoCreated();
    });

    it('Escenario 12: Crear y editar una página en Ghost', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, editar y guardar
        When.createAndPublishPageEditAndSavePool();

        // THEN: Publicar la página
        Then.validatePageWasEditedAndCreated();
    });

    it('Escenario 13: Crear, publicar y eliminar una página en Ghost', () => {

        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, eliminar pagina
        When.createPublishAndDeletePagePool();

        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreatedAndDeleted();

    });

    it('Escenario 14: Crear una pagina y agregar un link de youtube invalido', () =>{
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, eliminar pagina
        When.createPageAndAddInvalidYoutubeLinkPool();

        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreateWithWrongVideo();

    })

    it('Escenario 15: Crear un tag', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool();

        // THEN: Validar la creación del tag
        Then.validateTagWasCreated();
    });
});