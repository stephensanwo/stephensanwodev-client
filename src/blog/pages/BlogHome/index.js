import React, { useEffect, useContext, Fragment } from "react";
import "./style.scss";
import { Devops } from "@carbon/pictograms-react";
import FeaturedArticle from "./FeaturedArticle";
import ArticleList from "./ArticleList";
import Options from "./Options";
import SideNavOptions from "./SideNavOptions";
import Footer from "../../../shared/components/Footer";
import { useLocation, Redirect } from "react-router-dom";
import { PostContext } from "../..";
import Loader from "../../../shared/components/Loader";
import Helmet from "react-helmet";

const BlogHome = () => {
  const { pathname } = useLocation();
  const data = useContext(PostContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (data.error) {
    return <Redirect to="/error" />;
  }

  document.title = `Stephen Sanwo - Blog - ${data.filter}`;

  return (
    <div className="blog-home-container">
      <Helmet>
        <title>Stephen Sanwo - Blog</title>
        <meta
          name="description"
          content="Welcome to my Developer Blog. I write on Software and AI Development"
        />
        <meta
          name="keywords"
          content="API, Software Development, AI, Deep Learning, Mobile Development, Data Structures, Algorithms, Blockchain, Python, React, JavaScript, AWS"
        />
      </Helmet>
      <div className="blog-home-sidenav">
        <SideNavOptions />
      </div>
      <div className="blog-home-content-container">
        <div className="blog-home-content">
          <div className="blog-home-content-items">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Devops fill="#539bf5" />
              <div>
                <h4
                  style={{
                    fontSize: "2rem",
                    color: "#539bf5",
                    fontWeight: 600,
                    marginLeft: "2rem",
                  }}
                >
                  {data.isFetching ? "Fetching ..." : "Blog"}
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
                <Loader height="300px" />
                <Loader height="30px" />
                <Loader height="30px" />
              </div>
            ) : (
              <FeaturedArticle />
            )}

            <div
              className="section-divider-line"
              style={{ marginTop: "4rem", marginBottom: "6rem" }}
            ></div>

            {data.isLoading ? (
              <div style={{ marginTop: "4rem" }}>
                <Loader height="150px" />
                <Loader height="30px" />
                <Loader height="30px" />
              </div>
            ) : (
              <ArticleList />
            )}

            {data.isLoading ? (
              <Fragment></Fragment>
            ) : (
              <Footer
                blogData={data.data.data.featured_posts}
                blogDataLoading={data.isLoading}
                setBlogFilter={data.setFilter}
                data_type={"blog"}
              />
            )}
          </div>
        </div>
        <div className="blog-home-options">
          <Options />
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
