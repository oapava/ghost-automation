class When {
    //Getters Page Objects
    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }
    
    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }
    
    get buttonYoutube(){
        return 'button[data-kg-card-menu-item="YouTube"]';
    }
    
    get inputEmbedUrl(){
        return 'input[data-testid="embed-url"]';
    }
    
    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }
    
    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }
    
    get textAreaContent(){
        return 'p[data-koenig-dnd-droppable="true"]';
    }
    
    get unsplashImageButton(){
        return '.gh-editor-feature-image-unsplash';
    }
    
    get createPostButton(){
        return 'a[data-test-nav="new-story"]';
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
    
    get htmlEditorButton(){
        return 'button[data-kg-card-menu-item="HTML"]';
    }
    
    get cmLineDiv(){
        return 'div[class="cm-line"]';
    }
    
    get newPageButton(){
        return 'a[href="#/editor/page/"]';
    }
    
    get koenigEditorElement(){
        return '.koenig-react-editor';
    }
    
    get publishSaveButton(){
        return 'button[data-test-button="publish-save"]';
    }
    
    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }
    
    get contentEntryTitle(){
        return 'h3.gh-content-entry-title';
    }
    
    get deletePageButton(){
        return '[data-test-button="delete"]';
    }
    
    get asignTagButton(){
        return 'button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]';
    }
    
    get asignTagInput(){
        return 'input[class="ember-power-select-trigger-multiple-input"]';
    }
    
    get confirmTagAsign(){
        return 'li[data-option-index="1"]';
    }
    
    get anchorPostButton(){
        return 'a[data-test-nav="posts"]';
    }
    
    get createNewMemberButton(){
        return 'a[data-test-new-member-button="true"]';
    }

    get returnAnalitics(){
        return 'a.gh-btn-editor.gh-editor-back-button[data-test-breadcrumb=""]'
    }

    get memberNameInput(){
        return 'input[data-test-input="member-name"]';
    }
    
    get memberEmailInput(){
        return 'input[data-test-input="member-email"]';
    }
    
    get saveMemberButton(){
        return 'button[data-test-button="save"]';
    }
    
    get anchorMembersButton(){
        return 'a[href="#/members/"]';
    }
    
    get searchMembersInput(){
        return 'input[data-test-input="members-search"]';
    }
    
    get detailMemberButton(){
        return 'a[data-test-table-data="details"]';
    }
    
    get memberActionsButton(){
        return 'button[data-test-button="member-actions"]';
    }
    
    get deleteMemberButton(){
        return 'button[data-test-button="delete-member"]';
    }
    
    get deleteMemberConfirmButton(){
        return 'button[data-test-button="confirm"]';
    }

    get spanElement(){
        return 'span';
    }

    get hrefPostSpan(){
        return 'data-test-link="posts"';
    }

    get aElement(){
        return 'a';
    }
    
    get bodyElement(){
        return 'body';
    }
    
    get liElement(){
        return 'li';
    }

    //When Methods
    createPageAndPublishWithVideo(){
        cy.screenshot('e11/p1-visit-page-list');
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.screenshot('e11/p2-nueva-page');
        cy.get(this.titleInput).type('Página con video de YouTube');
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});


        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get(this.buttonYoutube).scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get(this.inputEmbedUrl).should('be.visible').type("https://www.youtube.com/watch?v=x91MPoITQ3I").type('{enter}');
        cy.screenshot('e11/p3-nueva-pagina-con-contenido-nuevo');
        
        //Continuar a review final
        this.publishPostAndPage();

        cy.get(this.closeModalPublishFlow).click();
            
    }

    createAndPublishPost(){
        var scenery = 'e1';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/p1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBasic'));
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        this.publishPostAndPage(scenery,'p3');
        this.validatePublishPostAndCloseModal(scenery,'p4');
    }

    createAndPublishPostBold(){
        var scenery = 'e2';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBold'));
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type('**Contenido en negrita**');
        cy.screenshot(scenery + '/p3_addContentBold');

        this.publishPostAndPage(scenery,'p4');
        this.validatePublishPostAndCloseModal(scenery,'p5');
    }

    editAndPublishPostMarkdown(){
        var scenery = 'e3';
        //Se crea Post para luego editar
        this.createSimplePost(scenery,'p1')
        cy.visit(Cypress.env('postPageUrl'));
        cy.url().should('include', '/ghost/#/posts');
        cy.screenshot(scenery + '/p2_pagePost');

        // Se toma el el botón editar del último post
        cy.get('a.gh-post-list-button').first().click({force:true});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/p3_editPost');

        //Se ingresa titulo del post
        cy.get(this.textAreaContent).first().type(' **Contenido agregado a post existente** ');
        cy.get(this.titleInput).type('(Editado!)');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/p4_editedPost');

        this.publishPostAndPage(scenery,'p5');
        this.validatePublishPostAndCloseModal(scenery,'p6');
    }

    createAndPublishPostWhithImage(){
        var scenery = 'e4';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/p1_newPost');


        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con imagen 1');
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        //Agregar imagen
        cy.get(this.unsplashImageButton).first().click({force:true})
        cy.wait(1000)
        cy.screenshot(scenery + '/p3_unsplashImage');
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });
        cy.screenshot(scenery + '/p4_addhImage');

        this.publishPostAndPage(scenery,'p5');
        this.validatePublishPostAndCloseModal(scenery,'p6');
    }

    createAndPublishPostWhithContent(){
        var scenery = 'e5';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con contenido 1');
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dui posuere velit maximus, in commodo leo luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium sollicitudin risus eget mattis. Donec luctus eros eu dolor sodales, eu maximus mi feugiat.');
        cy.screenshot(scenery + '/p3_addContent');

        this.publishPostAndPage(scenery,'p4');
        this.validatePublishPostAndCloseModal(scenery,'p5');
    }

    createDraftPost(scenery, step){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/' + step + '_1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type('Post Draft para prueba Nro 1');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/' + step + '_2_addTitlePost');

        //Regresar a post sin publicar
        cy.get(this.hrefPostSpan).first().click();
    }

    unpublishPostCreated(){
        var scenery = 'e6';
        //Crear post
        this.createSimplePost(scenery,'p1')

        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.screenshot(scenery + '/p2_validatePostCreated');
            cy.get(this.titlePostCreated).first().click();

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('be.visible');
            cy.screenshot(scenery + '/p3_selectPost');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en edit post  
            cy.get(this.editPostButton).contains('Edit post').should('be.visible');
            cy.screenshot(scenery + '/p4_optionPost');
            cy.get(this.editPostButton).contains('Edit post').first().click();

            //Click en Unpublish Post
            cy.get(this.updatedFlowButton).should('be.visible');
            cy.screenshot(scenery + '/p5_unpublishPost');
            cy.get(this.updatedFlowButton).first().click();

            //Click en confirmar unpublish
            cy.get(this.revertToDraftButton).should('be.visible');
            cy.wait(500)
            cy.screenshot(scenery + '/p6_confirmUnpublishPost');
            cy.get(this.revertToDraftButton).first().click();

            cy.get(this.returnAnalitics).should('be.visible');
            cy.screenshot(scenery + '/p7_resumeUnpublishPost');
            cy.get(this.returnAnalitics).first().click();
        });
    }

    deletePostPublished(){
        var scenery = 'e7';
        this.createSimplePost(scenery,'p1')

        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.get(this.titlePostCreated).first().click();
            cy.screenshot(scenery + '/p2_validatePostCreated');

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('be.visible');
            cy.screenshot(scenery + '/p3_selectPost');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en delete Post
            cy.get(this.deletePostButton).should('be.visible');
            cy.screenshot(scenery + '/p4_deletePost');
            cy.get(this.deletePostButton).first().click();

            //Click en confirmar delete Post
            cy.get(this.deletePostConfirmButton).should('be.visible');
            cy.screenshot(scenery + '/p5_confirmDeletePost');
            cy.get(this.deletePostConfirmButton).first().click();
        });
    }

    getPublishedPostCount(){
        cy.get('.gh-post-list-title') 
        .its('length') // Obtiene la cantidad de posts
        .then((postCount) => {
            cy.log(`Número de posts publicados: ${postCount}`);
            return cy.wrap(postCount);
        });
    }

    createAndPublishPostMembersOnly(){
        var scenery = 'e8';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(scenery + '/p1_sectionPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post para miembros 1');
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        //Se abre el panel de configuracion
        cy.get(this.configurationPanelButton).should('be.visible');
        cy.screenshot(scenery + '/p3_panelConfigPost');
        cy.get(this.configurationPanelButton).first().click();
        cy.get(this.configurationPanelButton).trigger('mousedown')


        cy.get(this.postVisibilitySelect).should('be.visible'); // Post Access
        cy.get(this.postVisibilitySelect).select('members') // Select option members
        cy.screenshot(scenery + '/p4_memberOnliyConfigPost');
        
        cy.get(this.configurationPanelButton).should('be.visible'); //Post settings cerrar panel config
        cy.screenshot(scenery + '/p5_closeConfigPost');
        cy.get(this.configurationPanelButton).first().click();
         
        this.publishPostAndPage(scenery,'p6');
        this.validatePublishPostAndCloseModal(scenery,'p7');
    }

    createAndPublishPostWithHtml(){
        var scenery = 'e9';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(scenery + '/p1_sectionPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con HTML 1'); // Post title
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        //Card de opciones
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        cy.screenshot(scenery + '/p3_cardOptions');

        //Seleccionar HTML
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        cy.screenshot(scenery + '/p4_htmlOptionsSelected');

        //Ingresar texto en html
        cy.get(this.cmLineDiv).type('<h2> Prueba texto en post </h2>'); 
        cy.screenshot(scenery + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage(scenery,'p6');
        this.validatePublishPostAndCloseModal(scenery,'p7');
    }

    createAndPublishPageWithHtml(){
        var scenery = 'e10';
        //Click New Page
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});
        cy.screenshot(scenery + '/p1_sectionPage');

        cy.get(this.titleInput).type('Pagina con HTML 1'); // Page title
        cy.screenshot(scenery + '/p2_addTitlePage');
        cy.get(this.titleInput).type('{enter}');

        //Card de opciones
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        cy.screenshot(scenery + '/p3_cardOptions');

        //Seleccionar HTML
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        cy.screenshot(scenery + '/p4_htmlOptionsSelected');

        //Ingresar texto en html
        cy.get(this.cmLineDiv).type('<h2> Prueba texto pagina </h2>'); 
        cy.screenshot(scenery + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage(scenery,'p6');
        this.validatePublishPageAndCloseModal(scenery,'p7');
    }

    validatePublishPostAndCloseModal(scenery, step){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).should('be.visible');
        cy.wait(1000);
        cy.screenshot(scenery + '/' + step + '_1_postPublished');
        cy.get(this.closeModalPublishFlow).click();

        cy.get(this.spanElement).contains('New post').should('be.visible');
        cy.screenshot(scenery + '/' + step + '_2_listPostFinal');
    }

    validatePublishPageAndCloseModal(scenery, step){
        cy.url().should('include', '/ghost/#/pages');
        cy.wait(1000);
        cy.screenshot(scenery + '/' + step + '_1_pagePublished');

        cy.get(this.closeModalPublishFlow).click();
        cy.screenshot(scenery + '/' + step + '_2_listPageFinal');
    }

    createSimplePost(scenery, step){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/' + step + '_1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type('Post para prueba Nro 1');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/' + step + '_2_addTitlePost');

        this.publishPostAndPage(scenery, step + '_3');
        this.validatePublishPostAndCloseModal(scenery, step + '_4');
    }
    
    reateAndPublishPageEditAndSave(){
        // Crear nueva página
        cy.screenshot('e12/p1-click-nueva-pagina')
        cy.get(this.newPageButton).click();
        cy.get(this.titleInput).type('My Page to edit{enter}');

        //Publicar post
        cy.get(this.koenigEditorElement).first().click();
        this.publishPostAndPage('e12','p1');
        cy.url().should('contain', '/pages');

        // Editar la página recién creada
        cy.get(this.closeModalPublishFlow).click();
        cy.screenshot('e12/p2-pagina-creada-listada');
        cy.contains('My Page to edit').click();
        cy.get(this.titleInput).clear().type('Updated Page Title{enter}').screenshot('e12/p3-actualizacion-titulo');

        // Guardar la página actualizada
        cy.get(this.publishSaveButton).contains('Update').click();
        cy.screenshot('e12/p4-publicacion-pagina-actualizada');
        
    }

    publishPostAndPage(scenery, step){
        cy.get(this.publishFlowButton).should('be.visible'); // Publish
        cy.screenshot(scenery + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click(); 

        //Continuar a review final
        cy.get(this.publishContinueButton).should('be.visible'); // Continue, final review
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_1_finalReview', {disableTimersAndAnimations: false});
        cy.get(this.publishContinueButton).first().click(); 

        //Publicar post
        cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.get(this.confirmPublishButton).first().click(); 
    }

}

export default new When();