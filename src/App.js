import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Home from "./component/pages/Home";
import Preview from "./component/pages/Preview";

function App() {
  const [previewData, setPreviewData] = useState({})
  return (
    <Router>
      <Switch>
        <div className="appContainer">
          <Container className="formWrapper">
            <div className="appTitle">
              <h1 className="pageTitle">Course Outline</h1>
              <span className="subTitle">EMEA College of Arts and Science</span>
            </div>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  previewData={previewData}
                  setPreviewData={setPreviewData}
                />
              )}
            />
            <Route
              exact
              path="/home"
              component={() => (
                <Home
                  previewData={previewData}
                  setPreviewData={setPreviewData}
                />
              )}
            />
            <Route
              exact
              path="/preview"
              component={() => (
                <Preview
                  previewData={previewData}
                />
              )}
            />
          </Container>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
