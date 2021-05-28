import React, { useState, useEffect } from "react";
//Helpers
import { useHistory } from "react-router-dom";
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";

function Article() {
  useObserver(db);
  let history = useHistory();
  const [articleId, setArticleId] = useState(history.location.pathname.split("/")[2]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    console.log(articleId);
  }, [articleId]);

  return <div>Continue Reading</div>;
}

export default Article;
