import Given from '../steps/givenSteps_omar';
import When from '../steps/whenSteps_omar';
import Then from '../steps/thenSteps_omar';

describe('Crear un post', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
        Given.givenLoadPoolData();
    });

    // it('Escenario 1: Crear post basico', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPost();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublished();
    // });

    // it('Escenario 2: Crear post con texto en negrita', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostBold();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedBold();
    // });

    // it('Escenario 3: Editar post con contenido en markdown', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.editAndPublishPostMarkdown();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostMarkdown();
    // });

    // it('Escenario 4: Crear un nuevo Post con imagen de unsplash y guardarlo', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostWhithImage();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostWithImage();
    // });

    // it('Escenario 5: Crear un nuevo Post con contenido, título y guardarlo', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostWhithContent();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostWithContent();
    // });

    // it('Escenario 6: Escenario 1: Crear post basico con data generada aleatoria dinámica', () => {

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostDynamicRandom();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedMokaroo();
    // });

    // it('Escenario 7: Crear post con texto en negrita con data generada aleatoria dinámica', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostBoldDynamicRandom();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedBold();
    // });

    // it('Escenario 8: Editar post con contenido en markdown con data generada aleatoria dinámica', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.editAndPublishPostMarkdownDynamicRandom();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostMarkdown();
    // });

    // it('Escenario 9: Crear un nuevo Post con imagen de unsplash y guardarlo con data generada aleatoria dinámica', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostWhithImageDynamicRandom();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostWithImageMokaroo();
    // });

    it('Escenario 10: Crear un nuevo Post con contenido, título y guardarlo con data generada aleatoria dinámica', () => {
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post 
        When.createAndPublishPostWhithContentDynamicRandom();

        // THEN: Verificar post publicado
        Then.seePostPublishedPostWithContentMokaroo();
    });
 });

