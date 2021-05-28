import Article from "./components/Article/Article";
import Main from "./components/Main/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-light d-flex flex-fill flex-column justify-content-between ">
        <div className="px-3 py-2 shadow bg-primary d-flex dlex-row">
          <div className="formContainer">
            <Link to="/" className="m-1">
              <button type="button" className="btn btn-primary">
                <i className="fas fa-home"></i> Main
              </button>
            </Link>
          </div>
          <div className="formContainer">
            <Link to="/article" className="m-1">
              <button type="button" className="btn btn-primary">
                <i className="fas fa-book-reader"></i> Continue Reading
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-fill my-3">
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/article/:id" component={Article} />
          </Switch>
        </div>
        <footer class="p-5 bg-dark text-white">Footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
