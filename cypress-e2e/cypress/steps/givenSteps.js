class Given {

    givenNavigateToInitialPage(){
        cy.log('Sitio: ', Cypress.env('baseUrl'));
        cy.visit(Cypress.env('baseUrl'));
    };
    
    givenLogin(){
        cy.get('input[type="email"]').type(Cypress.env('email'), { force: true });
        cy.get('input[type="password"]').type(Cypress.env('password'), { force: true });
        cy.get('button[data-test-button="sign-in"]').click();
    };
    
    givenNavigateToPostPage(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.url().should('include', '/ghost/#/posts');
    };
}


export default new Given();