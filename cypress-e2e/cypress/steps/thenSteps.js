class Then {
    publishPage(){
        cy.get('button[data-test-button="publish-flow"]').should('be.visible'); // Publish
        cy.get('button[data-test-button="publish-flow"]').first().click();

        //Continuar a review final
        cy.get('button[data-test-button="continue"]').should('be.visible'); // Continue, final review
        cy.get('button[data-test-button="continue"]').first().click();

        //Publicar post
        cy.get('button[data-test-button="confirm-publish"]').should('be.visible'); //Publish post, right now
        cy.get('button[data-test-button="confirm-publish"]').first().click();
        cy.url().should('contain', '/pages');
    }
}


export default new Then();