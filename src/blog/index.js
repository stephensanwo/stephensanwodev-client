import React, { Fragment, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "./Error";

export const PostContext = React.createContext();

const Blog = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(10);

  const getPosts = async (limit, filter) => {
    const data = await axios.get(
      `http://192.168.0.149:2304/api/v1/blog/blog_data?limit=${limit}`
    );
    return data;
  };

  const { isLoading, status, error, data } = useQuery("posts", () =>
    getPosts(limit, filter)
  );

  return (
    <PostContext.Provider
      value={{ isLoading, status, error, data, filter, limit }}
    >
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route path={`${path}/error`} component={Error} />
        <Route exact path={`${path}/:post_id`} component={BlogPost} />
        <Route path={`${path}/`} component={BlogHome} />
      </Switch>
    </PostContext.Provider>
  );
};

export default Blog;
