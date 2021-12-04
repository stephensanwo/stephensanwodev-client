import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "./Error";
import URL from "../config";

export const PostContext = React.createContext();

const Blog = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  const [filter, setFilter] = useState("All Categories");
  const [limit, setLimit] = useState(10);

  const getPosts = async (limit, filter) => {
    const data = await axios.get(
      `${URL}/api/v1/blog/blog_data?category=${filter}&limit=${limit}`
    );
    return data;
  };

  const { isLoading, status, error, data, isFetching } = useQuery(
    ["posts", limit, filter],
    () => getPosts(limit, filter),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return (
    <PostContext.Provider
      value={{
        isLoading,
        status,
        error,
        data,
        limit,
        setFilter,
        setLimit,
        isFetching,
        filter,
      }}
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
