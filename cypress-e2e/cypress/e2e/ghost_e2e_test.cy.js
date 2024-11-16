import Given from '../steps/givenSteps';
import When from '../steps/whenSteps';
import Then from '../steps/thenSteps';

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

    // it('Escenario 6: Unpublish post publicado', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.unpublishPostCreated();

    //     // THEN: Verificar post publicado
    //     Then.confirmUnpublishPostPublished();
    // });

    // it('Escenario 7: Eliminar post publicado', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPagePublished();

    //     // WHEN: Crear y publicar post 
    //     When.deletePostPublished();

    //     // THEN: Verificar post publicado
    //     Then.confirmDeletedPost();
    // });

    // it('Escenario 8: Crear Post para que solo sea visible para miembros', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostMembersOnly();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedMembersOnly();
    // });

    // it('Escenario 9: Crear Post con contenido en HTML', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostWithHtml();

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml();
    // });

    // it('Escenario 10: Crear Pagina con contenido en HTML', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPageWithHtml();

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml();
    // });

//     it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
//         // GIVEN: Visitar Pages
//         Given.givenNavigateToPagePage();

//         // WHEN: Click en "New page"
//         When.createPageAndPublishWithVideo();

//         // THEN: Validar la publicación de la página
//         Then.validatePageWithVideoCreated();
//     });

//     it('#Escenario 12: Crear y editar una página en Ghost', () => {
//         // GIVEN: Visitar Pages
//         Given.givenNavigateToPagePage();

//         // WHEN: Crear publicar, editar y guardar
//         When.reateAndPublishPageEditAndSave();

//         // THEN: Publicar la página
//         Then.validatePageWasEditedAndCreated();
//     });
 });

