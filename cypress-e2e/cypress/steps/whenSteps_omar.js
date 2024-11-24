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

    get memberNoteInput(){
        return 'textarea[data-test-input="member-note"]'
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get inputAddRecommendation(){
        return 'input[placeholder="https://www.example.com"]'
    }

    get buttonSettingPost(){
        return 'button.settings-menu-toggle.gh-btn.gh-btn-editor';
    }

    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
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

    //PABLO

    //Methods page object

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

    updateSiteTitlte(newTitle){
        //Seleccionar editar titulo
        cy.get(this.editSiteTitleButton).first().click();
        
        //Actualización de titulo del sitio
        cy.get(this.siteTitleInput).clear().type(newTitle);

        //Click en el botón de guardar título
        cy.get(this.saveSiteTitleButton).first().click();
    }

    createRecommendation(URL){
        //Seleccionar el boton de añadir recomendación
        cy.get(this.spanElement).contains('Add recommendation').scrollIntoView().should('be.visible').click({force:true, waitForAnimations: true});
        //Escribir el link de la recomendacion
        cy.get(this.inputAddRecommendation).type(URL);
        //Darle click al boton de la recomendación
        cy.get(this.spanElement).contains('Next').should('be.visible').click({waitForAnimations: true});
    }

    createNewTag(tagname, tagslug=tagname){
        cy.screenshot('5/e15/p1-crear-nuevo-tag');

        // Hacer clic en el botón "New tag"
        cy.contains('a.gh-btn-primary', 'New tag').click();

        // Llenar los campos del formulario para crear un nuevo tag
        const tagColor = 'FF5733';     // Color (en formato hexadecimal)
        const tagDescription = 'Este es un tag de tecnología';  // Descripción del tag

        // Llenar el campo de nombre del tag
        cy.get(this.tagNameInput).type(tagname);

        // Llenar el campo de color del tag
        cy.get(this.tagColorInput).type(tagColor);

        // Llenar el campo de slug del tag
        cy.get(this.tagSlugInput).type(tagslug);

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

    createTagAndAsignIt(tagName, postName){
        this.createNewTag(tagName)

        cy.screenshot('5/e16/p1-tag-creado');

        cy.visit(Cypress.env('postPageUrl'));

        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

        // Escribimos el título del post
        cy.get(this.titleInput).type(postName);

        //asignar tag
        cy.get(this.asignTagButton).click();  // Este es el botón de settings del post

        cy.get(this.asignTagInput).first().type(tagName);
        cy.get(this.confirmTagAsign).first().click();

        cy.get(this.asignTagButton).then(()=>{
            cy.screenshot('5/e16/p2-asignacion-tag');
            cy.get(this.asignTagButton).click();
        });

        this.publishPostAndPage('5/e16', 'p2');

        cy.get(this.anchorPostButton).click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});

    }

    createTagAndAsignItToPage(tagname,pageName){

        this.createNewTag(tagname)

        cy.screenshot('5/e17/p1-creacion-del-tag');

        cy.visit(Cypress.env('pageUrl'));

        // Hacer click en "New page" para crear una nueva página
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        // Escribir el título de la página
        cy.get(this.titleInput).type(pageName);

        //poner tag
        cy.get(this.asignTagButton).click();  // Este es el botón de settings del post

        cy.get(this.asignTagInput).first().type(tagname);
        cy.get(this.confirmTagAsign).first().click();

        cy.screenshot('5/e17/p1-asignacion-de-tag');

        cy.get(this.asignTagButton).click();  // Este es el botón para cerrar setting

        //publicar page
        this.publishPostAndPage('5/e17', 'p1');

        cy.get(this.closePublishConfirmationButton).first().click({ force: true, waitForAnimations: false });

    }


    createNewMemberStay(memberName, emailMember){

        //Crear member
        cy.get(this.createNewMemberButton).click();

        cy.get(this.memberNameInput).type(memberName);

        cy.get(this.memberEmailInput).type(emailMember);

        cy.get(this.saveMemberButton).click();
    }

    createMemberAndDeletIt(){
        cy.fixture('members-E94.json').then((data) => {

            //Coger un valor aleatorio de un pool de datos
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            const nameMember = data[randomIndex].nameMember;
            const emailMember = data[randomIndex].email;


            //Crear member
            cy.wait(1000)
            this.createNewMember(nameMember, emailMember);

            //Buscar al member
            cy.get(this.searchMembersInput).type(emailMember);
            //Clickear en el member encontrado
            cy.get(this.detailMemberButton).first().click();
            //Abrir los settings del member
            cy.get(this.memberActionsButton).first().click();
            //Dar boton de eliminar member

            cy.get(this.deleteMemberButton).first().click();

            //Dar boton de confirmar eliminar member
            cy.get(this.deleteMemberConfirmButton).first().click();

            //Volver a la pagina de members
            cy.get(this.buttonMemberList).first().click;
            //Buscar al miembro eliminado
            cy.get(this.searchMembersInput).type(emailMember);
        })
    }

    createNewMember(memberName, emailMember){
        //Crear member

        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(memberName);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).type(emailMember);

        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});

        //Esperar
        cy.wait(3000)

        //Refrescar la pagina
        cy.get(this.anchorMembersButton).first().click();
        cy.reload(true);
    }

    //EDWIN

    


    createAndPublishPostWithHtml(post, stage){
        //console.log("PostToPublish -" + JSON.stringify(post));
        //ir a seccion de crear post
        //cy.get(this.createPostButton).first().click();
        cy.visit(Cypress.env('postPageUrl'));
        cy.get(this.spanElement).contains('New post').first().click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        
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

    createAndPublishPostWithHtmlError(post, stage){

        cy.log('ts', JSON.stringify(post))
        //ir a seccion de crear post
        cy.get(this.createPostButton).first().click();
        cy.url().should('contain', '/post');

        //Se ingresa titulo del post
        if(post.title !== ""){
            cy.get(this.titleInput).type('A');
            cy.get(this.titleInput).type('{enter}');
            cy.wait(500);
            cy.get(this.titleInput).type(post.title);
            cy.get(this.titleInput).type('{enter}');
        }

        //Contenido del post
        cy.get(this.textAreaContent).first().type(post.contentText);
        cy.get(this.textAreaContent).first().type('{enter}');

        cy.get(this.publishFlowButton).should('exist');
        cy.get(this.publishFlowButton).first().click();

    }

    unpublishPostCreated(post, stage){
        //Crear post
        this.createSimplePost(post, stage, 'p1')
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/posts?type=published');
        cy.wait(500);

        //Se valida que existan Posts
        cy.get(this.contentEntryTitle).should('exist').then(() => {
            //cy.screenshot(stage + '/p2_validatePostCreated');
            cy.get(this.contentEntryTitle).first().click({force:true, waitForAnimations: false}); // Hace clic en el enlace

            //Click en Unpublish Post
            cy.get(this.updatedFlowButton).should('exist');
            //cy.screenshot(stage+ '/p5_unpublishPost');
            cy.get(this.updatedFlowButton).first().click();

            //Click en confirmar unpublish
            cy.get(this.revertToDraftButton).should('exist');
            cy.wait(500)
            //cy.screenshot(stage + '/p6_confirmUnpublishPost');
            cy.get(this.revertToDraftButton).first().click();
            cy.wait(500)

            cy.get(this.returnAnalitics).should('exist');
            //cy.screenshot(stage + '/p7_resumeUnpublishPost');
            cy.get(this.returnAnalitics).first().click();
        });
    }

    deletePostPublished(post, stage){
        this.createSimplePost(post, stage, 'p1')
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/posts?type=published');

        //Se valida que existan Posts
        cy.get(this.contentEntryTitle).should('exist').then(() => {
            cy.get(this.contentEntryTitle).first().click({force:true, waitForAnimations: false});
            //cy.screenshot(this.version + stage + '/p2_validatePostCreated');

            //Click en opciones
            cy.get(this.buttonSettingPost).should('exist').first().click();
            //cy.screenshot(this.version + stage + '/p3_selectPost');

            //Click en delete Post
            cy.get(this.deletePostButton).should('exist');
            //cy.screenshot(this.version + stage + '/p4_deletePost');
            cy.get(this.deletePostButton).first().click();

            //Click en confirmar delete Post
            cy.get(this.deletePostConfirmButton).should('exist');
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
        cy.get(this.cmLineDiv).first().type(page.htmlText); 
        //cy.screenshot(this.version + stage + '/p5_addContentHtml');
        cy.get(this.cmLineDiv).first().type('{enter}');

        this.publishPostAndPage(this.version + stage,'p6');
        this.validatePublishPageAndCloseModal(this.version + stage,'p7');
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