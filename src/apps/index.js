import React, { Fragment, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import AppHome from "./pages/AppHome";
import CodeSnipets from "./pages/CodeSnipets";

const Apps = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <Fragment>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route path={`${path}/`} component={AppHome} />
        <Route path={`${path}/code/:id`} component={CodeSnipets} />
      </Switch>
    </Fragment>
  );
};

export default Apps;
