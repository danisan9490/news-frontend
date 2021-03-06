import React, { useState, useEffect } from "react";
//Components
import RankingStars from "../RankingStars.js/RankingStars";
//UseCases
import getIndividualArticles from "../../useCases/getIndividualArticles";
import getPreviousArticle from "../../useCases/getPreviousArticle";
import getNextArticle from "../../useCases/getNextArticle";
//Helpers
import { Link, useHistory } from "react-router-dom";
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";

function Article() {
  useObserver(db);
  let history = useHistory();
  const [articleId, setArticleId] = useState(history.location.pathname.split("/")[2]);
  const [nextArticleId, setNextArticleId] = useState("");
  const [prevArticleId, setPrevArticleId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    db._articleReadingID = articleId;

    // check if we have next or prev
    if (db._nextArticle[0]?.id === articleId || db._nextArticle[0]?.id === articleId) {
      db.handlePreloadedArticles(articleId);
    } else {
      getIndividualArticles(articleId).then((data) => {
        if (data.error) {
          db._articleReadingError = data.error;
        } else {
          db._articleReadingError = undefined;
          db._articleReading = data;
        }
      });
    }

    // preload next and previous articles
    getNextArticle(articleId).then((data) => {
      if (data.error) {
        db._nextArticle = data.error;
      } else {
        db._nextArticleError = undefined;
        db._nextArticle = data;
        setNextArticleId(data[0].id);
      }
    });
    getPreviousArticle(articleId).then((data) => {
      if (data.error) {
        db._prevArticle = data.error;
      } else {
        db._prevArticleError = undefined;
        db._prevArticle = data;
        setPrevArticleId(data[0].id);
      }
    });
  }, [articleId]);

  return (
    <div>
      {db._articleReading.length === 0 && !db._articleReadingError ? (
        "loading"
      ) : db._articleReadingError ? (
        "error"
      ) : (
        <div className="px-4">
          <div>
            <div className="row">
              <div className="col-8">
                <h3>{db._articleReading[0].title}</h3>
              </div>
              <div className="col-4 text-end">
                {db._ranking[articleId] ? (
                  <div>
                    <h3>Rating: {db._ranking[articleId].averageStars}&#9733;</h3>
                  </div>
                ) : db._rankingError ? (
                  "Error"
                ) : (
                  <h3 className="text-secondary">No Ratings</h3>
                )}
              </div>
            </div>
            <hr />
            <div>
              {
                // eslint-disable-next-line
                db._articleReading[0].body.map((section, i) => {
                  const { type, model } = section;

                  if (type === "heading") {
                    return <h5 key={i}>{model.text}</h5>;
                  }
                  if (type === "paragraph") {
                    return <p key={i}>{model.text}</p>;
                  }
                  if (type === "image") {
                    return (
                      <div className="my-2" key={i}>
                        <img
                          className="img-fluid"
                          src={model.url}
                          alt={model.alt}
                          styles={{ with: [section.width], height: section.height }}
                        />
                      </div>
                    );
                  }
                  if (type === "list") {
                    if (model.type === "unordered") {
                      return (
                        <ul key={i}>
                          {model.items.map((element) => {
                            return <li key={element}>{element}</li>;
                          })}
                        </ul>
                      );
                    } else {
                      return (
                        <ol key={i}>
                          {model.items.map((element) => {
                            return <li key={element}>{element}</li>;
                          })}
                        </ol>
                      );
                    }
                  }
                })
              }
            </div>
          </div>
          <br />
          <div>
            <h5>Rate this article</h5>
            <RankingStars articleId={articleId} />
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <Link to={`/article/${prevArticleId}`} onClick={() => setArticleId(prevArticleId)}>
              <button className="btn btn-primary">Previous</button>
            </Link>
            <Link to={`/article/${nextArticleId}`} onClick={() => setArticleId(nextArticleId)}>
              <button className="btn btn-primary">Next</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
