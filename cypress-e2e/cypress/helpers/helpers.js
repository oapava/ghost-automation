import { faker } from '@faker-js/faker';

export const getPostDataDynamicrandom = ()=> {
    const url = Cypress.env('poolDRPost') + '1';

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
        return response.body[0];
      });
}

export const getLinkDataDynamicrandom = ()=> {
    const url = Cypress.env('poolDRWord') + '1';

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
        return response.body[0];
      });
}

export const getContributorDataDynamicrandom = ()=> {
    const url = Cypress.env('poolDRContributor') + '1';

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
        return response.body[0];
      });
}

export const getOwnerDataDynamicrandom = ()=> {
    const url = Cypress.env('poolDROwner') + '1';

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
        return response.body[0];
      });
}

export const schemaFaker = ()=>{
    const content = {
        title: faker.lorem.sentences({ min: 1, max: 3 }),
        content: faker.lorem.paragraph({ min: 3, max: 7 }),
        contentBold: `**${faker.lorem.paragraph({ min: 3, max: 7 })}**`,
    }
    return content;
}

export const ownerSchemaFaker = ()=>{
    const owner = {
        "name": faker.lorem.sentences({ min: 1, max: 3 }),
        "email": faker.internet.email(),
        "location": faker.location.city(),
        "website": faker.image.url(),
        "facebook": faker.lorem.sentences(2),
        "twitter": faker.lorem.sentences(1)
      }
    return owner;
}

export const linkSchemaFaker = ()=>{
    const link = 
      {
        "label": faker.lorem.sentences({ min: 1, max: 3 }),
        "path": faker.lorem.sentences(1)
      }
    return link;
}

export const contributorSchemaFaker = ()=>{
    const contributor = 
    {
        "email": faker.internet.email(),
        "badEmail": faker.lorem.sentences(1)
    }
    return contributor;
}