import ContinueReading from "./components/ContinueReading/ContinueReading";
import Main from "./components/Main/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed-top shadow bg-primary">
        <div className="formContainer px-4">
          <Link to="/" className="my-2">
            <button type="button" className="btn btn-primary">
              <i className="fas fa-arrow-left"></i> Back to main
            </button>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/continueReading" component={ContinueReading} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
