// src/data/projects.js
import { rmitDocs } from "./rmitDocs";
import { nyc311Docs } from "./nyc311Docs";
import { colesDocs } from "./colesDocs";
import { didiDocs } from "./didiDocs";
import { oppoDocs } from "./oppoDocs";
import { suffescomDocs } from "./suffescomDocs";

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
        content: nyc311Docs.brd,
      },
      frd: {
        title: "Functional Requirements Document",
        description: "Functional specifications for the forecasting system, API requirements, and data inputs",
        content: nyc311Docs.frd,
      },
      userStories: {
        title: "User Stories & Acceptance Criteria",
        description: "User stories from the perspective of operations managers, analysts, and stakeholders",
        content: nyc311Docs.userStories,
      },
      bpmn: {
        title: "Process Flow Diagrams (BPMN)",
        description: "Business process diagrams showing data collection, forecasting, and reporting workflows",
        content: nyc311Docs.bpmn,
      },
      dataModel: {
        title: "Data Model & Architecture",
        description: "ER diagrams, data mappings, and system architecture documentation",
        content: nyc311Docs.dataModel,
      },
      wireframes: {
        title: "Wireframes & UI Mockups",
        description: "Dashboard and reporting interface designs",
        content: nyc311Docs.wireframes,
      },
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
        content: rmitDocs.brd,
      },
      frd: {
        title: "Functional Requirements Document",
        description: "Chatbot capabilities, AI model requirements, integration specifications",
        content: rmitDocs.frd,
      },
      userStories: {
        title: "User Stories & Journey Maps",
        description: "Student journeys, support staff workflows, admin requirements",
        content: rmitDocs.userStories,
      },
      bpmn: {
        title: "Process Flows (Current & Future State)",
        description: "As-is and to-be process diagrams with chatbot integration points",
        content: rmitDocs.bpmn,
      },
      dataModel: {
        title: "AI Solution Architecture",
        description: "Responsible AI framework, data governance, model requirements",
        content: rmitDocs.dataModel,
      },
      wireframes: {
        title: "Chatbot UI Mockups & Flows",
        description: "Conversation flows, interface designs, escalation paths",
        content: rmitDocs.wireframes,
      },
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
        content: colesDocs.brd,
      },
      frd: {
        title: "Functional Scope Analysis",
        description: "Detailed functional modules, customization requirements, process changes",
        content: colesDocs.frd,
      },
      userStories: {
        title: "Stakeholder Impact Assessment",
        description: "User personas, role changes, training requirements for each department",
        content: colesDocs.userStories,
      },
      bpmn: {
        title: "Process Mapping - As-Is & To-Be",
        description: "Current vs. future state processes across Finance, Supply Chain, Operations",
        content: colesDocs.bpmn,
      },
      dataModel: {
        title: "Data Migration & Architecture Plan",
        description: "Data mapping, legacy system integration, data quality assessment",
        content: colesDocs.dataModel,
      },
      riskAnalysis: {
        title: "Risk Assessment & Mitigation",
        description: "Technical, organizational, and financial risks with mitigation strategies",
        content: colesDocs.riskAnalysis,
      },
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

  {
    id: 4,
    slug: "didi-accessibility-inclusivity",
    title: "Improving Accessibility & Inclusivity in DiDi Rideshare Services",
    category: "strategy",
    description:
      "Developed accessibility and inclusivity solutions for DiDi's rideshare services in Melbourne, addressing service gaps for passengers with disabilities, parents, and service animal owners.",
    tools: ["Market Research", "Competitor Analysis", "Business Model Canvas", "Process Mapping", "PowerPoint"],
    coverImage: "/images/projects/didi-cover.jpg",
    duration: "8-12 weeks",
    teamSize: "4 members",
    role: "Business Analyst / Strategy Consultant",
    
    // Project Summary
    summary: {
      overview: "Addressed critical accessibility and inclusivity challenges within DiDi's rideshare services through comprehensive market research, competitor benchmarking, and stakeholder analysis. Proposed scalable, sustainable solutions to enhance customer experience, improve compliance, and strengthen DiDi's competitive positioning in the Melbourne market.",
      objectives: [
        "Identify accessibility gaps in DiDi's current service offering",
        "Understand customer pain points through primary market research",
        "Benchmark competitor offerings and best practices",
        "Propose feasible, business-aligned solutions",
        "Align recommendations with UN Sustainable Development Goals (SDGs)",
        "Create a comprehensive strategy for accessibility improvements"
      ],
      stakeholders: [
        "DiDi Australia Management",
        "Passengers with disabilities",
        "Parents requiring child seats",
        "Service animal owners",
        "DiDi drivers and partner networks",
        "Compliance & Legal teams",
        "Marketing & Customer Experience teams"
      ],
      businessProblem: "DiDi faced significant accessibility challenges impacting market share and brand reputation: 36% of users reported discrimination when travelling with service animals, only 14% of vehicles were wheelchair-accessible, and 68% of parents avoided rideshare due to lack of child seat options. These gaps created compliance risks and limited competitive advantage against Uber."
    },

    // Documentation
    documentation: {
      brd: {
        title: "Business Requirements Document",
        description: "Detailed accessibility requirements, market research findings, and stakeholder needs analysis",
        content: didiDocs.brd,
      },
      marketResearch: {
        title: "Market Research & Competitor Analysis",
        description: "Benchmarking report comparing DiDi vs Uber accessibility features and customer insights",
        content: didiDocs.marketResearch,
      },
      businessCase: {
        title: "Business Case & Financial Model",
        description: "ROI analysis, pricing strategy, and revenue projections for proposed solutions",
        content: didiDocs.businessCase,
      },
      processFlow: {
        title: "Service Process Flows",
        description: "BPMN diagrams for ChildSeat, DidiCare, and DidiCompanion tiers",
        content: didiDocs.processFlow,
      },
      presentation: {
        title: "Strategic Recommendation Presentation",
        description: "Comprehensive presentation with market validation, solutions, and implementation roadmap",
        content: didiDocs.presentation,
      },
    },

    // Skills & Tools
    baSkills: [
      "Market research & primary data collection",
      "Stakeholder interviews (12+ interviews)",
      "Competitor benchmarking analysis",
      "Requirements gathering & pain point analysis",
      "Business model development",
      "Process mapping & service design",
      "Financial modeling & ROI analysis",
      "Strategic recommendation development"
    ],
    toolsUsed: [
      "Market Research Methodologies",
      "Competitor Analysis Framework",
      "Business Model Canvas",
      "Process Mapping (BPMN)",
      "Financial Modeling",
      "PowerPoint",
      "Excel",
      "Survey & Interview Tools"
    ],

    // Timeline
    timeline: [
      { phase: "Discovery & Interviews", duration: "Week 1-3", description: "12 in-person interviews at Melbourne Central, stakeholder mapping" },
      { phase: "Market Research", duration: "Week 2-4", description: "Competitor analysis (Uber Assist), industry benchmarking, surveys" },
      { phase: "Problem Analysis", duration: "Week 4-6", description: "Pain point synthesis, accessibility gap mapping, risk assessment" },
      { phase: "Solutions Design", duration: "Week 6-8", description: "Business model development, pricing strategy, service tiers design" },
      { phase: "Business Case Development", duration: "Week 8-10", description: "Financial modeling, ROI analysis, implementation roadmap" },
      { phase: "Final Presentation", duration: "Week 10-12", description: "Strategic presentation, stakeholder alignment, delivery" }
    ],

    // Achievements
    achievements: [
      "Identified strong willingness to pay (58-100% of respondents) for accessibility guarantees",
      "Quantified 3 major service gaps affecting 36% (service animals), 14% (wheelchair access), and 68% (child seats) of user base",
      "Designed 3 scalable service tiers: DidiChildSeat (+$8), DidiCare, and DidiCompanion",
      "Demonstrated potential $2.5M+ revenue opportunities for drivers through incentive programs",
      "Aligned recommendations with UN SDGs (3, 10, 11, 17) for credibility and impact",
      "Developed competitive advantage strategy over Uber in accessibility segment",
      "Created comprehensive implementation roadmap with risk mitigation strategies"
    ],

    // Research Findings
    context: "University semester project addressing real-world accessibility challenges in the rideshare industry. Conducted in Melbourne with focus on DiDi's market positioning and customer needs.",
    
    researchFindings: {
      accessibilityGaps: [
        "36% of users reported discrimination when travelling with service animals",
        "Only 14% of rideshare vehicles were wheelchair-accessible",
        "68% of parents avoided rideshare due to lack of child seat options",
        "Limited awareness on how to request accessible rides"
      ],
      marketOpportunities: [
        "58-100% willingness to pay premium for accessibility guarantees",
        "Untapped market segment: parents (68% potential) and disabled passengers (36% potential)",
        "Driver incentive opportunities for accessibility training and vehicle modifications",
        "Competitive differentiation against Uber in inclusive service offerings"
      ],
      competitorInsights: [
        "Uber Assist exists but lacks comprehensive coverage and awareness",
        "Limited child seat integration across Australian rideshare providers",
        "Service animal policies inconsistent and poorly communicated",
        "Opportunity gap: no provider dominates accessibility segment"
      ]
    },

    proposedSolutions: [
      {
        name: "DidiChildSeat Option",
        description: "Add-on service (+$8) allowing riders to request any vehicle size with guaranteed child seat",
        benefits: "Addresses 68% of parent segment, recurring revenue stream, driver incentive opportunity",
        image: "/images/projects/didi-childseat-solution.jpg"
      },
      {
        name: "DidiCare Tier",
        description: "Accessibility-focused ride category with trained drivers and extended wait times",
        benefits: "Premium positioning, improved service quality, driver premium compensation, compliance alignment",
        image: "/images/projects/didi-care-solution.jpg"
      },
      {
        name: "DidiCompanion Tier",
        description: "Pre-registered service animal ride option ensuring compliance and rider peace of mind",
        benefits: "Eliminates discrimination, legal compliance, builds brand trust, serves underserved market",
        image: "/images/projects/didi-companion-solution.jpg"
      }
    ],

    // Project Visuals Gallery
    visuals: [
      {
        title: "Wicked Problem Analysis",
        description: "Comprehensive identification of accessibility challenges across 5 key areas",
        image: "/images/projects/didi-wicked-problem.jpg"
      },
      {
        title: "Research Findings & Statistics",
        description: "Key accessibility statistics from primary market research and stakeholder interviews",
        image: "/images/projects/didi-research-findings.jpg"
      },
      {
        title: "DidiCompanion - Legal Compliance",
        description: "Service animal verification and regulatory compliance framework",
        image: "/images/projects/didi-companion-compliance.jpg"
      }
    ],

    requirements: {
      functional: [
        "Rider app feature for accessibility tier selection",
        "Driver interface for accessibility training and certification",
        "Child seat equipment tracking and verification system",
        "Service animal registry with rider verification",
        "Rating and feedback system specific to accessibility experience",
        "Compliance documentation and audit trails"
      ],
      nonFunctional: [
        "Scalable to support 100,000+ vehicles across Australia",
        "Compliance with Australian Disability Discrimination Act",
        "Training program scalability for 50,000+ drivers",
        "Cost per additional vehicle modification < $500"
      ]
    },

    approach: [
      "Conducted 12 in-person interviews at Melbourne Central station",
      "Surveyed passengers with disabilities, parents, and service animal owners",
      "Benchmarked Uber Assist and international rideshare accessibility features",
      "Analyzed regulatory requirements and compliance landscape",
      "Developed 3 service tiers with individual business models",
      "Created financial projections for revenue and cost-benefit analysis",
      "Aligned solutions with UN Sustainable Development Goals"
    ],

    dataAndTools: [
      "Primary market research data (12 interviews, 50+ surveys)",
      "Competitor analysis framework",
      "Business Model Canvas",
      "Financial modeling (Excel)",
      "Process mapping (BPMN)",
      "Stakeholder analysis matrix",
      "Risk assessment matrix",
      "Strategic recommendations framework"
    ],

    testing: [
      "Interview and survey data validation",
      "Competitor feature comparison analysis",
      "Business model stress testing",
      "Financial scenario analysis (optimistic, realistic, pessimistic)",
      "Stakeholder feedback incorporation"
    ],

    outcomes: [
      "University project completed with high distinction",
      "Strategic recommendations approved by academic panel",
      "Market-validated solution design ready for implementation",
      "Comprehensive business case for DiDi Australia consideration",
      "Established accessibility & inclusivity as competitive advantage",
      "Created implementation roadmap with 12-18 month timeline"
    ],

    additionalMetrics: {
      marketSize: "36% (service animals) + 68% (parents) + 14% (wheelchair users) = 118% addressable market growth",
      revenueOpportunity: "$2.5M+ annually through add-ons and driver incentives",
      customerSatisfaction: "58-100% willing to pay premium for accessibility",
      competitiveAdvantage: "Only comprehensive accessibility solution vs. fragmented competitor offerings"
    }
  },
];

  // Add freelancing projects below this line
  // {
  //   id: 5,
  //   slug: "my-freelance-project",
  //   title: "Freelance Project Title",
  //   category: "freelancing",
  //   description: "Short description of the project.",
  //   tools: ["Tool 1", "Tool 2"],
  //   coverImage: "/images/projects/cover.jpg",
  //   duration: "X weeks",
  //   teamSize: "Solo",
  //   role: "Business Analyst",
  //   summary: { overview: "", objectives: [], stakeholders: [], businessProblem: "" },
  //   documentation: {},
  //   baSkills: [],
  //   toolsUsed: [],
  //   timeline: [],
  //   achievements: [],
  //   context: "",
  //   requirements: { functional: [], nonFunctional: [] },
  //   approach: [],
  //   dataAndTools: [],
  //   testing: [],
  //   outcomes: [],
  // },

  {
    id: 5,
    slug: "oppo-device-qa",
    title: "OPPO Reno 7 & Find X3 — Device QA & 5G Validation",
    category: "qa",
    description: "Led hardware-software integration testing, 5G network validation, root cause analysis, and test documentation for OPPO's flagship Reno 7 and Find X3 smartphone lines.",
    tools: ["Test Strategy", "5G Testing", "Root Cause Analysis", "Kaizen", "Android QA"],
    coverImage: "/images/projects/oppo-cover.jpg",
    duration: "22 months",
    teamSize: "12 members",
    role: "Testing Engineer / QA Specialist",
    summary: {
      overview: "Delivered end-to-end quality assurance for OPPO's flagship Reno 7 and Find X3 smartphone lines, covering hardware-software integration testing, 5G SA/NSA network validation, camera system QA, battery endurance benchmarking, and systematic root cause analysis. Applied Kaizen principles to drive continuous improvement, reducing field defect escape rate by 38% from Find X2 to Find X3.",
      objectives: [
        "Validate 5G SA and NSA connectivity across target market frequency bands",
        "Ensure hardware-software integration stability across firmware build iterations",
        "Achieve < 4.0 field defect escape rate per 10,000 units at market launch",
        "Build reusable test documentation frameworks for future OPPO device lines",
        "Implement Kaizen-based continuous improvement in QA workflow and coverage",
        "Systematically analyse market failures and feed learnings back into pre-launch testing",
      ],
      stakeholders: [
        "OPPO R&D Engineering Team (firmware and hardware design)",
        "Software Development Team (Android OS and app layer)",
        "Product Management (feature specifications and market requirements)",
        "After-Sales & Customer Service (field defect reporting)",
        "Carrier Certification Teams (network operator requirements)",
        "Manufacturing Quality Control (pre-production device pool)",
      ],
      businessProblem: "OPPO's rapid device launch cadence created pressure on QA cycles, leading to field defect escape rates that damaged brand reputation in key markets (Australia, Europe). The lack of structured test documentation and root cause analysis processes meant recurring defect patterns were not being systematically prevented across device generations.",
    },
    documentation: {
      testStrategy: {
        title: "Test Strategy Document",
        description: "Overall QA approach, test types, scope, entry/exit criteria, and risk-based testing framework",
        content: oppoDocs.testStrategy,
      },
      testCases: {
        title: "Test Case Documentation",
        description: "Structured test cases for 5G connectivity, camera system, battery endurance, and hardware-software integration",
        content: oppoDocs.testCases,
      },
      rootCause: {
        title: "Root Cause Analysis Framework",
        description: "5-Why methodology, defect classification matrix, fishbone categories, and RCA template",
        content: oppoDocs.rootCause,
      },
      processFlow: {
        title: "QA Process Flow Diagrams",
        description: "End-to-end QA lifecycle: test design, execution, defect management, and Kaizen improvement cycle",
        content: oppoDocs.processFlow,
      },
      marketInsights: {
        title: "Market Failure & Field Insights",
        description: "Field defect analysis, top market defect categories, Kaizen actions taken, and before/after metrics",
        content: oppoDocs.marketInsights,
      },
    },
    baSkills: [
      "Test strategy design",
      "Root cause analysis (5-Why, Fishbone)",
      "Test documentation & traceability",
      "Risk-based test planning",
      "Defect triage & severity classification",
      "Kaizen continuous improvement",
      "Market failure analysis",
      "Cross-functional stakeholder reporting",
    ],
    toolsUsed: [
      "JIRA (defect tracking)",
      "Confluence (test documentation)",
      "Network simulators (5G SA/NSA)",
      "Robotic test automation rigs",
      "Thermal imaging equipment",
      "Android Debug Bridge (ADB)",
      "Benchmarking tools (AnTuTu, Geekbench)",
      "DXOMARK camera criteria",
    ],
    timeline: [
      { phase: "Find X3 Alpha Testing", duration: "Month 1–3", description: "Test strategy design, test case creation, lab environment setup, 5G network configuration" },
      { phase: "Find X3 Beta & Regression", duration: "Month 4–6", description: "Full test execution, defect triage, RCA on P1/P2 defects, regression automation (30% coverage)" },
      { phase: "Find X3 RC & Market Launch", duration: "Month 7–9", description: "Release gate validation, exit criteria verification, carrier certification support, Kaizen retrospective" },
      { phase: "Reno 7 Alpha Testing", duration: "Month 10–14", description: "Kaizen learnings applied from Find X3; expanded 5G and camera test suites; new test automation scripts" },
      { phase: "Reno 7 Beta & RC", duration: "Month 15–19", description: "Full regression, RCA completion, market failure analysis from Find X3 field data incorporated" },
      { phase: "Reno 7 Launch & Field Review", duration: "Month 20–22", description: "Post-launch field defect monitoring, market failure report, final Kaizen actions documented" },
    ],
    achievements: [
      "Field defect escape rate reduced 38%: from 6.1 (Find X2) to 3.8 per 10,000 units (Find X3)",
      "5G field connectivity complaints reduced 36% through expanded pre-launch handover test suite",
      "Regression automation coverage increased from 18% to 31% across the engagement",
      "P1 defect resolution time reduced 44%: from 3.2 days to 1.8 days average",
      "Test cycle duration reduced 18%: from 11 weeks to 9 weeks (alpha to RC)",
      "Zero P1/P2 field defects attributable to test coverage gaps on Reno 7 launch",
      "Field Learning Repository created in Confluence — used by QA team on subsequent OPPO device lines",
    ],
    context: "OPPO is one of the world's top-5 smartphone manufacturers. The Reno 7 and Find X3 were flagship and ultra-premium devices targeting Australia, Europe, and China markets, with strong competition from Samsung and Apple requiring near-zero defect tolerance at launch.",
    requirements: {
      functional: [
        "5G SA and NSA connectivity validated across all target market frequency bands",
        "Camera image quality meets DXOMARK-aligned baseline criteria for each market segment",
        "Battery endurance within ± 5% of advertised specification under standardised usage",
        "All P1/P2 defects resolved and verified before RC sign-off",
        "Root cause analysis completed for all Medium+ defects before closure",
      ],
      nonFunctional: [
        "Defect escape rate at market launch: < 4.0 per 10,000 units",
        "5G connectivity pass rate: ≥ 99% across all tested frequency bands",
        "Test cycle from alpha to RC: ≤ 9 weeks",
        "Regression automation coverage: ≥ 30%",
        "Device thermal: no thermal shutdown under standard usage conditions",
      ],
    },
    approach: [
      "Conducted risk analysis of each device's novel components to prioritise test coverage",
      "Designed comprehensive test strategy covering functional, performance, connectivity, and endurance testing",
      "Created structured test case library in JIRA/Confluence aligned to hardware specs and software features",
      "Applied 5-Why and Fishbone RCA methodology for all Medium+ severity defects",
      "Ran monthly field defect analysis from after-sales data; fed findings back into test suite updates",
      "Implemented Kaizen retrospectives after each milestone; tracked action items to completion",
      "Shared market failure insights across R&D, Software, and Product in monthly cross-team sessions",
    ],
    dataAndTools: [
      "JIRA", "Confluence", "5G network simulators", "RF signal attenuators",
      "Robotic test automation rigs", "ADB (Android Debug Bridge)", "Thermal cameras",
      "Geekbench / AnTuTu benchmarking", "Excel (defect tracking)", "Postman (API validation)",
    ],
    testing: [
      "Hardware-software integration testing across all firmware build iterations",
      "5G SA/NSA connectivity and handover testing in RF lab environment",
      "Camera image quality testing under controlled lighting conditions",
      "Battery endurance and fast-charge cycle testing (robotic scripted usage)",
      "Thermal performance testing under sustained load scenarios",
      "Field defect reproduction testing from market feedback reports",
    ],
    outcomes: [
      "Both devices launched on schedule with defect rates below target thresholds",
      "Find X3 received strong reviews in Australian and European markets with minimal post-launch defect reports",
      "QA process improvements documented and handed over for use in subsequent OPPO device lines",
      "Field Learning Repository in Confluence became a reference resource for the wider QA organisation",
      "Kaizen culture embedded in QA team — retrospective practice continued beyond the engagement",
    ],
  },

  {
    id: 6,
    slug: "suffescom-hyperlocal-cloud",
    title: "Suffescom Hyperlocal Cloud — Multi-Vertical Business Platform",
    category: "qa",
    description: "QA and product validation for Suffescom's white-label SaaS platform enabling a single dashboard to manage retail, restaurant, delivery, and taxi businesses for hyperlocal entrepreneurs.",
    tools: ["API Testing", "User Stories", "E2E Testing", "Agile QA", "Customer Journey"],
    coverImage: "/images/projects/suffescom-cover.jpg",
    duration: "6 months",
    teamSize: "5 members",
    role: "Quality Analyst / Product QA",
    summary: {
      overview: "Led QA delivery for Suffescom's Hyperlocal Cloud platform — a white-label SaaS solution that gives entrepreneurs and enterprises a single admin dashboard to launch and manage retail stores, restaurants, delivery operations, and taxi/ride-hailing services. Delivered across 3 client deployments with zero P1/P2 defects at any go-live.",
      objectives: [
        "Validate all four business verticals: Retail, Restaurant, Delivery, and Taxi/Ride-Hailing",
        "Ensure seamless cross-module integration and real-time data accuracy",
        "Test white-label customisation across all customer-facing surfaces",
        "Achieve zero P1/P2 defects at client deployment go-live",
        "Analyse defect patterns and drive process improvements to reduce defect injection rate",
        "Validate customer journey flows end-to-end: order placement through delivery completion",
      ],
      stakeholders: [
        "Suffescom Product Manager (release owner and QA sign-off authority)",
        "White-label B2B Clients (operators deploying branded apps to their customers)",
        "End Customers — B2C (consumers placing orders or booking rides)",
        "Delivery Drivers and Taxi Drivers (driver app users)",
        "Development Team (feature development and bug resolution)",
        "Business Analysts (user story and requirement owners)",
      ],
      businessProblem: "White-label SaaS platforms serving multiple business verticals are inherently complex to QA — a defect in the shared order management or payment service can cascade across all verticals simultaneously. Suffescom needed a structured QA process to validate cross-module integration, ensure white-label customisation did not break core functionality, and deliver defect-free builds to B2B clients with high reliability expectations.",
    },
    documentation: {
      brd: {
        title: "Business Requirements Document",
        description: "Platform modules, business objectives, stakeholder register, and success criteria for the Hyperlocal Cloud platform",
        content: suffescomDocs.brd,
      },
      userStories: {
        title: "User Stories & Acceptance Criteria",
        description: "User stories from business owner, customer, delivery agent, and admin perspectives with acceptance criteria",
        content: suffescomDocs.userStories,
      },
      testStrategy: {
        title: "Test Strategy & QA Plan",
        description: "QA approach, module test coverage matrix, API testing strategy, and defect severity framework",
        content: suffescomDocs.testStrategy,
      },
      processFlow: {
        title: "System Architecture & Process Flows",
        description: "Platform architecture, restaurant order flow, delivery dispatch flow, and cross-module integration scenarios",
        content: suffescomDocs.processFlow,
      },
      defectLog: {
        title: "Defect Analysis Report",
        description: "Defect distribution by module, top critical defects with RCA, pattern analysis, and process improvements",
        content: suffescomDocs.defectLog,
      },
    },
    baSkills: [
      "User story writing & refinement",
      "Acceptance criteria definition",
      "Customer journey mapping",
      "API endpoint testing",
      "Cross-module integration testing",
      "Defect pattern analysis",
      "Root cause analysis",
      "Change request management",
    ],
    toolsUsed: [
      "JIRA (defect tracking)",
      "Postman (API testing)",
      "Newman (API test automation)",
      "Selenium (web UI automation)",
      "Appium (mobile app testing)",
      "Confluence (documentation)",
      "Slack (team communication)",
      "Google Sheets (test tracking)",
    ],
    timeline: [
      { phase: "Onboarding & Test Planning", duration: "Week 1–2", description: "Platform familiarisation, test strategy creation, test case inventory review" },
      { phase: "Retail & Restaurant QA", duration: "Week 3–7", description: "Full test execution for Retail and Restaurant modules; API testing; defect logging" },
      { phase: "Delivery & Taxi QA", duration: "Week 8–13", description: "Delivery dispatch and taxi booking validation; driver app testing; real-time tracking verification" },
      { phase: "Integration & White-Label QA", duration: "Week 14–17", description: "Cross-module integration testing; white-label customisation regression; Client 1 deployment" },
      { phase: "Client Deployments 2 & 3", duration: "Week 18–22", description: "Deployment regression for Clients 2 and 3; defect pattern analysis; process improvements implemented" },
      { phase: "Wrap-Up & Handover", duration: "Week 23–26", description: "Final defect analysis report; test case handover to internal QA team; lessons learned session" },
    ],
    achievements: [
      "Zero P1/P2 defects at go-live across all 3 client deployments",
      "284 total defects logged across 6 months; 100% of Critical/High resolved before any deployment",
      "Defect injection rate reduced 31% in Months 5–6 vs. Months 1–2 through process improvements",
      "API test coverage expanded from 40 to 95 negative test cases based on defect pattern analysis",
      "Android OS compatibility matrix introduced — mobile P2 defects reduced 40%",
      "Cross-module integration test suite expanded from 15 to 32 scenarios — P2 integration defects reduced 35%",
      "Defect pattern report shared with Development Lead monthly — measurable reduction in repeat defect types",
    ],
    context: "Suffescom Solutions is a software development company specialising in on-demand and hyperlocal SaaS products. The Hyperlocal Cloud platform targets small-to-medium business operators in the food, retail, logistics, and transport sectors seeking a unified technology platform.",
    requirements: {
      functional: [
        "End-to-end order flow functional across all 4 verticals (Retail, Restaurant, Delivery, Taxi)",
        "Super Admin dashboard aggregates real-time data from all modules within 3-second refresh",
        "White-label branding (logo, colours, domain) propagates to all surfaces within 60 seconds",
        "Real-time driver/delivery tracking updates every 10 seconds on customer map",
        "API response time ≤ 500ms for order and tracking endpoints under standard load",
      ],
      nonFunctional: [
        "Zero P1/P2 defects at client deployment go-live",
        "Mobile apps (iOS and Android) rating ≥ 4.0/5.0 on app stores",
        "Platform uptime ≥ 99.5% during client business hours",
        "White-label configuration deployable by client in < 30 minutes",
        "Regression suite execution: full suite in ≤ 2 business days",
      ],
    },
    approach: [
      "Analysed user stories and acceptance criteria for all four verticals to design test coverage",
      "Created API test collections in Postman for all critical order and tracking endpoints",
      "Executed customer journey flows end-to-end for each vertical — place order through completion",
      "Ran cross-module integration scenarios to test shared services (payment, notifications, tracking)",
      "Performed white-label regression after each branding configuration change",
      "Tracked defect patterns monthly and raised process improvement recommendations to Development Lead",
      "Documented RCA for all P1/P2 defects with corrective and preventive actions",
    ],
    dataAndTools: [
      "Postman", "Newman", "Selenium", "Appium", "JIRA",
      "Confluence", "Slack", "Google Sheets", "Android Studio (device emulation)", "Xcode (iOS testing)",
    ],
    testing: [
      "Functional testing for all four business vertical modules",
      "API testing: positive, negative, boundary, and auth cases for all critical endpoints",
      "End-to-end customer journey testing across Retail, Restaurant, Delivery, and Taxi flows",
      "Cross-module integration testing: 32 scenarios covering shared services",
      "White-label customisation regression after every deployment build",
      "Mobile compatibility testing: Android 10/11/12 and iOS 14/15/16",
    ],
    outcomes: [
      "3 successful client deployments with zero critical defects at go-live",
      "Platform QA process documentation handed over and adopted by Suffescom's internal QA team",
      "API test library of 95+ negative test cases retained as reusable asset for future platform modules",
      "Defect pattern analysis contributed to development team training session on common error patterns",
      "Client satisfaction: all 3 clients renewed contract for ongoing maintenance support",
    ],
  },
];
// Add freelancing projects inside the array above this line

export const projectCategories = [
  { key: "all", label: "All" },
  { key: "analytics", label: "Analytics" },
  { key: "enterprise", label: "Enterprise" },
  { key: "strategy", label: "Strategy" },
  { key: "qa", label: "QA & Testing" },
  { key: "freelancing", label: "Freelancing" },
];
