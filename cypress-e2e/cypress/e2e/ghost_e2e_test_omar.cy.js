import {
    getPostDataDynamicrandom, 
    schemaFaker, 
    getLinkDataDynamicrandom, 
    getContributorDataDynamicrandom, 
    getOwnerDataDynamicrandom, 
    ownerSchemaFaker, 
    linkSchemaFaker, 
    contributorSchemaFaker,
    getDeleteDynamicRandom,
    getEditDynamicRandom,
    getTagDynamicrandom,
    getVideoDynamicRandom
} from '../helpers/helpers';
import { getRandomPost, getPostDataMokaroo, getPostDataFaker } from '../steps/functionutils';
import { faker } from '@faker-js/faker';
import { fetchMockarooData  } from "../support/mockaroo";


import Given from '../steps/givenSteps';
import When from '../steps/whenSteps';
import Then from '../steps/thenSteps';


describe('Pruebas E2E Ghost', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
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

    // it('Escenario 6: Crear post basico con data generada aleatoria dinámica', () => {
    //     getPostDataDynamicrandom().then((content)=>{
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();
    
    //         // WHEN: Crear y publicar post 
    //         When.createAndPublishPostDynamicRandom( content );
    
    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedMokaroo( content );
    //     })
    // });

    // it('Escenario 7: Crear post con texto en negrita con data generada aleatoria dinámica', () => {
    //     getPostDataDynamicrandom().then((content)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.navigateToPostPage();
    
    //         // WHEN: Crear y publicar post 
    //         When.createAndPublishPostBoldDynamicRandom( content );
    
    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedBoldMokaroo( content );
    //     });
    // });

    // it('Escenario 8: Editar post con contenido en markdown con data generada aleatoria dinámica', () => {
    //     getPostDataDynamicrandom().then((content)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.navigateToPostPage();
    
    //         // WHEN: Crear y publicar post 
    //         When.editAndPublishPostMarkdownDynamicRandom( content );
    
    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedPostMarkdownMokaroo( content );
    //     })
    // });

    // it('Escenario 9: Crear un nuevo Post con imagen de unsplash y guardarlo con data generada aleatoria dinámica', () => {
    //     getPostDataDynamicrandom().then((content)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.navigateToPostPage();
    
    //         // WHEN: Crear y publicar post 
    //         When.createAndPublishPostWhithImageDynamicRandom( content );
    
    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedPostWithImageMokaroo( content );
    //     })
    // });

    // it('Escenario 10: Crear un nuevo Post con contenido, título y guardarlo con data generada aleatoria dinámica', () => {
    //     getPostDataDynamicrandom().then((content)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.navigateToPostPage();
    
    //         // WHEN: Crear y publicar post 
    //         When.createAndPublishPostWhithContentDynamicRandom( content );
    
    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedPostWithContentMokaroo( content );
    //     })
    // });

    // it('Escenario 11: Crear post basico con data aleatoria', () => {
    //     const content = schemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostRandom( content );

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedRandom( content );
    // });

    // it('Escenario 12: Crear post con texto en negrita con data aleatoria', () => {
    //     const content = schemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostBoldrandom( content );

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedBoldRandom( content );
    // });

    // it('Escenario 13: Editar post con contenido en markdown con data aleatoria', () => {
    //     const content = schemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.editAndPublishPostMarkdownRandom( content );

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostMarkdownRandom( content );
    // });

    // it('Escenario 14: Crear un nuevo Post con imagen de unsplash y guardarlo con data aleatoria', () => {
    //     const content = schemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostWhithImageRandom( content );

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostWithImageRandom( content );
    // });

    // it('Escenario 15: Crear un nuevo Post con contenido, título y guardarlo con data aleatoria', () => {
    //     const content = schemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.createAndPublishPostWhithContentRandom( content );

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostWithContentRandom( content );
    // });

    // it('Escenario 16: Comprobar si aparece el error al no tener seleccionado un autor en un post', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.removePostAuthorPool();

    //     // THEN: Verificar post publicado
    //     Then.validateRemovePostAuthorError();
    // })

    // it('Escenario 17: Agregar una URL personalizada a una publicación en un Post', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.addCustomUrlPost();

    //     // THEN: Verificar post publicado
    //     Then.validateSlugAdded();
    // })

    // it('Escenario 18: Comprobar que el Exerpt no supere los 300 caracteres', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post 
    //     When.addinvalidExcerpt();

    //     // THEN: Verificar post publicado
    //     Then.validateErrorExcerpt();
    // })

    // it('Escenario 19: Cambiar las configuraciones de brand del sitio', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();

    //     // WHEN: Crear y publicar post 
    //     When.changebrandConfig();

    //     // THEN: Verificar post publicado
    //     Then.validateSiteDescriptionHasBeenSaved();
    // })

    // it('Escenario 20: Comprobar que se asigne un label al crear un nuevo item de navegación primario', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();

    //     // WHEN: Crear y publicar post 
    //     When.changeNavigationItem();

    //     // THEN: Verificar post publicado
    //     Then.validateNavigationItemWasSaved();
    // })
    
    // it('Escenario 21: Comprobar que se asigne un label al crear un nuevo item de navegación Secundario de una fuente de datos aleatorio dinámico', () => {
    //     getLinkDataDynamicrandom().then((navigate)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.givenNavigateToSettings();
    
    //         // WHEN: Crear y publicar post 
    //         When.changeNavigationItemSecondary( navigate );
    
    //         // THEN: Verificar post publicado
    //         Then.validateNavigationItemSecondaryWasSaved( navigate );
    //     })
    // })

    // it('Escenario 22: Invitar un nuevo usuario al staff con rol "Contributor"', () => {
    //     getContributorDataDynamicrandom().then((contributor)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.givenNavigateToSettings();
    
    //         // WHEN: Crear y publicar post 
    //         When.inviteUserToBeContributor( contributor );
    
    //         // THEN: Verificar post publicado
    //         Then.validateInvitationWasNotSend(contributor);
    //     })
    // })

    // it('Escenario 23: Comprobar que insgrese un correo válido', () => {
    //     getContributorDataDynamicrandom().then((contributor)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.givenNavigateToSettings();
    
    //         // WHEN: Crear y publicar post 
    //         When.testBademailInField( contributor );
    
    //         // THEN: Verificar post publicado
    //         Then.validateBadEmailError();
    //     })
    // })

    // it('Escenario 24: Modificar información del owner del sitio', () => {
    //     getOwnerDataDynamicrandom().then((owner)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.givenNavigateToSettings();
    
    //         // WHEN: Crear y publicar post 
    //         When.editOwnerInfo( owner );
    
    //         // THEN: Verificar post publicado
    //         Then.validateFieldsComplete( owner );
    //     })
    // })
    
    // it('Escenario 25: Comprobar que se asigne un usuario valido para Twitter en el formulario de owner', () => {
    //     getOwnerDataDynamicrandom().then((owner)=>{
    //         // THEN: Visitar pagina de posts
    //         Given.givenNavigateToSettings();
    
    //         // WHEN: Crear y publicar post 
    //         When.editOwnerInfoTwitter( owner );
    
    //         // THEN: Verificar post publicado
    //         Then.validateErrorTwitter( owner );
    //     })
    // })

    // it('Escenario 26: Comprobar que se asigne un label al crear un nuevo item de navegación Secundario con data aleatoria', () => {
    //     const link = linkSchemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();

    //     // WHEN: Crear y publicar post 
    //     When.changeNavigationItemSecondaryRandom( link );

    //     // THEN: Verificar post publicado
    //     Then.validateNavigationItemSecondaryWasSavedRandom( link )
    // })
    
    // it('Escenario 27: Invitar un nuevo usuario al staff con rol "Contributor" con data aleatoria', () => {
    //     const contributor = contributorSchemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();

    //     // WHEN: Crear y publicar post 
    //     When.inviteUserToBeContributorRandom( contributor );

    //     // THEN: Verificar post publicado
    //     Then.validateInvitationWasNotSendRandom( contributor );
    // })
    
    // it('Escenario 28: Comprobar que insgrese un correo válido con data aleatoria', () => {
    //     const contributor = contributorSchemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();

    //     // WHEN: Crear y publicar post 
    //     When.testBademailInFieldRandom( contributor );

    //     // THEN: Verificar post publicado
    //     Then.validateBadEmailError();
    // })

    // it('Escenario 29: Modificar información del owner del sitio con data aleatoria', () => {
    //     const owner = ownerSchemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();
    
    //     // WHEN: Crear y publicar post 
    //     When.editOwnerInfo( owner );

    //     // THEN: Verificar post publicado
    //     Then.validateFieldsComplete( owner );
    // })

    // it('Escenario 30: Comprobar que se asigne un usuario valido para Twitter en el formulario de owner con data aleatoria', () => {
    //     const owner = ownerSchemaFaker();

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings();

    //     // WHEN: Crear y publicar post 
    //     When.editOwnerInfoTwitter( owner );

    //     // THEN: Verificar post publicado
    //     Then.validateErrorTwitter( owner );
    // })

    //EDWIN

    // it('E0031: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, datos validos', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0032: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, formatos erroneos', () => {
    //     const post = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0033: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, caracteres especiales y emoticones', () => {
    //     const post = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0034: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, titulo con 256 caracteres', () => {
    //     const post = getRandomPost("escenarioTitulo256");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtmlError(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishError(post);
    // });

    // it('E0035: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, titulo con 255 caracteres ', () => {
    //     const post = getRandomPost("escenarioTitulo255");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0036: (PoolDatosApriori) - Crear y publicar un post con contenido en HTML, titulo vacio', () => {
    //     const post = getRandomPost("escenarioTituloVacio");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedUntitled(post);
    // });

    // it('E0037: (PoolDatosApriori) - Despublicar post publicado, datos validos', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.unpublishPostCreated(post);

    //     // THEN: Verificar post publicado
    //     Then.confirmUnpublishPostPublished(post);
    // });

    // it('E0038: (PoolDatosApriori) - Eliminar post publicado, datos validos', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.deletePostPublished(post);

    //     // THEN: Verificar post publicado
    //     Then.confirmDeletedPost(post);
    // });

    // it('E0039: (PoolDatosApriori) - Crear Post para que solo sea visible para miembros, datos validos', () => {
    //     const post = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostMembersOnly(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedMembersOnly(post);
    // });

    // it('E0040: (PoolDatosApriori) - Crear una página con contenido en HTML y publicarla, datos validos', () => {
    //     const page = getRandomPost("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(page);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml(page);
    // });

    // it('E0041: (PoolDatosApriori) - Crear una página con contenido en HTML y publicarla, formato y etiquetas erroneas', () => {
    //     const page = getRandomPost("escenarioDataErroneaPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(page);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml(page);
    // });

    // it('E0042: (PoolDatosApriori) - Crear una página con contenido en HTML, Sin titulo.', () => {
    //     const page = getRandomPost("escenarioTituloVacio");

    //     // GIVEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(page);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedUntitled(page);
    // });

    // it('E0043: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, datos validos', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenariosPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostWithHtml(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedWithHtml(post);
    //     });
    // });

    // it('E0044: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, formatos erroneos', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenarioDataErroneaPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostWithHtml(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedWithHtml(post);
    //     });
    // });

    // it('E0045: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, caracteres especiales y emoticones', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenarioDataErroneaPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostWithHtml(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedWithHtml(post);
    //     });
    // });

    // it('E0046: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, titulo con 256 caracteres', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenarioTitulo256"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostWithHtmlError(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishError(post);
    //     });
    // });

    // it('E0047: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, titulo con 255 caracteres', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenarioTitulo255"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostWithHtml(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedWithHtml(post);
    //     });
    // });

    // it('E0048: (PseudoAleatorioDinamico) - Crear y publicar un post con contenido en HTML, titulo vacio', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenarioTituloVacio"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostWithHtml(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedUntitled(post);
    //     });
    // });

    // it('E0049: (PseudoAleatorioDinamico) - Despublicar post publicado, datos validos', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenariosPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.unpublishPostCreated(post);

    //         // THEN: Verificar post publicado
    //         Then.confirmUnpublishPostPublished(post);
    //     });
    // });

    // it('E0050: (PseudoAleatorioDinamico) -  Eliminar post publicado, datos validos', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenariosPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.deletePostPublished(post);

    //         // THEN: Verificar post publicado
    //         Then.confirmDeletedPost(post);
    //     });
    // });

    // it('E0051: (PseudoAleatorioDinamico) -  Crear Post para que solo sea visible para miembros, datos validos', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let post = data["escenariosPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.navigateToPostPage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPostMembersOnly(post);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedMembersOnly(post);
    //     });
    // });

    // it('E0052: (PseudoAleatorioDinamico) -  Crear una página con contenido en HTML y publicarla, datos validos', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let page = data["escenariosPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.givenNavigateToPagePage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPageWithHtml(page);

    //         // THEN: Verificar post publicado
    //         Then.seePagePublishedWithHtml(page);
    //     });
    // });

    // it('E0053: (PseudoAleatorioDinamico) -   Crear una página con contenido en HTML y publicarla, formato y etiquetas erroneas', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let page = data["escenarioDataErroneaPositivos"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.givenNavigateToPagePage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPageWithHtml(page);

    //         // THEN: Verificar post publicado
    //         Then.seePagePublishedWithHtml(page);
    //     });
    // });

    // it('E0054: (PseudoAleatorioDinamico) -   Crear una página con contenido en HTML, Sin titulo', () => {
    //     getPostDataMokaroo().then((data) => {
    //         let page = data["escenarioTituloVacio"][0];
    //         // GIVEN: Visitar pagina de posts
    //         Given.givenNavigateToPagePage();

    //         // WHEN: Crear y publicar post
    //         When.createAndPublishPageWithHtml(page);

    //         // THEN: Verificar post publicado
    //         Then.seePostPublishedUntitled(page);
    //     });
    // });

    // it('E0055: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, datos validos', () => {
    //     const post = getPostDataFaker("escenarioDataErroneaPositivos");
    //     // GIVEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0056: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, formatos erroneos', () => {
    //     const post = getPostDataFaker("escenarioDataErroneaPositivos");
    //     // GIVEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });


    // it('E0057: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, titulo con 256 caracteres', () => {
    //     const post = getPostDataFaker("escenarioTitulo256");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtmlError(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishError(post);
    // });

    // it('E0058: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, titulo con 255 caracteres ', () => {
    //     const post = getPostDataFaker("escenarioTitulo255");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedWithHtml(post);
    // });

    // it('E0059: (EscenarioAleatorio) - Crear y publicar un post con contenido en HTML, titulo vacio', () => {
    //     const post = getPostDataFaker("escenarioTituloVacio");

    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPostWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedUntitled(post);
    // });

    // it('E0060: (EscenarioAleatorio) - Crear una página con contenido en HTML y publicarla, datos validos', () => {
    //     const post = getPostDataFaker("escenariosPositivos");

    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtml(post);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml(post);
    // });

    // HAROLD

    it('Escenario 61: Crear y editar una página en Ghost', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();
    
        // WHEN: Crear publicar, editar y guardar
        When.createAndPublishPageEditAndSave();
    
        // THEN: Publicar la página
        Then.validatePageWasEditedAndCreated();
    });
    it('Escenario 62: Crear y publicar una página con un video de YouTube', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();
    
        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoPool(0);
    
        // THEN: Validar la publicación de la página
        Then.validatePageWithVideoCreated();
    });
    it('Escenario 63: Crear, publicar y eliminar una página en Ghost', () => {
    
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();
    
        // WHEN: Crear publicar, eliminar pagina
        When.createPublishAndDeletePagePool(0);
    
        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreatedAndDeleted();
    
    });
    it('Escenario 64: Crear una pagina y agregar un link de youtube invalido', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();
    
        When.createPageAndAddInvalidYoutubeLinkPool();
    
        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreateWithWrongVideo();
    
    })
    it('Escenario 65: Crear un tag', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();
    
        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(0);
    
        // THEN: Validar la creación del tag
        Then.validateTagWasCreated(0);
    });
    it('Escenario 66: Crear y publicar una página con un video de YouTube en la que el título tenga más de 254 caracteres.', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();
    
        // WHEN: Click en "New page"
        When.createAndPublishPageEditAndSavePool(1);
    
        // THEN: Validar la publicación de la página
        Then.seeAlertMessage();
    });
    it('Escenario 67: Crear una página con un título vacío y un video embebido.', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();
    
        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoPool(1);
    
        // THEN: Validar la publicación de la página
        Then.validatePageWithTitleNumberCreated();
    });
    it('Escenario 68: Crear múltiples etiquetas con el mismo nombre.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();
    
        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(1);
        Given.givenNavigateToTagsPage();
        When.createNewTagPool(0);
    
        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("Ciencia");
    });
    it('Escenario 69: Crear una etiqueta con emojis y símbolos especiales', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();
    
        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(3);
    
        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("Etiqueta 🌟 #Test @123");
    });
    // it('Escenario 70: Crear una etiqueta con un nombre de exactamente 190 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(4);
    
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // });
    // it('Escenario 71: Crear una etiqueta con una descripción de exactamente 500 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(5);
    
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("Etiqueta con descripción larga");
    // });
    // it('Escenario 72: Crear una nombre de 1 caracter.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(7);
    
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("1");
    // });
    // it('Escenario 73: Crear y editar una página en Ghost Faker', () => {
    //     // GIVEN: Visitar Pages
    //     Given.givenNavigateToPagePage();
    
    //     // WHEN: Crear publicar, editar y guardar
    //     When.createAndPublishPageEditAndSaveFaker();
    
    //     // THEN: Publicar la página
    //     Then.seePageUpdatedWithFaker();
    // });
    // it('Escenario 74: Crear y publicar una página con un video de YouTube FAKER', () => {
    //     // GIVEN: Visitar Pages
    //     Given.givenNavigateToPagePage();
    
    //     // WHEN: Click en "New page"
    //     When.createPageAndPublishWithVideoFaker();
    
    //     // THEN: Validar la publicación de la página
    //     Then.seePagePublishedWithVideoFaker();
    // });
    // it('Escenario 75: Crear, publicar y eliminar una página en Ghost faker', () => {
    
    //     // GIVEN: Visitar Pages
    //     Given.givenNavigateToPagePage();
    
    //     // WHEN: Crear publicar, eliminar pagina
    //     When.createPublishAndDeletePageFaker();
    
    //     // THEN: Validar que se lemino la pagina creada
    //     Then.validatePageWasCreatedAndDeleted();
    
    // });
    // it('Escenario 76: Crear una página con un título que incluye caracteres especiales como #@$%^&*. Faker', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();
    
    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlFaker();
    
    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtmlFaker();
    // });
    it('Escenario 77: Crear un tag usando faker', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();
    
        // WHEN: Crear publicar nuevo tag
        When.createNewTagFaker();
    
        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedFaker();
    });
    it('Escenario 79: Crear una etiqueta nueva y verificar su creación en el módulo de tags mockaroo.', () => {
        getTagDynamicrandom().then((tag) => {
            // GIVEN: Visitar Tags
            Given.givenNavigateToTagsPage();

            // WHEN: Crear publicar nuevo tag
            When.createNewTagMockaroo(tag);

            // THEN: Validar la creación del tag
            Then.validateTagWasCreatedName(tag.name);
        })
    });
    // it('Escenario 79: Crear y publicar una página con un video de YouTube Mockaroo', () => {
    //     getVideoDynamicRandom().then((video) => {
    //         // GIVEN: Visitar Pages
    //         Given.givenNavigateToPagePage();
    
    //         // WHEN: Click en "New page"
    //         When.createPageAndPublishWithVideoMockaroo(video);
    
    //         // THEN: Validar la publicación de la página
    //         Then.validatePageWithVideoCreatedName(video.title);
    //     })
    // });
    // it('Escenario 80: Crear y actualziar una pagina con datos generados en Mockaroo', () => {
    //     getEditDynamicRandom().then((data) => {
    
    //         Given.givenNavigateToPagePage();
    
    //         When.createAndPublishPageEditAndSaveMockaroo(data);
    //         console.log(data.updatedTitle, "data de update")
    
    //         Then.validateEditedMockaroo(data.updatedTitle);
    //     })
    // });
    
    // it('Escenario 81: Crear una etiqueta con una descripción de exactamente 501 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(6);

    //     // THEN: Validar error del tag
    //     Then.validateErrorDescriptionTag();
    // });

    // it('Escenario 82: Crear una etiqueta con una descripción que incluya caracteres especiales (#@$%^&*).', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(8);

    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("Etiqueta con descripción larga");
    // });
    // it('Escenario 83: Crear y editar una página en Ghost para que el titulo tenga emojis', () => {
    //     // GIVEN: Visitar Pages
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear publicar, editar y guardar
    //     When.createAndPublishPageEditAndSavePool(3);

    //     // THEN: Publicar la página
    //     Then.validatePageWasEditedAndCreated();
    // });
    // it('Escenario 84: Crear una página con HTML que incluya tablas.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlPool(3);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtmlName("Pagina con tabla HTML")
    // });
    // it('Escenario 85: Crear una página con HTML que incluya una lista.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlPool(4);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtmlName("Página con lista HTML")
    // });
    // it('Escenario 86: Crear una página con HTML con imagen y parrafo.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlPool(5);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtmlName("The Rise of Sustainable Energy")
    // });
    // it('Escenario 87: Crear una página con HTML  con enlace y párrafos.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlPool(6);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtmlName("Exploring the Depths of the Ocean")
    // });
    // it('Escenario 88: Crear una página con  HTML con video y formulario de contacto.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlPool(7);

    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtmlName("How to Start Your Own Business")
    // });
    // it('Escenario 89: Crear, publicar y eliminar una página en Ghost Mockaroo', () => {
    //     getDeleteDynamicRandom().then((data) => {

    //     // GIVEN: Visitar Pages
    //     Given.givenNavigateToPagePage();

    //     // WHEN: Crear publicar, eliminar pagina
    //     When.createPublishAndDeletePagePoolMockaroo(data);

    //     // THEN: Validar que se lemino la pagina creada
    //     Then.validatePageWasCreatedAndDeleted();
    //     })
    // });
    // it('Escenario 90: Crear una etiqueta con un nombre largo+ 200', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(2);

    //     // THEN: Validar la creación del tag
    //     Then.validateErrorTag();
    // });

    // //PABLO

    // it('Escenario 91: Crear un tag y asignarlo a un post', () => {
    //     cy.fixture('tagNames-E91.json').then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));
    //         // GIVEN: Visitar Tags
    //         Given.givenNavigateToTagsPage();

    //         // WHEN: Crear un tag y asignarlo a post
    //         When.createTagAndAsignIt(data[randomIndex].tagname,data[randomIndex].Post);

    //         // THEN: Validar la creación del post con el tag asignado
    //         Then.validatePostWithTag(data[randomIndex].tagname);

    //         }
    //     )
    // });


    // it('Escenario 92: Crear un tag y ponerlo en una page', () => {
    //     cy.fixture('tagNames-E92.json').then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));
    //         // GIVEN: Visitar Tags
    //         Given.givenNavigateToTagsPage();

    //         // WHEN: Crear y asignar tag a una pagina
    //         When.createTagAndAsignItToPage(data[randomIndex].tagname, data[randomIndex].Pages);

    //         // THEN: Validar si la pagina contiene el tag
    //         Then.validatePageWithTag(data[randomIndex]);

    //         }
    //     )
    // });

    // it('Escenario 93: Crear member', () => {
    //     cy.fixture('members-E93.json').then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));
    //         // GIVEN: Visitar members
    //         Given.givenNavigateTomembers();

    //         When.createNewMember(data[randomIndex].nameMember, data[randomIndex].email);

    //         Then.validateNewMemberExist(data[randomIndex].nameMember);
    //         }
    //     )
    // });

    // it('Escenario 94: Crear member y eliminarlo', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createMemberAndDeletIt();

    //     Then.validateMemberWasDeleted();
    // });

    // it('Escenario 95: Cambiar el título del sitio', () => {
    //     // GIVEN: Visitar Settings
    //     Given.givenNavigateToSettings();
    //     cy.fixture('siteTitle-E95.json').then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));

    //         When.updateSiteTitlte(data[randomIndex].siteTitle);

    //         Then.validateTitleSiteWasEdited(data[randomIndex].siteTitle);

    //         }
    //     )
    // });

    // it('Escenario 96: Crear member invalid', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateToMembersNegative();

    //     When.createNewMemberNegativeInvalid();

    //     Then.validateNewMemberErrorInvalid();
    // });

    // it('Escenario 97: Crear member y volver a crearlo', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createMemberAndRecreateIt();

    //     Then.validateNewMemberErrorDuplicate();
    // });

    // it('Escenario 98: Crear member note invalid', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateToMembersNegative();

    //     When.createNewMemberNegativeInvalidNote();

    //     Then.validateNewMemberErrorInvalidNote();
    // });

    // it('Escenario 99: Crear recomendación en los settings de la pagina', () => {
    //     // GIVEN: Visitar los settings de la pagina
    //     Given.givenNavigateToSettings();
    //     //Crear la recomendación
    //     When.createRecommendationValid();

    //     Then.validateNewRecommendationValid();
    // });

    // it('Escenario 100: Crear recomendación invalida en los settings de la pagina', () => {
    //     // GIVEN: Visitar los settings de la pagina
    //     Given.givenNavigateToSettings();
    //     cy.fixture('urlRecommendatiosInvalid.json').then((data) =>{
    //         cy.wrap(data).each((entry)=> {
    //             //Crear la recomendación
    //             When.createRecommendation(entry.invalidURL);
    //             Then.validateNewRecommendationInvalid();
    //         });
    //     });
    // });

    // it('Escenario 101: Crear un tag y asignarlo a un post - Mockaroo', () => {
    //     fetchMockarooData('tagPostValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) => {
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));
    //         // GIVEN: Visitar Tags
    //         Given.givenNavigateToTagsPage();

    //         // WHEN: Crear un tag y asignarlo a post
    //         When.createTagAndAsignIt(data[randomIndex].tagname,data[randomIndex].nameTitle);

    //         // THEN: Validar la creación del post con el tag asignado
    //         Then.validatePostWithTag(data[randomIndex].tagname);
    //     });
    // });

    // it('Escenario 102: Crear un tag y ponerlo en una page - Mockaroo', () => {
    //     fetchMockarooData('tagPostValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
    //             const randomIndex = Math.floor(Math.random() * (data.length-1));
    //             // GIVEN: Visitar Tags
    //             Given.givenNavigateToTagsPage();

    //             // WHEN: Crear y asignar tag a una pagina
    //             When.createTagAndAsignItToPage(data[randomIndex].tagname, data[randomIndex].nameTitle);

    //             // THEN: Validar si la pagina contiene el tag
    //             Then.validatePageWithTag(data[randomIndex].tagname);
    //         }
    //     )
    // });

    // it('Escenario 103: Crear member - Mockaroo', () => {
    //     fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));

    //         // GIVEN: Visitar members
    //         Given.givenNavigateTomembers();

    //         When.createNewMember(data[randomIndex].nameMember, data[randomIndex].emailMember);

    //         Then.validateNewMemberExist(data[randomIndex].nameMember);

    //         }
    //     )
    // });

    // it('Escenario 104: Crear member y eliminarlo - Mockaroo', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createMemberAndDeletItMockaroo();

    //     Then.validateMemberWasDeleted();
    // });

    // it('Escenario 105: Cambiar el título del sitio - Mockaroo', () => {
    //     // GIVEN: Visitar Settings
    //     Given.givenNavigateToSettings();
    //     fetchMockarooData('pageTitle.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));

    //         When.updateSiteTitlte(data[randomIndex].title);

    //         Then.validateTitleSiteWasEdited(data[randomIndex].title);
    //         }
    //     )
    // });

    // it('Escenario 106: Crear member invalid - Mockaroo', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateToMembersNegative();

    //     When.createNewMemberNegativeInvalidMockaroo();

    //     Then.validateNewMemberErrorInvalid();
    // });

    // it('Escenario 107: Crear member y volver a crearlo - Mockaroo', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createMemberAndRecreateItMockaroo();

    //     Then.validateNewMemberErrorDuplicate();
    // });

    // it('Escenario 108: Crear tag con slug superior a 191 caracteres - Mockaroo', () => {
    //     const randonTagName = faker.lorem.slug(2);
    //     const randomInvalidSlug = faker.string.alphanumeric(192);

    //     //GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear y asignar tag a una pagina
    //     When.createNewTag(randonTagName, randomInvalidSlug);

    //     Then.validateNewTagErrorInvalidSlug();

    // });

    // it('Escenario 109: Crear recomendación en los settings de la pagina - Mockaroo', () => {
    //     // GIVEN: Visitar los settings de la pagina
    //     Given.givenNavigateToSettings();

    //     //Crear la recomendación
    //     When.createRecommendationValidMockaroo();

    //     Then.validateNewRecommendationValid();
    // });

    // it('Escenario 110: Crear recomendación con link invalido en los settings de la pagina - Mockaroo', () => {
    //     // GIVEN: Visitar los settings de la pagina
    //     Given.givenNavigateToSettings();
    //     fetchMockarooData('invalidLinkRecommendation.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
    //         const randomIndex = Math.floor(Math.random() * (data.length-1));
    //         //Crear la recomendación
    //         When.createRecommendation(data[randomIndex].invalidURL);

    //         Then.validateNewRecommendationInvalid();
    //     });
    // });

    // it('Escenario 111: Crear un tag y asignarlo a un post - Faker', () => {
    //     const randomTagName = faker.lorem.slug(2);
    //     const randomTitlePost = faker.lorem.words(5);

    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear un tag y asignarlo a post
    //     When.createTagAndAsignIt(randomTagName,randomTitlePost);

    //     // THEN: Validar la creación del post con el tag asignado
    //     Then.validatePostWithTag(randomTagName);
    // });

    // it('Escenario 112: Crear un tag y ponerlo en una page - Faker', () => {
    //     const randomTagName = faker.lorem.slug(2);
    //     const randomTitlePage = faker.lorem.words(5);
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear y asignar tag a una pagina
    //     When.createTagAndAsignItToPage(randomTagName, randomTitlePage);

    //     // THEN: Validar si la pagina contiene el tag
    //     Then.validatePageWithTag(randomTagName);
    // });

    // it('Escenario 113: Crear member - Faker', () => {
    //     const randomNameMember = faker.lorem.words(2);
    //     const randomEmailMember = faker.internet.email();

    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createNewMember(randomNameMember,randomEmailMember);

    //     Then.validateNewMemberExist(randomNameMember);

    // });

    // it('Escenario 114: Crear member y eliminarlo - Faker', () => {
    //     const randomNameMember = faker.lorem.words(2);
    //     const randomEmailMember = faker.internet.email();
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createMemberAndDeletItFaker(randomNameMember, randomEmailMember);

    //     Then.validateMemberWasDeleted();
    // });

    // it('Escenario 115: Cambiar el título del sitio - Faker', () => {
    //     const randomUpdatedTitle = faker.lorem.words(2);
    //     // GIVEN: Visitar Settings
    //     Given.givenNavigateToSettings();

    //     When.updateSiteTitlte(randomUpdatedTitle);

    //     Then.validateTitleSiteWasEdited(randomUpdatedTitle);
    // });

    // it('Escenario 116: Crear member invalid - Faker', () => {
    //     const randomNameMember = faker.lorem.words(2);
    //     const invalidEmailMember = faker.lorem.words(2);

    //     // GIVEN: Visitar members
    //     Given.givenNavigateToMembersNegative();

    //     When.createNewMemberNegativeInvalidFaker(randomNameMember, invalidEmailMember);

    //     Then.validateNewMemberErrorInvalid();
    // });

    // it('Escenario 117: Crear member y volver a crearlo - Faker', () => {
    //     const randomNameMember = faker.lorem.words(2);
    //     const randomEmailMember = faker.internet.email();
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();

    //     When.createMemberAndRecreateItFaker(randomNameMember, randomEmailMember);

    //     Then.validateNewMemberErrorDuplicate();
    // });

    // it('Escenario 118: Crear member note invalid - Faker', () => {
    //     const randomNameMember = faker.lorem.words(2);
    //     const randomEmailMember = faker.internet.email();
    //     const randomInvalidNote = faker.string.alphanumeric(501);
    //     // GIVEN: Visitar members
    //     Given.givenNavigateToMembersNegative();

    //     When.createNewMemberNegativeInvalidFaker(randomNameMember, randomEmailMember, randomInvalidNote);

    //     Then.validateNewMemberErrorInvalidNote();

    // });

    // it('Escenario 119: Crear recomendación en los settings de la pagina - Faker', () => {
    //     const randomURL = faker.internet.url();

    //     // GIVEN: Visitar los settings de la pagina
    //     Given.givenNavigateToSettings();
    //     //Crear la recomendación
    //     When.createRecommendationValidFaker(randomURL);

    //     Then.validateNewRecommendationValid();

    // });

    // it('Escenario 120: Crear recomendación con link invalido en los settings de la pagina - Faker', () => {
    //     const invalidURL= faker.lorem.words(5);

    //     // GIVEN: Visitar los settings de la pagina
    //     Given.givenNavigateToSettings();

    //     //Crear la recomendación
    //     When.createRecommendationInvalidFaker(invalidURL);

    //     //Validar el mensaje de error
    //     Then.validateNewRecommendationInvalid();
    // });

    // it('Escenario 20: Crear un tag usando faker execendiendo maximo de caracteres', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagFakerName();

    //     // THEN: Validar la creación del tag
    //     Then.validateErrorTag();
    // });
    // it('Escenario 12: Crear una etiqueta con una descripción de exactamente 501 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();

    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(6);

    //     // THEN: Validar error del tag
    //     Then.validateErrorDescriptionTag();
    // });
    

 });

