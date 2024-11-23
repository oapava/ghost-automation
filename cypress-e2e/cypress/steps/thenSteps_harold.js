import {getSharedData} from "../utils/sharedData";

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

    seePagePublishedWithHtmlPool(title) {
        cy.visit(Cypress.env('pageUrl'));
        cy.contains(title).should('exist'); // Verificar el título pasado como argumento
    }

    validatePostWithTag(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.posts-list').should('contain', Cypress.env('tagName')).then(()=>{
            cy.screenshot('5/e16/p3-tag-creado',{
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
            cy.screenshot('5/e17/p3-tag-asignado',{
                disableTimersAndAnimations: false,
            })
        });
    }

    validateNewMemberExist(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[data-test-table="members"]').should('contain', Cypress.env('newMemberName'));
        // Verificar que el tag aparece en el post
        cy.contains(Cypress.env('newMemberName')).should('exist');
        cy.screenshot('5/e18/p2-listado-members');
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[class="gh-members-empty"]').should('contain', 'No members match the current filter');

        // Verificar que el tag aparece en el post
        cy.contains('No members match the current filter').should('exist');

        cy.screenshot('5/e19/p4-listdo-miembros', {disableTimersAndAnimations: false,})
    }

    validateTitleSiteWasEdited(){
        //Valida que el titulo
        cy.reload(true);
        cy.contains(Cypress.env('updatedSiteTitle')).should('exist');
        cy.screenshot('5/e20/p2-titulo-actualizado', {disableTimersAndAnimations: false,});
    }

    seePagePublishedWithHtmlFaker() {
        const dynamicTitle = getSharedData('pageTitle');

        cy.visit(Cypress.env('pageUrl'));

        cy.contains(dynamicTitle).should('exist');
    }

    seeAlertMessage() {
        cy.get('aside.gh-alerts')
            .should('exist')
            .within(() => {
                cy.get('article.gh-alert.gh-alert-red')
                    .should('be.visible')
                    .find('.gh-alert-content')
                    .should('contain.text', 'Title cannot be longer than 255 characters.');
            });
    }
    validateErrorTag(){
        cy.get('p.response')
            .should('exist')
            .should('contain.text', 'Tag names cannot be longer than 191 characters.');

    }
    validateTagWasCreatedName(tagName){
        cy.visit(Cypress.env('tagsUrl'));
        cy.get('.tags-list').should('contain', tagName);
        cy.contains(tagName).should('exist');
        cy.screenshot('5/e15/p3-tag-creado-completo');
    }
    seePagePublishedWithHtmlName(name){
        cy.visit(Cypress.env('pageUrl'));
        cy.contains(name).should('exist');
    }


    validateErrorDescriptionTag(){
        cy.get('.response')
            .should('contain', 'Description cannot be longer than 500 characters.');
    }

    seePagePublishedWithVideoFaker() {
        const dynamicTitle = getSharedData('pageVideoTitle');

        cy.visit(Cypress.env('pageUrl'));

        cy.contains(dynamicTitle).should('exist');
    }
    validatePageWithTitleNumberCreated(){
        cy.contains('15748632547895475267').should('be.visible');
    }

    seePageUpdatedWithFaker() {
        const dynamicUpdatedTitle = getSharedData('updatedTitle');

        cy.visit(Cypress.env('pageUrl'));

        cy.contains(dynamicUpdatedTitle).should('exist');
    }

    validateTagWasCreatedFaker() {
        const tagData = getSharedData('tagData');
        const tagName = tagData.name;

        cy.visit(Cypress.env('tagsUrl'));

        cy.get('.tags-list').should('contain', tagName);

        cy.contains(tagName).should('exist');

        cy.screenshot('5/e15/p3-tag-creado-completo');
    }

    validateTagWasCreatedName(tagName){
        cy.visit(Cypress.env('tagsUrl'));
        cy.get('.tags-list').should('contain', tagName);
        cy.contains(tagName).should('exist');
        cy.screenshot('5/e15/p3-tag-creado-completo');
    }
    validatePageWithVideoCreatedName(name){
        cy.contains(name).should('be.visible');
    }

}


export default new Then();