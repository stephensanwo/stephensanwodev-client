import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";

const Blog = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path={`${path}/post`} component={BlogPost} />
        <Route path={`${path}/`} component={BlogHome} />
      </Switch>
    </Fragment>
  );
};

export default Blog;
