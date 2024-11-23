class Then {

    get alertCloseNotificationButton(){
        return 'button.gh-alert-close[data-test-button="close-notification"]';
    }

    get returnPost(){
        return 'a[data-test-link="posts"]';
    }

    get leaveButton(){
        return 'button.gh-btn.gh-btn-red[data-test-leave-button]';
    }

    seePostPublished(post){
        cy.visit(Cypress.env('postPagePublishedUrl'));
        cy.contains(post.title).should('exist');
    }

    seePostPublishedWithHtml(post){
        cy.visit(Cypress.env('postPagePublishedUrl'));
        cy.contains(post.title).should('exist');
    }

    seePostPublishError(post){
        cy.contains('Validation failed').should('exist');
        cy.get(this.alertCloseNotificationButton).should('exist').first().click();
        cy.get(this.returnPost).should('exist').first().click();
        cy.get(this.leaveButton).should('exist').first().click();
    }


    seePostPublishedUntitled(post){
        cy.visit(Cypress.env('postPagePublishedUrl'));
        cy.contains('Untitled').should('exist');
    }

    confirmUnpublishPostPublished(){
        cy.visit(Cypress.env('postDraftPageUrl'));
        cy.get('span[title="Go to Editor"]').should('exist')
    }

    confirmDeletedPost(){
        cy.visit(Cypress.env('postPageUrl'));
    }

    seePagePublishedWithHtml(page){
        cy.visit(Cypress.env('pageUrl'));
        cy.contains(page.title).should('exist');
    }

    seePostPublishedMembersOnly(){
        cy.visit(Cypress.env('postMembersPageUrl'));
        cy.contains(post.title).should('exist');
    }

}


export default new Then();