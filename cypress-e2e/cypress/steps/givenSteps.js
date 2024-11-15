class Given {

    get buttonSignIn(){
        return 'button[data-test-button="sign-in"]';
    }

    get inputEmail(){
        return 'input[type="email"]';
    }

    get inputPass(){
        return 'input[type="password"]';
    }

    givenNavigateToInitialPage(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/signin');
        cy.get(this.buttonSignIn).should('be.visible');
        cy.screenshot('init/p1_initPage');
    };
    
    givenLogin(){
        cy.get(this.inputEmail).type(Cypress.env('email'), { force: true });
        cy.get(this.inputPass).type(Cypress.env('password'), { force: true });
        cy.screenshot('init/p2_login');
        cy.get(this.buttonSignIn).click();
        cy.wait(500);
    };

    givenNavigateDashboard(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/dashboard');
        cy.url().should('include', '/ghost/#/dashboard');
        cy.screenshot('init/p3_dashboard');
    }
    
    navigateToPostPage(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.url().should('include', '/ghost/#/posts');
        cy.screenshot('init/p4_postPage');
    };
    
    givenNavigateToPagePage(){
        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');
    };
}


export default new Given();