import React, { Fragment, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import AppHome from "./pages/AppHome";
import Helmet from "react-helmet";

const Apps = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <Fragment>
      <Helmet>
        <title>Stephen Sanwo - Apps</title>
        <meta
          name="description"
          content="Welcome to my Developer Apps. Where I share my Open Software and ML Development Projects"
        />
        <meta
          name="keywords"
          content="API, Software Development, AI, Deep Learning, Mobile Development, Data Structures, Algorithms, Blockchain, Python, React, JavaScript, AWS"
        />
      </Helmet>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route path={`${path}/`} component={AppHome} />
      </Switch>
    </Fragment>
  );
};

export default Apps;
