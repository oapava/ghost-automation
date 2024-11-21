import { Post } from "../data/post.js";
import { dataPostPoolDatosApriori } from "../data/data_post_apriori.js";

class When {
    //Getters Page Objects
    get spanElement(){
        return 'span';
    }

    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }

    get version(){
        return '5/'
    }

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }

    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }
    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get createPostButton(){
        return 'a[data-test-nav="new-story"]';
    }

    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }

    get htmlEditorButton(){
        return 'button[data-kg-card-menu-item="HTML"]';
    }

    get cmLineDiv(){
        return 'div[class="cm-line"]';
    }

    get textAreaContent(){
        return 'p[data-koenig-dnd-droppable="true"]';
    }



    createAndPublishPost(post){
        // Hacer click en el botón de "New post"
        cy.get(this.spanElement).contains('New post').click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        cy.get(this.titleInput).should('be.visible');

        //Se ingresa titulo y contenido en negrita del post
        cy.get(this.titleInput).type(post.title);
        cy.get(this.titleInput).type('{enter}');

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    createAndPublishPostWithHtml(post){
        //ir a seccion de crear post
        cy.get(this.createPostButton).click();
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

        this.publishPostAndPage();
        this.validatePublishPostAndCloseModal();
    }

    publishPostAndPage(){
        cy.get(this.publishFlowButton).should('exist');
        cy.get(this.publishFlowButton).first().click();

        //Continuar a review final
        cy.get(this.publishContinueButton).should('be.visible');
        cy.get(this.publishContinueButton).first().click();

        //Publicar post
        cy.get(this.confirmPublishButton).should('be.visible');
        cy.get(this.confirmPublishButton).first().click();
    }

    validatePublishPostAndCloseModal(){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).should('be.visible');
        cy.get(this.closeModalPublishFlow).click();

        cy.get(this.spanElement).contains('New post').should('be.visible');
    }


}

export default new When();