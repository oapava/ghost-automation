import Given from '../steps/givenSteps';
import When from '../steps/whenSteps';
import Then from '../steps/thenSteps';

describe('Crear un post', () => {
    beforeEach(() => {
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

    it('Escenario 1: Crear post basico', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPostPage();

        // WHEN: Crear y publicar post 
        When.whenCreateAndPublishPost();

        // THEN: Verificar post publicado
        Then.thenSeePostPublished();
    });

    it('Escenario 2: Crear post con texto en negrita ', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPostPage();

        // WHEN: Crear y publicar post 
        When.whenCreateAndPublishPostBold();

        // THEN: Verificar post publicado
        Then.thenSeePostPublishedBold();
    });

    it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideo();

        // THEN: Validar la publicación de la página
        Then.validatePageWithVideoCreated();
    });

    it('#Escenario 12: Crear y editar una página en Ghost', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, editar y guardar
        When.reateAndPublishPageEditAndSave();

        // THEN: Publicar la página
        Then.validatePageWasEditedAndCreated();
    });
});

