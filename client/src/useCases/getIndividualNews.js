import article1 from "../DB/article-1.json";
import article2 from "../DB/article-2.json";
import article3 from "../DB/article-3.json";
import article4 from "../DB/article-4.json";
import article5 from "../DB/article-5.json";

async function getIndividualArticles(articleId) {
  const dbResponse = [article1, article2, article3, article4, article5];
  try {
    console.log(articleId);
    const article = await dbResponse.filter((individualNew) => individualNew.id === articleId);
    return article;
  } catch (error) {
    return { error: "Error loading articles" };
  }
}

export default getIndividualArticles;
