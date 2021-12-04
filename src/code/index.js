import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import CodeHome from "./pages/CodeHome";
import CodePost from "./pages/CodePost";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "./Error";
import URL from "../config";

export const PostContext = React.createContext();

const Code = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  const [filter, setFilter] = useState("All Code Snippets");
  const [limit, setLimit] = useState(10);

  const getCode = async (limit, filter) => {
    const { data } = await axios.get(
      `${URL}/api/v1/blog/code_data?filter=${filter}&limit=${limit}`
    );
    return data;
  };

  const { isLoading, status, error, data, isFetching } = useQuery(
    ["code", limit, filter],
    () => getCode(limit, filter),
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
        <Route exact path={`${path}/:code_id`} component={CodePost} />
        <Route path={`${path}/`} component={CodeHome} />
      </Switch>
    </PostContext.Provider>
  );
};

export default Code;
