import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import SubHeading4 from "../components/SubHeading4";
import Paragraph from "../components/Paragraph";
import Image from "../components/Image"

const Post_3 = ({content}) => {
  return (
    <Fragment>
      <SubHeading id={content[0]}>Introduction</SubHeading>
      <Paragraph>
        One of the best ways to learn how to develop full stack applications is
        to build projects that cover the end to end software development
        process, from designing the system, to building an API, developing the
        user interface, and finally deploying your application. This tutorial is
        designed to take you through the end to end process of building and
        deploying a functional full stack app. The topics covered include:
      </Paragraph>
      <Paragraph>
        - Building an API wrapper to communicate with GPT-J-6B <br />
        - Building web-sockets for real-time chat application <br />
        - Caching messaging data with Redis <br />
        - Building a chat user interface with React <br />
        - Deploying your application with Docker <br />- Deploying your
        application live to AWS
      </Paragraph>
      <SubHeading id={content[2]}>Important Note</SubHeading>
      <Paragraph>
        This is an intermediate level full stack software development project
        and it requires some level of basic knowledge of Python and JavaScript.
        Each part of the development cycle has been carefully divided to series,
        to ensure that you can easily select the phase that is important to you
        in case you do not wish to code the full application. I also try as much
        as possible to explain each phase independently so that newbies can take
        a phase and run with it regardless of their level or skill.
      </Paragraph>
      <SubHeading id={content[3]}>Software Architecture</SubHeading>
      <Paragraph>
        First we need to build out the architecture of our application to get an
        high level overview of what we will be building and how the various
        components will communicate with each other.
      </Paragraph>
      <Image>
      https://ddxzec2p5v0iq.cloudfront.net/full-stack-chatbot-architecture.svg
      </Image>
     <SubHeading4>1. The GPT-J-6B wrapper:</SubHeading4>
      <Paragraph>
       GPT-J-6B is a generative language model whip was trained with 6Billion parameters and performs closely with GPT-3 built by openai, I have chosen to use this an not GPT-3 because this is an open source model and doesn’t require paid token to use. Also vicgalle has build an endpoint that communicates with a version of the model deployed on a TPU instance, this makes it easy for us to use this model without having to deploy on our own TPU instance see the github repo: [https://github.com/vicgalle/gpt-j-api](https://github.com/vicgalle/gpt-j-api). this means that we can connect to the API using the endpoint. We will build a wrapper around this endpoint where we will send our prompts to, then the response will be revived and cleaned

      </Paragraph>
      <SubHeading4>2. The Redis Cache:</SubHeading4>
      <Paragraph>
       When we send prompts to GPT, we need a way to temporarily store the prompt and easily retrieve the response. In addition we need to simulate a way to ensure that the model has short term memory, by resending the entire conversation history for the user each time we access the model. This will be done with the aid of our Redis cache which will be running in its own docker container.

      </Paragraph>
      <SubHeading4>3. Websockets and the conversational API (Chat): </SubHeading4>
      <Paragraph>
      to communicate with the user in real time, we need to open a socket connection as an HTTP connection will not be sufficient to ensure real time communication between the user and the server. 

      </Paragraph>
      <SubHeading4>4. User Interface:</SubHeading4>
      <Paragraph>
      We will be using React to build the user interface. React is a state of the art JavaScript libraty that makes it easy to build reusable web components.

      </Paragraph>
      <SubHeading4>5. Containerisation and Continuous Integration:</SubHeading4>
      <Paragraph>
       We will be using docker to containerize both the front end and the backend of our application. and Github Actions for CI

      </Paragraph>
      <SubHeading4>6. AWS Lightsail: </SubHeading4>
      <Paragraph>
      we will be deploying the container with AWS Lightsail. AWS Lightsail is a lightweight application deployment service that makes it really easy to deploy apps without worrying about servers, and without the complexity of AWS pricing of the other services.
      </Paragraph>
      <SubHeading id={content[4]}>
      Development Environment
      </SubHeading>
      <Paragraph>
      

You can use your desired OS to build this app, however, I am currently using a Mac OS, and Visual Studio Code as my code editor. Other development details include:

</Paragraph>
<Paragraph>
- Python version 3.8: [https://www.python.org/downloads/release/python-3810/](https://www.python.org/downloads/release/python-3810/) <br/>
- React: [https://reactjs.org](https://reactjs.org/) <br/>
- Docker: [https://docs.docker.com/desktop/mac/install/](https://docs.docker.com/desktop/mac/install/)
</Paragraph>
<Paragraph>
Ensure that you have the required setup done and move on to the next section of this series.
</Paragraph>

<SubHeading id={content[5]}>
Project Structure

</SubHeading>


<Paragraph>
First we create project folder "chatbot" and within this folder we create another folder called "server" which will be with working folder for our server, and another folder called client, which will be our react working folder.
  </Paragraph>
<Image>
https://ddxzec2p5v0iq.cloudfront.net/file_structure.png

</Image>

<SubHeading id={content[6]}>
Setup Git Repository
</SubHeading>
<Paragraph>
Next we initialize our git repository within the root of the project folder, using "git init" command and create a .gitignore file by using "touch .gitignore"
      </Paragraph>
    </Fragment>
  );
};

export default Post_3;
