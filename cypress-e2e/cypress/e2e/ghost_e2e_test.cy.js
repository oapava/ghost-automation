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


});

// Función de login separada
const login = () => {
    cy.get('input[type="email"]').type('o.pava@uniandes.edu.com', { force: true });
    cy.get('input[type="password"]').type('andres2124', { force: true });
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