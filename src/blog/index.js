import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import BlogHome from "./pages/BlogHome";
import Post from "./pages/Post";

const Blog = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path={`${path}/post`} component={Post} />
        <Route path={`${path}/`} component={BlogHome} />
      </Switch>
    </Fragment>
  );
};

export default Blog;
