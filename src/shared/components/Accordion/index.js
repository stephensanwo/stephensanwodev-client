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
              <p>Python, Javascript, Go, Typescript</p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="APIs & Microservices" closed>
            <p>Flask, Redis-Queue, GraphQL, NodeJs, Express</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Database, Storage & Caching" closed>
            <p>MongoDB, Redis, AWS DynamoDB, AWS S3</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Frontend Technologies" closed>
            <p>ReactJs, HTML, CSS</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Mobile Development Technologies" closed>
            <p>React Native</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Human Interaction Design" closed>
            <p>Sketch</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Deep Learning & AI" closed>
            <p>Tensorflow</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionItem title="DevOps & CI" closed>
            <p>Docker, GitHub</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionItem title="Cloud Native" closed>
            <p>AWS, MongoDB Atlas</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ToolsAccordion;
