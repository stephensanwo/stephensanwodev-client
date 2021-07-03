import corpenicus_image from "../assets/img/project-corpenicus-2.png";
import atm_recon from "../assets/img/atm_recon.png";
import tomori_mobile from "../assets/img/tomorii_mobile.png";
import gallium_image from "../assets/img/SA-mortgageAIcredit.jpg";

import {
  Api_116,
  Application16,
  DataStructured16,
  LogoPython16,
  MachineLearningModel16,
  Settings16,
  Wikis16,
  Code24,
  Code16,
  LogoGithub16,
  MachineLearning16,
  Phone16,
} from "@carbon/icons-react";

export const featured_apps_data = [
  {
    id: 1,
    name: "ATM Reconciliation Analytics as a Service",
    title: "Enterprise Analytics Solution for Banks",
    desc: " An enterprise solution that analyses ATM activities in real-time to improve the ATM reconciliation efficiency and actively monitor ATM risks and identify areas for performance improvement.",
    image_url: atm_recon,
    built_with: [
      "Python",
      "Javascript",
      "SQL",
      "React",
      "RQ",
      "Docker",
      "MongoDB",
    ],
  },
  {
    id: 2,
    name: "Project Corpenicus",
    title: "Urban Development Tracking App",
    desc: "An app that uses weekly satellite imagery and computer vision algorithms, to track urbanization, and provide accurate recommendations to govt agencies.",
    image_url: corpenicus_image,
    built_with: ["Python", "OpenCV", "GraphQL", "NodeJs", "React", "MongoDB"],
  },
  {
    id: 3,
    name: "Gallium",
    title: "No-code forecasting at scale",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    image_url: gallium_image,
    built_with: ["Python", "PostgresSQL", "Redis", "React"],
  },
  {
    id: 4,
    name: "Tomorii Mobile",
    title: "IOS and Android Fashion Ecommerce App",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    image_url: tomori_mobile,
    built_with: ["React Native", "AWS"],
  },
];

export const apps_data = [
  {
    id: 1,
    name: "Citadel",
    title: "Find and download anybook",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    built_with: [
      "Python",
      "SQL",
      "React",
      "RQ",
      "Javascript",
      "Docker",
      "MongoDB",
    ],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 2,
    name: "Gallium",
    title: "No-code forecasting at scale",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    built_with: [
      "Python",
      "SQL",
      "React",
      "RQ",
      "Javascript",
      "Docker",
      "MongoDB",
    ],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 3,
    name: "Exchange Rate API",
    title: "Daily NGN exchange rate data",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    built_with: [
      "Python",
      "SQL",
      "React",
      "RQ",
      "Javascript",
      "Docker",
      "MongoDB",
    ],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 4,
    name: "Citadel",
    title: "Find and download anybook",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    built_with: [
      "Python",
      "SQL",
      "React",
      "RQ",
      "Javascript",
      "Docker",
      "MongoDB",
    ],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 5,
    name: "ATM Reconciliation Analytics as a Service",
    title: "Enterprise Analytics Solution for Banks",
    desc: " An enterprise solution that analyses ATM activities in real-time to improve the ATM reconciliation efficiency and actively monitor ATM risks and identify areas for performance improvement.",
    image_url: atm_recon,
    built_with: [
      "Python",
      "SQL",
      "React",
      "RQ",
      "Javascript",
      "Docker",
      "MongoDB",
    ],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 6,
    name: "Project Corpenicus",
    title: "Urban Development Tracking App",
    desc: "An app that uses weekly satellite imagery and computer vision algorithms, to track urbanization, and provide accurate recommendations to govt agencies.",
    image_url: corpenicus_image,
    built_with: ["Python", "OpenCV", "GraphQL", "NodeJs", "React", "MongoDB"],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 7,
    name: "Gallium",
    title: "No-code forecasting at scale",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    image_url: gallium_image,
    built_with: ["Python", "PostgresSQL", "Redis", "React"],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    id: 8,
    name: "Tomorii Mobile",
    title: "IOS and Android Fashion Ecommerce App",
    desc: "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics",
    image_url: tomori_mobile,
    built_with: ["React Native", "AWS"],
    logo: <Code24 fill="#539bf5" />,
  },
];

export const app_categories_small = [
  {
    id: 1,
    title: "APIs & Microservices",
    logo: <Api_116 fill="#539bf5" />,
  },
  {
    id: 2,
    title: "Code Snippets",
    logo: <Code16 fill="#539bf5" />,
  },
  {
    id: 3,
    title: "Mobile Software Projects",
    logo: <Application16 Application16 fill="#539bf5" />,
  },
  {
    id: 4,
    title: "SaaS Projects",
    logo: <Settings16 fill="#539bf5" />,
  },
  {
    id: 4,
    title: "AI & Bots Projects",
    logo: <MachineLearning16 fill="#539bf5" />,
  },
  {
    id: 5,
    title: "In Development WIP",
    logo: <LogoGithub16 fill="#539bf5" />,
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
