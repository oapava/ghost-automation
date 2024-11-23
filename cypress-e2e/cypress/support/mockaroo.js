export const fetchMockarooData = (file,apiKey) => {
    const baseUrl = Cypress.env('mockaroo') + file + "?key=" + apiKey;
    return cy.request({
        method: 'GET',
        url: baseUrl,
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    });
};