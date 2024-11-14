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

        // THEN: Publicar la página
        Then.publishPage();
    });
});

