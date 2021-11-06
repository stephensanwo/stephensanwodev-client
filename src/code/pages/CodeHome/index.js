import React, { useEffect } from "react";
import "./style.scss";
import { CodeSyntax } from "@carbon/pictograms-react";
import CodeList from "./CodeList";
import SideNavOptions from "./SideNavOptions";
import Footer from "../../../shared/components/Footer";
import { useLocation } from "react-router-dom";

const CodeHome = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
            </div>

            <CodeList />
            <Footer data_type={"code"} />
          </div>
        </div>
        <div className="blog-home-options"></div>
      </div>
    </div>
  );
};

export default CodeHome;
