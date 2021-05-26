import { useEffect } from "react";

import getNewsTitles from "../../useCases/getNewsTitles";
//Observer
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";

function Main() {
  useObserver(db);

  useEffect(() => {
    getNewsTitles("category").then((data) => {
      if (data.error) {
        db._newsTitleError = data.error;
      } else {
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
        <div>
          {db._newsTitle.map((title, i) => {
            console.log(title);
            return (
              <div key={i}>
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
