import Given from '../steps/givenSteps45';
import When from '../steps/whenSteps45';
import Then from '../steps/thenSteps45';

describe('Crear un post', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

    it('Escenario 1: Crear post basico', () => {
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post 
        When.createAndPublishPost();

        // THEN: Verificar post publicado
        Then.seePostPublished();
    });

    it('Escenario 2: Crear post con texto en negrita', () => {
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post 
        When.createAndPublishPostBold();

        // THEN: Verificar post publicado
        Then.seePostPublishedBold();
    });

    it('Escenario 3: Editar post con contenido en markdown', () => {
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post 
        When.editAndPublishPostMarkdown();

        // THEN: Verificar post publicado
        Then.seePostPublishedPostMarkdown();
    });

    it('Escenario 6: Unpublish post publicado', () => {
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post 
        When.unpublishPostCreated();

        // THEN: Verificar post publicado
        Then.confirmUnpublishPostPublished();
    });

    it('Escenario 16: Crear un tag y asignarlo a un post', () => {

        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear un tag y asignarlo a post
        When.createTagAndAsignIt();

        // GIVEN: Validar la creación del post con el tag asignado
        Then.validatePostWithTag();
    });


 });

