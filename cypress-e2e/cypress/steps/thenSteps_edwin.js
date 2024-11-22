class Then {

    seePostPublished(post){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(post.title).should('exist');
    }

    seePostPublishedWithHtml(post){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(post.title).should('exist');
    }

    seePostPublishedWithHtml(post){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(post.title).should('exist');
    }

    seePostPublishedUntitled(post){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Untitled').should('exist');
    }

    seePagePublishedWithHtml(page){
        cy.visit(Cypress.env('pageUrl'));
        cy.contains(page.title).should('exist');
    }

    seePostPublishedMembersOnly(){
        cy.visit(Cypress.env('postMembersPageUrl'));
        cy.contains(post.title).should('exist');
    }





    //
}


export default new Then();