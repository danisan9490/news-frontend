import ContinueReading from "./components/ContinueReading/ContinueReading";
import Main from "./components/Main/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/continueReading" component={ContinueReading} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
