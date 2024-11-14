class Then {
    validatePageWithVideoCreated(){
        cy.contains('Página con video de YouTube').should('be.visible');
    }

    validatePageWasEditedAndCreated(){
        cy.get('.gh-notification').should('be.visible');
    }

    seePostPublished(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(Cypress.env('titlePostBasic')).should('be.visible'); 
    }

    seePostPublishedBold(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(Cypress.env('titlePostBold')).should('be.visible'); 
    }

    seePostPublishedPostMarkdown(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('(Editado!)').should('be.visible'); 
    }

    seePostPublishedPostWithImage(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Post con imagen 1').should('be.visible'); 
    }

    seePostPublishedPostWithContent(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Post con contenido 1').should('be.visible'); 
    }

    confirmDeletedPost(){
        cy.visit(Cypress.env('postPageUrl'));
        //pendiente
    }

    confirmDeletedPostPublished(){
        cy.visit(Cypress.env('postPageUrl'));
        //pendiente
    }

    seePostPublishedMembersOnly(){
        cy.visit(Cypress.env('postMembersPageUrl'));
        cy.contains('Post para miembros 1').should('be.visible'); 
    }

    seePostPublishedWithHtml(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Post con HTML 1').should('be.visible'); 
    }

    seePagePublishedWithHtml(){
        cy.visit(Cypress.env('pageUrl'));
        cy.contains('Pagina con HTML 1').should('be.visible'); 
    }
}


export default new Then();