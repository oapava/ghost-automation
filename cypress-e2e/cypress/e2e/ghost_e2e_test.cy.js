describe('Escenarios para ver los Post dentro de GHOST', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {

            return false

        })
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

    it('Escenario 11: Crear y publicar una página con un video de YouTube', () => {
        // Ir a la sección de páginas
        cy.visit('http://localhost:2368/ghost/#/pages');
        cy.url().should('include', '/ghost/#/pages');

        // Click en "New page"
        cy.get('span').contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.get('textarea[data-test-editor-title-input]').type('Página con video de YouTube');
        cy.get('textarea[data-test-editor-title-input]').type('{enter}');

        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});


        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get('button[data-kg-card-menu-item="YouTube"]').scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get('input[data-testid="embed-url"]').should('be.visible').type("https://www.youtube.com/watch?v=x91MPoITQ3I").type('{enter}');

        // Publicar la página
        publishPage();
    });

    it('#Escenario 12: Crear y editar una página en Ghost', () => {
        // Navegar al módulo de Páginas
        cy.get('a[href="#/pages/"]').click();
        cy.url().should('include', '/pages');

        // Crear nueva página
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('textarea[placeholder="Page title"]').type('My Page to edit{enter}');

        publishPage()
        //Cerrar modal
        cy.get('button[data-test-button="close-publish-flow"]').click();

        // Editar la página recién creada
        cy.contains('My Page to edit').click();
        cy.get('textarea[placeholder="Page title"]').clear().type('Updated Page Title{enter}');

        // Guardar la página actualizada
        cy.get('button[data-test-button="publish-save"]').contains('Update').click();

        cy.get('.gh-notification').should('be.visible');

    });

    it('Escenario 13: Crear, publicar y eliminar una página en Ghost', () => {
        // Ignorar errores específicos
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes("TaskInstance 'getlatestPublishedPost' was canceled")) {
                return false; // Ignorar este error específico
            }
        });

        // Paso 1: Navegar a la sección de páginas
        cy.visit('http://localhost:2368/ghost/#/pages');
        cy.url().should('include', '/ghost/#/pages');

        // Hacer click en "New page" para crear una nueva página
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        // Escribir el título de la página
        cy.get('textarea[data-test-editor-title-input]').type('Página de prueba para eliminar{enter}');

        // Agregar contenido HTML a la página
        cy.get('button[aria-label="Add a card"]').first().click({ force: true, waitForAnimations: false });
        cy.get('button[data-kg-card-menu-item="HTML"]').first().click({ force: true, waitForAnimations: false });
        cy.get('div.cm-line').type('<h2>Contenido de la página de prueba</h2>{enter}');

        // Publicar la página
        publishPage();

        // Paso 2: Confirmar que la página fue publicada
        cy.url().should('include', '/pages');
        cy.contains('Página de prueba para eliminar').should('exist');
        cy.wait(2000);
        cy.get('body').type('{esc}');

        cy.visit('http://localhost:2368/ghost/#/pages');
        cy.url().should('include', '/ghost/#/pages');

        // Buscar la página en la lista por el título y hacer clic derecho para abrir el menú contextual
        cy.contains('h3.gh-content-entry-title', 'Página de prueba para eliminar')
            .closest('li')
            .rightclick(); // Realiza el clic derecho en el elemento de lista para abrir el menú de opciones

        // Seleccionar la opción "Delete" del menú contextual
        cy.get('[data-test-button="delete"]').should('be.visible').click();

        // Confirmar la eliminación
        cy.get('button[data-test-button="confirm"]').should('be.visible').click();

    });

    it('Escenario 14: Crear una pagina y agregar un link de youtube invalido', () =>{
        // Ir a la sección de páginas
        cy.visit('http://localhost:2368/ghost/#/pages');
        cy.url().should('include', '/ghost/#/pages');

        // Click en "New page"
        cy.get('span').contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.get('textarea[data-test-editor-title-input]').type('Página con error en video de YouTube');
        cy.get('textarea[data-test-editor-title-input]').type('{enter}');

        cy.get('button[aria-label="Add a card"]').first().click({force:true, waitForAnimations: false});


        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get('button[data-kg-card-menu-item="YouTube"]').scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get('input[data-testid="embed-url"]').should('be.visible').type("https://www.youtu").type('{enter}');

        // Publicar la página
        publishPage();

        cy.wait(2000);
        cy.get('body').type('{esc}');

    })


    it('Escenario 15: Crear un tag', () => {
        cy.visit('http://localhost:2368/ghost/#/tags');
        cy.url().should('include', '/ghost/#/tags');

        // Hacer clic en el botón "New tag"
        cy.contains('a.gh-btn-primary', 'New tag').click();

        // Llenar los campos del formulario para crear un nuevo tag
        const tagName = 'Tecnología';  // Nombre del tag
        const tagColor = 'FF5733';     // Color (en formato hexadecimal)
        const tagSlug = 'tecnologia';  // Slug (por ejemplo, en minúsculas y sin espacios)
        const tagDescription = 'Este es un tag de tecnología';  // Descripción del tag

        // Llenar el campo de nombre del tag
        cy.get('[data-test-input="tag-name"]').type(tagName);

        // Llenar el campo de color del tag
        cy.get('[data-test-input="accentColor"]').type(tagColor);

        // Llenar el campo de slug del tag
        cy.get('[data-test-input="tag-slug"]').type(tagSlug);

        // Llenar el campo de descripción del tag
        cy.get('[data-test-input="tag-description"]').type(tagDescription);

        // Esperar un momento (opcional si necesitas tiempo para que los cambios se reflejen)
        cy.wait(1000);

        // Hacer clic en el botón "Save"
        cy.get('button[data-test-button="save"]').click();  // Este es el botón de guardar

        cy.visit('http://localhost:2368/ghost/#/tags');

        // Verificar que el tag se haya agregado correctamente
        cy.get('.tags-list') // Asegúrate de que este selector sea el adecuado para la lista de tags
            .should('contain', tagName);

        // Verificar que el tag aparece con la descripción y otros detalles (opcional)
        cy.contains(tagName).should('exist');
    });

    it('Escenario 16: Crear un tag y ponerlo en un post', () => {

        // Llenar los campos del formulario para crear un nuevo tag
        const tagName = 'tag-para-post';  // Nombre del tag

        crearTag(tagName);

        visitSite("posts");

        // Hacer click en el botón de "New post"
        cy.get('span').contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        // Escribimos el título del post
        cy.get('textarea[placeholder="Post title"]').type('Post con tag');

        //poner tag
        aniadirTagPagePost(tagName);

        publishPost();

        cy.get('a[data-test-nav="posts"]').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        // Verificar que el tag se haya agregado correctamente al post
        verifyExist('.posts-list', tagName);
    });

    it('Escenario 17: Crear un tag y ponerlo en una page', () => {

        // Llenar los campos del formulario para crear un nuevo tag
        const tagName = 'tag-para-page';  // Nombre del tag


        crearTag(tagName);

        visitSite('pages');


        // Hacer click en "New page" para crear una nueva página
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        // Escribir el título de la página
        cy.get('textarea[data-test-editor-title-input]').type('Páge con tag');

        //poner tag
        aniadirTagPagePost(tagName);

        //publicar page
        publishPage();


        visitSite('pages');

        verifyExist('.posts-list', tagName);
    });

    it('Escenario 18: Crear member', () => {
        const email = "p.riverah@uniandes.edu.co";
        const name = "Pablo Rivera";

        //Crear member
        crearMember(name,email);


        // Verificar que el tag se haya agregado correctamente al post
        verifyExist('div[data-test-table="members"]', email);
    });

    it('Escenario 19: Crear member y eliminarlo', () => {
        const email = "test@uniandes.edu.co";
        const name = "test";

        //Crear member
        crearMember(name, email);

        //Buscar al member
        cy.get('input[data-test-input="members-search"]').type(email);
        //Clickear en el member encontrado
        cy.get('a[data-test-table-data="details"]').first().click();
        //Abrir los settings del member
        cy.get('button[data-test-button="member-actions"]').first().click();
        //Dar boton de eliminar member
        cy.get('button[data-test-button="delete-member"]').first().click();
        //Dar boton de confirmar eliminar member
        cy.get('button[data-test-button="confirm"]').first().click()

        verifyExist('div[class="gh-members-empty"]', "No members match the current filter");

    });

    it('Escenario 20: Entrar al view site', () => {
        //El contenido del view site es un iframa alojado en otro puerto.
        visitSite('site');
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


function crearTag(tagName) {
    visitSite('tags');

    cy.wait(1000);

    // Hacer clic en el botón "New tag"
    cy.contains('a.gh-btn-primary', 'New tag').click();

    cy.wait(1000);

    // Llenar el campo de nombre del tag
    cy.get('[data-test-input="tag-name"]').type(tagName);

    cy.wait(1000);

    // Esperar un momento (opcional si necesitas tiempo para que los cambios se reflejen)
    cy.wait(2000);

    // Hacer clic en el botón "Save"
    cy.get('button[data-test-button="save"]').click({force:true, waitForAnimations: false});

    cy.wait(2000);
}

function aniadirTagPagePost(nombreTag){
    // Hacer clic en el botón "Setting"
    cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();  // Este es el botón de settings del post

    cy.get('input[class="ember-power-select-trigger-multiple-input"]').first().type(nombreTag);
    cy.get('li[data-option-index="1"]').first().click();

    cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();  // Este es el botón para cerrar setting
}

function visitSite(Site) {
    cy.visit(`http://localhost:2368/ghost/#/${Site}`);
    cy.url().should('include', `/ghost/#/${Site}`);
}

function verifyExist(lista, nombre){
    // Verificar que el tag se haya agregado correctamente en el post
    cy.get(lista)
        .should('contain', nombre);

    // Verificar que el tag aparece en el post
    cy.contains(nombre).should('exist');
}

function crearMember(name,email){
    //Ingresar al sitio de members
    visitSite('members');

    cy.wait(1000);

    cy.get('a[data-test-new-member-button="true"]').click();

    cy.wait(1000);

    cy.get('input[data-test-input="member-name"]').type(name);

    cy.get('input[data-test-input="member-email"]').type(email);

    cy.wait(1000);

    cy.get('button[data-test-button="save"]').click();

    cy.wait(1000);

    cy.get('a[href="#/members/"]').first().click();
}
