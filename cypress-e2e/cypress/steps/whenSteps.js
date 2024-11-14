class When {
    createPageAndPublishWithVideo(){
        cy.get('span').contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.get('textarea[data-test-editor-title-input]').type('Página con video de YouTube');
        cy.get('textarea[data-test-editor-title-input]').type('{enter}');

        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});


        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get('button[data-kg-card-menu-item="YouTube"]').scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get('input[data-testid="embed-url"]').should('be.visible').type("https://www.youtube.com/watch?v=x91MPoITQ3I").type('{enter}');

        cy.get('button[data-test-button="publish-flow"]').should('be.visible'); // Publish
        cy.get('button[data-test-button="publish-flow"]').first().click();

        //Continuar a review final
        cy.get('button[data-test-button="continue"]').should('be.visible'); // Continue, final review
        cy.get('button[data-test-button="continue"]').first().click();
        
        //Publicar post
        cy.get('button[data-test-button="confirm-publish"]').should('be.visible'); //Publish post, right now
        cy.get('button[data-test-button="confirm-publish"]').first().click();
        cy.url().should('contain', '/pages');
        cy.get('button[data-test-button="close-publish-flow"]').click();
    }

    createAndPublishPost(){
        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo y contenido en negrita del post
        cy.get('textarea[data-test-editor-title-input]').type(Cypress.env('titlePostBasic'));
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostBold(){
        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type(Cypress.env('titlePostBold'));
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
        cy.get('p[data-koenig-dnd-droppable="true"]').first().type('**Contenido en negrita**');
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    editAndPublishPostMarkdown(){
        // Se toma el el botón editar del último post
        cy.get('a.gh-post-list-button').first().click({force:true});

        //Se ingresa titulo del post
        cy.get('p[data-koenig-dnd-droppable="true"]').first().type(' **Contenido agregado a post existente** ');
        cy.get('textarea[data-test-editor-title-input]').type('(Editado!)');
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWhithImage(){
        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type('Post con imagen 1');
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
        //Agregar imagen
        cy.get('.gh-editor-feature-image-unsplash').first().click({force:true})
        cy.wait(5000)
        cy.contains('a', 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWhithContent(){
        //Navegar a la página de posts y esperamos que la URL cargue correctamente
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('include', '/ghost/#/posts');

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type('Post con contenido 1');
        cy.get('textarea[data-test-editor-title-input').type('{enter}');
        cy.get('p[data-koenig-dnd-droppable="true"]').first().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dui posuere velit maximus, in commodo leo luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium sollicitudin risus eget mattis. Donec luctus eros eu dolor sodales, eu maximus mi feugiat.');
        
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    deletePostCreated(){
        //Se valida que existan Posts
        cy.get('a.gh-post-list-button').should('exist').then(() => {
            //Boton editar ultimo post
            cy.get('a.gh-post-list-button').first().click();

            //Se abre el panel de configuracion
            cy.get('button[data-test-psm-trigger]').should('be.visible');
            cy.get('button[data-test-psm-trigger]').first().click();
            cy.get('button[data-test-psm-trigger]').trigger('mousedown') //se usa el trigger en lugar del click para mantener el panel abierto

            //Scroll al final del panel
            cy.get('.settings-menu-pane-main').should('be.visible')
            cy.get('.settings-menu-pane-main').scrollTo('bottom')

            //Se da click en boton eliminar
            cy.get('button[data-test-button="delete-post"]').should('be.visible');
            cy.get('button[data-test-button="delete-post"]').first().click();

            //Se confirma eliminar
            cy.get('button[data-test-button="delete-post-confirm"]').should('be.visible');
            cy.get('button[data-test-button="delete-post-confirm"]').first().click();

            cy.url().should('contain', '/posts');
        });
    }

    deletePostPublished(){
        //Se valida que existan Posts
        cy.get('a.gh-post-list-button').should('exist').then(() => {
            cy.get('a.gh-post-list-button').first().click();

            //Click en opciones
            cy.get('button[data-test-button="analytics-actions"]').should('be.visible');
            cy.get('button[data-test-button="analytics-actions"]').first().click();

            //Click en delete Post
            cy.get('button[data-test-button="delete-post"]').should('be.visible');
            cy.get('button[data-test-button="delete-post"]').first().click();

            //Click en confirmar delete Post
            cy.get('button[data-test-button="delete-post-confirm"]').should('be.visible');
            cy.get('button[data-test-button="delete-post-confirm"]').first().click();
        });
    }

    createAndPublishPostMembersOnly(){
        //ir a seccion de crear post
        cy.get('a[data-test-nav="new-story"]').click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type('Post para miembros 1');
        cy.get('textarea[data-test-editor-title-input').type('{enter}');

        //Se abre el panel de configuracion
        cy.get('button[data-test-psm-trigger]').should('be.visible');
        cy.get('button[data-test-psm-trigger]').first().click();
        cy.get('button[data-test-psm-trigger]').trigger('mousedown')


        cy.get('select[data-test-select="post-visibility"]').should('be.visible'); // Post Access
        cy.get('select[data-test-select="post-visibility"]').select('members') // Select option members
        
        cy.get('button[data-test-psm-trigger]').should('be.visible'); //Post settings cerrar panel config
        cy.get('button[data-test-psm-trigger]').first().click();
         
        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWithHtml(){
        //ir a seccion de crear post
        cy.get('a[data-test-nav="new-story"]').click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type('Post con HTML 1'); // Post title
        cy.get('textarea[data-test-editor-title-input').type('{enter}');

        //Card de opciones
        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});
        //Seleccionar HTML
        cy.get('button[data-kg-card-menu-item="HTML"]').first().click({force:true, waitForAnimations: false});
        //Ingresar texto en html
        cy.get('div[class="cm-line"]').type('<h2> Prueba texto en post </h2>'); 
        cy.get('div[class="cm-line"]').type('{enter}');

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPageWithHtml(){
        //Click New Page
        cy.get('span').contains('New page').click({force:true, waitForAnimations: false});

        cy.get('textarea[data-test-editor-title-input]').type('Pagina con HTML 1'); // Page title
        cy.get('textarea[data-test-editor-title-input').type('{enter}');

        //Card de opciones
        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});
        //Seleccionar HTML
        cy.get('button[data-kg-card-menu-item="HTML"]').first().click({force:true, waitForAnimations: false});
        //Ingresar texto en html
        cy.get('div[class="cm-line"]').type('<h2> Prueba texto pagina </h2>'); 
        cy.get('div[class="cm-line"]').type('{enter}');

        this.publishPostAndPage();
        this.validatePublishPageAndCloseModal();
    }

    validatePublishPostAndCloseModal(){
        cy.url().should('include', '/ghost/#/posts');
        cy.get('button[data-test-button="close-publish-flow"]').click();
    }

    validatePublishPageAndCloseModal(){
        cy.url().should('include', '/ghost/#/pages');
        cy.get('button[data-test-button="close-publish-flow"]').click();
    }
    
    reateAndPublishPageEditAndSave(){
        // Crear nueva página
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('textarea[placeholder="Page title"]').type('My Page to edit{enter}');

        //Publicar post
        cy.get('.koenig-react-editor').first().click();
        this.publishPostAndPage();
        cy.url().should('contain', '/pages');

        // Editar la página recién creada
        cy.get('button[data-test-button="close-publish-flow"]').click();
        cy.contains('My Page to edit').click();
        cy.get('textarea[placeholder="Page title"]').clear().type('Updated Page Title{enter}');

        // Guardar la página actualizada
        cy.get('button[data-test-button="publish-save"]').contains('Update').click();
        
    }

    publishPostAndPage(){
        cy.get('button[data-test-button="publish-flow"]').should('be.visible'); // Publish
        cy.get('button[data-test-button="publish-flow"]').first().click();

        //Continuar a review final
        cy.get('button[data-test-button="continue"]').should('be.visible'); // Continue, final review
        cy.get('button[data-test-button="continue"]').first().click();

        //Publicar post
        cy.get('button[data-test-button="confirm-publish"]').should('be.visible'); //Publish post, right now
        cy.get('button[data-test-button="confirm-publish"]').first().click(); 
    }

}

export default new When();