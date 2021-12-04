import React, { lazy, Fragment } from "react";
import { ArrowRight24, ArrowLeft24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import "./style.scss";
import Loader from "../../../shared/components/Loader";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";

const PostContent = ({
  code_content,
  older_post_link,
  newer_post_link,
  post_count,
  all_posts,
  isFetching,
}) => {
  if (code_content) {
    const importPost = (id) =>
      lazy(() =>
        import(`../../posts/Post_${id}.jsx`).catch(() =>
          import(`../../posts/Not_Found`)
        )
      );

    const Post = importPost(code_content.code_id);

    console.log(all_posts);

    return (
      <div className="blog-post-container">
        <h4
          style={{
            fontSize: "0.8em",
            color: "#986ee2",
            marginBottom: "1em",
          }}
        >
          {isFetching ? <Loader height="20px" /> : code_content.category}
        </h4>
        <h4
          style={{
            fontSize: "2rem",
            color: "#adbac7",
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
              {code_content.author}
            </h4>

            <h4
              style={{
                fontSize: "0.85em",
                color: "#adbac7",
                marginBottom: "1.5rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
              }}
            >
              |
            </h4>

            <h4
              style={{
                fontSize: "0.85em",
                color: "#adbac7",
                marginBottom: "1.5rem",
              }}
            >
              {moment(code_content.creation_date, "YYYYMMDD").fromNow()}
            </h4>
          </div>
        )}

        <div className="blog-post-detail">
          {isFetching ? (
            <Fragment></Fragment>
          ) : (
            <h2
              style={{
                color: "#986ee2",
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
              fontWeight: 600,
              fontSize: "1em",
              color: "#986ee2",
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
          {code_content.code_id == post_count ? (
            <div className="next-previous-item">
              <ArrowLeft24 fill="#986ee2" />
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#986ee2",
                  marginLeft: "0.5rem",
                }}
                to={"/code"}
              >
                Code Snippets
              </Link>
            </div>
          ) : (
            <div className="next-previous-item">
              <ArrowLeft24 fill="#986ee2" />
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#986ee2",
                  marginLeft: "0.5rem",
                }}
                to={newer_post_link}
              >
                Newer Post
              </Link>
            </div>
          )}

          <h4>
            {code_content.code_id} of {post_count}
          </h4>
          {code_content.code_id == "1" ? (
            <div className="next-previous-item">
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: 800,
                  color: "#986ee2",
                  marginRight: "0.5rem",
                }}
                to={"/code"}
              >
                Code Snippets
              </Link>
              <ArrowRight24 fill="#986ee2" />
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
                to={older_post_link}
              >
                Older Post
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
