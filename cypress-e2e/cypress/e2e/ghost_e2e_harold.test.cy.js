import Given from "../steps/givenSteps";
import When from "../steps/whenSteps_harold";
import Then from "../steps/thenSteps";

describe('Crear un post', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

//     it('Escenario 10: Crear Pagina con contenido en HTML', () => {
//         // THEN: Visitar pagina de posts
//         Given.givenNavigateToPagePage();
//
//         // WHEN: Crear y publicar post
//         When.createAndPublishPageWithHtmlPool(0);
//
//         // THEN: Verificar post publicado
//         Then.seePagePublishedWithHtml();
//     });
//
//     it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
//         // GIVEN: Visitar Pages
//         Given.givenNavigateToPagePage();
//
//         // WHEN: Click en "New page"
//         When.createPageAndPublishWithVideoPool(0);
//
//         // THEN: Validar la publicación de la página
//         Then.validatePageWithVideoCreated();
//     });
//
//     it('Escenario 12: Crear y editar una página en Ghost', () => {
//         // GIVEN: Visitar Pages
//         Given.givenNavigateToPagePage();
//
//         // WHEN: Crear publicar, editar y guardar
//         When.createAndPublishPageEditAndSavePool(0);
//
//         // THEN: Publicar la página
//         Then.validatePageWasEditedAndCreated();
//     });
//
//     it('Escenario 13: Crear, publicar y eliminar una página en Ghost', () => {
//
//         // GIVEN: Visitar Pages
//         Given.givenNavigateToPagePage();
//
//         // WHEN: Crear publicar, eliminar pagina
//         When.createPublishAndDeletePagePool();
//
//         // THEN: Validar que se lemino la pagina creada
//         Then.validatePageWasCreatedAndDeleted();
//
//     });
//
//     it('Escenario 14: Crear una pagina y agregar un link de youtube invalido', () =>{
//         // GIVEN: Visitar Pages
//         Given.givenNavigateToPagePage();
//
//         // WHEN: Crear publicar, eliminar pagina
//         When.createPageAndAddInvalidYoutubeLinkPool();
//
//         // THEN: Validar que se lemino la pagina creada
//         Then.validatePageWasCreateWithWrongVideo();
//
//     })
//
//     it('Escenario 15: Crear un tag', () => {
//         // GIVEN: Visitar Tags
//         Given.givenNavigateToTagsPage();
//
//         // WHEN: Crear publicar nuevo tag
//         When.createNewTagPool(0);
//
//         // THEN: Validar la creación del tag
//         Then.validateTagWasCreated();
//     });

    // it('Escenario 16: Crear y publicar una página con un video de YouTube en la que el título tenga más de 254 caracteres.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();
    //
    //     // WHEN: Click en "New page"
    //     When.createAndPublishPageEditAndSavePool(1);
    //
    //     // THEN: Validar la publicación de la página
    //     Then.seeAlertMessage();
    // });

    //     it('Escenario 17: Crear una página con un título vacío y un video embebido.', () => {
    //     // GIVEN: Visitar Pages
    //     Given.givenNavigateToPagePage();
    //
    //     // WHEN: Click en "New page"
    //     When.createPageAndPublishWithVideoPool(1);
    //
    //     // THEN: Validar la publicación de la página
    //     Then.validatePageWithTitleNumberCreated();
    // });

    // it('Escenario 18: Crear múltiples etiquetas con el mismo nombre.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    //
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(1);
    //     Given.givenNavigateToTagsPage();
    //     When.createNewTagPool(0);
    //
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("Tecnología");
    //     Then.validateTagWasCreatedName("Ciencia");
    // });

    //      it('Escenario 19: Crear una página con un título que incluye caracteres especiales como #@$%^&*.', () => {
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToPagePage();
    //
    //     // WHEN: Crear y publicar post
    //     When.createAndPublishPageWithHtmlPool(2);
    //
    //     // THEN: Verificar post publicado
    //     Then.seePagePublishedWithHtml();
    // });
    // it('Escenario 20: Crear una etiqueta con un nombre largo+ 200', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    //
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(2);
    //
    //     // THEN: Validar la creación del tag
    //     Then.validateErrorTag();
    // });

    // it('Escenario 21: Crear una etiqueta con un nombre largo+ 200', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    //
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(3);
    //
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("Etiqueta 🌟 #Test @123");
    // });

    // it('Escenario 21: Crear una etiqueta con un nombre de exactamente 190 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    //
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(4);
    //
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // });

    // it('Escenario 22: Crear una etiqueta con una descripción de exactamente 500 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    //
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(5);
    //
    //     // THEN: Validar la creación del tag
    //     Then.validateTagWasCreatedName("Etiqueta con descripción larga");
    // });

    // it('Escenario 23: Crear una etiqueta con una descripción de exactamente 500 caracteres.', () => {
    //     // GIVEN: Visitar Tags
    //     Given.givenNavigateToTagsPage();
    //
    //     // WHEN: Crear publicar nuevo tag
    //     When.createNewTagPool(6);
    //
    //     // THEN: Validar error del tag
    //     Then.validateErrorDescriptionTag();
    // });

    it('Escenario 24: Crear una etiqueta con una descripción de exactamente 500 caracteres.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(7);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("1");
    });
});