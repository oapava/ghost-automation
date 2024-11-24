import {getPostDataDynamicrandom, schemaFaker, getLinkDataDynamicrandom, getContributorDataDynamicrandom, getOwnerDataDynamicrandom, ownerSchemaFaker, linkSchemaFaker, contributorSchemaFaker} from '../helpers/helpers';
import Given from '../steps/givenSteps_omar';
import When from '../steps/whenSteps_omar';
import Then from '../steps/thenSteps_omar';


describe('Crear un post', () => {
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

 });

