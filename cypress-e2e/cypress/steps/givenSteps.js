class Given {
    get settingsButton(){
        return 'a[data-test-nav="settings"]';
    }

    givenNavigateToInitialPage(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/signin');
    };
    
    givenLogin(){
        cy.get('input[type="email"]').type(Cypress.env('email'), { force: true });
        cy.get('input[type="password"]').type(Cypress.env('password'), { force: true });
        cy.get('button[data-test-button="sign-in"]').click();
    };

    givenNavigateDashboard(){
        cy.wait(1000);
        cy.url().should('include', '/ghost/#/dashboard');
    }
    
    navigateToPostPage(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.url().should('include', '/ghost/#/posts');
    };
    
    givenNavigateToPagePage(){
        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');
    };

    givenNavigateToTagsPage(){
        cy.visit(Cypress.env('tagsUrl'));
        cy.url().should('include', '/ghost/#/tags');
    };
    
    givenNavigateTomembers(){
        cy.visit(Cypress.env('mambersUrl'));
        cy.url().should('include', '/ghost/#/members');
    };
    
    givenNavigateToSettings(){
        cy.get(this.settingsButton).click();
        cy.url().should('include', '/ghost/#/settings');
    };
}


export default new Given();