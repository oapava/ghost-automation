class When {
    //Getters Page Objects
    get titleInput(){
        return 'textarea.gh-editor-title.ember-text-area.gh-input';
    }
    
    get publishFlowButton(){
        return '.gh-btn.gh-btn-editor.gh-publishmenu-trigger';
    }
    
    get textAreaContent(){
        return '[data-kg="editor"]';
    }    
    
    get confirmPublishButton(){
        return 'button.gh-btn.gh-btn-black.gh-publishmenu-button';
    }

    get returnPosts(){ 
        return 'a[href="#/posts/"]';
    }

    get returnPostsPublished(){ 
        return 'a[href="#/posts/?type=published]';
    }

    get spanElement(){
        return 'span';
    }

    get listTiltePost(){ 
        return 'a.gh-post-list-title'
    }

    get updateButton(){ 
        return '.gh-btn.gh-btn-editor.green.gh-publishmenu-trigger'
    }

    get unpublishedButton(){ 
        return 'button.gh-btn.gh-btn-black'
    }
    get unpublishedOptions(){
        return 'Unpublish';
    }

    get asignTagButton(){
        return 'button[class="gh-btn gh-btn-editor gh-btn-icon only-has-icon gh-actions-cog ml3"]';
    }
    
    get asignTagInput(){
        return 'input[class="ember-power-select-trigger-multiple-input"]';
    }
    
    get confirmTagAsign(){
        return 'li[data-option-index="1"]';
    }

    get anchorPostButton(){
        return 'a[href="#/posts/"]';
    }

     
    get tagNameInput(){
        return '#tag-name';
    }
    
    get tagColorInput(){
        return 'input[name="accent-color"]';
    }
    
    get tagSlugInput(){
        return '#tag-slug';
    }
    
    get tagDescriptionInput(){
        return '#tag-description';
    }
    
    get tagSaveButton(){
        return 'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]';
    }
    
    get tagCloseSectionButton(){
        return '.settings-menu-container ';
    }

    

    createAndPublishPost(){ //4.5
        var scenery = 'e1';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/p1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBasic'));
        cy.screenshot(scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.wait(500);

        this.publishPostAndPage(scenery,'p3');
    }

    createAndPublishPostBold(){ //4.5
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
    }

    editAndPublishPostMarkdown(){ //4.5
        var scenery = 'e3';
        //Se crea Post para luego editar
        this.createSimplePost(scenery,'p1')
        cy.visit(Cypress.env('postPageUrl'));
        cy.url().should('include', '/ghost/#/posts');
        cy.screenshot(scenery + '/p2_pagePost');

        // Se toma el el botón editar del último post
        cy.get(this.listTiltePost).first().click({force:true});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/p3_editPost');

        //Se ingresa titulo del post
        cy.get(this.textAreaContent).first().type(' **Contenido agregado a post existente** ');
        cy.get(this.titleInput).type('(Editado!)');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/p4_editedPost');

        this.publishPostAndPage(scenery,'p5');
    }

    unpublishPostCreated(){
        var scenery = 'e6';
        //Crear post
        this.createSimplePost(scenery,'p1')

        cy.visit(Cypress.env('baseUrl') + '/ghost/#/posts?type=published');
        cy.url().should('include', 'posts?type=published');
        cy.wait(500);

        //Se valida que existan Posts
        cy.get(this.listTiltePost).should('exist').then(() => {
            cy.screenshot(scenery + '/p2_validatePostCreated');
            cy.get(this.listTiltePost).first().click();

            //Click en update
            cy.get(this.updateButton).should('be.visible');
            cy.screenshot(scenery + '/p3_selectPost');
            cy.get(this.updateButton).first().click();

            //Click en edit post  
            cy.contains('div', this.unpublishedOptions).should('be.visible');
            cy.screenshot(scenery + '/p4_optionPost');
            cy.contains('div', this.unpublishedOptions).click();

            //Click en Unpublish Post
            cy.get(this.unpublishedButton).contains(this.unpublishedOptions);
            cy.screenshot(scenery + '/p5_unpublishPost');
            cy.get(this.unpublishedButton).contains(this.unpublishedOptions).first().click();
            cy.wait(500)

            cy.visit(Cypress.env('baseUrl') + '/ghost/#/posts?type=published');
            cy.url().should('include', 'posts?type=published');
            cy.wait(500);
            cy.screenshot(scenery + '/p6_returnPosts');
        });
    }

    createSimplePost(scenery, step){ //4.5
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/' + step + '_1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type('Post para prueba Nro 1');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/' + step + '_2_addTitlePost');

        this.publishPostAndPage(scenery, step + '_3');
    }

    publishPostAndPage(scenery, step){ //4.5
        cy.get(this.publishFlowButton).should('exist'); // Publish
        cy.screenshot(scenery + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click(); 

        //Publicar post
        cy.get(this.confirmPublishButton).should('exist'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.get(this.confirmPublishButton).first().click(); 

        //Retornar a posts
        cy.get(this.returnPosts).should('exist'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_3_returnPosts', {disableTimersAndAnimations: false});
        cy.get(this.returnPosts).first().click(); 

        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_4_returnListPosts', {disableTimersAndAnimations: false});
    }

    createTagAndAsignIt(){
        this.createNewTag()

        cy.screenshot('e16/p1-tag-creado');

        cy.visit(Cypress.env('postPageUrl'));

        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        // Escribimos el título del post
        cy.get(this.titleInput).type('Post con tag');

        //asignar tag
        cy.get(this.asignTagButton).click();  // Este es el botón de settings del post

        cy.get(this.asignTagInput).first().type(Cypress.env('tagName'));
        cy.get(this.confirmTagAsign).first().click();

        cy.get(this.tagCloseSectionButton).trigger('mousedown').first().click();

        cy.get(this.tagCloseSectionButton).invoke('attr', 'style', 'display: none;');


        this.publishPostAndPage('e16', 'p2');

        cy.get(this.anchorPostButton).first().click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

    }

    createNewTag(){
        cy.screenshot('e15/p1-crear-nuevo-tag');

        // Hacer clic en el botón "New tag"
        cy.contains('a.gh-btn-primary', 'New tag').click();

        // Llenar los campos del formulario para crear un nuevo tag
        const tagColor = 'FF5733';     // Color (en formato hexadecimal)
        const tagDescription = 'Este es un tag de tecnología';  // Descripción del tag

        // Llenar el campo de nombre del tag
        cy.get(this.tagNameInput).type(Cypress.env('tagName'));

        // Llenar el campo de color del tag
        cy.get(this.tagColorInput).first().type(tagColor);

        // Llenar el campo de slug del tag
        cy.get(this.tagSlugInput).type(Cypress.env('tagName'));

        // Llenar el campo de descripción del tag
        cy.get(this.tagDescriptionInput).type(tagDescription);

        //Scroll al inicio de la pagina
        cy.get(this.tagNameInput).scrollIntoView()

        cy.screenshot('e15/p2-formulario-completo');
        // Esperar un momento (opcional si necesitas tiempo para que los cambios se reflejen)
        cy.wait(1000);

        // Hacer clic en el botón "Save"
        cy.get(this.tagSaveButton).click();  // Este es el botón de guardar
    }
}

export default new When();