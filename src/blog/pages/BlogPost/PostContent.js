import React, { lazy, Fragment } from "react";
import { ArrowRight24, ArrowLeft24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import "./style.scss";
import Loader from "../../../shared/components/Loader";
import { Link, Redirect, useHistory } from "react-router-dom";
import moment from "moment";

const PostContent = ({
  post_data,
  newer_post_link,
  newer_post_value,
  older_post_link,
  older_post_value,
}) => {
  let history = useHistory();
  if (post_data) {
    const importPost = (id) =>
      lazy(() =>
        import(`../../posts/Post_${id}.jsx`).catch(() =>
          import(`../../posts/Not_Found`)
        )
      );
    const Post = importPost(post_data.post_id);
    const content_id = post_data.content.map((content_data) =>
      content_data.replaceAll(/\s/g, "")
    );

    return (
      <div className="blog-post-container">
        <h4
          style={{
            fontSize: "1em",
            color: "#addec9",
            marginBottom: "1em",
          }}
        >
          {post_data.category} - {post_data.sub_category}
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
          {post_data.title}
        </h4>
        <div
          className="blog-content-featured-tags"
          style={{ marginBottom: "1rem" }}
        >
          {post_data.tags.map((tag, index) => (
            <Tags key={index} type="blog" title={tag} color={"generic"} />
          ))}
        </div>
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <h4
            style={{
              fontSize: "0.85em",
              color: "#adbac7",
              marginBottom: "0.5rem",
            }}
          >
            By: {post_data.author}
          </h4>
        </div>

        <div className="blog-post-image">
          <img src={post_data.image_url} width="100%"></img>
        </div>
        <div className="blog-post-detail">
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

          <p
            style={{
              fontWeight: 400,
              fontSize: "1.1em",
              color: "#addec9",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            {post_data.description}
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
                <Loader height="30px" />
                <Loader height="30px" />
              </Fragment>
            }
          >
            <Post content={content_id} />
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

          <h4>{post_data.post_id}</h4>
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
                  color: "#addec9",
                  marginRight: "0.5rem",
                }}
                to={newer_post_link}
              >
                {newer_post_value}
              </Link>
              <ArrowRight24 fill="#addec9" />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <Redirect to="/blog/error" />;
  }
};

export default PostContent;
