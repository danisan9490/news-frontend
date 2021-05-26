import article1 from "../DB/article-1.json";
import article2 from "../DB/article-2.json";
import article3 from "../DB/article-3.json";
import article4 from "../DB/article-4.json";
import article5 from "../DB/article-5.json";

async function getNewsTitles(category) {
  const dbResponse = [article1, article2, article3, article4, article5];
  const newsTitles = await dbResponse.map((individualNew) => {
    return individualNew.title;
  });
  return newsTitles;
}

export default getNewsTitles;
