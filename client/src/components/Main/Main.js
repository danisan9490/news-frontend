import { useEffect } from "react";

import getNewsTitles from "../../useCases/getNewsTitles";
//Observer
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";

//styles
import "./main.css";

function Main() {
  useObserver(db);

  useEffect(() => {
    getNewsTitles("category").then((data) => {
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
          {db._newsTitle.map((title, i) => {
            return (
              <div key={i} className={`m-2 ${i === 0 ? "newHeaderCSS" : "newContainerCSS"}`}>
                <div className="card">
                  <div className="imageCSS">Image</div>
                  <div className="p-2">
                    <h5>{title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
