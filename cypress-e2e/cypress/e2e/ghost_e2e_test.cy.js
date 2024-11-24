import Given from '../steps/givenSteps_pablo';
import When from '../steps/whenSteps_pablo';
import Then from '../steps/thenSteps_pablo';
import { fetchMockarooData  } from "../support/mockaroo";
import { faker } from '@faker-js/faker';

describe('Crear un post', () => {
    beforeEach(() => {

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });
    it('Escenario 91: Crear un tag y asignarlo a un post', () => {
        cy.fixture('tagNames-E91.json').then((data) =>{
            cy.wrap(data).each((entry)=>{
                // GIVEN: Visitar Tags
                Given.givenNavigateToTagsPage();

                // WHEN: Crear un tag y asignarlo a post
                When.createTagAndAsignIt(entry.tagname,entry.Post);

                // THEN: Validar la creación del post con el tag asignado
                Then.validatePostWithTag(entry.tagname);
                }
            )
            }
        )
    });

    it('Escenario 92: Crear un tag y ponerlo en una page', () => {
        cy.fixture('tagNames-E92.json').then((data) =>{
                cy.wrap(data).each((entry)=>{
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

    it('Escenario 93: Crear member', () => {
        cy.fixture('members-E93.json').then((data) =>{
                cy.wrap(data).each((entry)=>{
                        // GIVEN: Visitar members
                        Given.givenNavigateTomembers();

                        When.createNewMember(entry.nameMember, entry.email);

                        Then.validateNewMemberExist(entry.nameMember);
                    }
                )
            }
        )
    });

    it('Escenario 94: Crear member y eliminarlo', () => {
        cy.fixture('members-E94.json').then((data) =>{
                cy.wrap(data).each((entry)=>{
                    // GIVEN: Visitar members
                    Given.givenNavigateTomembers();

                    When.createMemberAndDeletIt(entry.nameMember, entry.email);

                    Then.validateMemberWasDeleted();
                    }
                )
            }
        )
    });

    it('Escenario 95: Cambiar el título del sitio', () => {
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();
        cy.fixture('siteTitle-E95.json').then((data) =>{
                cy.wrap(data).each((entry)=>{

                        When.updateSiteTitlte(entry.siteTitle);

                        Then.validateTitleSiteWasEdited(entry.siteTitle);
                    }
                )
            }
        )
    });

    it('Escenario 96: Crear member invalid', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();
        cy.fixture('membersN-Invalid.json').then((data) =>{
                cy.wrap(data.invalidEmail).each((entry)=>{

                        When.createNewMemberNegativeInvalid(entry.nameMember, entry.emailMember);

                        Then.validateNewMemberErrorInvalid();
                    }
                )
            }
        )
    });

    it('Escenario 97: Crear member y volver a crearlo', () => {
        cy.fixture('members-E94.json').then((data) =>{
                cy.wrap(data).each((entry)=>{
                    // GIVEN: Visitar members
                    Given.givenNavigateTomembers();

                    When.createMemberAndRecreateIt(entry.nameMember, entry.email);

                    Then.validateNewMemberErrorDuplicate();
                    }
                )
            }
        )
    });

    it('Escenario 98: Crear member note invalid', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();
        cy.fixture('membersN-Invalid.json').then((data) =>{
            When.createNewMemberNegativeInvalid(data.invalidNote.nameMember, data.invalidNote.emailMember, data.invalidNote.noteMember);
            Then.validateNewMemberErrorInvalidNote();
            })
    });

    it('Escenario 99: Crear recomendación en los settings de la pagina', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        cy.fixture('urlRecommendationsValid.json').then((data) =>{
            cy.wrap(data).each((entry)=> {
                //Crear la recomendación
                When.createRecommendationValid(entry.URL);
                Then.validateNewRecommendationValid();
            });
        });
    });

    it('Escenario 100: Crear recomendación en los settings de la pagina', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        cy.fixture('urlRecommendatiosInvalid.json').then((data) =>{
            cy.wrap(data).each((entry)=> {
                //Crear la recomendación
                When.createRecommendation(entry.invalidURL);
                Then.validateNewRecommendationInvalid();
            });
        });
    });

    it('Escenario 101: Crear un tag y asignarlo a un post', () => {
        fetchMockarooData('tagPostValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) => {
            cy.wrap(data).each((entry)=>{
                    // GIVEN: Visitar Tags
                    Given.givenNavigateToTagsPage();

                    // WHEN: Crear un tag y asignarlo a post
                    When.createTagAndAsignIt(entry.tagname,entry.nameTitle);

                    // THEN: Validar la creación del post con el tag asignado
                    Then.validatePostWithTag(entry.tagname);
                }
            )
        });
    });

    it('Escenario 102: Crear un tag y ponerlo en una page', () => {
        fetchMockarooData('tagPostValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                cy.wrap(data).each((entry)=>{
                        // GIVEN: Visitar Tags
                        Given.givenNavigateToTagsPage();

                        // WHEN: Crear y asignar tag a una pagina
                        When.createTagAndAsignItToPage(entry.tagname, entry.nameTitle);

                        // THEN: Validar si la pagina contiene el tag
                        Then.validatePageWithTag(entry.tagname);
                    }
                )
            }
        )
    });

    it('Escenario 103: Crear member', () => {
        fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                cy.wrap(data).each((entry)=>{
                        // GIVEN: Visitar members
                        Given.givenNavigateTomembers();

                        When.createNewMember(entry.nameMember, entry.emailMember);

                        Then.validateNewMemberExist(entry.nameMember);
                    }
                )
            }
        )
    });

    it('Escenario 104: Crear member y eliminarlo', () => {
        fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                cy.wrap(data).each((entry)=>{
                    // GIVEN: Visitar members
                    Given.givenNavigateTomembers();

                    When.createMemberAndDeletIt(entry.nameMember, entry.emailMember);

                    Then.validateMemberWasDeleted();
                    }
                )
            }
        )
    });

    it('Escenario 105: Cambiar el título del sitio', () => {
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();
        fetchMockarooData('pageTitle.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                cy.wrap(data).each((entry)=>{

                        When.updateSiteTitlte(entry.title);

                        Then.validateTitleSiteWasEdited(entry.title);
                    }
                )
            }
        )
    });

    it('Escenario 106: Crear member invalid', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();
        fetchMockarooData('membersInvalid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                cy.wrap(data).each((entry)=>{

                        When.createNewMemberNegativeInvalid(entry.nameMember, entry.emailInvalid);

                        Then.validateNewMemberErrorInvalid();
                    }
                )
            }
        )
    });

    it('Escenario 107: Crear member y volver a crearlo', () => {
        fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                cy.wrap(data).each((entry)=>{
                    // GIVEN: Visitar members
                    Given.givenNavigateTomembers();

                    When.createMemberAndRecreateIt(entry.nameMember, entry.emailMember);

                    Then.validateNewMemberErrorDuplicate();
                    }
                )
            }
        )
    });

    it('Escenario 108: Crear tag con slug superior a 191 caracteres', () => {
        const randonTagName = faker.lorem.slug(2);
        const randomInvalidSlug = faker.string.alphanumeric(192);

        //GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear y asignar tag a una pagina
        When.createNewTag(randonTagName, randomInvalidSlug);

        Then.validateNewTagErrorInvalidSlug();

    });

    it('Escenario 109: Crear recomendación en los settings de la pagina', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        fetchMockarooData('recommendationLink.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            cy.wrap(data).each((entry)=> {
                //Crear la recomendación
                When.createRecommendationValid(entry.url);
                Then.validateNewRecommendationValid();
            });
        });
    });

    it('Escenario 110: Crear recomendación con link invalido en los settings de la pagina', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        fetchMockarooData('invalidLinkRecommendation.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            cy.wrap(data).each((entry)=> {
                //Crear la recomendación
                When.createRecommendation(entry.invalidURL);
                Then.validateNewRecommendationInvalid();
            });
        });
    });

    it('Escenario 111: Crear un tag y asignarlo a un post', () => {
        const randomTagName = faker.lorem.slug(2);
        const randomTitlePost = faker.lorem.words(5);

        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear un tag y asignarlo a post
        When.createTagAndAsignIt(randomTagName,randomTitlePost);

        // THEN: Validar la creación del post con el tag asignado
        Then.validatePostWithTag(randomTagName);
    });

    it('Escenario 112: Crear un tag y ponerlo en una page', () => {
        const randomTagName = faker.lorem.slug(2);
        const randomTitlePage = faker.lorem.words(5);
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear y asignar tag a una pagina
        When.createTagAndAsignItToPage(randomTagName, randomTitlePage);

        // THEN: Validar si la pagina contiene el tag
        Then.validatePageWithTag(randomTagName);
    });

    it('Escenario 113: Crear member', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();

        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createNewMember(randomNameMember,randomEmailMember);

        Then.validateNewMemberExist(randomNameMember);

    });

    it('Escenario 114: Crear member y eliminarlo', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndDeletIt(randomNameMember, randomEmailMember);

        Then.validateMemberWasDeleted();
    });

    it('Escenario 115: Cambiar el título del sitio', () => {
        const randomUpdatedTitle = faker.lorem.words(2);
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();

        When.updateSiteTitlte(randomUpdatedTitle);

        Then.validateTitleSiteWasEdited(randomUpdatedTitle);
    });

    it('Escenario 116: Crear member invalid', () => {
        const randomNameMember = faker.lorem.words(2);
        const invalidEmailMember = faker.lorem.words(2);

        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalid(randomNameMember, invalidEmailMember);

        Then.validateNewMemberErrorInvalid();
    });

    it('Escenario 117: Crear member y volver a crearlo', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndRecreateIt(randomNameMember, randomEmailMember);

        Then.validateNewMemberErrorDuplicate();
    });

    it('Escenario 118: Crear member note invalid', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();
        const randomInvalidNote = faker.string.alphanumeric(501);
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalid(randomNameMember, randomEmailMember, randomInvalidNote);

        Then.validateNewMemberErrorInvalidNote();

    });

    it('Escenario 119: Crear recomendación en los settings de la pagina', () => {
        const randomURL = faker.internet.url();

        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        //Crear la recomendación
        When.createRecommendationValid(randomURL);

        Then.validateNewRecommendationValid();

    });

    it('Escenario 120: Crear recomendación con link invalido en los settings de la pagina', () => {
        const invalidURL= faker.lorem.words(5);

        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();

        //Crear la recomendación
        When.createRecommendation(invalidURL);

        //Validar el mensaje de error
        Then.validateNewRecommendationInvalid();
    });
});

