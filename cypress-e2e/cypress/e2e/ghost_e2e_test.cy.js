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
    //
    // it('Escenario 17: Crear un tag y ponerlo en una page', () => {
    //     cy.fixture('tagNames-E17.json').then((data) =>{
    //             cy.wrap(data).each((entry)=>{
    //                     // GIVEN: Visitar Tags
    //                     Given.givenNavigateToTagsPage();
    //
    //                     // WHEN: Crear y asignar tag a una pagina
    //                     When.createTagAndAsignItToPage(entry.tagname, entry.Pages);
    //
    //                     // THEN: Validar si la pagina contiene el tag
    //                     Then.validatePageWithTag(entry.tagname);
    //                 }
    //             )
    //         }
    //     )
    // });
    //
    // it('Escenario 18: Crear member', () => {
    //     cy.fixture('members-E18.json').then((data) =>{
    //             cy.wrap(data).each((entry)=>{
    //                     // GIVEN: Visitar members
    //                     Given.givenNavigateTomembers();
    //
    //                     When.createNewMember(entry.nameMember, entry.email);
    //
    //                     Then.validateNewMemberExist(entry.nameMember);
    //                 }
    //             )
    //         }
    //     )
    // });
    //
    // it('Escenario 19: Crear member y eliminarlo', () => {
    //     cy.fixture('members-E19.json').then((data) =>{
    //             cy.wrap(data).each((entry)=>{
    //                 // GIVEN: Visitar members
    //                 Given.givenNavigateTomembers();
    //
    //                 When.createMemberAndDeletIt(entry.nameMember, entry.email);
    //
    //                 Then.validateMemberWasDeleted();
    //                 }
    //             )
    //         }
    //     )
    // });

    it('Escenario 20: Cambiar el título del sitio', () => {
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();
        cy.fixture('siteTitle-E20.json').then((data) =>{
                cy.wrap(data).each((entry)=>{

                        When.updateSiteTitlte(entry.siteTitle);

                        Then.validateTitleSiteWasEdited(entry.siteTitle);
                    }
                )
            }
        )
    });
});

