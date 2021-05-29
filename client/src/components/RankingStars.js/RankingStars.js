import React from "react";
//Components
import postRanking from "../../useCases/postRanking";
//Helpers
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";
//Styles
import "./rankingStars.css";

function RankingStars({ articleId }) {
  useObserver(db);

  function voteArticle(e) {
    const { value } = e.target;
    postRanking(articleId, value).then((data) => {
      db._ranking = data;
    });
  }
  return (
    <div>
      <ul className="ratings">
        <li className="star" value="5" onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="4" onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="3" onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="2" onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="1" onClick={(e) => voteArticle(e)}></li>
      </ul>
    </div>
  );
}

export default RankingStars;
