import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

const Blog = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/blog-post`} component={BlogPost} />
        <Route path={`${path}/`} component={BlogList} />
      </Switch>
    </Fragment>
  );
};

export default Blog;
