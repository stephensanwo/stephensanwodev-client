import React, { lazy, Fragment } from "react";
import { ArrowRight24, ArrowLeft24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import "./style.scss";
import Loader from "../../../shared/components/Loader";
import { Link, Redirect, useHistory } from "react-router-dom";
import moment from "moment";

const PostContent = ({
  code_content,
  newer_post_link,
  newer_post_value,
  older_post_link,
  older_post_value,
  isFetching,
}) => {
  let history = useHistory();

  if (code_content) {
    const importPost = (id) =>
      lazy(() =>
        import(`../../posts/Post_${id}.jsx`).catch(() =>
          import(`../../posts/Not_Found`)
        )
      );

    const Post = importPost(code_content.code_id);

    return (
      <div className="blog-post-container">
        <h4
          style={{
            fontSize: "1em",
            color: "#addec9",
            marginBottom: "1em",
          }}
        >
          {isFetching ? <Loader height="20px" /> : code_content.category}
        </h4>
        <h4
          style={{
            fontSize: "2rem",
            color: "#fff",
            marginBottom: "1rem",
            marginTop: "1rem",
            lineHeight: 1.3,
          }}
        >
          {isFetching ? <Loader height="50px" /> : code_content.title}
        </h4>

        {isFetching ? (
          <Loader height="20px" />
        ) : (
          <div
            className="blog-content-featured-tags"
            style={{ marginBottom: "1rem" }}
          >
            {code_content.tags.map((tag, index) => (
              <Tags key={index} type="blog" title={tag} color={"generic"} />
            ))}
          </div>
        )}
        {isFetching ? (
          <Fragment></Fragment>
        ) : (
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <h4
              style={{
                fontSize: "0.85em",
                color: "#adbac7",
                marginBottom: "0.5rem",
              }}
            >
              By: {code_content.author}
            </h4>
          </div>
        )}

        <div className="blog-post-detail">
          {isFetching ? (
            <Fragment></Fragment>
          ) : (
            <h2
              style={{
                color: "#addec9",
                fontSize: "1.2em",
                marginBottom: "0.4em",
                lineHeight: 1.5,
              }}
            >
              TL;DR
            </h2>
          )}

          <p
            style={{
              fontWeight: 400,
              fontSize: "1.1em",
              color: "#addec9",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            {isFetching ? (
              <Fragment>
                <Loader height="50px" />
              </Fragment>
            ) : (
              code_content.description
            )}
          </p>
          <div
            className="section-divider-line"
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
          ></div>

          {/* JSX will be inserted here */}
          <React.Suspense
            fallback={
              <Fragment>
                <Loader height="30px" />
                <Loader height="450px" />
              </Fragment>
            }
          >
            {isFetching ? (
              <Fragment>
                {" "}
                <Loader height="30px" />
                <Loader height="450px" />
              </Fragment>
            ) : (
              <Post />
            )}
          </React.Suspense>
        </div>
        <div
          className="section-divider-line"
          style={{ marginTop: "4rem", marginBottom: "2rem" }}
        ></div>
        <div className="next-previous-post">
          {older_post_value === "Back Home" ? (
            <div className="next-previous-item">
              <ArrowLeft24 fill="#addec9" />
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#addec9",
                  marginLeft: "0.5rem",
                }}
                to={older_post_link}
              >
                {older_post_value}
              </Link>
            </div>
          ) : (
            <div className="next-previous-item">
              <ArrowLeft24 fill="#addec9" />
              <a
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#addec9",
                  marginLeft: "0.5rem",
                }}
                onClick={history.goBack}
              >
                {older_post_value}
              </a>
            </div>
          )}

          <h4>{code_content.code_id}</h4>
          {newer_post_value === "Back Home" ? (
            <div className="next-previous-item">
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#addec9",
                  marginRight: "0.5rem",
                }}
                to={newer_post_link}
              >
                {newer_post_value}
              </Link>
              <ArrowRight24 fill="#addec9" />
            </div>
          ) : (
            <div className="next-previous-item">
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#986ee2",
                  marginRight: "0.5rem",
                }}
                to={newer_post_link}
              >
                {newer_post_value}
              </Link>
              <ArrowRight24 fill="#986ee2" />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <Redirect to="/code/error" />;
  }
};

export default PostContent;
