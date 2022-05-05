import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import ListItem from "../components/ListItem";
import InlineLink from "../components/InlineLink"
import Image from "../components/Image";


const Post_11 = ({content}) => {
  return (
    <Fragment>
      <SubHeading id={content[0]}>Introduction</SubHeading>
      <Paragraph>
      OpenFlow is an open source low-code analytics automation workflow,
              that decouples monolithic analytics projects into re-usable
              functional components that can be chained together to solve a
              problem. It provides a seamless platform for developers to deploy
              modular functions that can be re-used by other developers,
              analysts and non-coders for automated analytics and robotic
              process automation (RPA).
      </Paragraph>
      <Paragraph>
      OpenFlow attempts to improve the collaboration between business process owners (who are typically non-coders), and developers, by providing an infrastructure where developers can share pre-written functions, targeted at solving specific use cases, which consumers can then mix and match while building their workflows using a simple user interface.
      </Paragraph>
      <SubHeading id={content[1]}>Why OpenFlow?</SubHeading>
      <Paragraph>
      Having worked in analytics and automation for some really complex use cases, Multilayered analytics can become complex and tedious quickly. A useful approach will be to break down the analytics into modular functions that can be called anytime. These functions may be built by you or some other person, but the very basic principle is that the function will take an input of a range of data structures and return an output. These functions can then be mixed and matched in multiple ways to create a workflow that solves a specific problem.
      </Paragraph>   
      <Paragraph>
      For example, a simple reconciliation work flow between two different data sources could involve the following:
      </Paragraph>
      <Paragraph>
      <ListItem>
       Data extraction from source system A
      </ListItem>
      <ListItem>
      Data extraction from source system B
      </ListItem>
      <ListItem>
      Run a basic probabilistic fuzzy match on specific columns 
      </ListItem>
      <ListItem>
      Or Run a more advanced ML-based matching algorithm where a unique identifier does not exist
      </ListItem>
      <ListItem>
      Extract reconciliation reports, and send by email
      </ListItem>
      </Paragraph>

    <Paragraph>
    Each of these work steps can be created as simple functions and chained together in a workflow that can run on a monthly basis.
    </Paragraph>

    <Paragraph>
    With OpenFlow, developers can create re-usable functions, and wrap them with a simple user interface, where consumers can easily provide the variables required by those functions, and chain these functions together a s part of a larger workflow. For example, the reconciliation workflow will have 4 functions for each step, two of which are not necessarily related to a reconciliation procedure itself (extracting data from source systems and sending reports to an email address).
    </Paragraph>

    <Paragraph>
    A business owner can provide the required variables to run the workflow and reuse, batch or schedule data operations.
    </Paragraph>

    <Paragraph>
    From a developer point of view, you wouldn’t need to provide an API or use a tool like streamlit for every application you want some users to consume. You can embed your functions in OpenFlow and mix and match the logic for your workflow as you wish. 
    </Paragraph>
    <Paragraph>
    From a business owner point of view, you have the flexibility to go beyond a preset workflow logic set by the developer and construct your own logic.
    </Paragraph>

  

      <SubHeading id={content[2]}>How it Works</SubHeading>
      <Paragraph>
      OpenFlow is a collection of worfklows that solve an analytics problem or automates a process. The basic unit of a flow is the node and you can have infinite nodes in a flow. </Paragraph> 
      <Paragraph>Nodes are essentially functions that take an input and generate an output. The output is either passed on to a subsequent node, multiple subsequent nodes, or as a final output. A node can also either be a component node or a code node.
      </Paragraph>

      <Image>
      https://ddxzec2p5v0iq.cloudfront.net/flow-studio.png
      </Image>

    <Paragraph>
    A component node is a function has been pre built and tested by a contributor and it provides a simple user interface to interact with it. You have little or no flexibility with component nodes. For example, grouping a data frame can be a component node, if all the required variables are converted to input dialogs or a simple key-value input.  
      </Paragraph>
      <Image>
      https://ddxzec2p5v0iq.cloudfront.net/node-designer.png
      </Image>
      <Paragraph>
      Nodes communicate with each other through the edges. nodes will always run in a sequential order except a node is called directly and it does not depend on an output from another node.
      </Paragraph>
      <Paragraph>
      Selecting a node opens up an actions pane, the configuration of the actions pane will vary depending on if the node is a component node or a code node. Component nodes will have a user interface for inputs, the code nodes however will have a code interface with more flexibility to control and alter the underlying code directly.
      </Paragraph>

      <SubHeading id={content[3]}>Architecture</SubHeading>
      <Image>
      https://ddxzec2p5v0iq.cloudfront.net/architecture.drawio.svg
      </Image>
      
      <Paragraph>
      At a high level the user will interact with OpenFlow through the client built in React (TypeScript), with IBM Carbon as the design system. 
      </Paragraph>

      <Paragraph>
      The API Gateway that serves API calls from and to the client is built in GO, and just serves as a proxy between the client and the background processing queues. 
      </Paragraph>
      <Paragraph>
      For the backend processing task queues, I will be experimenting with Uber Cadence, where I intend to use it to spin up nodes that have been pre configured with python environments. 
      </Paragraph>
      <Paragraph>
      For metadata storage, I will use a PostgreSQL database and a Redis cache. I had also thought about using a Redis queue to handle the background jobs, however I wanted to give cadence a try for this. Things may change in the future depending on how flexible cadence is. 
      </Paragraph>
      <Paragraph>
      Obviously there is the question of scaling. while this is still intended to be a deploy-on-your-own docker compose workflow, I believe I can possibly look into a scalable cloud option in the future.
      </Paragraph>
  
      <SubHeading id={content[4]}>Contribute</SubHeading>
      <Paragraph>
      To contribute, check out the github repository at  <InlineLink link = {"https://github.com/stephensanwo/openflow"}>https://github.com/stephensanwo/openflow</InlineLink> 
</Paragraph>


    </Fragment>
  );
};

export default Post_11;
