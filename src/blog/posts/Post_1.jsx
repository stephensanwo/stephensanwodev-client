import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import Code from "../components/Code";
import Image from "../components/Image";
import SubHeading4 from "../../code/components/SubHeading4";
import LinkItem from "../components/LinkItem";
import ListItem from "../components/ListItem";
import InlineLink from "../components/InlineLink";


const Post_1 = ({content}) => {

  return (
    <Fragment>
      <SubHeading id={content[0]}>Introduction - What we will be building</SubHeading>
      <Paragraph>
      Building and deploying a working a full stack application is no small feat, there are lots of factors to consider, you will have to handle the front-end and back-end parts of your application by yourself. This involves thinking about the application architecture, and making decisions that will be critical to the success of your project, such as; what languages to use, what platform to deploy on, are you going to deploy a containerised software on a server, or make use of server-less functions to handle the back-end, do you intend to use third-party APIs to handle complex parts of your application, like authentication or payments?, where do you store the data? added to all that, you'll also need to think about the user interface, design and usability of your application and much more. This is why complex large applications require a multifunctional and team, collaborating to build the app. 
      </Paragraph>
      <Paragraph>
      One of the best ways to learn how to develop full stack applications is to build projects that cover the end to end development process, from designing the solution architecture, to building the API, developing the user interface, and finally deploying your application. This tutorial will take your through each step using a project based example. The topics we will cover include:
      </Paragraph>
      <Paragraph>
        <ListItem >
          <InlineLink link = {"www.stephensanwo.dev/blog/2"}>
        Building a wrapper to communicate a third party API
          </InlineLink>
        </ListItem>
        <ListItem> 
         <InlineLink link = {"www.stephensanwo.dev/blog/3"}>
        Building web-sockets for real-time chat application
          </InlineLink>
        </ListItem>
        <ListItem> 
          <InlineLink link = {"www.stephensanwo.dev/blog/4"}>
          Server-side caching with Redis
          </InlineLink>
        </ListItem>
        <ListItem> 
          <InlineLink link = {"www.stephensanwo.dev/blog/5"}>
          Building a chat user interface with React
          </InlineLink>
        </ListItem>
        <ListItem> 
          <InlineLink link = {"www.stephensanwo.dev/blog/6"}>
          Container using your application with Docker
          </InlineLink>
        </ListItem>
        <ListItem> 
          <InlineLink link = {"www.stephensanwo.dev/blog/7"}>
          Deploying your application Backend to Digital Ocean
          </InlineLink>
        </ListItem>
      </Paragraph>
      <SubHeading4>
      Important Note:
      </SubHeading4>     
      <Paragraph>
      This is an intermediate full stack software development project and it requires some level of basic knowledge of Python and JavaScript. Each part of the project has been carefully divided to series, to ensure that you can easily select the phase that is important to you in case you do not wish to code the full application. I also try as much as possible to explain each phase independently so that you can take a phase and run with it.
      </Paragraph>
      <SubHeading id={content[1]}>Solution Architecture</SubHeading>
      <Paragraph>Laying out the structure of your application is a critical first step towards. This gives you an high level overview of your application, the tools you intend to use, and how each component of your application will communicate with each other. Your application architecture can be a simple hand drawl flow chart on paper, however I have made an over engineered architecture drawing below using <InlineLink link = {"https://app.diagrams.net"}>draw.io</InlineLink></Paragraph>
      <Image>
      https://ddxzec2p5v0iq.cloudfront.net/full-stack-chatbot-architecture.svg
      </Image>
      <SubHeading4>1. Client/User Interface:</SubHeading4>
      <Paragraph>
      We will use React version 17.0.1 to build the user interface. I like react because it is really simple and easy to use, without unnecessary complexities and over-engineering. It is fast becoming the de-facto framework for building web applications. While we will cover some basics of react during this tutorial, this tutorial assumes basic understanding of HTML, CSS and JavaScript. All the css files used in this tutorial series can be found here.
      </Paragraph>
      <SubHeading4>2. GPT-J-6B wrapper:</SubHeading4>
      <Paragraph>
      GPT-J-6B is a generative language model which was trained with 6 Billion parameters and performs closely with GPT-3 built by Openai on some tasks, I have chosen to use GPT-J-6B an not GPT-3 because it is an open source model and doesn’t require paid token to use. In addition there is a publicly available endpoint that communicates with a version of the model deployed on a TPU instance, this makes it easy for us to use this model without having to deploy on our own TPU instance, <InlineLink link = {"https://github.com/vicgalle/gpt-j-api"}>see the github repo</InlineLink>. We will build a wrapper around this endpoint where we will send our prompts to, then receive and fine tune the response from the model.

      </Paragraph>
      <SubHeading4>3. Redis Cache:</SubHeading4>
      <Paragraph>
      When we send prompts to GPT, we need a way to temporarily store the prompt and easily retrieve the response. In addition we need to simulate a way to ensure that the model has short term memory, by resending the entire conversation history with the user each time we access the model. To achieve this, we will be using a Redis cache storage. Redis is an In memory key value store that enables super fast fetching and storing of json-like data. For this tutorial, we will not go into details about setting up Redis on a server, we will however make use of a managed free redis storage from <InlineLink link = {"https://app.redislabs.com/#/databases"}>Redis Labs</InlineLink>, for testing purposes. If you want a very capable paid version of managed redis, checkout redis on <InlineLink link = {"https://cloud.digitalocean.com/databases"}>Digitalocean</InlineLink>.
      </Paragraph>
      <SubHeading4>4. Websockets and the conversational API (Chat): </SubHeading4>
      <Paragraph>
      To communicate with the user in real time, we need to open a socket connection, as an HTTP connection will not be sufficient to ensure real time communication between the user and the server. Checkout the <InlineLink link = {"https://fastapi.tiangolo.com/advanced/websockets/?h=web"}>FastAPI documentation</InlineLink> to learn more about WebSockets

      </Paragraph>
      <SubHeading4>5. Deployment:</SubHeading4>
      <Paragraph>
      We will deploy the frontend and backend of our application on <InlineLink link = {"https://cloud.digitalocean.com/apps"}>Digitalocean's App Platform</InlineLink> This service takes care of our infrastructure and server requirements for us, letting us focus on what is really important to us, our code.

      </Paragraph>
      <SubHeading id={content[2]}>Development Environment</SubHeading>
      <Paragraph>You can use your desired OS to build this app, however, I am currently using a Mac OS, and Visual Studio Code as my code editor. Other development details include:</Paragraph>
      <Paragraph>
        <ListItem >
          <InlineLink link = {"https://www.python.org/downloads/release/python-3810/"}>
          Python version 3.8
          </InlineLink>
        </ListItem>
        <ListItem >
          <InlineLink link = {"https://reactjs.org"}>
          React
          </InlineLink>
        </ListItem>  
        </Paragraph>
        <Paragraph>Ensure that you have the required setup done and move on to the next section of this series.</Paragraph>

        <SubHeading4>Project Structure</SubHeading4>
        <Paragraph>First we create project folder "chatbot", and within this folder we create another folder called "server" which will be the working folder for our server, and another folder called client, which will be our react working folder.</Paragraph>
        <Image>
        https://ddxzec2p5v0iq.cloudfront.net/file_structure.png
        </Image>
<Paragraph>Next we initialize our git repository within the root of the project folder, using "git init" command and create a .gitignore file by using "touch .gitignore" Remember that you can always access the <InlineLink link = {"https://github.com/stephensanwo/fullstack-chatbot-project"}> Github Repository</InlineLink> at anytime if you get stuck. With that said, lets beging to code!</Paragraph>

    </Fragment>
  );
};

export default Post_1;
