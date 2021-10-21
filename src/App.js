import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./shared/pages/Home";
import Blog from "./blog";
import Apps from "./apps";

function App() {
  const [isNavOpen, setIsNavOpen] = useState("closed");
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Home isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </Route>
        <Route path="/blog">
          <Blog isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </Route>
        <Route path="/apps">
          <Apps isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </Route>
        <Route render={(props) => <Apps {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
