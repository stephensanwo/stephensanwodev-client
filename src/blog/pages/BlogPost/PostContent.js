import React from "react";
import { featured_article } from "../../../data/tmp_blog";
import { Launch16, Share16, ArrowRight16 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import "./style.scss";

const PostContent = () => {
  return (
    <div className="blog-post-container">
      <h4
        style={{
          fontFamily: "display-text-bold",
          fontSize: "0.8em",
          color: "#539bf5",
          marginBottom: "0.4em",
        }}
      >
        {featured_article.category}
      </h4>
      <h4
        style={{
          fontSize: "2rem",
          fontFamily: "display-text-medium",
          color: "#adbac7",
          marginBottom: "1.5rem",
          marginTop: "0.5rem",
        }}
      >
        {featured_article.title}
      </h4>
      <div style={{ display: "flex" }}>
        <h4
          style={{
            fontFamily: "display-text-medium",
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "0.5rem",
          }}
        >
          By Stephen Sanwo
        </h4>
        <h4
          style={{
            fontFamily: "display-text-medium",
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
            fontFamily: "display-text-medium",
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "1.5rem",
          }}
        >
          20-June-2020
        </h4>
      </div>

      <div className="blog-post-image">
        <img src={featured_article.image_url} width="100%"></img>
      </div>
      <div className="blog-post-detail">
        <div
          className="blog-content-featured-tags"
          style={{ marginBottom: "4rem" }}
        >
          <Tags type="blog" title={"Python"} color={"generic"} />
          <Tags type="blog" title={"Software Developement"} color={"green"} />
        </div>

        <p
          style={{
            fontFamily: "display-text-medium",
            fontWeight: "400",
            fontSize: "1em",
            color: "#768390",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Many people get introduced to Python firstly as a scripting language,
          I first started out doing analytics with python, and the nature of
          those projects involved writing single file scripts, or using jupyter
          notebooks perform analysis in python. While this served its purpose,
          moving into software development, is completely different area,
          although the programming language has stayed the same, there a number
          of things that need to be covered in order to have a good python
          software or API development project, many of which are poorly covered
          on the internet, and one key area is how to structure your python
          projects. Tutorials typically write code in a single file, which is
          not necessarily true of actual software development projects, and
          developers get confused on selecting the best way to structure
          projects. This article however, hopes to simplify the concepts behind
          structuring your projects, and it especially targets developers who
          want to move from writing basic scripts to building complex
          multi-module softwares, or even building reusable python packages for
          the PyPi index.
        </p>
        <h2
          style={{
            color: "#adbac7",
            fontFamily: "display-text-bold",
            fontSize: "1.2em",
            marginBottom: "0.4em",
            lineHeight: 1.5,
          }}
        >
          The Import Module/System
        </h2>
        <p
          style={{
            fontFamily: "display-text-medium",
            fontWeight: "400",
            fontSize: "1em",
            color: "#768390",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          No module named numpy?? I’m importing pandas! Importing pandas means
          that the pandas package is run in your sofware project, and the
          packages imported within the pandas package (or dependencies) are also
          imported. One of those packages happen to by numpy, so in this case
          pandas cannot find numpy, and then throws the error. Numpy here is
          regarded as a dependency of pandas, and typically this scenario should
          not happen (because numpy will always be installed when you install
          pandas), except you have deleted numpy manually. Im complex software
          projects, you may sometimes want to import modules that you created
          yourself into another file you are working on. For example, if i have
          a project ~A/, which has a python file [app.py](http://app.py) in its
          root, and i have a folder ~A/B which has a file
          [function.py](http://function.py) where i have defined a function
          f(x). How do I import this function f(x) to use in my main file
          app.py? Keeping this simplistic example in mind I will walk you
          through how I handle project structuring for my software development
          projects. Many people starting out with Python are used to writing
          software programs in a single .py file/script, or particularly for
          those working with Python for data analytics, they are used to Jupyter
          notebooks. With this approach, Python code is written in a single file
          which is executed from top to bottom, and an output is generated.
          Building a full scale maintainable and scalable software application
          or API in Python however, requires more than just a single script.
          Large applications require a lot of moving parts, individual .py files
          communicating with each other in a directory called modules, doing
          specific tasks, and sending functions and data back and forth are
          mostly required.
        </p>
      </div>
    </div>
  );
};

export default PostContent;
