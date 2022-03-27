import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./shared/pages/Home";
import Blog from "./blog";
import Apps from "./apps";
import Code from "./code";
import Error from "./shared/pages/Error";
import Helmet from "react-helmet";

function App() {
  const [isNavOpen, setIsNavOpen] = useState("closed");
  return (
    <Router>
      <Helmet>
        <title>Stephen Sanwo - Software and AI Developer</title>
        <meta
          name="description"
          content="I am a full-stack software, and artificial intelligence solutions developer, skilled in architecting data-driven solutions in complex data-oriented environments"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence, AI, Machine Learning, ML, Software, Full Stack, Developer, Python, React, JavaScript, MongoDB, AWS, Docker, React Native, HTML, CSS"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charset="UTF-8"></meta>
      </Helmet>
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
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
