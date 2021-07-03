import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import AppHome from "./pages/AppHome";

const Apps = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path={`${path}/`} component={AppHome} />
      </Switch>
    </Fragment>
  );
};

export default Apps;
