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