import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./component/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
      <div className="appContainer">
        <Route exact path="/" component={Home} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
