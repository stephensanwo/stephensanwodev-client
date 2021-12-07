import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import CodeHome from "./pages/CodeHome";
import CodePost from "./pages/CodePost";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "./Error";
import URL from "../config";
import Helmet from "react-helmet";

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
      <Helmet>
        <title>Stephen Sanwo - Code</title>
        <meta
          name="description"
          content="Welcome to my Developer Code Share. I share Software and ML Code Snippets"
        />
        <meta
          name="keywords"
          content="API, Software Development, AI, Deep Learning, Mobile Development, Data Structures, Algorithms, Blockchain, Python, React, JavaScript, AWS"
        />
      </Helmet>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route path={`${path}/error`} component={Error} />
        <Route exact path={`${path}/:code_url`} component={CodePost} />
        <Route path={`${path}/`} component={CodeHome} />
      </Switch>
    </PostContext.Provider>
  );
};

export default Code;
