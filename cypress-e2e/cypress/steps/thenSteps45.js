class Then {

    seePostPublished(){ 
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(Cypress.env('titlePostBasic')).should('exist'); 
    }

    seePostPublishedBold(){ 
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(Cypress.env('titlePostBold')).should('exist'); 
    }

    seePostPublishedPostMarkdown(){ 
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('(Editado!)').should('exist'); 
    }

    confirmUnpublishPostPublished(){
        cy.visit(Cypress.env('postDraftPageUrl'));
        cy.contains('Draft').should('exist'); 
    }
}


export default new Then();