import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import AppsList from "./pages/AppsList";

const Apps = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/`} component={AppsList} />
      </Switch>
    </Fragment>
  );
};

export default Apps;
