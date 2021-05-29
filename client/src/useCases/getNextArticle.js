import article1 from "../DB/article-1.json";
import article2 from "../DB/article-2.json";
import article3 from "../DB/article-3.json";
import article4 from "../DB/article-4.json";
import article5 from "../DB/article-5.json";

async function getNextArticle(articleId) {
  const dbResponse = [article1, article2, article3, article4, article5];
  const articleNumberPosition = Number(articleId.replace(/^\D+/g, "")) - 1;

  try {
    // eslint-disable-next-line
    const nextArticle = await dbResponse.filter((individualNew, i) => {
      if (articleNumberPosition + 1 === i) return individualNew;
      if (articleNumberPosition === dbResponse.length - 1) {
        if (0 === i) return individualNew;
      }
    });

    return nextArticle;
  } catch (error) {
    return { error: "Error loading articles" };
  }
}

export default getNextArticle;
