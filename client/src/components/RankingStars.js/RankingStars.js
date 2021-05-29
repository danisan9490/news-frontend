import { useState, useEffect } from "react";
//Components
import postRanking from "../../useCases/postRanking";
//Helpers
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";
//Styles
import "./rankingStars.css";

function RankingStars({ articleId }) {
  useObserver(db);
  const [successRankingUpdate, setSuccessRankingUpdate] = useState(false);

  useEffect(() => {
    setSuccessRankingUpdate(false);
  }, [articleId]);

  function voteArticle(e) {
    const { value } = e.target;
    postRanking(articleId, value).then((data) => {
      if (data.error) {
        db._rankingError = data.error;
      } else {
        db._rankingError = undefined;
        db._ranking = data;
        setSuccessRankingUpdate(true);
        setTimeout(() => {
          setSuccessRankingUpdate(false);
        }, 5000);
      }
    });
  }
  return (
    <div>
      {db._rankingError ? (
        "Error"
      ) : successRankingUpdate ? (
        <h5 className="mt-4">Thank you!</h5>
      ) : (
        <ul className="ratings">
          <li className="star" value="5" onClick={(e) => voteArticle(e)}>
            &#9733;
          </li>
          <li className="star" value="4" onClick={(e) => voteArticle(e)}>
            &#9733;
          </li>
          <li className="star" value="3" onClick={(e) => voteArticle(e)}>
            &#9733;
          </li>
          <li className="star" value="2" onClick={(e) => voteArticle(e)}>
            &#9733;
          </li>
          <li className="star" value="1" onClick={(e) => voteArticle(e)}>
            &#9733;
          </li>
        </ul>
      )}
    </div>
  );
}

export default RankingStars;
