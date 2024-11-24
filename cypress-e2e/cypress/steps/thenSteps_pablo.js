import Given from "./givenSteps_pablo";

class Then {
    //Page Object Get
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

    get pElement(){
        return 'p';
    }

    get errorResponse(){
        return 'p[class="response"]';
    }

    get postList(){
        return '.posts-list';
    }

    get listEmpty(){
        return 'div[class="gh-members-empty"]'
    }

    get tableMembers(){
        return 'div[data-test-table="members"]'
    }

    //Page Object Methods

    validateNewMemberErrorInvalid(){
        // Verificar que el error se haya mostrado
        cy.get(this.errorResponse).should('contain', 'Invalid Email.');
    }

    validateNewMemberErrorInvalidNote(){
        // Verificar que el error se haya mostrado
        cy.get(this.errorResponse).should('contain', 'Note is too long.');
    }

    validateNewMemberErrorDuplicate(){
        // Verificar que el error se haya mostrado
        cy.get(this.errorResponse).should('contain', 'Member already exists. Attempting to add member with existing email address');
        //Volver a la pagina de la lista de members
        cy.get(this.buttonMemberList).first().click();
        //Confirma salida de la pagina
        cy.get(this.buttonleaveMemberCreatePage).first().click();

    }

    validateNewRecommendationValid(){
        cy.get(this.spanElement).should('contain', 'Recommendation added');
    }

    validateNewRecommendationInvalid(){
        cy.get(this.spanElement).should('contain', 'Enter a valid URL');
        cy.get(this.spanElement).filter((index, element) => element.textContent.trim() === 'Cancel').should('be.visible').click({waitForAnimations: true})
    }

    validateNewTagErrorInvalidSlug(){
        cy.get(this.pElement).should('contain', 'URL cannot be longer than 191 characters.');
    }

    validatePostWithTag(tagName){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get(this.postList).should('contain', tagName).then(()=>{
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
        cy.get(this.postList).should('contain', tagName);
        cy.contains(tagName).should('exist').then(()=>{
        });
        cy.get(this.closePublishConfirmationButton).first().click({ force: true, waitForAnimations: false });
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get(this.listEmpty).should('contain', 'No members match the current filter');

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
        cy.get(this.tableMembers).should('contain', memberName);
        // Verificar que el tag aparece en el post
        cy.contains(memberName).should('exist');
    }
}


export default new Then();