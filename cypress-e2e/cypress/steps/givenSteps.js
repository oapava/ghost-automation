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

    get settingsButton(){
        return 'a[data-test-nav="settings"]';
    }

    givenNavigateToInitialPage(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/signin');
        cy.get(this.buttonSignIn).should('exist');
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
        cy.wait(500);
        cy.screenshot('init/p4_postPage');
    };

    navigateToPostPagePublished(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/posts?type=published');
        cy.url().should('include', 'posts?type=published');
        cy.wait(500);
        cy.screenshot('init/p4_postPagePulished');
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