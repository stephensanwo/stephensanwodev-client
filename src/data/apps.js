import {
  CloudComputing,
  Robot,
  Globe,
  Desktop,
  Network,
} from "@carbon/pictograms-react";

import {
  Api_116,
  Application16,
  Wikis16,
  MachineLearningModel16,
  App16,
} from "@carbon/icons-react";

export const apps_data = [
  {
    id: 1,
    name: "Artificial Intelligence Playground",
    title: "Playground for AI Models",
    desc: "AI Playground is where I test stuff I build with open source and custom Machine Learning and Deep Learning models",
    logo: <CloudComputing fill="#05aa82" width="48px" height="48px" />,
    built_with: ["Python", "PostgresSQL", "Redis", "React"],
    app_url: "https://ai.stephensanwo.dev",
    repo_url: "https://github.com/stephensanwo/ai-playground-api",
    category: ["AI and ML Apps", "Web Apps"],
  },
  {
    id: 2,
    name: "Hypercompose",
    title: "Supercharge your writing with AI",
    desc: "Write faster and save time with the power of Artificial Intelligence and Open AI's GPT3 to write blog posts, compose emails, write marketing briefs, social media copies, etc. without writing a single line of code!. Integrate Compose-AI with Notion for free, by authenticating with Notion and selecting the pages you want Compose-AI to have access to",
    logo: <Robot fill="#05aa82" width="48px" height="48px" />,
    built_with: ["Python", "OpenCV", "GraphQL", "NodeJs", "React", "MongoDB"],
    app_url: "https://www.hypercompose.com",
    repo_url: "",
    category: ["AI and ML Apps", "Web Apps"],
  },
  {
    id: 3,
    name: "Project Corpenicus",
    title: "Urban Development Tracking App",
    desc: "An app that uses weekly satellite imagery and computer vision algorithms, to track urbanization, and provide accurate recommendations to govt agencies.",
    logo: <Globe fill="#05aa82" width="48px" height="48px" />,
    built_with: ["Python", "OpenCV", "GraphQL", "NodeJs", "React", "MongoDB"],
    app_url: "",
    repo_url: "",
    category: ["AI and ML Apps", "Web Apps"],
  },

  {
    id: 4,
    name: "Stephen Sanwo Dev Client",
    title: "Web Application & Blog",
    desc: "The Web client that powers the stephensanwo.dev blog and codeshare platform",
    logo: <Desktop fill="#05aa82" width="48px" height="48px" />,
    built_with: ["React", "JavaScript", "Hooks", "React Query", "Axios"],
    app_url: "https://github.com/stephensanwo?tab=repositories",
    repo_url: "https://github.com/stephensanwo?tab=repositories",
    category: ["Web APIs"],
  },
  {
    id: 5,
    name: "Stephen Sanwo Dev API",
    title: "Core backend and API",
    desc: "Core backend and APIs that power the stephensanwo.dev blog and codeshare platform",
    logo: <Network fill="#05aa82" width="48px" height="48px" />,
    built_with: ["Python", "FastAPI", "REST", "MongoDB", "Redis"],
    app_url: "https://github.com/stephensanwo/stephensanwodev-api",
    repo_url: "https://github.com/stephensanwo/stephensanwodev-api",
    category: ["Web APIs"],
  },
  {
    id: 6,
    name: "Data Scrapping and Ingestion for Global Company Data",
    title: "Company Data Fabric",
    desc: "A Data ingestion pipeline for company centric data from multiple sources. 6482 Companies base information available, and more data available for S&P 500 companies",
    logo: <Globe fill="#05aa82" width="48px" height="48px" />,
    built_with: [
      "Python",
      "BeautifulSoup",
      "Web Scrapping",
      "Data Archeology",
      "Data Pipelines",
    ],
    app_url:
      "https://github.com/stephensanwo/KPMG-Hackathon-Company-Data-Fabric",
    repo_url:
      "https://github.com/stephensanwo/KPMG-Hackathon-Company-Data-Fabric",
    category: ["Software Package"],
  },
  {
    id: 7,
    name: "Citadel Microservice",
    title: "Data Scrapping for Libgen Books Data",
    desc: "Webscrapper and Flask API for books publicly available on Libgen",
    logo: <Globe fill="#05aa82" width="48px" height="48px" />,
    built_with: ["Python", "Flask", "API", "BeautifulSoup", "Web Scrapping"],
    app_url: "https://github.com/stephensanwo/citadel-microservice",
    repo_url: "https://github.com/stephensanwo/citadel-microservice",
    category: ["Web APIs"],
  },
];

export const app_categories_small = [
  {
    id: 1,
    title: "All Apps",
    logo: <Api_116 fill="#05aa82" />,
  },
  {
    id: 2,
    title: "AI and ML Apps",
    logo: <MachineLearningModel16 fill="#05aa82" />,
  },
  { id: 3, title: "Web Apps", logo: <Wikis16 fill="#05aa82" /> },
  {
    id: 4,
    title: "Mobile Apps",
    logo: <Application16 fill="#05aa82" />,
  },
  {
    id: 5,
    title: "Web APIs",
    logo: <Api_116 fill="#05aa82" />,
  },
  {
    id: 6,
    title: "Software Package",
    logo: <App16 fill="#05aa82" />,
  },
];

export const app_filters = [
  "Python",
  "React",
  "Javascript",
  "Docker",
  "Mongo DB",
  "PostgresSQL",
  "Redis",
  "Tensorflow",
  "FastAPI",
  "Flask",
  "Node Js",
  "Express",
  "React Native",
];

export const app_sort = ["New Release", "Most Popular", "Completed Projects"];
