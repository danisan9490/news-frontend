import { useEffect } from "react";
//UseCases
import getArticlesTitles from "../../useCases/getArticlesTitles";
//helpers
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";
import { Link } from "react-router-dom";
//styles
import "./main.css";

function Main() {
  useObserver(db);

  useEffect(() => {
    window.scrollTo(0, 0);
    getArticlesTitles("category").then((data) => {
      if (data.error) {
        db._newsTitleError = data.error;
      } else {
        db._newsTitleError = undefined;
        db._newsTitle = data;
      }
    });
  }, []);
  return (
    <div>
      {db._newsTitle.length === 0 && !db._newsTitleError ? (
        "loading"
      ) : db._newsTitleError ? (
        "error"
      ) : (
        <div className="containerCSS">
          {db._newsTitle.map((article, i) => {
            return (
              <div key={article.id} className={`m-2 ${i === 0 ? "newHeaderCSS" : "newContainerCSS"}`}>
                <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
                  <div className="card titleCSS">
                    <div className="imageCSS">Image</div>
                    <div className="p-2 row">
                      <div className="col-8">
                        <h5>{article.title}</h5>
                      </div>
                      <div className="col-4 text-end">
                        {db._ranking[article.id] ? (
                          <div>
                            <h5>Rating: {db._ranking[article.id].averageStars}&#9733;</h5>
                          </div>
                        ) : db._rankingError ? (
                          "Error"
                        ) : (
                          <h5 className="text-secondary">No Ratings</h5>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
