import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./component/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
