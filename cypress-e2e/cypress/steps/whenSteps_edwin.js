import { Post } from "../data/post.js";
import { dataPostPoolDatosApriori } from "../data/data_post_apriori.js";

class When {
    //Getters Page Objects
    get spanElement(){
        return 'span';
    }

    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }

    get version(){
        return '5/'
    }

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }

    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }
    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get createPostButton(){
        return 'a[data-test-nav="new-story"]';
    }

    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }

    get htmlEditorButton(){
        return 'button[data-kg-card-menu-item="HTML"]';
    }

    get cmLineDiv(){
        return 'div[class="cm-line"]';
    }

    get textAreaContent(){
        return 'p[data-koenig-dnd-droppable="true"]';
    }

    get titlePostCreated(){
        return 'span[title="Go to Analytics"]';
    }

    get analitycOptionssButton(){
        return 'button[data-test-button="analytics-actions"]';
    }

    get editPostButton(){
        return 'a.edit-post';
    }

    get updatedFlowButton(){
        return 'button[data-test-button="update-flow"]';
    }

    get revertToDraftButton(){
        return 'button[data-test-button="revert-to-draft"]';
    }

    get returnAnalitics(){
        return 'a.gh-btn-editor.gh-editor-back-button[data-test-breadcrumb=""]'
    }

    get deletePostButton(){
        return 'button[data-test-button="delete-post"]';
    }

    get deletePostConfirmButton(){
        return 'button[data-test-button="delete-post-confirm"]';
    }

    get configurationPanelButton(){
        return 'button[data-test-psm-trigger]';
    }

    get postVisibilitySelect(){
        return 'select[data-test-select="post-visibility"]';
    }



    createAndPublishPost(post){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(post.title);
        cy.get(this.titleInput).type('{enter}');

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWithHtml(post, stage){
        console.log("PostToPublish -" + JSON.stringify(post));
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        if(post.title !== ""){
            cy.get(this.titleInput).type(post.title);
            cy.get(this.titleInput).type('{enter}');
        }

        //Contenido del post
        cy.get(this.textAreaContent).first().type(post.contentText);
        cy.get(this.textAreaContent).first().type('{enter}');

        //Card de opciones + html
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});

        //Ingresar texto en html
        cy.get(this.cmLineDiv).type(post.htmlText);

        this.publishPostAndPage(stage, 0);
        this.validatePublishPostAndCloseModal(stage, 0);
    }

    unpublishPostCreated(post, stage){
        //Crear post
        this.createSimplePost(post, stage, 'p1')

        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            //cy.screenshot(stage + '/p2_validatePostCreated');
            cy.get(this.titlePostCreated).first().click();

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('exist');
            //cy.screenshot(stage + '/p3_selectPost');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en edit post
            cy.get(this.editPostButton).contains('Edit post').should('exist');
            //cy.screenshot(stage + '/p4_optionPost');
            cy.get(this.editPostButton).contains('Edit post').first().click();

            //Click en Unpublish Post
            cy.get(this.updatedFlowButton).should('exist');
            //cy.screenshot(stage+ '/p5_unpublishPost');
            cy.get(this.updatedFlowButton).first().click();

            //Click en confirmar unpublish
            cy.get(this.revertToDraftButton).should('exist');
            cy.wait(500)
            //cy.screenshot(stage + '/p6_confirmUnpublishPost');
            cy.get(this.revertToDraftButton).first().click();

            cy.get(this.returnAnalitics).should('exist');
            //cy.screenshot(stage + '/p7_resumeUnpublishPost');
            cy.get(this.returnAnalitics).first().click();
        });
    }

    deletePostPublished(post, stage){
        this.createSimplePost(post, stage, 'p1')

        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.get(this.titlePostCreated).first().click();
            //cy.screenshot(this.version + stage + '/p2_validatePostCreated');

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('be.visible');
            //cy.screenshot(this.version + stage + '/p3_selectPost');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en delete Post
            cy.get(this.deletePostButton).should('be.visible');
            //cy.screenshot(this.version + stage + '/p4_deletePost');
            cy.get(this.deletePostButton).first().click();

            //Click en confirmar delete Post
            cy.get(this.deletePostConfirmButton).should('be.visible');
            //cy.screenshot(this.version + stage + '/p5_confirmDeletePost');
            cy.get(this.deletePostConfirmButton).first().click();
        });
    }

    createAndPublishPostMembersOnly(post, stage){
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        //cy.screenshot(this.version + stage + '/p1_sectionPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(post.title);
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.textAreaContent).first().type(post.contentText);
        //cy.screenshot(this.version + stage + '/p2_addContentPost');
        cy.get(this.textAreaContent).first().type('{enter}');

        //Se abre el panel de configuracion
        cy.get(this.configurationPanelButton).should('be.visible');
        //cy.screenshot(this.version + stage + '/p3_panelConfigPost');
        cy.get(this.configurationPanelButton).first().click();
        cy.get(this.configurationPanelButton).trigger('mousedown')


        cy.get(this.postVisibilitySelect).should('be.visible'); // Post Access
        cy.get(this.postVisibilitySelect).select('members') // Select option members
        //cy.screenshot(this.version + stage + '/p4_memberOnliyConfigPost');

        cy.get(this.configurationPanelButton).should('be.visible'); //Post settings cerrar panel config
        //cy.screenshot(this.version + stage + '/p5_closeConfigPost');
        cy.get(this.configurationPanelButton).first().click();

        this.publishPostAndPage(this.version + stage,'p6');
        this.validatePublishPostAndCloseModal(this.version + stage,'p7');
    }

    createAndPublishPageWithHtml(page, stage){
        //Click New Page
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});
        //cy.screenshot(this.version + stage + '/p1_sectionPage');

        if(page.title !== ''){
            cy.get(this.titleInput).type(page.title); // Page title
            //cy.screenshot(this.version + stage + '/p2_addTitlePage');
            cy.get(this.titleInput).type('{enter}');
        }

        cy.get(this.textAreaContent).first().type(page.contentText);
        cy.get(this.textAreaContent).first().type('{enter}');

        //Card de opciones + HTML
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        //cy.screenshot(this.version + stage + '/p3_cardOptions');
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        //cy.screenshot(this.version + stage + '/p4_htmlOptionsSelected');

        //Ingresar texto en html
        cy.get(this.cmLineDiv).type(page.htmlText); 
        //cy.screenshot(this.version + stage + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage(this.version + stage,'p6');
        this.validatePublishPageAndCloseModal(this.version + stage,'p7');
    }

    createSimplePost(post, stage, step){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        //cy.screenshot(stage + '/' + step + '_1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        if(post.title !== ""){
            cy.get(this.titleInput).type(post.title);
            cy.get(this.titleInput).type('{enter}');
        }

        //Contenido del post
        cy.get(this.textAreaContent).first().type(post.contentText);
        cy.get(this.textAreaContent).first().type('{enter}');
        //cy.screenshot(stage + '/' + step + '_2_addContentPost');
        cy.wait(1000)

        this.publishPostAndPage(stage, step + '_3');
        this.validatePublishPostAndCloseModal(stage, step + '_4');
    }

    publishPostAndPage(stage, step){
        cy.get(this.publishFlowButton).should('exist');
        //cy.screenshot(stage + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click();

        //Continuar a review final
        cy.get(this.publishContinueButton).should('be.visible');
        cy.wait(500);
        //cy.screenshot(stage + '/' + step + '_1_finalReview', {disableTimersAndAnimations: false});
        cy.get(this.publishContinueButton).first().click();

        //Publicar post
        cy.get(this.confirmPublishButton).should('be.visible');
        //cy.wait(500);
        //cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.get(this.confirmPublishButton).first().click();
    }

    validatePublishPostAndCloseModal(stage, step){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).should('be.visible');
        //cy.wait(1000);
        //cy.screenshot(stage + '/' + step + '_1_postPublished');
        cy.get(this.closeModalPublishFlow).click();

        cy.get(this.spanElement).contains('New post').should('be.visible');
        //cy.screenshot(stage + '/' + step + '_2_listPostFinal');
    }

    validatePublishPageAndCloseModal(stage, step){
        cy.url().should('include', '/ghost/#/pages');
        cy.wait(1000);
        //cy.screenshot(stage + '/' + step + '_1_pagePublished');

        cy.get(this.closeModalPublishFlow).click();
        //cy.screenshot(stage + '/' + step + '_2_listPageFinal');
    }


}

export default new When();