import React, { Fragment, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import CodeHome from "./pages/CodeHome";
import CodePost from "./pages/CodePost";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "./Error";

export const PostContext = React.createContext();

const Code = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(10);

  const getCode = async (limit, filter) => {
    const { data } = await axios.get(
      `http://192.168.0.149:2304/code_data?limit=${limit}`
    );
    return data;
  };

  const { isLoading, status, error, data } = useQuery("code", () =>
    getCode(limit, filter)
  );

  return (
    <PostContext.Provider
      value={{ isLoading, status, error, data, filter, limit }}
    >
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route path={`${path}/error`} component={Error} />
        <Route exact path={`${path}/:code_id`} component={CodePost} />
        <Route path={`${path}/`} component={CodeHome} />
      </Switch>
    </PostContext.Provider>
  );
};

export default Code;
