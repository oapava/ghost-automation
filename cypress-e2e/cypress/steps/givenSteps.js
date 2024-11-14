
function givenLogin(){
    cy.get('input[type="email"]').type(Cypress.env('email'), { force: true });
    cy.get('input[type="password"]').type(Cypress.env('password'), { force: true });
    cy.get('button[data-test-button="sign-in"]').click();
};