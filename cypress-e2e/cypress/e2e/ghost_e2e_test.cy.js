import Given from '../steps/givenSteps';
import When from '../steps/whenSteps';
import Then from '../steps/thenSteps';

describe('Crear un post', () => {
    beforeEach(() => {
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

    it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
        // THEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.createPageAndPublishWithVideo();

        // THEN: Validar la publicación de la página
        Then.validatePageWithVideoCreated();
    });

    it('#Escenario 12: Crear y editar una página en Ghost', () => {
        // THEN: Visitar Pages
        Given.givenNavigateToPagePage();

        // WHEN: Click en "New page"
        When.reateAndPublishPageEditAndSave();

        // THEN: Publicar la página
        Then.validatePageWasEditedAndCreated();
    });
});

