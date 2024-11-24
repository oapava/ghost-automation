import {fetchMockarooData} from "../support/mockaroo";

class When {

    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
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

    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get asignTagButton(){
        return 'button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]';
    }

    get asignTagInput(){
        return 'input[class="ember-power-select-trigger-multiple-input"]';
    }

    get confirmTagAsign(){
        return 'li[data-option-index="0"]';
    }

    get anchorPostButton(){
        return 'a[data-test-nav="posts"]';
    }

    get createNewMemberButton(){
        return 'a[data-test-new-member-button="true"]';
    }

    get memberNameInput(){
        return 'input[data-test-input="member-name"]';
    }

    get memberEmailInput(){
        return 'input[data-test-input="member-email"]';
    }

    get memberNoteInput(){
        return 'textarea[data-test-input="member-note"]'
    }

    get saveMemberButton(){
        return 'button[data-test-button="save"]';
    }

    get anchorMembersButton(){
        return 'a[data-test-nav="members"]';
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

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get inputAddRecommendation(){
        return 'input[placeholder="https://www.example.com"]'
    }

    //Methods page object


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

    createMemberAndDeletItMockaroo(){
        fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) => {

            //Coger un valor aleatorio de un pool de datos
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            const nameMember = data[randomIndex].nameMember;
            const emailMember = data[randomIndex].emailMember;


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

    createMemberAndDeletItFaker(nameMember, emailMember){
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
    }


    createNewMemberNegativeInvalid(){
        cy.fixture('membersN-Invalid.json').then((data) => {
            const dataInvalidEmail = data.invalidEmail;
            const randomIndex = Math.floor(Math.random() * (dataInvalidEmail.length-1));
            const nameMember = dataInvalidEmail[randomIndex].nameMember;
            const emailMember = dataInvalidEmail[randomIndex].emailMember;

            cy.get(this.memberNameInput).clear().type(nameMember);

            cy.get(this.memberEmailInput).clear().type(emailMember);

            cy.get(this.saveMemberButton).click();
        });
    }

    createNewMemberNegativeInvalidFaker(nameMember,emailMember,noteMember="test"){
        cy.get(this.memberNameInput).clear().type(nameMember);

        cy.get(this.memberEmailInput).clear().type(emailMember);

        cy.get(this.memberNoteInput).clear().type(noteMember);

        cy.get(this.saveMemberButton).click();
    }

    createNewMemberNegativeInvalidMockaroo(){
        fetchMockarooData('membersInvalid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            const nameMember = data[randomIndex].nameMember;
            const emailMember = data[randomIndex].emailInvalid;

            cy.get(this.memberNameInput).clear().type(nameMember);

            cy.get(this.memberEmailInput).clear().type(emailMember);

            cy.get(this.saveMemberButton).click();
        });
    }


    createNewMemberNegativeInvalidNote(){
        cy.fixture('membersN-Invalid.json').then((data) => {
            const dataInvalidNote = data.invalidNote;
            const nameMember = dataInvalidNote.nameMember;
            const emailMember = dataInvalidNote.emailMember;
            const noteMember = dataInvalidNote.noteMember;

            cy.get(this.memberNameInput).clear().type(nameMember);

            cy.get(this.memberEmailInput).clear().type(emailMember);

            cy.get(this.memberNoteInput).clear().type(noteMember);

            cy.get(this.saveMemberButton).click();
        });
    }

    createRecommendationValid(){
        cy.fixture('urlRecommendationsValid.json').then((data) => {
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            const URL = data[randomIndex].URL;

            //Crear la recomendacion
            this.createRecommendation(URL);
            cy.wait(10000);
            //Confirmar añadir la recomendación
            cy.get(this.spanElement)
                .filter((index, element) => {
                    const text = element.textContent.trim();
                    return text === 'Add' || text === 'Next';
                })
                .should('be.visible')
                .click({ waitForAnimations: true });
        });
    }


    createRecommendationValidMockaroo(){
        fetchMockarooData('recommendationLink.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            const URL = data[randomIndex].url;

            //Crear la recomendacion
            this.createRecommendation(URL);
            cy.wait(10000);
            //Confirmar añadir la recomendación
            cy.get(this.spanElement)
                .filter((index, element) => {
                    const text = element.textContent.trim();
                    return text === 'Add' || text === 'Next';
                })
                .should('be.visible')
                .click({ waitForAnimations: true });
        });
    }

    createMemberAndRecreateIt(){
        cy.fixture('members-E94.json').then((data) => {
            const randomIndex = Math.floor(Math.random() * (data.length - 1));
            const nameMember = data[randomIndex].nameMember;
            const emailMember = data[randomIndex].email;
            //Crear member
            cy.wait(1000)
            this.createNewMember(nameMember, emailMember);
            //Recrear member
            cy.wait(1000);
            this.createNewMemberStay(nameMember, emailMember);
        });
    }

    createMemberAndRecreateItFaker(nameMember,emailMember){
        //Crear member
        cy.wait(1000)
        this.createNewMember(nameMember, emailMember);
        //Recrear member
        cy.wait(1000);
        this.createNewMemberStay(nameMember, emailMember);
    }

    createMemberAndRecreateItMockaroo(){
        fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length - 1));
            const nameMember = data[randomIndex].nameMember;
            const emailMember = data[randomIndex].emailMember;
            //Crear member
            cy.wait(1000)
            this.createNewMember(nameMember, emailMember);
            //Recrear member
            cy.wait(1000);
            this.createNewMemberStay(nameMember, emailMember);
        });
    }


    createRecommendationValidFaker(URL){
        //Crear la recomendacion
        this.createRecommendation(URL);
        cy.wait(10000);
        //Confirmar añadir la recomendación
        cy.get(this.spanElement).filter((index, element) => element.textContent.trim() === 'Add').should('be.visible').click({force:true,waitForAnimations: true})
    }

    createRecommendationInvalidFaker(URL){
        //Crear la recomendacion
        this.createRecommendation(URL);
        cy.wait(2000);
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

}

export default new When();