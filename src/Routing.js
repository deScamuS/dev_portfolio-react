import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";




export default function Routing() {
  return (
    <div>
      <Router basename="portfolio">
        <div>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
            <Route
              path={process.env.PUBLIC_URL + "/projects"}
              component={Projects}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              component={Contact}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
