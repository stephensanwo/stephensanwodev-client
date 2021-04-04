import React from "react";
import { CodeSnippet } from "carbon-components-react";
import Image from "../assets/img/jorge-ramirez-skq_PBbs1P8-unsplash.jpg";

const Article = () => {
  return (
    <div className="grid-1 grid-1-dark">
      <section className="blog-content">
        <article style={{ marginTop: "6rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
            }}
          >
            <small>Python Development - From Scripting to Software</small>
            <small>Stephen Sanwo | July-20-2020</small>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
              justifyContent: "left",
            }}
          >
            <h1>Structuring Python Software Development Projects</h1>
            <h4>Understanding python modules and building software packages</h4>
          </div>
          <div>
            <img src={Image} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
          <div>
            <section>
              <p>
                Many people get introduced to Python firstly as a scripting
                language, I first started out doing analytics with python, and
                the nature of those projects involved writing single file
                scripts, or using jupyter notebooks perform analysis in python.
                While this served its purpose, moving into software development,
                is completely different area, although the programming language
                has stayed the same, there a number of things that need to be
                covered in order to have a good python software or API
                development project, many of which are poorly covered on the
                internet, and one key area is how to structure your python
                projects. Tutorials typically write code in a single file, which
                is not necessarily true of actual software development projects,
                and developers get confused on selecting the best way to
                structure projects. This article however, hopes to simplify the
                concepts behind structuring your projects, and it especially
                targets developers who want to move from writing basic scripts
                to building complex multi-module softwares, or even building
                reusable python packages for the PyPi index.
              </p>
            </section>

            <section>
              <h4>The Import Module/System</h4>
              <p>When you write a line of code to import a package i.e.</p>

              <CodeSnippet type="inline">import pandas a pd</CodeSnippet>

              <p>
                What do you think happens underneath the hood? and why do you
                think this import statement fails to run with an error like no
                module namde Numpy! Importing pandas means that the pandas
                package is run in your sofware project, and the packages
                imported within the pandas package (or dependencies) are also
                imported. One of those packages happen to by numpy, so in this
                case pandas cannot find numpy, and then throws the error. Numpy
                here is regarded as a dependency of pandas, and typically this
                scenario should not happen (because numpy will always be
                installed when you install pandas), except you have deleted
                numpy manually. Im complex software projects, you may sometimes
                want to import modules that you created yourself into another
                file you are working on. For example, if i have a project ~A/,
                which has a python file [app.py](http://app.py) in its root, and
                i have a folder ~A/B which has a file
                [function.py](http://function.py) where i have defined a
                function f(x). How do I import this function f(x) to use in my
                main file app.py? Keeping this simplistic example in mind I will
                walk you through how I handle project structuring for my
                software development projects. Many people starting out with
                Python are used to writing software programs in a single .py
                file/script, or particularly for those working with Python for
                data analytics, they are used to Jupyter notebooks. With this
                approach, Python code is written in a single file which is
                executed from top to bottom, and an output is generated.
                Building a full scale maintainable and scalable software
                application or API in Python however, requires more than just a
                single script. Large applications require a lot of moving parts,
                individual .py files communicating with each other in a
                directory called modules, doing specific tasks, and sending
                functions and data back and forth are mostly required.
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Article;
