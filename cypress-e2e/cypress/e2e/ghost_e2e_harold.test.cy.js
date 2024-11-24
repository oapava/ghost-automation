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

   it('Escenario 1: Crear y editar una página en Ghost', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, editar y guardar
        When.createAndPublishPageEditAndSave();

        // THEN: Publicar la página
        Then.validatePageWasEditedAndCreated();
    });
    it('Escenario 2: Crear y publicar una página con un video de YouTube', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoPool(0);

        // THEN: Validar la publicación de la página
        Then.validatePageWithVideoCreated();
    });
    it('Escenario 3: Crear, publicar y eliminar una página en Ghost', () => {

        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, eliminar pagina
        When.createPublishAndDeletePagePool(0);

        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreatedAndDeleted();

    });
    it('Escenario 4: Crear una pagina y agregar un link de youtube invalido', () =>{
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        When.createPageAndAddInvalidYoutubeLinkPool();

        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreateWithWrongVideo();

    })
    it('Escenario 5: Crear un tag', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(0);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreated();
    });
    it('Escenario 6: Crear y publicar una página con un video de YouTube en la que el título tenga más de 254 caracteres.', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createAndPublishPageEditAndSavePool(1);

        // THEN: Validar la publicación de la página
        Then.seeAlertMessage();
    });
    it('Escenario 7: Crear una página con un título vacío y un video embebido.', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoPool(1);

        // THEN: Validar la publicación de la página
        Then.validatePageWithTitleNumberCreated();
    });
    it('Escenario 8: Crear múltiples etiquetas con el mismo nombre.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(1);
        Given.givenNavigateToTagsPage();
        When.createNewTagPool(0);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("Tecnología");
        Then.validateTagWasCreatedName("Ciencia");
    });
    it('Escenario 9: Crear una etiqueta con emojis y símbolos especiales', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(3);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("Etiqueta 🌟 #Test @123");
    });
    it('Escenario 10: Crear una etiqueta con un nombre de exactamente 190 caracteres.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(4);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    });
    it('Escenario 11: Crear una etiqueta con una descripción de exactamente 500 caracteres.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(5);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("Etiqueta con descripción larga");
    });

    it('Escenario 13: Crear una nombre de 1 caracter.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(7);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("1");
    });
    it('Escenario 14: Crear y editar una página en Ghost Faker', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, editar y guardar
        When.createAndPublishPageEditAndSaveFaker();

        // THEN: Publicar la página
        Then.seePageUpdatedWithFaker();
    });
    it('Escenario 15: Crear y publicar una página con un video de YouTube FAKER', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoFaker();

        // THEN: Validar la publicación de la página
        Then.seePagePublishedWithVideoFaker();
    });
    it('Escenario 16: Crear, publicar y eliminar una página en Ghost faker', () => {

        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, eliminar pagina
        When.createPublishAndDeletePageFaker();

        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreatedAndDeleted();

    });
    it('Escenario 17: Crear una página con un título que incluye caracteres especiales como #@$%^&*. Faker', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtmlFaker();

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtmlFaker();
    });
    it('Escenario 18: Crear un tag usando faker', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagFaker();

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedFaker();
    });
    it('Escenario 19: Crear una etiqueta nueva y verificar su creación en el módulo de tags mockaroo.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagMockaroo();

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("aasuscipit nulla");
    });

    it('Escenario 21: Crear y publicar una página con un video de YouTube Mockaroo', () => {
        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideoPool(2);

        // THEN: Validar la publicación de la página
        Then.validatePageWithVideoCreatedName("volutpat sapien arcu sed augue");
    });
    it('Escenario 22: Crear y actualziar una pagina con datos generados en Mockaroo', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createAndPublishPageEditAndSavePool(2);

        // THEN: Validar la publicación de la página
        Then.validatePageWasEditedAndCreated("lectus in quam fringilla rhoncus mauris enim leo rhoncus sed");
    });
    it('Escenario 23: Crear una página con un título que incluye caracteres especiales como #@$%^&*.', () => {
        // THEN: Visitar pagina de posts
        Given.givenNavigateToPagePage();

        // WHEN: Crear y publicar post
        When.createAndPublishPageWithHtmlPool(2);

        // THEN: Verificar post publicado
        Then.seePagePublishedWithHtml();
    });
    it('Escenario 24: Crear una etiqueta con una descripción que incluya caracteres especiales (#@$%^&*).', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(8);

        // THEN: Validar la creación del tag
        Then.validateTagWasCreatedName("Etiqueta con descripción larga");
    });
    it('Escenario 25: Crear y editar una página en Ghost para que el titulo tenga emojis', () => {
            // GIVEN: Visitar Pages
            Given.givenNavigateToPagePage();

            // WHEN: Crear publicar, editar y guardar
            When.createAndPublishPageEditAndSavePool(3);

            // THEN: Publicar la página
            Then.validatePageWasEditedAndCreated();
        });
    it('Escenario 26: Crear una página con HTML que incluya tablas.', () => {
            // THEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtmlPool(3);

            // THEN: Verificar post publicado
            Then. seePagePublishedWithHtmlName("Pagina con tabla HTML")
        });
    it('Escenario 27: Crear una página con HTML que incluya una lista.', () => {
            // THEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtmlPool(4);

            // THEN: Verificar post publicado
            Then. seePagePublishedWithHtmlName("Página con lista HTML")
        });
    it('Escenario 28: Crear una página con HTML con imagen y parrafo.', () => {
            // THEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtmlPool(5);

            // THEN: Verificar post publicado
            Then. seePagePublishedWithHtmlName("The Rise of Sustainable Energy")
        });
    it('Escenario 29: Crear una página con HTML  con enlace y párrafos.', () => {
            // THEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtmlPool(6);

            // THEN: Verificar post publicado
            Then. seePagePublishedWithHtmlName("Exploring the Depths of the Ocean")
        });
    it('Escenario 30: Crear una página con  HTML con video y formulario de contacto.', () => {
            // THEN: Visitar pagina de posts
            Given.givenNavigateToPagePage();

            // WHEN: Crear y publicar post
            When.createAndPublishPageWithHtmlPool(7);

            // THEN: Verificar post publicado
            Then. seePagePublishedWithHtmlName("How to Start Your Own Business")
        });

    it('Escenario 32: Crear, publicar y eliminar una página en Ghost Mockaroo', () => {

        // GIVEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Crear publicar, eliminar pagina
        When.createPublishAndDeletePagePool(1);

        // THEN: Validar que se lemino la pagina creada
        Then.validatePageWasCreatedAndDeleted();

    });

    it('Escenario 31: Crear una etiqueta con un nombre largo+ 200', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(2);

        // THEN: Validar la creación del tag
        Then.validateErrorTag();
    });
    it('Escenario 20: Crear un tag usando faker execendiendo maximo de caracteres', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagFakerName();

        // THEN: Validar la creación del tag
        Then.validateErrorTag();
    });
    it('Escenario 12: Crear una etiqueta con una descripción de exactamente 501 caracteres.', () => {
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear publicar nuevo tag
        When.createNewTagPool(6);

        // THEN: Validar error del tag
        Then.validateErrorDescriptionTag();
    });
});
