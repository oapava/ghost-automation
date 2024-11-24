class Then {
    get temporalFilePath(){
        return 'cypress/fixtures/tempData.json';
    }
    
    get errorAuthorPostText(){
        return 'At least one author is required.';
    }
    
    get urlPrevietext(){
        return 'p.ghost-url-preview';
    }
    
    get errorEcerptCharactersText(){
        return 'Excerpt cannot be longer than 300 characters.';
    }
    
    get mainScrollPost(){
        return '.gh-main';
    }

    get navigationOptionsContainer(){
        return 'div[data-testid="navigation"]';
    }
    
    get navigationItemSecondary(){
        return 'button[title="Secondary"]';
    }

    get emailContributorInput(){
        return 'input[placeholder="jamie@example.com"]';
    }

    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get buttonleaveMemberCreatePage(){
        return 'button[data-test-leave-button]';
    }

    get spanElement(){
        return 'span';
    }

    get pageListContainer(){
        return '.posts-list';
    }

    get alertCloseNotificationButton(){
        return 'button.gh-alert-close[data-test-button="close-notification"]';
    }

    get returnPost(){
        return 'a[data-test-link="posts"]';
    }

    get leaveButton(){
        return 'button.gh-btn.gh-btn-red[data-test-leave-button]';
    }
    
    get searchButton(){
        return 'button[data-test-button="search"]';
    }
    
    get searchInput(){
        return 'input[placeholder="Search site"]';
    }

    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get buttonleaveMemberCreatePage(){
        return 'button[data-test-leave-button]';
    }

    get spanElement(){
        return 'span';
    }

    get pElement(){
        return 'p';
    }

    get errorResponse(){
        return 'p[class="response"]';
    }

    get postList(){
        return '.posts-list';
    }

    get listEmpty(){
        return 'div[class="gh-members-empty"]'
    }

    get tableMembers(){
        return 'div[data-test-table="members"]'
    }

    validatePageWithVideoCreated(){
        cy.contains('Página con video de YouTube').should('be.visible');
    }

    validatePageWasEditedAndCreated(){
        cy.get('.gh-notification').should('be.visible');
    }

    seePostPublished(){
        cy.visit(Cypress.env('postPageUrl'));
        this.generalScroll(this.mainScrollPost);

        cy.get('@fixturePost').then((data) => {
            cy.contains(data[0].title).should('exist'); 
        });
    }

    seePostPublishedBold(){
        cy.visit(Cypress.env('postPageUrl'));
        this.generalScroll(this.mainScrollPost);
        cy.get('@fixturePost').then((data) => {
            cy.contains(data[1].title).should('exist'); 
        });
    }

    seePostPublishedPostMarkdown(){
        this.generalScroll(this.mainScrollPost);
        cy.get('@fixturePost').then((data) => {
            cy.contains(data[3].title).should('exist'); 
        });
    }

    seePostPublishedPostWithImage(){
        cy.visit(Cypress.env('postPageUrl'));
        this.generalScroll(this.mainScrollPost);
        cy.get('@fixturePost').then((data) => {
            cy.contains(data[4].title).should('exist'); 
        });
    }

    seePostPublishedPostWithContent(){
        cy.visit(Cypress.env('postPageUrl'));
        this.generalScroll(this.mainScrollPost);
        cy.get('@fixturePost').then((data) => {
            cy.contains(data[4].title).should('exist'); 
        });
    }

    seePostPublishedMokaroo( content ){
        cy.wait(1000)
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(content.title).should('exist');
    }

    seePostPublishedBoldMokaroo( {title} ){
        cy.visit(Cypress.env('postPageUrl'));
        this.generalScroll(this.mainScrollPost);
        cy.contains(title).should('exist');
    }

    seePostPublishedPostMarkdownMokaroo({title}){
        this.generalScroll(this.mainScrollPost);
        cy.contains(title).should('exist'); 
    }

    seePostPublishedPostWithImageMokaroo({title}){
        this.generalScroll(this.mainScrollPost);
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(title).should('exist');
    }

    seePostPublishedPostWithContentMokaroo({title}){
        this.generalScroll(this.mainScrollPost);
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(title).should('exist');
    }

    seePostPublishedRandom( {title} ){
        this.generalScroll(this.mainScrollPost);
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(title).should('exist'); 
    }

    seePostPublishedBoldRandom({title}){
        this.generalScroll(this.mainScrollPost);
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(title).should('exist'); 
    }

    seePostPublishedPostMarkdownRandom({title}){
        this.generalScroll(this.mainScrollPost);
        cy.contains(title).should('exist'); 
    }

    seePostPublishedPostWithImageRandom( {title} ){
        cy.visit(Cypress.env('postPageUrl'));
        this.generalScroll(this.mainScrollPost);
        cy.contains(title).should('exist'); 
    }

    seePostPublishedPostWithContentRandom({title}){
        this.generalScroll(this.mainScrollPost);
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(title).should('exist'); 
    }

    validateRemovePostAuthorError(){
        cy.contains(this.errorAuthorPostText).should('exist');
    }

    validateSlugAdded(){
        cy.get('@fixturePost').then((data) => {
            const slugWithSpaces = data[30].slug.toLowerCase();
            const slug = slugWithSpaces
                .replace(/[^a-zA-Z0-9\s]/g, '') 
                .replaceAll(' ', '-'); 
            cy.get(this.urlPrevietext) 
                .contains(slug)
                .should('exist');
            cy.contains(slug).should('exist');
        });
    }

    validateErrorExcerpt(){
        cy.contains(this.errorEcerptCharactersText).should('exist');
    }

    validateSiteDescriptionHasBeenSaved(){
        cy.contains('Saved').should('exist');
    }

    validateNavigationItemWasSaved(){
        cy.contains(this.navigationOptionsContainer, 'Navigation') 
            .find('button') 
            .contains('Customize')
            .click();
        cy.get('input').its('length') 
        .should('be.gt', 4);
        
    }

    validateNavigationItemSecondaryWasSaved( {label} ){
        cy.contains(this.navigationOptionsContainer, 'Navigation') 
            .find('button') 
            .contains('Customize')
            .click();
        cy.get(this.navigationItemSecondary).click();

        cy.get('input').its('length') 
        .should('be.gt', 4);
        
    }

    validateInvitationWasNotSend({email}){

        cy.get(this.emailContributorInput).should('have.value', email);
    }
    
    validateBadEmailError(){

        cy.contains('Please enter a valid email address.').should('exist')
    }

    validateFieldsComplete({name,email,location,website,facebook}){
        cy.get('section[data-testid="user-detail-modal"]').scrollTo('top')
         //Name
         cy.contains(name).should('exist'); 
    }

    validateErrorTwitter(){
        cy.contains('Your Username is not a valid Twitter Username').should('exist')
    }

    validateNavigationItemSecondaryWasSavedRandom( ){
        cy.contains(this.navigationOptionsContainer, 'Navigation') 
            .find('button') 
            .contains('Customize')
            .click();
        cy.get(this.navigationItemSecondary).click();

        cy.get('input').its('length') 
        .should('be.gt', 4);
        
    }

    validateInvitationWasNotSendRandom({email}){
        cy.get(this.emailContributorInput).should('have.value', email);
    }

    //PABLO

    validatePostWithTag(tagName){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.posts-list').should('contain', tagName).then(()=>{
            cy.screenshot('5/e16/p3-tag-creado',{
                disableTimersAndAnimations: false,
            })
        });

        cy.contains(tagName).should('exist');
        cy.get(this.closePublishConfirmationButton).first().click({ force: true, waitForAnimations: false });
    }

    validatePageWithTag({tagname}){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.log(tagname)


        cy.get(this.pageListContainer).should('contain', tagname);
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[class="gh-members-empty"]').should('contain', 'No members match the current filter');

        // Verificar que el tag aparece en el post
        cy.contains('No members match the current filter').should('exist');

    }

    validateTitleSiteWasEdited(newTitle){
        //Valida que el titulo
        cy.reload(true);
        cy.contains(newTitle).should('exist');
    }

    validateNewMemberExist(memberName){
        //Esperar un tiempo y ir a la Members page
        cy.wait(2000);
        //Recargar la pagina
        cy.reload(true);
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get('div[data-test-table="members"]').should('contain', memberName);
        // Verificar que el tag aparece en el post
        cy.contains(memberName).should('exist');
    }

    //Page Object Methods

    validateNewMemberErrorInvalid(){
        // Verificar que el error se haya mostrado
        cy.get(this.errorResponse).should('contain', 'Invalid Email.');
    }

    validateNewMemberErrorInvalidNote(){
        // Verificar que el error se haya mostrado
        cy.get(this.errorResponse).should('contain', 'Note is too long.');
    }

    validateNewMemberErrorDuplicate(){
        // Verificar que el error se haya mostrado
        cy.get(this.errorResponse).should('contain', 'Member already exists. Attempting to add member with existing email address');
        //Volver a la pagina de la lista de members
        cy.get(this.buttonMemberList).first().click();
        //Confirma salida de la pagina
        cy.get(this.buttonleaveMemberCreatePage).first().click();

    }

    validateNewRecommendationValid(){
        cy.get(this.spanElement).should('contain', 'Recommendation added');
    }

    validateNewRecommendationInvalid(){
        cy.get(this.spanElement).should('contain', 'Enter a valid URL');
        cy.get(this.spanElement).filter((index, element) => element.textContent.trim() === 'Cancel').should('be.visible').click({waitForAnimations: true})
    }

    validateNewTagErrorInvalidSlug(){
        cy.get(this.pElement).should('contain', 'URL cannot be longer than 191 characters.');
    }

    validatePostWithTag(tagName){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get(this.postList).should('contain', tagName).then(()=>{
            cy.screenshot('5/e16/p3-tag-creado',{
                disableTimersAndAnimations: false,
            })
        });

        cy.contains(tagName).should('exist');
        cy.get(this.closePublishConfirmationButton).first().click({ force: true, waitForAnimations: false });
    }

    validateMemberWasDeleted(){
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get(this.listEmpty).should('contain', 'No members match the current filter');

        // Verificar que el tag aparece en el post
        cy.contains('No members match the current filter').should('exist');

    }

    validateTitleSiteWasEdited(newTitle){
        //Valida que el titulo
        cy.reload(true);
        cy.contains(newTitle).should('exist');
    }

    validateNewMemberExist(memberName){
        //Esperar un tiempo y ir a la Members page
        cy.wait(2000);
        //Recargar la pagina
        cy.reload(true);
        // Verificar que el tag se haya agregado correctamente en el post
        cy.get(this.tableMembers).should('contain', memberName);
        // Verificar que el tag aparece en el post
        cy.contains(memberName).should('exist');
    }

    //EDWIN

    seePostPublishedWithHtml(post){
        cy.visit(Cypress.env('postPagePublishedUrl'));
        cy.contains(post.title).should('exist');
    }

    seePostPublishError(post){
        cy.contains('Validation failed').should('exist');
        cy.get(this.alertCloseNotificationButton).should('exist').first().click();
        cy.get(this.returnPost).should('exist').first().click();
        cy.get(this.leaveButton).should('exist').first().click();
    }

    seePostPublishedUntitled(post){
        cy.visit(Cypress.env('postPagePublishedUrl'));
        cy.contains('Untitled').should('exist');
    }

    confirmUnpublishPostPublished(post){
        cy.visit(Cypress.env('postDraftPageUrl'));
        cy.url().should('include', 'posts?type=draft');
    }

    confirmDeletedPost(){
        cy.visit(Cypress.env('postPageUrl'));
    }

    seePagePublishedWithHtml(page){
        cy.visit(Cypress.env('pageUrl'));
        cy.contains(page.title).should('exist');
    }

    seePostPublishedMembersOnly(post){
        cy.visit(Cypress.env('postMembersPageUrl'));
        cy.contains(post.title).should('exist');
    }


    //Utils
    generalScroll(element){
        cy.get(element).then(($el) => {
            const el = $el[0];
            const isScrollable = el.scrollHeight > el.clientHeight;
            
            if (isScrollable) {
                cy.wrap($el).scrollTo('bottom');
            }
        });
    }
}


export default new Then();