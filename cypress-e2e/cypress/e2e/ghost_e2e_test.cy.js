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
    // it('Escenario 91: Crear un tag y asignarlo a un post', () => {
    //     cy.fixture('tagNames-E91.json').then((data) =>{
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
    // it('Escenario 92: Crear un tag y ponerlo en una page', () => {
    //     cy.fixture('tagNames-E92.json').then((data) =>{
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
    // it('Escenario 93: Crear member', () => {
    //     cy.fixture('members-E93.json').then((data) =>{
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
    // it('Escenario 94: Crear member y eliminarlo', () => {
    //     cy.fixture('members-E94.json').then((data) =>{
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

    // it('Escenario 95: Cambiar el título del sitio', () => {
    //     // GIVEN: Visitar Settings
    //     Given.givenNavigateToSettings();
    //     cy.fixture('siteTitle-E95.json').then((data) =>{
    //             cy.wrap(data).each((entry)=>{
    //
    //                     When.updateSiteTitlte(entry.siteTitle);
    //
    //                     Then.validateTitleSiteWasEdited(entry.siteTitle);
    //                 }
    //             )
    //         }
    //     )
    // });
    //
    // it('Escenario 96: Crear member invalid', () => {
    //     // GIVEN: Visitar members
    //     Given.givenNavigateToMembersNegative();
    //     cy.fixture('membersN-Invalid.json').then((data) =>{
    //             cy.wrap(data.invalidEmail).each((entry)=>{
    //
    //                     When.createNewMemberNegativeInvalid(entry.nameMember, entry.emailMember);
    //
    //                     Then.validateNewMemberErrorInvalid();
    //                 }
    //             )
    //         }
    //     )
    // });

    // it('Escenario 97: Crear member y volver a crearlo', () => {
    //     cy.fixture('members-E94.json').then((data) =>{
    //             cy.wrap(data).each((entry)=>{
    //                 // GIVEN: Visitar members
    //                 Given.givenNavigateTomembers();
    //
    //                 When.createMemberAndRecreateIt(entry.nameMember, entry.email);
    //
    //                 Then.validateNewMemberErrorDuplicate();
    //                 }
    //             )
    //         }
    //     )
    // });

    it('Escenario 98: Crear member note invalid', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();
        cy.fixture('membersN-Invalid.json').then((data) =>{
            When.createNewMemberNegativeInvalid(data.invalidNote.nameMember, data.invalidNote.emailMember, data.invalidNote.noteMember);
            //Then.validateNewMemberErrorInvalidNote();
            })
    });
});

