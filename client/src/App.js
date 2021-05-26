import ContinueReading from "./components/ContinueReading/ContinueReading";
import Main from "./components/Main/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="px-3 py-2 fixed-top shadow bg-primary d-flex dlex-row">
        <div className="formContainer">
          <Link to="/" className="my-2">
            <button type="button" className="btn btn-primary">
              <i class="fas fa-home"></i> Main
            </button>
          </Link>
        </div>
        <div className="formContainer">
          <Link to="/continueReading" className="my-2">
            <button type="button" className="btn btn-primary">
              <i class="fas fa-book-reader"></i> Continue Reading
            </button>
          </Link>
        </div>
      </div>

      <div className="my-5 pt-4">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/continueReading" component={ContinueReading} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
