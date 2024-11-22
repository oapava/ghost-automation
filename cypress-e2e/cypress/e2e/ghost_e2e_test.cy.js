import Given from '../steps/givenSteps_pablo';
import When from '../steps/whenSteps_pablo';
import Then from '../steps/thenSteps_pablo';

describe('Crear un post', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });
    // it('Escenario 16: Crear un tag y asignarlo a un post', () => {
    //     cy.fixture('tagNames-E16.json').then((data) =>{
    //         cy.wrap(data).each((entry)=>{
    //             cy.log(`Processing entry: ${JSON.stringify(entry)}`);
    //             cy.log(entry.tagname);
    //             cy.log(entry.Post)
    //             // GIVEN: Visitar Tags
    //             Given.givenNavigateToTagsPage();
    //
    //             // WHEN: Crear un tag y asignarlo a post
    //             When.createTagAndAsignIt(entry.tagname,entry.Post);
    //
    //             // THEN: Validar la creación del post con el tag asignado
    //             Then.validatePostWithTag(entry.tagname);
    //             }
    //         )
    //         }
    //     )
    // });

    it('Escenario 17: Crear un tag y ponerlo en una page', () => {
        cy.fixture('tagNames-E17.json').then((data) =>{
                cy.wrap(data).each((entry)=>{
                        cy.log(entry.tagname);
                        cy.log(entry.Pages)
                        // GIVEN: Visitar Tags
                        Given.givenNavigateToTagsPage();

                        // WHEN: Crear y asignar tag a una pagina
                        When.createTagAndAsignItToPage(entry.tagname, entry.Pages);

                        // THEN: Validar si la pagina contiene el tag
                        Then.validatePageWithTag(entry.tagname);
                    }
                )
            }
        )
    });

    // it('Escenario 18: Crear member', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();
    //
    //     When.createNewMember();
    //
    //     Then.validateNewMemberExist();
    // });
    //
    // it('Escenario 19: Crear member y eliminarlo', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateTomembers();
    //
    //     When.createMemberAndDeletIt();
    //
    //     Then.validateMemberWasDeleted();
    // });
    //
    // it('Escenario 20: Cambiar el título del sitio', () => {
    //     // GIVEN: Visitar Settings
    //     Given.givenNavigateToSettings();
    //
    //     When.updateSiteTitlte();
    //
    //     Then.validateTitleSiteWasEdited();
    // });
 });

