import React, { useEffect, useContext } from "react";
import "./style.scss";
import { CodeSyntax } from "@carbon/pictograms-react";
import CodeList from "./CodeList";
import SideNavOptions from "./SideNavOptions";
import Footer from "../../../shared/components/Footer";
import { useLocation, Redirect } from "react-router-dom";
import { PostContext } from "../..";
import Loader from "../../../shared/components/Loader";

const CodeHome = () => {
  const { pathname } = useLocation();

  const data = useContext(PostContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (data.error) {
    return <Redirect to="/error" />;
  }

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <SideNavOptions />
      </div>
      <div className="blog-home-content-container">
        <div className="blog-home-content">
          <div className="blog-home-content-items">
            <div style={{ display: "flex", alignItems: "center" }}>
              <CodeSyntax fill="#986ee2" />
              <div>
                <h4
                  style={{
                    fontSize: "2rem",
                    color: "#986ee2",
                    fontWeight: 600,
                    marginLeft: "2rem",
                  }}
                >
                  Code
                </h4>
                <small
                  style={{
                    fontSize: "0.5rem",

                    fontWeight: 600,
                    marginLeft: "2rem",
                  }}
                >
                  {data.isFetching ? "..." : data.filter}
                </small>
              </div>
            </div>

            {data.isLoading ? (
              <div style={{ marginTop: "4rem" }}>
                <Loader height="250px" />
                <Loader height="250px" />
                <Loader height="250px" />
              </div>
            ) : (
              <CodeList />
            )}

            <Footer
              data_type={"code"}
              codeData={data}
              setCodeFilter={data.setFilter}
            />
          </div>
        </div>
        <div className="blog-home-options"></div>
      </div>
    </div>
  );
};

export default CodeHome;
