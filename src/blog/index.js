import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";

const Blog = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route exact path={`${path}/:post_id`} component={BlogPost} />
        <Route path={`${path}/`} component={BlogHome} />
      </Switch>
    </Fragment>
  );
};

export default Blog;
