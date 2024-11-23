import Given from '../steps/givenSteps_edwin';
import When from '../steps/whenSteps_edwin';
import Then from '../steps/thenSteps_edwin';
import { getRandomPost, getPostDataMokaroo, getPostDataFaker } from '../steps/functionutils'

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

    it('E0031: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, datos validos', () => {
        const post = getRandomPost("escenariosPositivos");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedWithHtml(post);
    });

    it('E0032: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, formatos erroneos', () => {
        const post = getRandomPost("escenarioDataErroneaPositivos");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedWithHtml(post);
    });

    it('E0033: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, caracteres especiales y emoticones', () => {
        const post = getRandomPost("escenarioDataErroneaPositivos");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedWithHtml(post);
    });

    it('E0034: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, titulo con 256 caracteres', () => {
        const post = getRandomPost("escenarioTitulo256");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtmlError(post);

        // THEN: Verificar post publicado
        Then.seePostPublishError(post);
    });

    it('E0035: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, titulo con 255 caracteres ', () => {
        const post = getRandomPost("escenarioTitulo255");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedWithHtml(post);
    });

    it('E0036: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, titulo vacio', () => {
        const post = getRandomPost("escenarioTituloVacio");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedUntitled(post);
    });

    it('E0037: (PoolDatosApriori) - Despublicar post publicado, datos validos', () => {
        const post = getRandomPost("escenariosPositivos");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.unpublishPostCreated(post);

        // THEN: Verificar post publicado
        Then.confirmUnpublishPostPublished(post);
    });

    it('E0038: (PoolDatosApriori) - Eliminar post publicado, datos validos', () => {
        const post = getRandomPost("escenariosPositivos");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.deletePostPublished(post);

        // THEN: Verificar post publicado
        Then.confirmDeletedPost(post);
    });

    it('E0039: (PoolDatosApriori) - Crear Post para que solo sea visible para miembros, datos validos', () => {
        const post = getRandomPost("escenariosPositivos");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostMembersOnly(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedMembersOnly(post);
    });

    it('E0040: (PoolDatosApriori) - Crear una página con contenido en HTML y publicarla, datos validos', () => {
        const page = getRandomPost("escenariosPositivos");

        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtml(page);

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtml(page);
    });

    it('E0041: (PoolDatosApriori) - Crear una página con contenido en HTML y publicarla, formato y etiquetas erroneas', () => {
        const page = getRandomPost("escenarioDataErroneaPositivos");

        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtml(page);

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtml(page);
    });

    it('E0042: (PoolDatosApriori) - Crear una página con contenido en HTML, Sin titulo.', () => {
        const page = getRandomPost("escenarioTituloVacio");

        // GIVEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtml(page);

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtml(page);
    });

    it('E0043: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, datos validos', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenariosPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedWithHtml(post);
        });
    });

    it('E0044: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, formatos erroneos', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenarioDataErroneaPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedWithHtml(post);
        });
    });

    it('E0045: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, caracteres especiales y emoticones', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenarioDataErroneaPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedWithHtml(post);
        });
    });

    it('E0046: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, titulo con 256 caracteres', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenarioTitulo256"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtmlError(post);

            // THEN: Verificar post publicado
            Then.seePostPublishError(post);
        });
    });

    it('E0047: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, titulo con 255 caracteres', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenarioTitulo255"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedWithHtml(post);
        });
    });

    it('E0048: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, titulo vacio', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenarioTituloVacio"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedUntitled(post);
        });
    });

    it('E0049: (PseudoAleatorioDinamico) - Despublicar post publicado, datos validos', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenariosPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.unpublishPostCreated(post);

            // THEN: Verificar post publicado
            Then.confirmUnpublishPostPublished(post);
        });
    });

    it('E0050: (PseudoAleatorioDinamico) -  Eliminar post publicado, datos validos', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenariosPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.deletePostPublished(post);

            // THEN: Verificar post publicado
            Then.confirmDeletedPost(post);
        });
    });

    it('E0051: (PseudoAleatorioDinamico) -  Crear Post para que solo sea visible para miembros, datos validos', () => {
        getPostDataMokaroo().then((data) => {
            let post = data["escenariosPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostMembersOnly(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedMembersOnly(post);
        });
    });

    it('E0052: (PseudoAleatorioDinamico) -  Crear una página con contenido en HTML y publicarla, datos validos', () => {
        getPostDataMokaroo().then((data) => {
            let page = data["escenariosPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtml(page);

            // THEN: Verificar post publicado
            Then.seePagePublishedWithHtml(page);
        });
    });

    it('E0053: (PseudoAleatorioDinamico) -   Crear una página con contenido en HTML y publicarla, formato y etiquetas erroneas', () => {
        getPostDataMokaroo().then((data) => {
            let page = data["escenarioDataErroneaPositivos"][0];
            // GIVEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtml(page);

            // THEN: Verificar post publicado
            Then.seePagePublishedWithHtml(page);
        });
    });

    it('E0054: (PseudoAleatorioDinamico) -   Crear una página con contenido en HTML, Sin titulo', () => {
        getPostDataMokaroo().then((data) => {
            let page = data["escenarioTituloVacio"][0];
            // GIVEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtml(page);

            // THEN: Verificar post publicado
            Then.seePagePublishedWithHtml(page);
        });
    });

    it('E0055: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, datos validos', () => {
        getPostDataFaker("escenariosPositivos").then((data) =>{
            let post = data;
            // GIVEN: Visitar pagina de posts
            Given.navigateToPostPage();

            // WHEN: Crear y publicar post
            When.createAndPublishPostWithHtml(post);

            // THEN: Verificar post publicado
            Then.seePostPublishedWithHtml(post);
        })
    });

    it('E0056: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, formatos erroneos', () => {
        const post = getPostDataFaker("escenarioDataErroneaPositivos");
        // GIVEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedWithHtml(post);
    });


    it('E0057: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, titulo con 256 caracteres', () => {
        const post = getPostDataFaker("escenarioTitulo256");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtmlError(post);

        // THEN: Verificar post publicado
        Then.seePostPublishError(post);
    });

    it('E0058: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, titulo con 255 caracteres ', () => {
        const post = getPostDataFaker("escenarioTitulo255");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedWithHtml(post);
    });

    it('E0059: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, titulo vacio', () => {
        const post = getPostDataFaker("escenarioTituloVacio");

        // THEN: Visitar pagina de posts
        Given.navigateToPostPage();

        // WHEN: Crear y publicar post
        When.createAndPublishPostWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePostPublishedUntitled(post);
    });

    it('E0060: (EscenarioAleatorio) - Crear una página con contenido en HTML y publicarla, datos validos', () => {
        const post = getPostDataFaker("escenariosPositivos");

        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtml(post);

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtml(post);
    });


});

