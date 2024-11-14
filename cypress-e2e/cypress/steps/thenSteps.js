class Then {
    validatePageWithVideoCreated(){
        cy.contains('Página con video de YouTube').should('be.visible');
    }

    validatePageWasEditedAndCreated(){
        cy.get('.gh-notification').should('be.visible');
    }
}


export default new Then();