import Given from '../steps/givenSteps_edwin';
import When from '../steps/whenSteps_edwin';
import Then from '../steps/thenSteps_edwin';
import { getRandomPost } from '../steps/functionutils'

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

    // it('E0009 - C6: (PoolDatosApriori) - ', () => {
    //     const post = getRandomPost("escenarioTituloVacio");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

});

