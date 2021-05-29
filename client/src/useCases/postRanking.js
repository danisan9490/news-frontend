let rankingDb = {};

async function postRanking(name, value) {
  try {
    // post stars
    if (rankingDb[name] !== undefined) {
      rankingDb[name].totalStars = rankingDb[name].totalStars + Number(value);
      rankingDb[name].numberOfVotes = rankingDb[name].numberOfVotes + 1;
      //get 1 decimal
      rankingDb[name].averageStars = Number(
        (rankingDb[name].totalStars / rankingDb[name].numberOfVotes).toFixed(1)
      );
    } else {
      rankingDb[name] = {
        totalStars: Number(value),
        numberOfVotes: 1,
        averageStars: Number(value),
      };
    }

    //return new ranking
    return rankingDb;
  } catch (error) {
    return { error: "Error loading articles" };
  }
}
export default postRanking;
