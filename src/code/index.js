import React, { Fragment, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import CodeHome from "./pages/CodeHome";
import CodePost from "./pages/CodePost";
import { useQuery } from "react-query";
import axios from "axios";

const getPosts = async (limit, filter) => {
  const { data } = await axios.get(
    `http://192.168.0.149:2304/blog_data?limit=${limit}`
  );
  return data;
};

export const PostContext = React.createContext();

const Code = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(10);
  const { status, error, data } = useQuery("posts", getPosts(limit, filter));

  console.log(data);
  return (
    <PostContext.Provider
      post={(status, error, data)}
      limit={limit}
      filter={filter}
    >
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route exact path={`${path}/:code_id`} component={CodePost} />
        <Route path={`${path}/`} component={CodeHome} />
      </Switch>
    </PostContext.Provider>
  );
};

export default Code;
