import React, { useState, useEffect } from "react";
//UseCases
import getIndividualArticles from "../../useCases/getIndividualNews";
//Helpers
import { useHistory } from "react-router-dom";
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";

function Article() {
  useObserver(db);
  let history = useHistory();
  const [articleId, setArticleId] = useState(history.location.pathname.split("/")[2]);

  useEffect(() => {
    db._articleReadingID = articleId;
    getIndividualArticles(articleId).then((data) => {
      if (data.error) {
        db._articleReadingError = data.error;
      } else {
        db._articleReadingError = undefined;
        db._articleReading = data;
      }
    });
  }, [articleId]);

  // console.log(db._articleReading);

  return (
    <div>
      {db._articleReading.length === 0 && !db._articleReadingError ? (
        "loading"
      ) : db._articleReadingError ? (
        "error"
      ) : (
        <div className="px-3">
          <h3>{db._articleReading[0].title}</h3>
        </div>
      )}
    </div>
  );
}

export default Article;
