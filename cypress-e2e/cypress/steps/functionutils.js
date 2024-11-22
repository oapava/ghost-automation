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
        const response = await fetch(Cypress.env('urlMockrooPost'));
        // Validar que la respuesta sea exitosa
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        // Parsear la respuesta como JSON
        const data = await response.json();

        // Validar si el escenario existe en los datos retornados
        if (!data[scenarioCategory]) {
            throw new Error(`El escenario '${scenarioCategory}' no existe en la respuesta.`);
        }
        return data[scenarioCategory];
    } catch (error) {
        console.error("Error al obtener el escenario:", error.message);
        throw error; // Relanzar el error para manejarlo fuera
    }

}