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

        cy.get('button[data-test-button="publish-flow"]').should('be.visible'); // Publish
        cy.get('button[data-test-button="publish-flow"]').first().click();

        //Continuar a review final
        cy.get('button[data-test-button="continue"]').should('be.visible'); // Continue, final review
        cy.get('button[data-test-button="continue"]').first().click();
        
        //Publicar post
        cy.get('button[data-test-button="confirm-publish"]').should('be.visible'); //Publish post, right now
        cy.get('button[data-test-button="confirm-publish"]').first().click();
        cy.url().should('contain', '/pages');
        cy.get('button[data-test-button="close-publish-flow"]').click();
    }

    whenCreateAndPublishPost(){
        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type(Cypress.env('titlePostBasic'));
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
        this.publishPostAndPage();
        cy.url().should('include', '/ghost/#/posts');
        cy.get('button[data-test-button="close-publish-flow"]').click();
    }
    
    reateAndPublishPageEditAndSave(){
        // Crear nueva página
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('textarea[placeholder="Page title"]').type('My Page to edit{enter}');

        //Publicar post
        cy.get('.koenig-react-editor').first().click();
        this.publishPostAndPage();
        cy.url().should('contain', '/pages');

        // Editar la página recién creada
        cy.get('button[data-test-button="close-publish-flow"]').click();
        cy.contains('My Page to edit').click();
        cy.get('textarea[placeholder="Page title"]').clear().type('Updated Page Title{enter}');

        // Guardar la página actualizada
        cy.get('button[data-test-button="publish-save"]').contains('Update').click();
        
    }

    publishPostAndPage(){
        cy.get('button[data-test-button="publish-flow"]').should('be.visible'); // Publish
        cy.get('button[data-test-button="publish-flow"]').first().click();

        //Continuar a review final
        cy.get('button[data-test-button="continue"]').should('be.visible'); // Continue, final review
        cy.get('button[data-test-button="continue"]').first().click();

        //Publicar post
        cy.get('button[data-test-button="confirm-publish"]').should('be.visible'); //Publish post, right now
        cy.get('button[data-test-button="confirm-publish"]').first().click(); 
    }

}

export default new When();