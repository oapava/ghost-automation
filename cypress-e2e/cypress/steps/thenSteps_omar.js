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
        cy.visit(Cypress.env('postPageUrl'));
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
        cy.visit(Cypress.env('postPageUrl'));
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
        cy.visit(Cypress.env('postPageUrl'));
        cy.contains(title).should('exist'); 
    }

    seePostPublishedPostWithImageRandom( {title} ){
        this.generalScroll(this.mainScrollPost);
        cy.visit(Cypress.env('postPageUrl'));
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