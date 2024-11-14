function givenNavigateToInitialPage(){
    cy.visit(Cypress.env('baseUrl'));
};

function givenLogin(){
    cy.get('input[type="email"]').type(Cypress.env('email'), { force: true });
    cy.get('input[type="password"]').type(Cypress.env('password'), { force: true });
    cy.get('button[data-test-button="sign-in"]').click();
};

function givenNavigateToPostPage(){
    cy.visit(Cypress.env('postPageUrl'));
    cy.url().should('include', '/ghost/#/posts');
};