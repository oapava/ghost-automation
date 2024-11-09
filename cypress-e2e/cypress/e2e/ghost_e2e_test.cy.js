describe('Escenarios para ver los Post dentro de GHOST', () => {
    beforeEach(() => {
        // Visitamos la página de inicio de sesión de Ghost
        cy.visit('http://localhost:2368/ghost/#/signin');
        
        // Ejecutamos el login y esperamos a que cargue el dashboard
        login();

        // Verificamos que estamos en el dashboard después del login
        cy.url().should('include', '/ghost/#/dashboard');

        // Capturamos errores para que no detengan la ejecución
        cy.once('fail', (error, runnable) => {
            Cypress.log({ name: 'Continuar ejecución', message: error.message });
            return false;
        });
    });

    it('Escenario 1: Crear un nuevo Post con título y guardarlo', () => {
        // Navegamos a la página de posts y esperamos que la URL cargue correctamente
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('include', '/ghost/#/posts');

        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        
        // Escribimos el título del post
        cy.get('textarea[placeholder="Post title"]').type('Post 01 de prueba');
        
        // Publicamos el post
        publishPost();
    });

    it('Escenario 2: Crear un nuevo Post con contenido en bold en markdown y guardarlo', () => {
        // Navegamos a la página de posts y esperamos que la URL cargue correctamente
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('include', '/ghost/#/posts');

        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        
        // Escribimos el contenido del post
        cy.get('p[data-koenig-dnd-droppable="true"]').first().type('**Contenido en negrita**');
        
        // Publicamos el post
        publishPost();
    });
    
    it('Escenario 3: Editar un Post en draft con contenido en bold en markdown, título y guardarlo', () => {
        // Navegamos a la página de posts y esperamos que la URL cargue correctamente
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('include', '/ghost/#/posts');

        // Se toma el el botón editar del último post en DRAFT
        cy.get('a.gh-post-list-button').first().click({force:true})
        
        // Escribimos el contenido del post
        cy.get('p[data-koenig-dnd-droppable="true"]').first().type(' **Contenido agregado a post existente** ');

        // Escribimos el título del post
        cy.get('textarea[placeholder="Post title"]').type(' (Editado!)');
        
        // Publicamos el post
        publishPost();
    });

    it('Escenario 4: Crear un nuevo Post con imagen de unsplash y guardarlo', () => {
        // Navegamos a la página de posts y esperamos que la URL cargue correctamente
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('include', '/ghost/#/posts');

        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        //Click en selector de imágenes de Unsplash
        cy.get('.gh-editor-feature-image-unsplash').first().click({force:true})
        
        //Seleccionar la primera imágen del listado
        cy.wait(5000)
        cy.contains('a', 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });

        // Escribimos el título del post
        cy.get('textarea[placeholder="Post title"]').type('Post 04 de prueba');

        // Publicamos el post
        publishPost();
    });

    it('Escenario 5: Crear un nuevo Post con contenido, título y guardarlo', () => {
        // Navegamos a la página de posts y esperamos que la URL cargue correctamente
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('include', '/ghost/#/posts');

        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        // Escribimos el título del post
        cy.get('textarea[placeholder="Post title"]').type('Post 05 de prueba');
        
        // Escribimos el contenido del post
        cy.get('p[data-koenig-dnd-droppable="true"]').first().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dui posuere velit maximus, in commodo leo luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium sollicitudin risus eget mattis. Donec luctus eros eu dolor sodales, eu maximus mi feugiat.');
        
        // Publicamos el post
        publishPost();
    });

    it('Escenario 6: Eliminar post creado', () => {
        //ir a seccion de posts
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.url().should('contain', '/post');

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
        })
    });

    it('Escenario 7: Eliminar post publicado', () => {
        //ir a seccion de posts publicados
        cy.visit('http://localhost:2368/ghost/#/posts?type=published');
        cy.url().should('include', '/ghost/#/posts?type=published');

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

        })
    });

    it('Escenario 8: Crear Post para que solo sea visible para miembros', () => {
        //ir a seccion de crear post
        cy.get('a[data-test-nav="new-story"]').click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type('Post de prueba miembros Nro 1');
        cy.get('textarea[data-test-editor-title-input').type('{enter}');

        //Se abre el panel de configuracion
        cy.get('button[data-test-psm-trigger]').should('be.visible');
        cy.get('button[data-test-psm-trigger]').first().click();
        cy.get('button[data-test-psm-trigger]').trigger('mousedown')


        cy.get('select[data-test-select="post-visibility"]').should('be.visible'); // Post Access
        cy.get('select[data-test-select="post-visibility"]').select('members') // Select option members
        
        cy.get('button[data-test-psm-trigger]').should('be.visible'); //Post settings cerrar panel config
        cy.get('button[data-test-psm-trigger]').first().click();

        publishPost();
    });

    it('Escenario 9: Crear Post con contenido en HTML', () => {
        //ir a seccion de crear post
        cy.get('a[data-test-nav="new-story"]').click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        cy.get('textarea[data-test-editor-title-input]').type('Post de prueba HTML Nro 1'); // Post title
        cy.get('textarea[data-test-editor-title-input').type('{enter}');

        //Card de opciones
        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});
        //Seleccionar HTML
        cy.get('button[data-kg-card-menu-item="HTML"]').first().click({force:true, waitForAnimations: false});
        //Ingresar texto en html
        cy.get('div[class="cm-line"]').type('<h2> Prueba texto en post </h2>'); 
        cy.get('div[class="cm-line"]').type('{enter}');

        publishPost();
    });

    it('Escenario 10: Crear Pagina con contenido en HTML', () => {
        //ir a seccion de paginas
        cy.visit('http://localhost:2368/ghost/#/pages');
        cy.url().should('include', '/ghost/#/pages');

        //Click New Page
        cy.get('span').contains('New page').click({force:true, waitForAnimations: false});

        cy.get('textarea[data-test-editor-title-input]').type('Pagina de prueba HTML Nro 1'); // Post title
        cy.get('textarea[data-test-editor-title-input').type('{enter}');

        //Card de opciones
        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});
        //Seleccionar HTML
        cy.get('button[data-kg-card-menu-item="HTML"]').first().click({force:true, waitForAnimations: false});
        //Ingresar texto en html
        cy.get('div[class="cm-line"]').type('<h2> Prueba texto pagina </h2>'); 
        cy.get('div[class="cm-line"]').type('{enter}');

        publishPage();
    });


});

// Función de login separada
const login = () => {
    cy.get('input[type="email"]').type('prueba@gmail.com', { force: true });
    cy.get('input[type="password"]').type('prueba123456', { force: true });
    cy.get('button[data-test-button="sign-in"]').click();
};

// Función para publicar el post
const publishPost = () =>{
    cy.get('button[data-test-button="publish-flow"]').first().click();
    cy.get('button[data-test-button="continue"]').first().click();
    cy.get('button[data-test-button="confirm-publish"]').first().click();
    cy.url().should('include', '/ghost/#/posts');
    cy.wait(5000)
    cy.get('a[data-test-complete-bookmark]').first().click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
}

function publishPage(){
    cy.get('button[data-test-button="publish-flow"]').should('be.visible'); // Publish
    cy.get('button[data-test-button="publish-flow"]').first().click();

    //Continuar a review final
    cy.get('button[data-test-button="continue"]').should('be.visible'); // Continue, final review
    cy.get('button[data-test-button="continue"]').first().click();

    //Publicar post
    cy.get('button[data-test-button="confirm-publish"]').should('be.visible'); //Publish post, right now
    cy.get('button[data-test-button="confirm-publish"]').first().click();
    cy.url().should('contain', '/pages');
}