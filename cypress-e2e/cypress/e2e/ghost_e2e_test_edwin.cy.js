import Given from '../steps/givenSteps_edwin';
import When from '../steps/whenSteps_edwin';
import Then from '../steps/thenSteps_edwin';
import { getRandomPost, getPseudoAleatorioPost } from '../steps/functionutils'

describe('Crear un post', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

    // it('E0001: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML.', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPost(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublished(post);
    // });

    // it('E0009 - C1: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0009 - C2: (PoolDatosApriori) - ', () => {
    //     const post = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0009 - C3: (PoolDatosApriori) - ', () => {
    //     const post = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0009 - C4: (PoolDatosApriori) - ', () => {
    //     const post = getRandomPost("escenarioTitulo256");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0009 - C5: (PoolDatosApriori) - ', () => {
    //     const post = getRandomPost("escenarioTitulo255");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0009 - C6: (PoolDatosApriori) - Se publica el post sin titulo', () => {
    //     const post = getRandomPost("escenarioTituloVacio");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0006 - C7: (PoolDatosApriori) - Unpublish post publicado', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.unpublishPostCreated(post);

    //     // THEN: Verificar post publicado
    //     Then.confirmUnpublishPostPublished(post);
    // });

    // it('E0007 - C8: (PoolDatosApriori) - Eliminar post publicado', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.deletePostPublished(post);

    //     // THEN: Verificar post publicado
    //     Then.confirmDeletedPost(post);
    // });

    // it('E0008 - C9: (PoolDatosApriori) - Crear Post para que solo sea visible para miembros', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostMembersOnly(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedMembersOnly(post);
    // });

    // it('E0010 - C10: (PoolDatosApriori) - Crear una página nueva con contenido en HTML y publicarla.', () => {
    //     const post = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml(post);
    // });

    // it('E0010 - C11: (PoolDatosApriori) - Crear una página nueva con contenido en HTML y publicarla.', () => {
    //     const post = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml(post);
    // });

    // it('E0010 - C12: (PoolDatosApriori) - Crear una página nueva con contenido en HTML y publicarla.', () => {
    //     const post = getRandomPost("escenarioTituloVacio");

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml(post);
    // });

    it('E0009 - C1: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML', () => {

        getPseudoAleatorioPost("escenariosPositivos")
        .then(data => {
            let post = data[0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedWithHtml(post);
        })
        .catch(error => {
            console.error("Ocurrió un error:", error);
        });

    });

});

