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
        cy.screenshot('e13/p5-modal-confirmacion-eliminacion', { capture: 'fullPage' });
        cy.wait(1000);
        cy.screenshot('e13/p6-eliminacion', { capture: 'fullPage' });
    }

    validatePageWasCreateWithWrongVideo(){
        cy.visit(Cypress.env('pageUrl'));
        cy.get('h3').contains('Página con error en video de YouTube').first().scrollIntoView();
        cy.contains('Página con error en video de YouTube').should('exist');
        cy.wait(1000);
        cy.screenshot('e14/p3-pagina-listada', {capture: 'fullPage'});
    }

    validateTagWasCreated(){
        cy.visit('http://localhost:2368/ghost/#/tags');
        cy.visit(Cypress.env('tagsUrl'));
        cy.get('.tags-list').should('contain', Cypress.env('tagName'));
        cy.contains(Cypress.env('tagName')).should('exist');
        cy.screenshot('e15/p3-tag-creado-completo');
    }

    validatePostWithTag(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.posts-list').should('contain', Cypress.env('tagName')).then(()=>{
            cy.screenshot('e16/p3-tag-creado',{
                disableTimersAndAnimations: false,
              })
        });
        
        cy.contains(Cypress.env('tagName')).should('exist');
        
    }

    validatePageWithTag(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.posts-list').should('contain', Cypress.env('tagName'));
        cy.contains(Cypress.env('tagName')).should('exist').then(()=>{
            cy.screenshot('e17/p3-tag-asignado',{
                disableTimersAndAnimations: false,
              })
        });
    }

    validateNewMemberExist(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[data-test-table="members"]').should('contain', Cypress.env('newMemberName'));
        // Verificar que el tag aparece en el post
        cy.contains(Cypress.env('newMemberName')).should('exist');
        cy.screenshot('e18/p2-listado-members');
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[class="gh-members-empty"]').should('contain', 'No members match the current filter');

        // Verificar que el tag aparece en el post
        cy.contains('No members match the current filter').should('exist');

        cy.screenshot('e19/p4-listdo-miembros', {disableTimersAndAnimations: false,})
    }
}


export default new Then();