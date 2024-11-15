class Then {
    validatePageWithVideoCreated(){
        cy.contains('Página con video de YouTube').should('be.visible').screenshot('e11/p4-creacion-finalizada');
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

    confirmUnpublishPostPublished(){
        cy.visit(Cypress.env('postDraftPageUrl'));
        cy.get('span[title="Go to Editor"]').should('exist')
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

    validatePageWasCreatedAndDeleted(){
        cy.visit(Cypress.env('pageUrl'));
        cy.get('button[data-test-button="confirm"]').should('be.visible').click();
    }

    validatePageWasCreateWithWrongVideo(){
        cy.visit(Cypress.env('pageUrl'));
        cy.get('h3').contains('Página con error en video de YouTube').first().scrollIntoView();
        cy.contains('Página con error en video de YouTube').should('exist');
    }

    validateTagWasCreated(){
        cy.visit('http://localhost:2368/ghost/#/tags');
        cy.visit(Cypress.env('tagsUrl'));
        cy.get('.tags-list').should('contain', Cypress.env('tagName'));
        cy.contains(Cypress.env('tagName')).should('exist');
    }

    validatePostWithTag(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.posts-list').should('contain', Cypress.env('tagName'));
        cy.contains(Cypress.env('tagName')).should('exist');
    }

    validatePageWithTag(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.posts-list').should('contain', Cypress.env('tagName'));
        cy.contains(Cypress.env('tagName')).should('exist');
    }

    validateNewMemberExist(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[data-test-table="members"]').should('contain', Cypress.env('newMemberName'));
        // Verificar que el tag aparece en el post
        cy.contains(Cypress.env('newMemberName')).should('exist');
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[class="gh-members-empty"]').should('contain', 'No members match the current filter');

        // Verificar que el tag aparece en el post
        cy.contains('No members match the current filter').should('exist');
    }
}


export default new Then();