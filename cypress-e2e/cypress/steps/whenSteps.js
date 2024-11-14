class When {
    createPageAndPublishWithVideo(){
        cy.get('span').contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.get('textarea[data-test-editor-title-input]').type('Página con video de YouTube');
        cy.get('textarea[data-test-editor-title-input]').type('{enter}');

        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});


        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get('button[data-kg-card-menu-item="YouTube"]').scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get('input[data-testid="embed-url"]').should('be.visible').type("https://www.youtube.com/watch?v=x91MPoITQ3I").type('{enter}');
    }

    whenCreatePost(){
        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type(Cypress.env('titlePostBasic'));
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
    }

    whenPublishPost(){
        cy.get('button[data-test-button="publish-flow"]').first().click();
        cy.get('button[data-test-button="continue"]').first().click();
        cy.get('button[data-test-button="confirm-publish"]').first().click();
        cy.url().should('include', '/ghost/#/posts');
        cy.get('button[data-test-button="close-publish-flow"]').click();

        //cy.wait(1000)
        //cy.get('a[data-test-complete-bookmark]').first().click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
    }
}


export default new When();