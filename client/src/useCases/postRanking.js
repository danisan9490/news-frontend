let rankingDb = {};

async function postRanking(articleId) {
  try {
    rankingDb[articleId] > 0 ? (rankingDb[articleId] = rankingDb[articleId] + 1) : (rankingDb[articleId] = 1);

    return rankingDb;
  } catch (error) {
    return { error: "Error loading articles" };
  }
}
export default postRanking;
