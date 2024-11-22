import { faker } from '@faker-js/faker';
import { setSharedData } from '../utils/sharedData';

class When {
    //Getters Page Objects
    get version(){
        return '5/'
    }

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

    get time(){
        const now = new Date();
        const formattedDate = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()).getTime() / 1000);
        return formattedDate;
    }

    get editSiteTitleButton(){
        return 'button[class="cursor-pointer text-grey-900 dark:text-white dark:hover:bg-grey-900 hover:bg-grey-200 hover:text-black inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-semibold h-7 px-3"]';
    }

    get saveSiteTitleButton(){
        return 'button[class="cursor-pointer  bg-green text-white hover:bg-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-7 px-3"]';
    }

    get siteTitleInput(){
        return 'input[placeholder="Site title"]';
    }

    get tagNameInput(){
        return '[data-test-input="tag-name"]';
    }

    get tagColorInput(){
        return '[data-test-input="accentColor"]';
    }

    get tagSlugInput(){
        return '[data-test-input="tag-slug"]';
    }

    get tagDescriptionInput(){
        return '[data-test-input="tag-description"]';
    }

    get tagSaveButton(){
        return 'button[data-test-button="save"]';
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

    get buttoGotToAnalitics(){
        return 'a.gh-post-list-button span[title="Go to Analytics"]';
    }

    get buttoGotToAnalitics(){
        return 'a.gh-post-list-button span[title="Go to Analytics"]';
    }

    get linkPostListTitle(){
        return 'a.gh-post-list-title';
    }

    get returnEditorPost(){
        return '.gh-btn-editor.gh-editor-back-button';
    }

    get buttonPublishEditedsave(){
        return 'button[data-test-button="publish-save"]';
    }

    //When Methods
    createPageAndPublishWithVideo(){
        cy.screenshot('5/e11/p1-visit-page-list');
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.screenshot('5/e11/p2-nueva-page');
        cy.get(this.titleInput).type('Página con video de YouTube ' + this.time);
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});


        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get(this.buttonYoutube).scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get(this.inputEmbedUrl).should('be.visible').type("https://www.youtube.com/watch?v=x91MPoITQ3I").type('{enter}');
        cy.screenshot('5/e11/p3-nueva-pagina-con-contenido-nuevo');
        cy.wait(1000)

        //Continuar a review final
        this.publishPostAndPage('5/e11', 'p3');

        cy.get(this.closeModalPublishFlow).click();

    }

    createAndPublishPost(){
        var scenery = 'e1';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBasic'));
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        this.publishPostAndPage(this.version + scenery,'p3');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p4');
    }

    createAndPublishPostBold(){
        var scenery = 'e2';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(Cypress.env('titlePostBold'));
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type('**Contenido en negrita**');
        cy.screenshot(this.version + scenery + '/p3_addContentBold');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    editAndPublishPostMarkdown(){
        var scenery = 'e3';
        //Se crea Post para luego editar
        this.createSimplePost(this.version + scenery,'p1')
        cy.visit(Cypress.env('postPageUrl')+ '?type=published');
        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p2_pagePost');

        // Se toma el el titulo  del último post
        cy.get(this.linkPostListTitle).first().click();
        cy.get(this.titleInput).should('be.visible');

        //Se ingresa titulo del post
        cy.get(this.textAreaContent).first().type(' **Contenido agregado a post existente** ');
        cy.get(this.titleInput).type('(Editado!)');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(this.version + scenery + '/p4_editedPost');

        cy.get(this.buttonPublishEditedsave).should('be.visible');
        cy.get(this.buttonPublishEditedsave).first().click();
        cy.wait(500)
        cy.get(this.returnEditorPost).first().click();

        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p4_editedPost');
    }

    createAndPublishPostWhithImage(){
        var scenery = 'e4';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');


        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con imagen 1');
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        //Agregar imagen
        cy.get(this.unsplashImageButton).first().click({force:true})
        cy.wait(1000)
        cy.screenshot(this.version + scenery + '/p3_unsplashImage');
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });
        cy.screenshot(this.version + scenery + '/p4_addhImage');

        this.publishPostAndPage(this.version + scenery,'p5');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p6');
    }

    createAndPublishPostWhithContent(){
        var scenery = 'e5';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con contenido 1');
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dui posuere velit maximus, in commodo leo luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium sollicitudin risus eget mattis. Donec luctus eros eu dolor sodales, eu maximus mi feugiat.');
        cy.screenshot(this.version + scenery + '/p3_addContent');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
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
        this.createSimplePost(this.version + scenery,'p1')

        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.screenshot(this.version + scenery + '/p2_validatePostCreated');
            cy.get(this.titlePostCreated).first().click();

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('exist');
            cy.screenshot(this.version + scenery + '/p3_selectPost');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en edit post
            cy.get(this.editPostButton).contains('Edit post').should('exist');
            cy.screenshot(this.version + scenery + '/p4_optionPost');
            cy.get(this.editPostButton).contains('Edit post').first().click();

            //Click en Unpublish Post
            cy.get(this.updatedFlowButton).should('exist');
            cy.screenshot(this.version + scenery + '/p5_unpublishPost');
            cy.get(this.updatedFlowButton).first().click();

            //Click en confirmar unpublish
            cy.get(this.revertToDraftButton).should('exist');
            cy.wait(500)
            cy.screenshot(this.version + scenery + '/p6_confirmUnpublishPost');
            cy.get(this.revertToDraftButton).first().click();

            cy.get(this.returnAnalitics).should('exist');
            cy.screenshot(this.version + scenery + '/p7_resumeUnpublishPost');
            cy.get(this.returnAnalitics).first().click();
        });
    }

    deletePostPublished(){
        var scenery = 'e7';
        this.createSimplePost(this.version + scenery,'p1')

        //Se valida que existan Posts
        cy.get(this.titlePostCreated).should('exist').then(() => {
            cy.get(this.titlePostCreated).first().click();
            cy.screenshot(this.version + scenery + '/p2_validatePostCreated');

            //Click en opciones
            cy.get(this.analitycOptionssButton).should('be.visible');
            cy.screenshot(this.version + scenery + '/p3_selectPost');
            cy.get(this.analitycOptionssButton).first().click();

            //Click en delete Post
            cy.get(this.deletePostButton).should('be.visible');
            cy.screenshot(this.version + scenery + '/p4_deletePost');
            cy.get(this.deletePostButton).first().click();

            //Click en confirmar delete Post
            cy.get(this.deletePostConfirmButton).should('be.visible');
            cy.screenshot(this.version + scenery + '/p5_confirmDeletePost');
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
        cy.screenshot(this.version + scenery + '/p1_sectionPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post para miembros 1');
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        //Se abre el panel de configuracion
        cy.get(this.configurationPanelButton).should('be.visible');
        cy.screenshot(this.version + scenery + '/p3_panelConfigPost');
        cy.get(this.configurationPanelButton).first().click();
        cy.get(this.configurationPanelButton).trigger('mousedown')


        cy.get(this.postVisibilitySelect).should('be.visible'); // Post Access
        cy.get(this.postVisibilitySelect).select('members') // Select option members
        cy.screenshot(this.version + scenery + '/p4_memberOnliyConfigPost');

        cy.get(this.configurationPanelButton).should('be.visible'); //Post settings cerrar panel config
        cy.screenshot(this.version + scenery + '/p5_closeConfigPost');
        cy.get(this.configurationPanelButton).first().click();

        this.publishPostAndPage(this.version + scenery,'p6');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p7');
    }

    createPublishAndDeletePage(){
        // Hacer click en "New page" para crear una nueva página
        cy.screenshot('5/e13/p1-pagina-creada-listada');
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        // Escribir el título de la página
        cy.get(this.titleInput).type('Página de prueba para eliminar{enter}');

        // Agregar contenido HTML a la página
        cy.get(this.buttonAddCard).first().click({ force: true, waitForAnimations: false });
        cy.get(this.htmlEditorButton).first().click({ force: true, waitForAnimations: false });
        cy.get(this.cmLineDiv).type('<h2>Contenido de la página de prueba</h2>{enter}');

        cy.screenshot('5/e13/p2-pagina-creada-con-contenido');

        // Publicar la página
        this.publishPostAndPage('5/e13', 'p2');

        // Paso 2: Confirmar que la página fue publicada
        cy.url().should('include', '/pages');
        cy.contains('Página de prueba para eliminar').should('exist');
        cy.wait(500);
        cy.get(this.bodyElement).type('{esc}');
        cy.screenshot('5/e13/p3-pagina-creada');

        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');

        // Buscar la página en la lista por el título y hacer clic derecho para abrir el menú contextual
        cy.contains(this.contentEntryTitle, 'Página de prueba para eliminar')
            .closest(this.liElement)
            .rightclick(); // Realiza el clic derecho en el elemento de lista para abrir el menú de opciones

        // Seleccionar la opción "Delete" del menú contextual
        cy.get(this.deletePageButton)
            .should('be.visible')
            .then(() => {
                cy.screenshot('5/e13/p4-eliminar-pagina', { capture: 'fullPage' });
                cy.get(this.deletePageButton).click();
            });

    }

    createPageAndAddInvalidYoutubeLink(){
        // Click en "New page"
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});

        // Ingresar el título de la página
        cy.get(this.titleInput).type('Página con error en video de YouTube');
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});

        // Seleccionar la opción de YouTube en el menú de inserción
        cy.get(this.buttonYoutube).scrollIntoView().should('be.visible').click();

        // Esperar a que el campo de URL esté disponible y escribir el enlace de YouTube
        cy.get(this.inputEmbedUrl).should('be.visible').type("https://www.youtu").type('{enter}');

        cy.screenshot('5/e14/p1-contenido-ingresado');

        // Publicar la página
        this.publishPostAndPage('5/e14', 'p1');
        cy.get(this.closeModalPublishFlow).click();
        cy.screenshot('5/e14/p2-confirmacion-guardado');
    }

    createNewTag(){
        cy.screenshot('5/e15/p1-crear-nuevo-tag');

        // Hacer clic en el botón "New tag"
        cy.contains('a.gh-btn-primary', 'New tag').click();

        // Llenar los campos del formulario para crear un nuevo tag
        const tagColor = 'FF5733';     // Color (en formato hexadecimal)
        const tagDescription = 'Este es un tag de tecnología';  // Descripción del tag

        // Llenar el campo de nombre del tag
        cy.get(this.tagNameInput).type(Cypress.env('tagName'));

        // Llenar el campo de color del tag
        cy.get(this.tagColorInput).type(tagColor);

        // Llenar el campo de slug del tag
        cy.get(this.tagSlugInput).type(Cypress.env('tagName'));

        // Llenar el campo de descripción del tag
        cy.get(this.tagDescriptionInput).type(tagDescription);

        //Scroll al inicio de la pagina
        cy.get(this.tagNameInput).scrollIntoView()

        cy.screenshot('5/e15/p2-formulario-completo');
        // Esperar un momento (opcional si necesitas tiempo para que los cambios se reflejen)
        cy.wait(1000);

        cy.get(this.tagSaveButton).click();  // Este es el botón de guardar
        cy.wait(1000);
    }

    createTagAndAsignIt(){
        this.createNewTag()

        cy.screenshot('5/e16/p1-tag-creado');

        cy.visit(Cypress.env('postPageUrl'));

        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        // Escribimos el título del post
        cy.get(this.titleInput).type('Post con tag');

        //asignar tag
        cy.get(this.asignTagButton).click();  // Este es el botón de settings del post

        cy.get(this.asignTagInput).first().type(Cypress.env('tagName'));
        cy.get(this.confirmTagAsign).first().click();

        cy.get(this.asignTagButton).then(()=>{
            cy.screenshot('5/e16/p2-asignacion-tag');
            cy.get(this.asignTagButton).click();
        });

        this.publishPostAndPage('5/e16', 'p2');

        cy.get(this.anchorPostButton).click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

    }

    createTagAndAsignItToPage(){

        this.createNewTag()

        cy.screenshot('5/e17/p1-creacion-del-tag');

        cy.visit(Cypress.env('pageUrl'));

        // Hacer click en "New page" para crear una nueva página
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        // Escribir el título de la página
        cy.get(this.titleInput).type('Páge con tag');

        //poner tag
        cy.get(this.asignTagButton).click();  // Este es el botón de settings del post

        cy.get(this.asignTagInput).first().type(Cypress.env('tagName'));
        cy.get(this.confirmTagAsign).first().click();

        cy.screenshot('5/e17/p1-asignacion-de-tag');

        cy.get(this.asignTagButton).click();  // Este es el botón para cerrar setting

        //publicar page
        this.publishPostAndPage('5/e17', 'p1');


        cy.visit(Cypress.env('pageUrl'));
    }

    createNewMember(){

        //Crear member
        cy.get(this.createNewMemberButton).click();

        cy.get(this.memberNameInput).type(Cypress.env('newMemberName'));

        cy.get(this.memberEmailInput).type(Cypress.env('newMemberEmail')+this.time+ Cypress.env('domainEmail'));

        cy.screenshot('5/e18/p1-creacion-member');

        cy.get(this.saveMemberButton).click();

        cy.get(this.anchorMembersButton).first().click();
    }

    createMemberAndDeletIt(){
        //Crear member
        cy.wait(1000)
        this.createNewMember();

        //Buscar al member
        cy.get(this.searchMembersInput).type(Cypress.env('newMemberEmail')+this.time+ Cypress.env('domainEmail'));
        cy.screenshot('5/e19/p1-buscar-miembro');
        //Clickear en el member encontrado
        cy.get(this.detailMemberButton).first().click();
        //Abrir los settings del member
        cy.get(this.memberActionsButton).first().click();
        cy.screenshot('5/e19/p2-eliminar-miembro', {disableTimersAndAnimations: false,})
        //Dar boton de eliminar member

        cy.get(this.deleteMemberButton).first().click();
        cy.screenshot('5/e19/p3-confirmacion-eliminar-miembro', {disableTimersAndAnimations: false,})

        //Dar boton de confirmar eliminar member
        cy.get(this.deleteMemberConfirmButton).first().click()

    }

    createAndPublishPostWithHtml(){
        var scenery = 'e9';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(this.version + scenery + '/p1_sectionPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type('Post con HTML 1'); // Post title
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        //Card de opciones
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        cy.screenshot(this.version + scenery + '/p3_cardOptions');

        //Seleccionar HTML
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        cy.screenshot(this.version + scenery + '/p4_htmlOptionsSelected');

        //Ingresar texto en html
        cy.get(this.cmLineDiv).type('<h2> Prueba texto en post </h2>');
        cy.screenshot(this.version + scenery + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage(this.version + scenery,'p6');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p7');
    }

    createAndPublishPageWithHtml(){
        var scenery = 'e10';
        //Click New Page
        cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});
        cy.screenshot(this.version + scenery + '/p1_sectionPage');

        cy.get(this.titleInput).type('Pagina con HTML 1'); // Page title
        cy.screenshot(this.version + scenery + '/p2_addTitlePage');
        cy.get(this.titleInput).type('{enter}');

        //Card de opciones
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        cy.screenshot(this.version + scenery + '/p3_cardOptions');

        //Seleccionar HTML
        cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
        cy.screenshot(this.version + scenery + '/p4_htmlOptionsSelected');

        //Ingresar texto en html
        cy.get(this.cmLineDiv).type('<h2> Prueba texto pagina </h2>');
        cy.screenshot(this.version + scenery + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage(this.version + scenery,'p6');
        this.validatePublishPageAndCloseModal(this.version + scenery,'p7');
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
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/' + step + '_2_addTitlePost');
        cy.wait(1000)

        this.publishPostAndPage(scenery, step + '_3');
        this.validatePublishPostAndCloseModal(scenery, step + '_4');
    }

    createAndPublishPageEditAndSave(){
        // Crear nueva página
        cy.screenshot('5/e12/p1-click-nueva-pagina')
        cy.get(this.newPageButton).click();
        cy.get(this.titleInput).type('My Page to edit{enter}');

        //Publicar post
        cy.get(this.koenigEditorElement).first().click();
        this.publishPostAndPage('5/e12','p1');
        cy.url().should('contain', '/pages');

        // Editar la página recién creada
        cy.get(this.closeModalPublishFlow).click();
        cy.screenshot('5/e12/p2-pagina-creada-listada');
        cy.contains('My Page to edit').click();
        cy.get(this.titleInput).clear().type('Updated Page Title{enter}').screenshot('5/e12/p3-actualizacion-titulo');

        // Guardar la página actualizada
        cy.get(this.publishSaveButton).contains('Update').click();
        cy.screenshot('5/e12/p4-publicacion-pagina-actualizada');

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

    updateSiteTitlte(){
        //Seleccionar editar titulo
        cy.get(this.editSiteTitleButton).first().click();

        //Actualización de titulo del sitio
        cy.get(this.siteTitleInput).clear().type(Cypress.env('updatedSiteTitle'));
        cy.screenshot('5/e20/p1-editar-titulo', {disableTimersAndAnimations: false,});

        //Click en el botón de guardar título
        cy.get(this.saveSiteTitleButton).first().click();
    }

    // POOL

    createAndPublishPageWithHtmlPool(index){
        var scenery = 'e10';

        cy.fixture('testData').then((data) => {
            // Usamos el índice recibido como parámetro para obtener los datos de la página
            const pageData = data.pagesHtml[index];

            cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});
            cy.screenshot(this.version + scenery + '/p1_sectionPage');

            cy.get(this.titleInput).type(pageData.title);
            cy.screenshot(this.version + scenery + '/p2_addTitlePage');
            cy.get(this.titleInput).type('{enter}');

            cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
            cy.screenshot(this.version + scenery + '/p3_cardOptions');

            cy.get(this.htmlEditorButton).first().click({force:true, waitForAnimations: false});
            cy.screenshot(this.version + scenery + '/p4_htmlOptionsSelected');

            cy.get(this.cmLineDiv).type(pageData.htmlContent);
            cy.screenshot(this.version + scenery + '/p5_addContentHtml');
            cy.get(this.cmLineDiv).type('{enter}');

            this.publishPostAndPage(this.version + scenery, 'p6');
            this.validatePublishPageAndCloseModal(this.version + scenery, 'p7');
        });
    }

    createPageAndPublishWithVideoPool(index) {
        cy.screenshot(`5/e11/p1-visit-page-list`);

        cy.get(this.spanElement).contains('New page').click({force: true, waitForAnimations: false});

        cy.fixture('testData').then((data) => {
            const videoData = data.videos[index];

            cy.get(this.titleInput).type(`${videoData.title} ${this.time}`);
            cy.get(this.titleInput).type('{enter}');


            cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});

            cy.get(this.buttonYoutube).scrollIntoView().should('be.visible').click();

            cy.get(this.inputEmbedUrl).should('be.visible').type(videoData.url).type('{enter}');

            cy.screenshot(`5/e11/p3-nueva-pagina-con-contenido-nuevo`);
            cy.wait(1000);

            this.publishPostAndPage('5/e11', 'p3');

            cy.get(this.closeModalPublishFlow).click();
        });
    }


    createAndPublishPageEditAndSavePool(index) {
        cy.fixture('testData').then((data) => {
            const pageData = data.pagesEdit[index]; // Usar el índice recibido como parámetro

            cy.screenshot('5/e12/p1-click-nueva-pagina');
            cy.get(this.newPageButton).click();
            cy.get(this.titleInput).type(pageData.title + '{enter}');

            cy.get(this.koenigEditorElement).first().click();
            this.publishPostAndPage('5/e12', 'p1');
            cy.url().should('contain', '/pages');

            cy.get(this.closeModalPublishFlow).click();
            cy.screenshot('5/e12/p2-pagina-creada-listada');
            cy.contains(pageData.title).click();
            cy.get(this.titleInput).clear().type(pageData.updatedTitle + '{enter}').screenshot('5/e12/p3-actualizacion-titulo');

            cy.get(this.publishSaveButton).contains('Update').click();
            cy.screenshot('5/e12/p4-publicacion-pagina-actualizada');
        });
    }


    createPublishAndDeletePagePool(){
        cy.fixture('testData').then((data) => {
            const pageData = data.pagesDelete[0];

            cy.screenshot('5/e13/p1-pagina-creada-listada');
            cy.contains('New page').click({ force: true, waitForAnimations: false });

            cy.get(this.titleInput).type(pageData.title + '{enter}');

            cy.get(this.buttonAddCard).first().click({ force: true, waitForAnimations: false });
            cy.get(this.htmlEditorButton).first().click({ force: true, waitForAnimations: false });
            cy.get(this.cmLineDiv).type(pageData.htmlContent + '{enter}');

            cy.screenshot('5/e13/p2-pagina-creada-con-contenido');

            this.publishPostAndPage('5/e13', 'p2');

            cy.url().should('include', '/pages');
            cy.contains(pageData.title).should('exist');
            cy.wait(500);
            cy.get(this.bodyElement).type('{esc}');
            cy.screenshot('5/e13/p3-pagina-creada');

            cy.visit(Cypress.env('pageUrl'));
            cy.url().should('include', '/ghost/#/pages');

            cy.contains(this.contentEntryTitle, pageData.title)
                .closest(this.liElement)
                .rightclick();

            cy.get(this.deletePageButton)
                .should('be.visible')
                .then(() => {
                    cy.screenshot('5/e13/p4-eliminar-pagina', { capture: 'fullPage' });
                    cy.get(this.deletePageButton).click();
                });
        });
    }
    createPageAndAddInvalidYoutubeLinkPool(){
        cy.fixture('testData').then((data) => {
            const pageData = data.pagesError[0];

            // Click en "New page"
            cy.get(this.spanElement).contains('New page').click({force:true, waitForAnimations: false});

            cy.get(this.titleInput).type(pageData.title);
            cy.get(this.titleInput).type('{enter}');

            cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});

            cy.get(this.buttonYoutube).scrollIntoView().should('be.visible').click();

            cy.get(this.inputEmbedUrl).should('be.visible').type(pageData.invalidYoutubeLink).type('{enter}');

            cy.screenshot('5/e14/p1-contenido-ingresado');

            this.publishPostAndPage('5/e14', 'p1');
            cy.get(this.closeModalPublishFlow).click();
            cy.screenshot('5/e14/p2-confirmacion-guardado');
        });
    }

    createNewTagPool(index){
        cy.fixture('testData').then((data) => {
            const tagData = data.tags[index];

            cy.screenshot('5/e15/p1-crear-nuevo-tag');
            cy.contains('a.gh-btn-primary', 'New tag').click();

            const tagColor = tagData.color;
            const tagDescription = tagData.description;

            cy.get(this.tagNameInput).type(tagData.name);
            cy.get(this.tagColorInput).type(tagColor);
            cy.get(this.tagSlugInput).type(tagData.slug);
            cy.get(this.tagDescriptionInput).type(tagDescription);

            cy.get(this.tagNameInput).scrollIntoView();

            cy.screenshot('5/e15/p2-formulario-completo');
            cy.wait(1000);

            cy.get(this.tagSaveButton).click();
            cy.wait(1000);
        });
    }


    createAndPublishPageWithHtmlFaker() {
        var scenery = 'e10';

        const pageData = {
            title: faker.lorem.words(5),
            htmlContent: `<p>${faker.lorem.paragraph()}</p>`
        };

        // Guardar el título generado en el archivo compartido
        setSharedData('pageTitle', pageData.title);

        cy.get(this.spanElement).contains('New page').click({ force: true, waitForAnimations: false });
        cy.screenshot(this.version + scenery + '/p1_sectionPage');

        cy.get(this.titleInput).type(pageData.title);
        cy.screenshot(this.version + scenery + '/p2_addTitlePage');
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.buttonAddCard).first().click({ force: true, waitForAnimations: false });
        cy.screenshot(this.version + scenery + '/p3_cardOptions');

        cy.get(this.htmlEditorButton).first().click({ force: true, waitForAnimations: false });
        cy.screenshot(this.version + scenery + '/p4_htmlOptionsSelected');

        cy.get(this.cmLineDiv).type(pageData.htmlContent);
        cy.screenshot(this.version + scenery + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).type('{enter}');

        this.publishPostAndPage(this.version + scenery, 'p6');
        this.validatePublishPageAndCloseModal(this.version + scenery, 'p7');
    }

}

export default new When();