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
    coverImage: "/images/projects/nyc311-cover.jpg",
    duration: "6 months",
    teamSize: "8 members",
    role: "Business Analyst / Data Requirements Specialist",
    
    // Project Summary
    summary: {
      overview: "Developed a machine learning-based forecasting system to predict NYC311 non-emergency service demand patterns, enabling data-driven resource allocation and improved service delivery.",
      objectives: [
        "Analyze historical service demand patterns across NYC",
        "Build predictive models for demand forecasting by service type and location",
        "Identify peak demand periods and resource bottlenecks",
        "Enable proactive resource planning and allocation"
      ],
      stakeholders: [
        "NYC Department of Information Technology & Telecommunications (DoITT)",
        "NYC311 Operations Team",
        "Resource Planning Department",
        "Data Science Team",
        "Finance & Budget Office"
      ],
      businessProblem: "NYC311 was unable to accurately predict service demand, leading to resource misallocation, longer wait times during peak periods, and inefficient budget utilization. The lack of demand forecasting prevented proactive staffing and resource planning."
    },

    // Documentation
    documentation: {
      brd: {
        title: "Business Requirements Document",
        description: "Detailed business requirements including stakeholder needs, success criteria, and scope",
        downloadUrl: "/docs/nyc311-project-doc.pdf",
        available: true
      },
      frd: {
        title: "Functional Requirements Document",
        description: "Functional specifications for the forecasting system, API requirements, and data inputs",
        downloadUrl: "/docs/nyc311-frd.html",
        available: false
      },
      userStories: {
        title: "User Stories & Acceptance Criteria",
        description: "User stories from the perspective of operations managers, analysts, and stakeholders",
        downloadUrl: "/docs/nyc311-user-stories.html",
        available: true
      },
      bpmn: {
        title: "Process Flow Diagrams (BPMN)",
        description: "Business process diagrams showing data collection, forecasting, and reporting workflows",
        downloadUrl: "/docs/nyc311-bpmn.html",
        available: false
      },
      dataModel: {
        title: "Data Model & Architecture",
        description: "ER diagrams, data mappings, and system architecture documentation",
        downloadUrl: "/docs/nyc311-data-model.html",
        available: false
      },
      wireframes: {
        title: "Wireframes & UI Mockups",
        description: "Dashboard and reporting interface designs",
        downloadUrl: "/docs/nyc311-wireframes.html",
        available: false
      }
    },

    // Skills & Tools
    baSkills: [
      "Stakeholder interviews & workshops",
      "Requirements gathering & analysis",
      "Data requirements specification",
      "Process mapping & workflow design",
      "Acceptance criteria definition",
      "UAT planning & coordination"
    ],
    toolsUsed: [
      "Azure Machine Learning",
      "Python (Pandas, NumPy, Scikit-learn)",
      "LSTM Neural Networks",
      "DBSCAN Clustering",
      "Power BI",
      "SQL Server",
      "JIRA",
      "Confluence"
    ],

    // Timeline
    timeline: [
      { phase: "Planning & Discovery", duration: "Week 1-2", description: "Stakeholder interviews, business problem analysis" },
      { phase: "Requirements Analysis", duration: "Week 3-4", description: "BRD creation, data requirements definition" },
      { phase: "Design & Modeling", duration: "Week 5-8", description: "BPMN diagrams, data models, ML approach design" },
      { phase: "Development & Testing", duration: "Week 9-20", description: "Model development, UAT, requirements validation" },
      { phase: "Deployment & Training", duration: "Week 21-26", description: "Go-live, user training, documentation" }
    ],

    // Achievements
    achievements: [
      "Achieved 92% forecast accuracy for peak demand periods",
      "Reduced resource allocation errors by 45%",
      "Enabled $2.3M cost savings through optimized staffing",
      "Improved average response time by 18%",
      "Established real-time demand monitoring dashboard"
    ],

    // Additional details
    context: "NYC311 receives over 30 million calls annually and needed better forecasting to manage resources effectively.",
    
    requirements: {
      functional: [
        "Real-time demand prediction by service category",
        "Location-based demand clustering",
        "Seasonal and trend analysis",
        "Interactive dashboard with filtering capabilities",
        "Automated alert system for demand spikes"
      ],
      nonFunctional: [
        "95% system uptime",
        "Forecast latency < 5 seconds",
        "Support for 1M+ historical records",
        "Data encryption at rest and in transit",
        "Audit trail for all system changes"
      ]
    },

    approach: [
      "Conducted 12 stakeholder interviews to understand business needs",
      "Analyzed 5 years of historical service data",
      "Tested multiple ML algorithms (LSTM, ARIMA, Prophet)",
      "Implemented DBSCAN clustering for geographic patterns",
      "Built Power BI dashboards for operational insights",
      "Conducted UAT with operations team"
    ],

    dataAndTools: [
      "Python", "Azure ML", "LSTM", "DBSCAN", "Power BI", "SQL Server",
      "JIRA", "Confluence", "Excel", "Visio"
    ],

    testing: [
      "Unit testing of forecast models",
      "Integration testing with data pipelines",
      "User Acceptance Testing (UAT) with 15 power users",
      "Performance testing under peak load conditions",
      "Regression testing across historical data"
    ],

    outcomes: [
      "System successfully deployed and used operationally",
      "Forecasting accuracy exceeded 90% threshold",
      "Operations team confidence in system increased to 94%",
      "Foundation for future AI/ML initiatives within DoITT",
      "Model continuously improving with live data"
    ],

    screenshots: [
      "/images/projects/nyc311-dashboard.png",
      "/images/projects/nyc311-forecast.png"
    ]
  },

  {
    id: 2,
    slug: "rmit-ai-chatbot",
    title: "AI Chatbot for RMIT WIL Team",
    category: "enterprise",
    description:
      "Designed BA artefacts and AI solution concept using Microsoft Copilot to streamline student support workflows.",
    tools: ["Requirements", "User Journeys", "Responsible AI"],
    coverImage: "/images/projects/rmit-cover.jpg",
    duration: "3 months",
    teamSize: "5 members",
    role: "Business Analyst / AI Solution Designer",
    
    summary: {
      overview: "Conceptualized and designed an AI-powered chatbot solution using Microsoft Copilot to automate student support processes for RMIT's Work Integrated Learning (WIL) team, improving response times and student satisfaction.",
      objectives: [
        "Reduce manual support ticket processing by 60%",
        "Improve student satisfaction with support services",
        "Automate routine inquiries and FAQs",
        "Implement responsible AI practices",
        "Enable 24/7 student support availability"
      ],
      stakeholders: [
        "RMIT WIL Team Lead",
        "Student Support Representatives (8 staff)",
        "IT Department",
        "Student Services Manager",
        "Compliance & Risk Team"
      ],
      businessProblem: "RMIT's WIL team was overwhelmed with repetitive student inquiries (placement details, requirements, deadlines), leading to slow response times, high staff burnout, and poor student experience. Manual ticket processing consumed 70% of support staff time."
    },

    documentation: {
      brd: {
        title: "Business Requirements Document",
        description: "Business case, success metrics, and AI solution strategy",
        downloadUrl: "/docs/rmit-brd.html",
        available: true
      },
      frd: {
        title: "Functional Requirements Document",
        description: "Chatbot capabilities, AI model requirements, integration specifications",
        downloadUrl: "/docs/rmit-frd.html",
        available: false
      },
      userStories: {
        title: "User Stories & Journey Maps",
        description: "Student journeys, support staff workflows, admin requirements",
        downloadUrl: "/docs/rmit-user-stories.html",
        available: false
      },
      bpmn: {
        title: "Process Flows (Current & Future State)",
        description: "As-is and to-be process diagrams with chatbot integration points",
        downloadUrl: "/docs/rmit-bpmn.html",
        available: false
      },
      dataModel: {
        title: "AI Solution Architecture",
        description: "Responsible AI framework, data governance, model requirements",
        downloadUrl: "/docs/rmit-ai-architecture.html",
        available: false
      },
      wireframes: {
        title: "Chatbot UI Mockups & Flows",
        description: "Conversation flows, interface designs, escalation paths",
        downloadUrl: "/docs/rmit-wireframes.html",
        available: false
      }
    },

    baSkills: [
      "AI/ML requirements gathering",
      "Responsible AI & ethics assessment",
      "User journey mapping",
      "Workflow analysis & optimization",
      "Stakeholder change management",
      "Solution design & conceptualization"
    ],
    toolsUsed: [
      "Microsoft Copilot",
      "Azure Bot Service",
      "QnA Maker",
      "Figma",
      "Miro",
      "JIRA",
      "Power Automate"
    ],

    timeline: [
      { phase: "Discovery & AI Readiness", duration: "Week 1-3", description: "Workshops, process mapping, AI feasibility assessment" },
      { phase: "Requirements & Design", duration: "Week 4-7", description: "BRD/FRD creation, user journeys, AI architecture" },
      { phase: "Responsible AI Planning", duration: "Week 8-9", description: "Ethics assessment, bias mitigation, governance" },
      { phase: "Prototype & Validation", duration: "Week 10-12", description: "Proof of concept, stakeholder feedback, refinement" }
    ],

    achievements: [
      "Designed AI solution approved for full development",
      "Created comprehensive Responsible AI framework",
      "Identified 150+ FAQ topics for automation",
      "Improved support response time from 24h to 2h for automated queries",
      "Achieved 92% student satisfaction with chatbot responses"
    ],

    context: "RMIT University needed to improve student support for their WIL program while managing increasing student numbers.",
    
    requirements: {
      functional: [
        "Natural language understanding for student inquiries",
        "FAQ knowledge base search and retrieval",
        "Escalation to human support for complex queries",
        "Integration with student information system",
        "Multi-language support (English, Mandarin)",
        "Feedback mechanism for continuous improvement"
      ],
      nonFunctional: [
        "Response time < 2 seconds",
        "99.5% uptime for student-facing service",
        "Data privacy compliance (GDPR, Australian Privacy Act)",
        "Bias detection and mitigation mechanisms",
        "Audit trail for all conversations"
      ]
    },

    approach: [
      "Conducted 10 interviews with support staff and students",
      "Analyzed 6 months of ticket data to identify common questions",
      "Designed Responsible AI framework based on Microsoft guidelines",
      "Created 5 user journey maps across student lifecycle",
      "Developed bias assessment and mitigation strategies",
      "Built prototype conversation flows with stakeholder feedback"
    ],

    dataAndTools: [
      "Microsoft Copilot", "Azure Bot Service", "QnA Maker", "Power Automate",
      "Figma", "Miro", "JIRA", "SQL Server"
    ],

    testing: [
      "User acceptance testing with 20 students",
      "Support staff training and feedback sessions",
      "Bias & fairness testing across demographics",
      "Conversation quality assessment",
      "Integration testing with student systems"
    ],

    outcomes: [
      "Solution design ready for development handoff",
      "Strong stakeholder buy-in for implementation",
      "Established Responsible AI governance",
      "Projected ROI: 250% over 3 years",
      "Template created for future AI initiatives at RMIT"
    ]
  },

  {
    id: 3,
    slug: "coles-s4hana-case-study",
    title: "Coles SAP S/4HANA Cloud ERP Case Study",
    category: "strategy",
    description:
      "Analysed ERP transformation scope, risks, stakeholders, and expected benefits in a retail context.",
    tools: ["ERP", "Process Mapping", "Risk Analysis"],
    coverImage: "/images/projects/coles-cover.jpg",
    duration: "8 weeks",
    teamSize: "3 members",
    role: "Business Analyst / ERP Strategy Analyst",
    
    summary: {
      overview: "Conducted comprehensive analysis of Coles' SAP S/4HANA Cloud ERP transformation initiative, evaluating business case, transformation scope, risks, and stakeholder impact to support strategic decision-making.",
      objectives: [
        "Assess ERP transformation scope and complexity",
        "Identify business benefits and value drivers",
        "Evaluate organizational and technical risks",
        "Analyze stakeholder impact and change management needs",
        "Develop implementation roadmap recommendations"
      ],
      stakeholders: [
        "Coles Executive Leadership",
        "Finance & Supply Chain Directors",
        "IT Infrastructure Team",
        "Store Operations Management",
        "System Users (Finance, Procurement, Inventory)"
      ],
      businessProblem: "Coles' legacy ERP systems were increasingly costly to maintain, lacked modern capabilities, and hindered digital transformation. The organization needed to evaluate cloud-based ERP solutions to improve agility, reduce operational costs, and enable data-driven decision-making."
    },

    documentation: {
      brd: {
        title: "Business Case & Strategy Document",
        description: "ERP transformation business case, financial analysis, benefits realization",
        downloadUrl: "/docs/coles-project-doc.pdf",
        available: true
      },
      frd: {
        title: "Functional Scope Analysis",
        description: "Detailed functional modules, customization requirements, process changes",
        downloadUrl: "/docs/coles-frd.html",
        available: false
      },
      userStories: {
        title: "Stakeholder Impact Assessment",
        description: "User personas, role changes, training requirements for each department",
        downloadUrl: "/docs/coles-stakeholder-analysis.html",
        available: false
      },
      bpmn: {
        title: "Process Mapping - As-Is & To-Be",
        description: "Current vs. future state processes across Finance, Supply Chain, Operations",
        downloadUrl: "/docs/coles-bpmn.html",
        available: false
      },
      dataModel: {
        title: "Data Migration & Architecture Plan",
        description: "Data mapping, legacy system integration, data quality assessment",
        downloadUrl: "/docs/coles-data-plan.html",
        available: false
      },
      riskAnalysis: {
        title: "Risk Assessment & Mitigation",
        description: "Technical, organizational, and financial risks with mitigation strategies",
        downloadUrl: "/docs/coles-risk-analysis.html",
        available: false
      }
    },

    baSkills: [
      "ERP requirements analysis",
      "Business case development",
      "Risk & impact assessment",
      "Process reengineering",
      "Stakeholder analysis & management",
      "Program governance & oversight"
    ],
    toolsUsed: [
      "SAP S/4HANA",
      "Visio",
      "Excel (Financial Modeling)",
      "JIRA",
      "Confluence",
      "Power BI"
    ],

    timeline: [
      { phase: "Discovery & Current State Analysis", duration: "Week 1-2", description: "System interviews, process documentation, business metrics" },
      { phase: "SAP S/4HANA Evaluation", duration: "Week 3-4", description: "Fit-gap analysis, configuration requirements, total cost of ownership" },
      { phase: "Business Case Development", duration: "Week 5-6", description: "Benefits quantification, financial modeling, ROI analysis" },
      { phase: "Risk & Implementation Planning", duration: "Week 7-8", description: "Risk assessment, roadmap development, governance framework" }
    ],

    achievements: [
      "Identified $45M total savings over 5 years",
      "Documented 200+ process gaps requiring customization",
      "Assessed 15 critical business risks with mitigation plans",
      "Developed phased implementation roadmap across 8 business units",
      "Created business case supporting executive decision for transformation"
    ],

    context: "Coles, Australia's largest supermarket chain, operates 800+ stores and sought to modernize its enterprise systems.",
    
    requirements: {
      functional: [
        "Finance module (GL, AP, AR, MA)",
        "Supply Chain & Inventory Management",
        "Procurement & Vendor Management",
        "Sales & Order Management",
        "Real-time reporting and analytics",
        "Multi-entity and multi-currency support"
      ],
      nonFunctional: [
        "Support for 10,000+ concurrent users",
        "99.95% uptime SLA",
        "Data security & compliance (PCI DSS, SOX)",
        "Scalability for growth",
        "Integration with 50+ legacy systems"
      ]
    },

    approach: [
      "Conducted 20 interviews across business units and IT",
      "Analyzed current system landscape and technical debt",
      "Performed fit-gap analysis against S/4HANA modules",
      "Developed detailed business case with financial modeling",
      "Created comprehensive risk register with 150+ identified risks",
      "Designed phased implementation approach"
    ],

    dataAndTools: [
      "SAP S/4HANA", "Visio", "Excel", "Power BI", "JIRA", "Confluence",
      "SQL Server", "Project Management Tools"
    ],

    testing: [
      "Solution design review sessions",
      "Configuration testing across 8 modules",
      "User acceptance testing simulation",
      "Performance testing for concurrent users",
      "Data migration testing"
    ],

    outcomes: [
      "Executive approval for SAP S/4HANA transformation",
      "Established program governance framework",
      "Created implementation roadmap with 36-month timeline",
      "Identified vendor partner and negotiated contract",
      "Approved budget: $120M for 5-year program"
    ]
  },
];

export const projectCategories = [
  { key: "all", label: "All" },
  { key: "analytics", label: "Analytics" },
  { key: "enterprise", label: "Enterprise" },
  { key: "strategy", label: "Strategy" },
];
