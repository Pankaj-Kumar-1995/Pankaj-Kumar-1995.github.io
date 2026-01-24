// src/data/projects.js

export const projects = [
  {
    id: 1,
    slug: "nyc311-demand-forecasting",
    title: "NYC311 Service Demand Forecasting",
    category: "analytics",
    description:
      "Forecasted non-emergency service demand using machine learning and clustering techniques to support city resource planning.",
    tools: ["Python", "Azure ML", "LSTM", "DBSCAN", "Power BI"],
  },

  {
    id: 2,
    slug: "rmit-ai-chatbot",
    title: "AI Chatbot for RMIT WIL Team",
    category: "enterprise",
    description:
      "Designed BA artefacts and AI solution concept using Microsoft Copilot to streamline student support workflows.",
    tools: ["Requirements", "User Journeys", "Responsible AI"],
  },

  {
    id: 3,
    slug: "coles-s4hana-case-study",
    title: "Coles SAP S/4HANA Cloud ERP Case Study",
    category: "strategy",
    description:
      "Analysed ERP transformation scope, risks, stakeholders, and expected benefits in a retail context.",
    tools: ["ERP", "Process Mapping", "Risk Analysis"],
  },
];

export const projectCategories = [
  { key: "all", label: "All" },
  { key: "analytics", label: "Analytics" },
  { key: "enterprise", label: "Enterprise" },
  { key: "strategy", label: "Strategy" },
];
