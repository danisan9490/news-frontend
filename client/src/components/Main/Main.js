import { useEffect } from "react";

import getNewsTitles from "../../useCases/getNewsTitles";
//Observer
import db from "../../POJO/POJO";
import useObserver from "pojo-observer";

function Main() {
  useObserver(db);

  useEffect(() => {
    getNewsTitles("category").then((newsTitles) => (db._newsTitle = newsTitles));
  }, []);

  return <div>Hello from Main</div>;
}

export default Main;
