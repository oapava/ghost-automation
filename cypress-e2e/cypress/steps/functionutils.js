import { Post } from "../data/post.js";
import { dataPostPoolDatosApriori } from "../data/data_post_apriori.js";

export function getRandomPost(scenarioCategory) {
    const category = dataPostPoolDatosApriori[scenarioCategory];
    if (!category) {
        throw new Error("La categoría especificada no existe.");
    }
    const randomIndex = Math.floor(Math.random() * category.length);
    const postData = category[randomIndex];
    return new Post(postData.title, postData.contentText, postData.markdownText, postData.htmlText);
};

export async function getPseudoAleatorioPost(scenarioCategory){
    try {
        const response = await fetch(Cypress.env('urlMockarooPost'));
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (!data[scenarioCategory]) {
            throw new Error(`El escenario '${scenarioCategory}' no existe en la respuesta.`);
        }
        return data[scenarioCategory];
    } catch (error) {
        console.error("Error al obtener el escenario:", error.message);
        throw error;
    }
}

export function getPostDataMokaroo(){
    const url = Cypress.env('urlMockarooPost');

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    });
};

