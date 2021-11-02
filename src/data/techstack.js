import {
  Api24,
  MachineLearningModel24,
  DataBase24,
  TreeViewAlt24,
  Cloud24,
  Code24,
  Screen24,
  CalendarSettings24,
} from "@carbon/icons-react";

export const tech_stack = [
  {
    category: "Programming Language",
    tools: ["Python", "Javascript", "Go", "TypeScript"],
    logo: <Code24 fill="#986ee2" />,
  },
  {
    category: "Web & Mobile Development",
    tools: ["React Js", "React Native", "HTML", "CSS", "Figma"],
    logo: <Screen24 fill="#986ee2" />,
  },
  {
    category: "Distributed Software, APIs & Microservices",
    tools: [
      "Flask",
      "FastAPI",
      "Express",
      "NodeJs",
      "Go",
      "REST",
      "GraphQL",
      "Events & Queues",
    ],
    logo: <Api24 fill="#986ee2" />,
  },
  {
    category: "Software Development",
    tools: [
      "Software Architecture",
      "Database Modeling",
      "Product Development",
      "Unit Testing",
    ],
    logo: <CalendarSettings24 fill="#986ee2" />,
  },

  {
    category: "Database, Storage & Caching",
    tools: [
      "MongoDB",
      "Redis",
      "SQL",
      "PostgresSQL",
      "DynamoDB",
      "AWS S3",
      "Redis-Queue",
    ],
    logo: <DataBase24 fill="#986ee2" />,
  },

  {
    category: "AI & ML Development/Ops",
    tools: ["Tensorflow", "OpenCV", "HuggingFace"],
    logo: <MachineLearningModel24 fill="#986ee2" />,
  },
  {
    category: "DevOps & CI",
    tools: [
      "Linux",
      "Docker",
      "Nginx",
      "WSGI",
      "ASGI",
      "Github",
      "Git",
      "Bash",
    ],
    logo: <TreeViewAlt24 fill="#986ee2" />,
  },
  {
    category: "Cloud",
    tools: ["AWS", "Digital Ocean", "Cloudflare"],
    logo: <Cloud24 fill="#986ee2" />,
  },
];
