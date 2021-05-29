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

  function voteArticle(e) {
    const { name, value } = e.target;

    postRanking(name, value).then((data) => (db._ranking = data));
  }
  return (
    <div>
      <ul className="ratings">
        <li className="star" value="5" name={db._articleReadingID} onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="4" name={db._articleReadingID} onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="3" name={db._articleReadingID} onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="2" name={db._articleReadingID} onClick={(e) => voteArticle(e)}></li>
        <li className="star" value="1" name={db._articleReadingID} onClick={(e) => voteArticle(e)}></li>
      </ul>
    </div>
  );
}

export default RankingStars;
