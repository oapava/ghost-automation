import { Post } from "../data/post.js";
import { dataPostPoolDatosApriori } from "../data/data_post_apriori.js";
import { faker } from '@faker-js/faker';

export function getRandomPost(scenarioCategory) {
    const category = dataPostPoolDatosApriori[scenarioCategory];
    if (!category) {
        throw new Error("La categoría especificada no existe.");
    }
    const randomIndex = Math.floor(Math.random() * category.length);
    const postData = category[randomIndex];
    return new Post(postData.title, postData.contentText, postData.htmlText);
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


function generarHtmlAleatorio() {
    return `
        <h1>${faker.lorem.words(5)}</h1>
        <ul>
            <li>${faker.lorem.sentence()}</li>
        </ul>
    `;
}

function generarBadHtmlAleatorio() {
    return `
        <h1>${faker.lorem.words(5)}</h1>
        <p>${faker.lorem.paragraph(1)}</h2>
        <ul> <p>
            <li>${faker.lorem.sentence()}
        </ul>
    `;
}

function generarTextoConCaracteresEspeciales(longitud) {
    const caracteresEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?/~`-=';
    let resultado = '';
    for (let i = 0; i < longitud; i++) {
        if (Math.random() < 0.2) {
            resultado += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
        } else {
            resultado += faker.random.alphaNumeric(1);
        }
    }
    return resultado;
}

export function getPostDataFaker(tipoEscenario) {
    const data = {
        escenariosPositivos: [
            {
                title: faker.lorem.sentence(),
                contentText: faker.lorem.paragraphs(1, '\n\n'),
                htmlText: generarHtmlAleatorio(),
            },
        ],
        escenarioDataErroneaPositivos: [
            {
                title: faker.lorem.sentence(),
                contentText: generarTextoConCaracteresEspeciales(100),
                htmlText: generarBadHtmlAleatorio(),
            },
        ],
        escenarioTitulo256: [
            {
                title: faker.random.alpha({ count: 256 }),
                contentText: faker.lorem.paragraphs(1, '\n\n'),
                htmlText: generarHtmlAleatorio(),
            },
        ],
        escenarioTituloVacio: [
            {
                title: '',
                contentText: faker.lorem.paragraphs(1, '\n\n'),
                htmlText: generarHtmlAleatorio(),
            },
        ],
        escenarioTitulo255: [
            {
                title: faker.random.alpha({ count: 255 }),
                contentText: faker.lorem.paragraphs(1, '\n\n'),
                htmlText: generarHtmlAleatorio(),
            },
        ],
    };

    return data[tipoEscenario][0] || [];
};

