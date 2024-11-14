import Given from '../steps/givenSteps';

describe('Crear un post', () => {
    beforeEach(() => {
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateToPostPage();
    });

    it('Escenario 1', () => {
    });
});

