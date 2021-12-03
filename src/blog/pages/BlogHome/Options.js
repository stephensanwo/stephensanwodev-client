import React, { useContext } from "react";
import { apps_data } from "../../../data/apps";
import { PostContext } from "../..";
import { Link, useRouteMatch } from "react-router-dom";
import Loader from "../../../shared/components/Loader";

const Options = () => {
  const data = useContext(PostContext);
  const { path } = useRouteMatch();
  return (
    <div className="blog-home-options-container">
      <div style={{ borderBottom: "1px solid #2b323d" }}>
        <h4
          style={{
            marginBottom: "1em",
          }}
        >
          Top Blog Posts
        </h4>
      </div>
      {data.isLoading ? (
        <div style={{ marginTop: "2rem" }}>
          <Loader height="30px" />
          <Loader height="60px" />
        </div>
      ) : (
        data.data.data.featured_posts.map((article, index) => (
          <div key={index} style={{ marginTop: "2rem" }}>
            <Link to={`${path}${article.post_id}`}>
              <h4
                style={{
                  marginBottom: "0.4em",
                  fontSize: "0.8em",
                }}
                className="header-link-highlight"
              >
                {article.title}
              </h4>
            </Link>

            <p
              style={{
                fontSize: "0.8em",
                marginBottom: "0.4em",
                width: "100%",
              }}
            >
              {`${article.description}`.slice(0, 160)}
              {article.description.length > 160 ? "..." : ""}
            </p>
          </div>
        ))
      )}

      <div style={{ borderBottom: "1px solid #2b323d", marginTop: "4rem" }}>
        <h4
          style={{
            marginBottom: "1em",
          }}
        >
          Top Apps
        </h4>
      </div>
      {apps_data.map((app_data, index) => (
        <div key={index} style={{ marginTop: "2rem" }}>
          <a href={app_data.app_url} target="_blank" rel="noopener noreferrer">
            <h4
              style={{
                marginBottom: "0.4em",
                fontSize: "0.8em",
              }}
              className="header-link-highlight"
            >
              {app_data.title}
            </h4>
          </a>
          <p
            style={{
              marginBottom: "0.4em",
              width: "100%",
              fontSize: "0.8em",
            }}
          >
            {app_data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Options;
