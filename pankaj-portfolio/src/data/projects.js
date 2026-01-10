export const projects = [
  {
    id: 1,
    title: "Hybrid Predictive Model for Urban Service Delivery (NYC311)",
    category: "analytics",
    description:
      "Built a hybrid LSTM–DBSCAN approach to forecast next-day non-emergency service demand and identify spatial clusters for improved resource allocation (High Distinction).",
    tools: ["Azure ML Studio", "Python", "LSTM", "DBSCAN", "Agile"],
  },
  {
    id: 2,
    title: "AI-Powered Chatbot for RMIT WIL Team (Microsoft Copilot)",
    category: "enterprise",
    description:
      "Delivered an AI chatbot concept and BA artefacts to streamline student support and internal knowledge access, focusing on requirements, user journeys, and governance.",
    tools: ["Requirements", "User Journeys", "Documentation", "Responsible AI"],
  },
  {
    id: 3,
    title: "Coles Group SAP S/4HANA Cloud ERP Case Study",
    category: "strategy",
    description:
      "Completed an end-to-end BA case study covering scope, stakeholders, risk, and expected benefits of an SAP S/4HANA Cloud ERP implementation in a retail context.",
    tools: ["Process Analysis", "Risk Analysis", "Benefits Mapping", "ERP"],
  },
  {
    id: 4,
    title: "Wicked Problem Analysis: DiDi Shared Economy",
    category: "optimization",
    description:
      "Analysed operational and stakeholder challenges in the shared economy and proposed structured solution options using BA frameworks and prioritisation.",
    tools: ["Stakeholders", "Workshop Outputs", "Prioritisation", "Process Thinking"],
  },
];

export const projectCategories = [
  { key: "all", label: "All" },
  { key: "analytics", label: "Analytics" },
  { key: "enterprise", label: "Enterprise" },
  { key: "optimization", label: "Optimization" },
  { key: "strategy", label: "Strategy" },
];
