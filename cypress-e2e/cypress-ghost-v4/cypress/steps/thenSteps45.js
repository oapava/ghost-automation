class Then {

    seePostPublished(){ 
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(Cypress.env('titlePostBasic')).should('exist'); 
    }

    seePostPublishedBold(){ 
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(Cypress.env('titlePostBold')).should('exist'); 
    }

    seePostPublishedPostMarkdown(){ 
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('(Editado!)').should('exist'); 
    }

    confirmUnpublishPostPublished(){
        cy.visit(Cypress.env('postDraftPageUrl'));
        cy.contains('Draft').should('exist'); 
    }

    validatePostWithTag(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.posts-list').should('contain', Cypress.env('tagName')).then(()=>{
            cy.screenshot('4/e16/p3-tag-creado',{
                disableTimersAndAnimations: false,
              })
        });
        
        cy.contains(Cypress.env('tagName')).should('exist');
        
    }
}


export default new Then();