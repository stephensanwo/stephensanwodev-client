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
        <Accordion style={{ width: "1000px" }}>
          <AccordionItem
            title="Professional Summary"
            open
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1.5rem",
                width: "900px",
              }}
            >
              <h4 style={{ fontSize: "1rem", color: "#A2FACF", width: "100%" }}>
                I have 5 years experience helping clients translate problem
                statements into solutions that solves those problems;building
                and shipping APIs and Micro-services for internal and client
                projects, developing custom algorithms to tackle domain
                problems, and developing custom analytics solutions for
                automating client processes.
              </h4>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion style={{ width: "1000px" }}>
          <AccordionItem
            title="Professional Summary"
            open
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1.5rem",
                width: "900px",
              }}
            >
              <h4 style={{ fontSize: "1rem", color: "#A2FACF", width: "100%" }}>
                I have 5 years experience helping clients translate problem
                statements into solutions that solves those problems;building
                and shipping APIs and Micro-services for internal and client
                projects, developing custom algorithms to tackle domain
                problems, and developing custom analytics solutions for
                automating client processes.
              </h4>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ToolsAccordion;
