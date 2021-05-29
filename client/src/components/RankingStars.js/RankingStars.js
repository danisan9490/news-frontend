import React from "react";
//Components
import postRanking from "../../useCases/postRanking";
//Helpers
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";
//Styles
import "./rankingStars.css";

function RankingStars() {
  useObserver(db);

  function voteArticle(articleId) {
    postRanking(articleId).then((data) => (db._ranking = data));
  }
  return (
    <div>
      <button className="btn btn-success" onClick={() => voteArticle(db._articleReadingID)}>
        Vote
      </button>
    </div>
  );
}

export default RankingStars;
