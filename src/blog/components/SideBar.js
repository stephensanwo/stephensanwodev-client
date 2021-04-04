import React from "react";
import { Accordion, AccordionItem, Tag } from "carbon-components-react";
import {
  Link24,
  LogoFacebook24,
  LogoLinkedin24,
  LogoTwitter24,
} from "@carbon/icons-react";

const SideBar = () => {
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
    <div className="grid-2 grid-2-dark">
      <div className="grid-2-content">
        <div>
          <Accordion>
            <AccordionItem title="Discover" open>
              <Link24 /> <LogoTwitter24 /> <LogoLinkedin24 /> <LogoFacebook24 />
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionItem title="Share Article" open>
              <Link24 /> <LogoTwitter24 /> <LogoLinkedin24 /> <LogoFacebook24 />
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionItem title="Tags" open>
              {tags.map((tag, index) => {
                return (
                  <Tag type={tag.type} title="Clear Filter">
                    {tag.title}
                  </Tag>
                );
              })}
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionItem title="Articles In this Series" open>
              <p>
                <a>The Import System</a>
              </p>
              <p>
                <a>Python Modules</a>
              </p>
              <p>
                <a>Structuring python</a>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionItem title="Recommended Articles" open>
              <p>
                <a>The Import System</a>
              </p>
              <p>
                <a>Python Modules</a>
              </p>
              <p>
                <a>Structuring python</a>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
