import Given from "./givenSteps_pablo";

class Then {

    validatePageWithVideoCreated(){
        cy.contains('Página con video de YouTube').should('be.visible');
    }

    validatePageWasEditedAndCreated(){
        cy.get('.gh-notification').should('be.visible');
    }

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

    seePostPublishedPostWithImage(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Post con imagen 1').should('exist'); 
    }

    seePostPublishedPostWithContent(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Post con contenido 1').should('exist'); 
    }

    confirmDeletedPost(){
        cy.visit(Cypress.env('postPageUrl'));
    }

    confirmUnpublishPostPublished(){
        cy.visit(Cypress.env('postDraftPageUrl'));
        cy.get('span[title="Go to Editor"]').should('exist')
    }

    seePostPublishedMembersOnly(){
        cy.visit(Cypress.env('postMembersPageUrl'));
        cy.contains('Post para miembros 1').should('exist'); 
    }

    seePostPublishedWithHtml(){
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains('Post con HTML 1').should('exist'); 
    }

    seePagePublishedWithHtml(){
        cy.visit(Cypress.env('pageUrl'));
        cy.contains('Pagina con HTML 1').should('exist'); 
    }

    validatePageWasCreatedAndDeleted(){
        cy.visit(Cypress.env('pageUrl'));
        cy.get('button[data-test-button="confirm"]').should('be.visible').click();
        cy.screenshot('5/e13/p5-modal-confirmacion-eliminacion', { capture: 'fullPage' });
        cy.wait(1000);
        cy.screenshot('5/e13/p6-eliminacion', { capture: 'fullPage' });
    }

    validatePageWasCreateWithWrongVideo(){
        cy.visit(Cypress.env('pageUrl'));
        cy.get('h3').contains('Página con error en video de YouTube').first().scrollIntoView();
        cy.contains('Página con error en video de YouTube').should('exist');
        cy.wait(1000);
        cy.screenshot('5/e14/p3-pagina-listada', {capture: 'fullPage'});
    }

    validateTagWasCreated(){
        cy.visit(Cypress.env('tagsUrl'));
        cy.get('.tags-list').should('contain', Cypress.env('tagName'));
        cy.contains(Cypress.env('tagName')).should('exist');
        cy.screenshot('5/e15/p3-tag-creado-completo');
    }

    validateNewMemberErrorInvalid(){
        // Verificar que el error se haya mostrado
        cy.get('p[class="response"]').should('contain', 'Invalid Email.');
    }

    validateNewMemberErrorInvalidNote(){
        // Verificar que el error se haya mostrado
        cy.get('p[class="response"]').should('contain', 'Note is too long.');
    }

    validateNewMemberErrorDuplicate(){
        // Verificar que el error se haya mostrado
        cy.get('p[class="response"]').should('contain', 'Member already exists. Attempting to add member with existing email address');
        //Volver a la pagina de la lista de members
        cy.get(this.buttonMemberList).first().click();
        //Confirma salida de la pagina
        cy.get(this.buttonleaveMemberCreatePage).first().click();

    }

    validateNewRecommendationValid(){
        cy.get('span').should('contain', 'Recommendation added');
    }

    validateNewRecommendationInvalid(){
        cy.get('span').should('contain', 'Enter a valid URL');
        cy.get(this.spanElement).filter((index, element) => element.textContent.trim() === 'Cancel').should('be.visible').click({waitForAnimations: true})
    }

    validateNewTagErrorInvalidSlug(){
        cy.get('p').should('contain', 'URL cannot be longer than 191 characters.');
    }

    //Desde aqui uso
    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get buttonleaveMemberCreatePage(){
        return 'button[data-test-leave-button]';
    }

    get spanElement(){
        return 'span';
    }

    validatePostWithTag(tagName){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.posts-list').should('contain', tagName).then(()=>{
            cy.screenshot('5/e16/p3-tag-creado',{
                disableTimersAndAnimations: false,
            })
        });

        cy.contains(tagName).should('exist');
        cy.get(this.closePublishConfirmationButton).first().click({ force: true, waitForAnimations: false });
    }

    validatePageWithTag(tagName){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.posts-list').should('contain', tagName);
        cy.contains(tagName).should('exist').then(()=>{
        });
        cy.get(this.closePublishConfirmationButton).first().click({ force: true, waitForAnimations: false });
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[class="gh-members-empty"]').should('contain', 'No members match the current filter');

        // Verificar que el tag aparece en el post
        cy.contains('No members match the current filter').should('exist');

    }

    validateTitleSiteWasEdited(newTitle){
        //Valida que el titulo
        cy.reload(true);
        cy.contains(newTitle).should('exist');
    }

    validateNewMemberExist(memberName){
        //Esperar un tiempo y ir a la Members page
        cy.wait(2000);
        //Recargar la pagina
        cy.reload(true);
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[data-test-table="members"]').should('contain', memberName);
        // Verificar que el tag aparece en el post
        cy.contains(memberName).should('exist');
    }
}


export default new Then();