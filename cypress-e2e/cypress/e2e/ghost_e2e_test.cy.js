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
        When.whenCreatePost();
        When.whenPublishPost();

        // THEN: Verificar post publicado
        Then.thenSeePostPublished();
    });

    it('Escenario 2: Crear post con texto en negrita ', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPostPage();

        // WHEN: Crear y publicar post 
        When.whenCreatePost();
        When.whenPublishPost();

        // THEN: Verificar post publicado
        Then.thenSeePostPublished();
    });

    // it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
    //     // THEN: Visitar Pages
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Click en "New page"
    //     When.createPageAndPublishWithVideo();

    //     // THEN: Publicar la página
    //     Then.publishPage();
    // });
});

