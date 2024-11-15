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
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBasic'));
        cy.get(this.titleInput).type('{enter}');
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostBold(){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBold'));
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type('**Contenido en negrita**');
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    editAndPublishPostMarkdown(){
        // Se toma el el botón editar del último post
        cy.get('a.gh-post-list-button').first().click({force:true});

        //Se ingresa titulo del post
        cy.get(this.textAreaContent).first().type(' **Contenido agregado a post existente** ');
        cy.get(this.titleInput).type('(Editado!)');
        cy.get(this.titleInput).type('{enter}');
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWhithImage(){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con imagen 1');
        cy.get(this.titleInput).type('{enter}');
        //Agregar imagen
        cy.get(this.unsplashImageButton).first().click({force:true})
        cy.wait(1000)
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWhithContent(){
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con contenido 1');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dui posuere velit maximus, in commodo leo luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium sollicitudin risus eget mattis. Donec luctus eros eu dolor sodales, eu maximus mi feugiat.');
        
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    unpublishPostCreated(){
        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.get(this.titlePostCreated).first().click();

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('be.visible');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en edit post  
            cy.get(this.editPostButton).contains('Edit post').should('be.visible');
            cy.get(this.editPostButton).contains('Edit post').first().click();

            //Click en Unpublish Post
            cy.get(this.updatedFlowButton).should('be.visible');
            cy.get(this.updatedFlowButton).first().click();

            //Click en confirmar unpublish
            cy.get(this.revertToDraftButton).should('be.visible');
            cy.get(this.revertToDraftButton).first().click();
        });
    }

    deletePostPublished(){
        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.get(this.titlePostCreated).first().click();

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('be.visible');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en delete Post
            cy.get(this.deletePostButton).should('be.visible');
            cy.get(this.deletePostButton).first().click();

            //Click en confirmar delete Post
            cy.get(this.deletePostConfirmButton).should('be.visible');
            cy.get(this.deletePostConfirmButton).first().click();
        });
    }

    createAndPublishPostMembersOnly(){
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post para miembros 1');
        cy.get(this.titleInput).type('{enter}');

        //Se abre el panel de configuracion
        cy.get(this.configurationPanelButton).should('be.visible');
        cy.get(this.configurationPanelButton).first().click();
        cy.get(this.configurationPanelButton).trigger('mousedown')


        cy.get(this.postVisibilitySelect).should('be.visible'); // Post Access
        cy.get(this.postVisibilitySelect).select('members') // Select option members
        
        cy.get(this.configurationPanelButton).should('be.visible'); //Post settings cerrar panel config
        cy.get(this.configurationPanelButton).first().click();
         
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWithHtml(){
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con HTML 1'); // Post title
        cy.get(this.titleInput).type('{enter}');

        //Card de opciones
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        //Seleccionar HTML
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        //Ingresar texto en html
        cy.get(this.cmLineDiv).type('<h2> Prueba texto en post </h2>'); 
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPageWithHtml(){
        //Click New Page
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});

        cy.get(this.titleInput).type('Pagina con HTML 1'); // Page title
        cy.get(this.titleInput).type('{enter}');

        //Card de opciones
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        //Seleccionar HTML
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        //Ingresar texto en html
        cy.get(this.cmLineDiv).type('<h2> Prueba texto pagina </h2>'); 
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage();
        this.validatePublishPageAndCloseModal();
    }

    validatePublishPostAndCloseModal(){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).click();
    }

    validatePublishPageAndCloseModal(){
        cy.url().should('include', '/ghost/#/pages');
        cy.get(this.closeModalPublishFlow).click();
    }
    
    reateAndPublishPageEditAndSave(){
        // Crear nueva página
        cy.screenshot('e12/p1-click-nueva-pagina')
        cy.get(this.newPageButton).click();
        cy.get(this.titleInput).type('My Page to edit{enter}');

        //Publicar post
        cy.get(this.koenigEditorElement).first().click();
        this.publishPostAndPage();
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

    publishPostAndPage(){
        cy.get(this.publishFlowButton).should('be.visible'); // Publish
        cy.get(this.publishFlowButton).first().click();

        //Continuar a review final
        cy.get(this.publishContinueButton).should('be.visible'); // Continue, final review
        cy.get(this.publishContinueButton).first().click();

        //Publicar post
        cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
        cy.get(this.confirmPublishButton).first().click(); 
    }

}

export default new When();