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
        <div className="px-4">
          <div>
            <h3>{db._articleReading[0].title}</h3>
          </div>
          <hr />
          <div>
            {db._articleReading[0].body.map((section, i) => {
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
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
