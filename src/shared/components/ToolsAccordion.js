import React from "react";
import { Accordion, AccordionItem, Tag } from "carbon-components-react";

const ToolsAccordion = () => {
  const tags = [
    {
      title: "Python",
      type: "cyan",
    },
    {
      title: "Software Development",
      type: "magenta",
    },
    {
      title: "Docker",
      type: "teal",
    },
    {
      title: "Microservices",
      type: "cool gray ",
    },
    {
      title: "Microservices",
      type: "cool gray ",
    },
  ];
  return (
    <div>
      <div>
        <Accordion>
          <AccordionItem title="Languages" open>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <h4 style={{ fontSize: "1rem", color: "#A2FACF", width: "100%" }}>
                Python, Javascript, C
              </h4>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="APIs & Microservices" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              Flask, Redis-Queue, GraphQL, NodeJs, Express
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Database, Storage & Caching" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              MongoDB, Redis, AWS DynamoDB, AWS S3
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Frontend Technologies" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              ReactJs, HTML, CSS
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Mobile Development Technologies" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              React Native
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Human Interaction Design" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              Sketch
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Deep Learning & AI" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              Tensorflow
            </h4>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionItem title="DevOps & CI" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              Docker, GitHub
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Cloud Native" closed>
            <h4
              style={{
                fontSize: "1rem",
                color: "#A2FACF",
              }}
            >
              AWS, MongoDB Atlas
            </h4>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ToolsAccordion;
