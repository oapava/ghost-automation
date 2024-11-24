import { getPostDataDynamicrandom, schemaFaker } from '../helpers/helpers';

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

    get linkPostListTitle(){
        return 'a.gh-post-list-title';
    }

    get returnEditorPost(){
        return '.gh-btn-editor.gh-editor-back-button';
    }

    get buttonPublishEditedsave(){
        return 'button[data-test-button="publish-save"]';
    }
    
    get temporalFilePath(){
        return 'cypress/fixtures/tempData.json';
    }
    
    get removeAuthorPostButton(){
        return 'span[class="ember-power-select-multiple-remove-btn"]';
    }
    
    get slugPostName(){
        return 'input[name="post-setting-slug"]';
    }
    
    get customExerptPostText(){
        return '#custom-excerpt';
    }
    
    get siteTitleConfig(){
        return 'h2[class="mb-4 ml-2 text-base font-semibold tracking-normal text-black dark:text-grey-400"]';
    }
    
    get h2Element(){
        return 'h2';
    }
    
    get designSection(){
        return '#design';
    }
    
    get designOptionsContainer(){
        return 'div[class="flex items-start justify-between gap-4"]';
    }
    
    get descriptionSitePlaceHolder(){
        return 'input[value="Thoughts, stories and ideas."]';
    }
    
    get colorConfigInput(){
        return 'input[aria-label="Color value"]';
    }

    get navigationSection(){
        return '#navigation';
    }

    get navigationOptionsContainer(){
        return 'div[data-testid="navigation"]';
    }
    
    get newItemNavigationConfig(){
        return 'input[placeholder="New item label"]';
    }
    
    get nextInputNavigation(){
        return 'input[value="http://localhost:2369/"]';
    }

    get navigationItemSecondary(){
        return 'button[title="Secondary"]';
    }
    
    get staffSection(){
        return '#staff';
    }
    
    get emailContributorInput(){
        return 'input[placeholder="jamie@example.com"]';
    }
    
    get InvitationTextButton(){
        return 'Send invitation';
    }
    
    get ownerButton(){
        return 'div[data-testid="owner-user"]';
    }
    
    get ownerFormInputs(){
        return 'input[class="peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md dark:text-white rounded-lg"]';
    }
    
    get ownerButon(){
        return 'button[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-[34px] px-4 min-w-[80px]"]';
    }


    
    //When Methods

    createAndPublishPost(){
        var scenery = 'e1';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(data[0].title);
        });

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
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(data[1].title);
        });
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get('@fixturePost').then((data) => {
            cy.get(this.textAreaContent).first().type(data[1].content);
        });
        cy.screenshot(this.version + scenery + '/p3_addContentBold');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    editAndPublishPostMarkdown(){
        var scenery = 'e3';
        //Se crea Post para luego editar

        //Generar indice aleatorio
        const randomIndex = Math.floor(Math.random() * 51);

        cy.get('@fixturePost').then((data) => {
            this.createSimplePostDynamicRandom(this.version + scenery,'p1', data[randomIndex].title)
        });
        cy.visit(Cypress.env('postPageUrl')+ '?type=published');
        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p2_pagePost');

        // Se toma el el titulo  del último post
        cy.get(this.linkPostListTitle).first().click();
        cy.get(this.titleInput).should('be.visible');

        //Se ingresa titulo del post
        cy.get('@fixturePost').then((data) => {
            cy.get(this.textAreaContent).first().type(data[3].content);
        });
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).first().type(data[3].title);
        });

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
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(data[4].title);
        });
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
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(data[4].title);
        });
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get('@fixturePost').then((data) => {
            cy.get(this.textAreaContent).first().type(data[4].content);
        });
        cy.screenshot(this.version + scenery + '/p3_addContent');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    async createAndPublishPostDynamicRandom( {title} ){
        
        var scenery = 'e6';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(title);

        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        this.publishPostAndPage(this.version + scenery,'p3');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p4');
    }

    createAndPublishPostBoldDynamicRandom( {title,boldContent } ){
        var scenery = 'e7';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(title);

        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        //Se ingresa el contenido
        cy.get(this.textAreaContent).first().type(boldContent);

        cy.screenshot(this.version + scenery + '/p3_addContentBold');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    editAndPublishPostMarkdownDynamicRandom( {boldItalicsContent, title} ){
        var scenery = 'e8';
        //Se crea Post para luego editar con contenido dinamico aleatorio
        getPostDataDynamicrandom().then(( firstContent )=>{
            this.createSimplePostDynamicRandom(this.version + scenery,'p1', firstContent.title);
        })

        cy.visit(Cypress.env('postPageUrl')+ '?type=published');
        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p2_pagePost');

        // Se toma el el titulo  del último post
        cy.get(this.linkPostListTitle).first().click();
        cy.get(this.titleInput).should('be.visible');

        //Se ingresa titulo del post
        cy.get(this.titleInput).clear();
        cy.get(this.titleInput).type(title);
        cy.get(this.textAreaContent).first().type(boldItalicsContent);
        
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(this.version + scenery + '/p4_editedPost');
        
        cy.get(this.buttonPublishEditedsave).should('be.visible');
        cy.get(this.buttonPublishEditedsave).first().click();
        cy.wait(500)
        cy.get(this.returnEditorPost).first().click();

        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p4_editedPost');
    }

    createAndPublishPostWhithImageDynamicRandom( {title, } ){
        var scenery = 'e9';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');


        //Se ingresa titulo del post
        cy.get(this.titleInput).first().type(title);
        
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

    createAndPublishPostWhithContentDynamicRandom( {title, content} ){
        
        var scenery = 'e10';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).first().type(title);
        
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type(content);
        
        cy.screenshot(this.version + scenery + '/p3_addContent');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    createAndPublishPostRandom( {title} ){
        var scenery = 'e11';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(title);
        });

        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        this.publishPostAndPage(this.version + scenery,'p3');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p4');
    }

    createAndPublishPostBoldrandom({title, contentBold}){
        var scenery = 'e12';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(title);

        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.textAreaContent).first().type(contentBold);

        cy.screenshot(this.version + scenery + '/p3_addContentBold');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    editAndPublishPostMarkdownRandom( {title, content} ){
        var scenery = 'e3';
        //Se crea Post para luego editar
        const contentFirst = schemaFaker();
        this.createSimplePostDynamicRandom(this.version + scenery,'p1', contentFirst.title)
        cy.visit(Cypress.env('postPageUrl')+ '?type=published');
        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p2_pagePost');

        // Se toma el el titulo  del último post
        cy.get(this.linkPostListTitle).first().click();
        cy.get(this.titleInput).should('be.visible');

        //Se ingresa titulo del post
        cy.get(this.textAreaContent).first().type(content);

        cy.get(this.titleInput).clear();
        cy.get(this.titleInput).type(title);
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(this.version + scenery + '/p4_editedPost');
        
        cy.get(this.buttonPublishEditedsave).should('be.visible');
        cy.get(this.buttonPublishEditedsave).first().click();
        cy.wait(500)
        cy.get(this.returnEditorPost).first().click();

        cy.url().should('include', '/posts?type=published');
        cy.screenshot(this.version + scenery + '/p4_editedPost');
    }

    createAndPublishPostWhithImageRandom( {title} ){
        var scenery = 'e14';
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(this.version + scenery + '/p1_newPost');


        //Se ingresa titulo del post
        cy.get(this.titleInput).type(title);
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

    createAndPublishPostWhithContentRandom({title, content}){
        
        var scenery = 'e5';
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
        cy.url().should('contain', '/post');
        cy.screenshot(this.version + scenery + '/p1_newPost');

        //Se ingresa titulo del post
        cy.get(this.titleInput).type(title);
        
        cy.screenshot(this.version + scenery + '/p2_addTitlePost');
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.textAreaContent).first().type(content);
        
        cy.screenshot(this.version + scenery + '/p3_addContent');

        this.publishPostAndPage(this.version + scenery,'p4');
        this.validatePublishPostAndCloseModal(this.version + scenery,'p5');
    }

    removePostAuthorPool(){
        
        //Ir a crear un nuevo Post
        cy.get(this.createPostButton).click();

        //Generar indice aleatorio
        const randomIndex = Math.floor(Math.random() * 51);

        //Agregar Texto del pool de datos
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(data[randomIndex].title);
        });

        //Agregar contenido del pool de datos
        cy.get('@fixturePost').then((data) => {
            cy.get(this.textAreaContent).first().type(data[randomIndex].content);
        });

        //click en menu de opciones de Post
        cy.get(this.asignTagButton).click();

        //Eliminar Autor selecionado por defecto
        cy.get(this.removeAuthorPostButton).first().click();

    }

    addCustomUrlPost(){
        //Ir a crear un nuevo Post
        cy.get(this.createPostButton).click();

        //Agregar Texto del pool de datos
        cy.get('@fixturePost').then((data) => {
            cy.get(this.titleInput).type(data[30].title);
        });

        //Agregar contenido del pool de datos
        cy.get('@fixturePost').then((data) => {
            cy.get(this.textAreaContent).first().type(data[30].content);
        });

        
        //click en menu de opciones de Post
        cy.get(this.asignTagButton).click();

        //Escribir un nuevo slug
        cy.get('@fixturePost').then((data) => {
            cy.get(this.slugPostName).invoke('val', '').type(data[30].slug)
            cy.get(this.titleInput).click()
        });

    }

    addinvalidExcerpt(){
         //Ir a crear un nuevo Post
         cy.get(this.createPostButton).click();

        //Generar indice aleatorio
        const randomIndex = Math.floor(Math.random() * 51);

         //Agregar Texto del pool de datos
         cy.get('@fixturePost').then((data) => {
             cy.get(this.titleInput).type(data[randomIndex].title);
         });
 
         //Agregar contenido del pool de datos
         cy.get('@fixturePost').then((data) => {
             cy.get(this.textAreaContent).first().type(data[randomIndex].content);
         });

         //click en menu de opciones de Post
         cy.get(this.asignTagButton).click();
 
         //Escribir un nuevo slug
         cy.get('@fixturePost').then((data) => {
             cy.get(this.customExerptPostText).type(data[randomIndex].excerpt)
             cy.get(this.titleInput).click()
         });
 
    }

    changebrandConfig(){
        //Ingresar a la seccion de dise;o y marca
        cy.get(this.h2Element).contains('Site').scrollIntoView();
        cy.get(this.designSection).click();

        //Click en cutomize 
        cy.contains(this.designOptionsContainer, 'Design & branding') 
            .find('button') 
            .contains('Customize')
            .click()

        //Generar indice aleatorio
        const randomIndex = Math.floor(Math.random() * 51);

        //Cambiar la descripción del sitio
        cy.get('@fixtureDesign').then((configPool) => {
            cy.get(this.descriptionSitePlaceHolder).clear().type( configPool[randomIndex].description );
        });

        //Guardar cambios
        cy.get('button').contains('Save').first().click();
        
    }

    changeNavigationItem(){
        //Ingresar a la seccion de navegacion
        cy.get(this.h2Element).contains('Site').scrollIntoView();
        cy.get(this.navigationSection).click();

        //Click en cutomize 
        cy.contains(this.navigationOptionsContainer, 'Navigation') 
            .find('button') 
            .contains('Customize')
            .click()

        //Generar indice aleatorio
        const randomIndex = Math.floor(Math.random() * 50);

        //Cambiar la descripción del sitio
        cy.get('@fixtureNavigation').then((configPool) => {
            cy.get(this.newItemNavigationConfig).type( configPool[randomIndex].label);
            
            cy.get(this.nextInputNavigation).last().type( configPool[randomIndex].path );
        });

        //Guardar cambios
        cy.get('button').contains('Save').first().click();
    }
    
    changeNavigationItemSecondary( {label, path} ){
        //Ingresar a la seccion de navegacion
        cy.get(this.h2Element).contains('Site').scrollIntoView();
        cy.get(this.navigationSection).click();

        //Click en cutomize 
        cy.contains(this.navigationOptionsContainer, 'Navigation') 
            .find('button') 
            .contains('Customize')
            .click()

        //Ingresar a la secci'on de naegacion secundaria
        cy.get(this.navigationItemSecondary).click();

        //Cambiar la descripción del sitio
        cy.get(this.newItemNavigationConfig).type( label);
        cy.get(this.nextInputNavigation).last().type( path );

        //Guardar cambios
        cy.get('button').contains('Save').first().click();
    }

    inviteUserToBeContributor({email}){
        //Ingresar a la seccion de Staff
        cy.get(this.h2Element).contains('General settings').scrollIntoView();
        cy.get(this.staffSection).click();

        //Click en cutomize 
        cy.contains('Invite people')
            .click()

        //Agregar Correo
        cy.get(this.emailContributorInput).type( email );
        cy.get('span').contains(this.InvitationTextButton).click();
    }

    testBademailInField({badEmail}){
        //Ingresar a la seccion de Staff
        cy.get(this.h2Element).contains('General settings').scrollIntoView();
        cy.get(this.staffSection).click();

        //Click en cutomize 
        cy.contains('Invite people')
            .click()

        //Agregar Correo
        cy.get(this.emailContributorInput).type( badEmail );
        cy.get('span').contains(this.InvitationTextButton).click();
    }

    editOwnerInfo({name,location,website,facebook}){
        //Ingresar a la seccion de navegacion
        cy.get(this.h2Element).contains('General settings').scrollIntoView();
        cy.get(this.navigationSection).click();

        //Click en cutomize 
        cy.get(this.staffSection)
            .click()

        //Click en cutomize 
        cy.get(this.ownerButton).click();
        //Name
        cy.get(this.ownerFormInputs).eq(0).clear().type(name); 
        //Location
        cy.get(this.ownerFormInputs).eq(3).clear().type(location); 
        
        //Website
        cy.get(this.ownerFormInputs).eq(4).clear().type(website); 
        
        //Facebook
        cy.get(this.ownerFormInputs).eq(5).clear().type(facebook); 
        
        cy.get(this.ownerButon).click()
    }

    editOwnerInfoTwitter({twitter}){
        //Ingresar a la seccion de navegacion
        cy.get(this.h2Element).contains('General settings').scrollIntoView();
        cy.get(this.navigationSection).click();

        //Click en cutomize 
        cy.get(this.staffSection)
            .click()

        //Click en cutomize 
        cy.get(this.ownerButton).click();

        //Twitter
        cy.get(this.ownerFormInputs).eq(6).clear().type(twitter); 
        cy.get(this.ownerFormInputs).eq(5).click();

    }

    changeNavigationItemSecondaryRandom( {label, path} ){
        //Ingresar a la seccion de navegacion
        cy.get(this.h2Element).contains('Site').scrollIntoView();
        cy.get(this.navigationSection).click();

        //Click en cutomize 
        cy.contains(this.navigationOptionsContainer, 'Navigation') 
            .find('button') 
            .contains('Customize')
            .click()

        //Ingresar a la secci'on de naegacion secundaria
        cy.get(this.navigationItemSecondary).click();

        //Cambiar la descripción del sitio
        cy.get(this.newItemNavigationConfig).type( label);
        cy.get(this.nextInputNavigation).last().type( path );

        //Guardar cambios
        cy.get('button').contains('Save').first().click();
    }

    inviteUserToBeContributorRandom({email}){
        //Ingresar a la seccion de Staff
        cy.get(this.h2Element).contains('General settings').scrollIntoView();
        cy.get(this.staffSection).click();

        //Click en cutomize 
        cy.contains('Invite people')
            .click()

        //Agregar Correo
        cy.get(this.emailContributorInput).type( email );
        cy.get('span').contains(this.InvitationTextButton).click();
    }

    testBademailInFieldRandom({badEmail}){
        //Ingresar a la seccion de Staff
        cy.get(this.h2Element).contains('General settings').scrollIntoView();
        cy.get(this.staffSection).click();

        //Click en cutomize 
        cy.contains('Invite people')
            .click()

        //Agregar Correo
        cy.get(this.emailContributorInput).type( badEmail );
        cy.get('span').contains(this.InvitationTextButton).click();
    }

    //Utils
    validatePublishPostAndCloseModal(scenery, step){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).should('be.visible');
        cy.wait(1000);
        cy.screenshot(scenery + '/' + step + '_1_postPublished');
        cy.get(this.closeModalPublishFlow).click();

        cy.get(this.spanElement).contains('New post').should('be.visible');
        cy.screenshot(scenery + '/' + step + '_2_listPostFinal');
    }

    createSimplePostDynamicRandom(scenery, step, title){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');
        cy.screenshot(scenery + '/' + step + '_1_newPost');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(title);
        cy.get(this.titleInput).type('{enter}');
        cy.get(this.titleInput).type('{enter}');
        cy.screenshot(scenery + '/' + step + '_2_addTitlePost');
        cy.wait(1000)

        this.publishPostAndPage(scenery, step + '_3');
        this.validatePublishPostAndCloseModal(scenery, step + '_4');
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