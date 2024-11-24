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
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });
    it('Escenario 91: Crear un tag y asignarlo a un post', () => {
        cy.fixture('tagNames-E91.json').then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            // GIVEN: Visitar Tags
            Given.givenNavigateToTagsPage();

            // WHEN: Crear un tag y asignarlo a post
            When.createTagAndAsignIt(data[randomIndex].tagname,data[randomIndex].Post);

            // THEN: Validar la creación del post con el tag asignado
            Then.validatePostWithTag(data[randomIndex].tagname);

            }
        )
    });

    it('Escenario 92: Crear un tag y ponerlo en una page', () => {
        cy.fixture('tagNames-E92.json').then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            // GIVEN: Visitar Tags
            Given.givenNavigateToTagsPage();

            // WHEN: Crear y asignar tag a una pagina
            When.createTagAndAsignItToPage(data[randomIndex].tagname, data[randomIndex].Pages);

            // THEN: Validar si la pagina contiene el tag
            Then.validatePageWithTag(data[randomIndex].tagname);

            }
        )
    });

    it('Escenario 93: Crear member', () => {
        cy.fixture('members-E93.json').then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            // GIVEN: Visitar members
            Given.givenNavigateTomembers();

            When.createNewMember(data[randomIndex].nameMember, data[randomIndex].email);

            Then.validateNewMemberExist(data[randomIndex].nameMember);
            }
        )
    });

    it('Escenario 94: Crear member y eliminarlo', () => {
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndDeletIt();

        Then.validateMemberWasDeleted();
    });

    it('Escenario 95: Cambiar el título del sitio', () => {
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();
        cy.fixture('siteTitle-E95.json').then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));

            When.updateSiteTitlte(data[randomIndex].siteTitle);

            Then.validateTitleSiteWasEdited(data[randomIndex].siteTitle);

            }
        )
    });

    it('Escenario 96: Crear member invalid', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalid();

        Then.validateNewMemberErrorInvalid();
    });

    it('Escenario 97: Crear member y volver a crearlo', () => {
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndRecreateIt();

        Then.validateNewMemberErrorDuplicate();
    });

    it('Escenario 98: Crear member note invalid', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalidNote();

        Then.validateNewMemberErrorInvalidNote();
    });

    it('Escenario 99: Crear recomendación en los settings de la pagina', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        //Crear la recomendación
        When.createRecommendationValid();

        Then.validateNewRecommendationValid();
    });

    it('Escenario 100: Crear recomendación invalida en los settings de la pagina', () => {
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

    it('Escenario 101: Crear un tag y asignarlo a un post - Mockaroo', () => {
        fetchMockarooData('tagPostValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) => {
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            // GIVEN: Visitar Tags
            Given.givenNavigateToTagsPage();

            // WHEN: Crear un tag y asignarlo a post
            When.createTagAndAsignIt(data[randomIndex].tagname,data[randomIndex].nameTitle);

            // THEN: Validar la creación del post con el tag asignado
            Then.validatePostWithTag(data[randomIndex].tagname);
        });
    });

    it('Escenario 102: Crear un tag y ponerlo en una page - Mockaroo', () => {
        fetchMockarooData('tagPostValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
                const randomIndex = Math.floor(Math.random() * (data.length-1));
                // GIVEN: Visitar Tags
                Given.givenNavigateToTagsPage();

                // WHEN: Crear y asignar tag a una pagina
                When.createTagAndAsignItToPage(data[randomIndex].tagname, data[randomIndex].nameTitle);

                // THEN: Validar si la pagina contiene el tag
                Then.validatePageWithTag(data[randomIndex].tagname);
            }
        )
    });

    it('Escenario 103: Crear member - Mockaroo', () => {
        fetchMockarooData('memberValid.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));

            // GIVEN: Visitar members
            Given.givenNavigateTomembers();

            When.createNewMember(data[randomIndex].nameMember, data[randomIndex].emailMember);

            Then.validateNewMemberExist(data[randomIndex].nameMember);

            }
        )
    });

    it('Escenario 104: Crear member y eliminarlo - Mockaroo', () => {
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndDeletItMockaroo();

        Then.validateMemberWasDeleted();
    });

    it('Escenario 105: Cambiar el título del sitio - Mockaroo', () => {
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();
        fetchMockarooData('pageTitle.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));

            When.updateSiteTitlte(data[randomIndex].title);

            Then.validateTitleSiteWasEdited(data[randomIndex].title);
            }
        )
    });

    it('Escenario 106: Crear member invalid - Mockaroo', () => {
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalidMockaroo();

        Then.validateNewMemberErrorInvalid();
    });

    it('Escenario 107: Crear member y volver a crearlo - Mockaroo', () => {
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndRecreateItMockaroo();

        Then.validateNewMemberErrorDuplicate();
    });

    it('Escenario 108: Crear tag con slug superior a 191 caracteres - Mockaroo', () => {
        const randonTagName = faker.lorem.slug(2);
        const randomInvalidSlug = faker.string.alphanumeric(192);

        //GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear y asignar tag a una pagina
        When.createNewTag(randonTagName, randomInvalidSlug);

        Then.validateNewTagErrorInvalidSlug();

    });

    it('Escenario 109: Crear recomendación en los settings de la pagina - Mockaroo', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();

        //Crear la recomendación
        When.createRecommendationValidMockaroo();

        Then.validateNewRecommendationValid();
    });

    it('Escenario 110: Crear recomendación con link invalido en los settings de la pagina - Mockaroo', () => {
        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        fetchMockarooData('invalidLinkRecommendation.json', Cypress.env('apiKeyMockarooPablo')).then((data) =>{
            const randomIndex = Math.floor(Math.random() * (data.length-1));
            //Crear la recomendación
            When.createRecommendation(data[randomIndex].invalidURL);

            Then.validateNewRecommendationInvalid();
        });
    });

    it('Escenario 111: Crear un tag y asignarlo a un post - Faker', () => {
        const randomTagName = faker.lorem.slug(2);
        const randomTitlePost = faker.lorem.words(5);

        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear un tag y asignarlo a post
        When.createTagAndAsignIt(randomTagName,randomTitlePost);

        // THEN: Validar la creación del post con el tag asignado
        Then.validatePostWithTag(randomTagName);
    });

    it('Escenario 112: Crear un tag y ponerlo en una page - Faker', () => {
        const randomTagName = faker.lorem.slug(2);
        const randomTitlePage = faker.lorem.words(5);
        // GIVEN: Visitar Tags
        Given.givenNavigateToTagsPage();

        // WHEN: Crear y asignar tag a una pagina
        When.createTagAndAsignItToPage(randomTagName, randomTitlePage);

        // THEN: Validar si la pagina contiene el tag
        Then.validatePageWithTag(randomTagName);
    });

    it('Escenario 113: Crear member - Faker', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();

        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createNewMember(randomNameMember,randomEmailMember);

        Then.validateNewMemberExist(randomNameMember);

    });

    it('Escenario 114: Crear member y eliminarlo - Faker', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndDeletItFaker(randomNameMember, randomEmailMember);

        Then.validateMemberWasDeleted();
    });

    it('Escenario 115: Cambiar el título del sitio - Faker', () => {
        const randomUpdatedTitle = faker.lorem.words(2);
        // GIVEN: Visitar Settings
        Given.givenNavigateToSettings();

        When.updateSiteTitlte(randomUpdatedTitle);

        Then.validateTitleSiteWasEdited(randomUpdatedTitle);
    });

    it('Escenario 116: Crear member invalid - Faker', () => {
        const randomNameMember = faker.lorem.words(2);
        const invalidEmailMember = faker.lorem.words(2);

        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalidFaker(randomNameMember, invalidEmailMember);

        Then.validateNewMemberErrorInvalid();
    });

    it('Escenario 117: Crear member y volver a crearlo - Faker', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();
        // GIVEN: Visitar members
        Given.givenNavigateTomembers();

        When.createMemberAndRecreateItFaker(randomNameMember, randomEmailMember);

        Then.validateNewMemberErrorDuplicate();
    });

    it('Escenario 118: Crear member note invalid - Faker', () => {
        const randomNameMember = faker.lorem.words(2);
        const randomEmailMember = faker.internet.email();
        const randomInvalidNote = faker.string.alphanumeric(501);
        // GIVEN: Visitar members
        Given.givenNavigateToMembersNegative();

        When.createNewMemberNegativeInvalidFaker(randomNameMember, randomEmailMember, randomInvalidNote);

        Then.validateNewMemberErrorInvalidNote();

    });

    it('Escenario 119: Crear recomendación en los settings de la pagina - Faker', () => {
        const randomURL = faker.internet.url();

        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();
        //Crear la recomendación
        When.createRecommendationValidFaker(randomURL);

        Then.validateNewRecommendationValid();

    });

    it('Escenario 120: Crear recomendación con link invalido en los settings de la pagina - Faker', () => {
        const invalidURL= faker.lorem.words(5);

        // GIVEN: Visitar los settings de la pagina
        Given.givenNavigateToSettings();

        //Crear la recomendación
        When.createRecommendationInvalidFaker(invalidURL);

        //Validar el mensaje de error
        Then.validateNewRecommendationInvalid();
    });

});

