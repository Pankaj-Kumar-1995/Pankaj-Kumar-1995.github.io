export const colesDocs = {
  brd: {
    sections: [
      {
        heading: "Executive Summary",
        body: "This Business Case & Strategy Document presents the rationale and requirements for Coles Group's migration from its 20-year-old legacy ERP systems to SAP S/4HANA Cloud. The transformation consolidates 12 disparate systems into a single integrated platform, targeting $45M in net savings over 5 years and enabling real-time financial and supply chain visibility across 800+ stores.",
      },
      {
        heading: "Business Objectives",
        list: [
          "Modernise ERP infrastructure across all 8 Coles business units and 800+ stores",
          "Reduce total cost of ownership by $45M over 5 years (net of implementation cost)",
          "Enable real-time financial and supply chain visibility, eliminating T-1 day data lag",
          "Standardise processes across business units, reducing manual reconciliation effort by 80%",
          "Decommission all 12 legacy systems by Month 36, saving $18M/year in maintenance",
          "Create a modern data foundation to support future AI and analytics initiatives",
        ],
      },
      {
        heading: "Scope",
        subsections: [
          {
            title: "In Scope (Phase 1)",
            list: [
              "Finance module: GL, AP, AR, Fixed Assets, Cost Centre Accounting",
              "Supply Chain & Inventory Management: procurement, warehouse, stock replenishment",
              "Procurement & Vendor Management: PO processing, supplier portal (SAP Ariba)",
              "Sales & Order Management: store ordering, inter-store transfers, returns",
              "Embedded analytics: SAP Analytics Cloud for operational and financial reporting",
              "All 800+ Australian Coles stores and 8 business units",
            ],
          },
          {
            title: "Out of Scope (Deferred)",
            list: [
              "HR/Payroll: deferred to Phase 2 (SAP SuccessFactors — Month 24)",
              "E-commerce platform integration: Phase 3 (Month 36)",
              "International operations: Australian Coles Group entities only",
              "Flybuys loyalty system: retained as-is with real-time API integration",
            ],
          },
        ],
      },
      {
        heading: "Financial Summary",
        table: {
          headers: ["Cost / Benefit Category", "Year 1 (AUD)", "Years 2–5 Annual (AUD)", "5-Year Total (AUD)"],
          rows: [
            ["Implementation & system integration", "$85M", "—", "$85M"],
            ["SAP licence (cloud subscription)", "$12M", "$5M/year", "$32M"],
            ["Training & change management", "$8M", "$1M/year", "$12M"],
            ["Total investment", "", "", "$129M"],
            ["Legacy system decommission savings", "—", "$18M/year", "$54M (Yrs 2–5)"],
            ["Process efficiency savings", "—", "$12M/year", "$36M (Yrs 2–5)"],
            ["Working capital improvement", "—", "$4M/year", "$12M (Yrs 2–5)"],
            ["Total 5-year savings", "", "", "$102M"],
            ["Net 5-year benefit", "", "", "+$45M (after $129M investment)"],
          ],
        },
      },
      {
        heading: "Stakeholder Register",
        table: {
          headers: ["Stakeholder", "Role", "Interest", "Influence"],
          rows: [
            ["CEO & Executive Leadership", "Executive sponsor; final investment approval", "High", "High"],
            ["Finance Director", "Program champion; primary Finance module owner", "High", "High"],
            ["Supply Chain Director", "Key stakeholder; Supply Chain module owner", "High", "High"],
            ["CIO / IT Infrastructure GM", "Technical implementation lead", "Medium", "High"],
            ["Store Operations GM", "Change management; 800+ store adoption", "High", "Medium"],
            ["SAP SE (Vendor)", "Solution provider; implementation partner", "Medium", "High"],
            ["External System Integrator", "Delivery partner (TBD — RFP in progress)", "Medium", "High"],
          ],
        },
      },
      {
        heading: "Success Criteria",
        list: [
          "All 6 SAP modules live and operating across all business units by Month 36",
          "Period-end financial close reduced from 8–10 days to 3 business days",
          "PO error rate reduced from 35% to < 5%",
          "Legacy system maintenance cost reduced by $18M/year by Month 24",
          "User adoption rate ≥ 85% across all roles within 60 days of go-live",
          "Zero critical data migration errors (financial misstatements) at cutover",
          "PCI DSS and SOX compliance verified by external auditor at go-live",
        ],
      },
      {
        heading: "Constraints",
        list: [
          "Total Phase 1 budget cap: AUD $120M",
          "Go-live target: Month 36 from project kick-off",
          "SAP infrastructure must run on SAP's managed Azure cloud (RISE with SAP)",
          "Coles financial year-end (June) is a hard blackout period — no major releases during June",
          "Compliance: PCI DSS Level 1, SOX Section 302/404, Australian Taxation Office STP Phase 2",
          "Vendor contract for legacy ERP support expires Month 24 — migration must be substantially complete by then",
        ],
      },
    ],
  },

  frd: {
    sections: [
      {
        heading: "System Overview",
        body: "SAP S/4HANA Cloud (RISE with SAP) will replace 12 legacy systems with 6 integrated functional modules on a single platform. The solution leverages SAP's Business Technology Platform (BTP) for integrations and SAP Analytics Cloud for embedded reporting. A middleware integration layer (SAP Integration Suite) bridges S/4HANA to retained external systems.",
      },
      {
        heading: "SAP Module Functional Requirements",
        table: {
          headers: ["Module", "Business Area", "Key Processes", "Customisation Level"],
          rows: [
            ["Finance (FI/CO)", "Finance HQ", "GL, AP/AR, Fixed Assets, Cost Centre allocation, period-end close", "Medium — Coles Chart of Accounts, approval workflows"],
            ["Materials Management (MM)", "Supply Chain", "Purchase orders, goods receipt, inventory valuation, 50K+ SKU management", "High — multi-tier supplier pricing, Coles category hierarchy"],
            ["Sales & Distribution (SD)", "Retail Ops", "Store ordering, inter-store transfers, pricing rules, returns management", "High — 800+ store pricing configurations, promotional rules"],
            ["Production Planning (PP)", "Bakery & Fresh", "Production scheduling, batch management, shelf-life tracking", "Medium — fresh product batch rules"],
            ["Plant Maintenance (PM)", "Store & DC Ops", "Equipment maintenance schedules, service order management", "Low — standard SAP PM processes"],
            ["Controlling (CO)", "Finance HQ", "Profit centre accounting, internal orders, budgeting & forecasting", "Medium — Coles organisational hierarchy mapping"],
          ],
        },
      },
      {
        heading: "Key Configuration Requirements",
        list: [
          "Custom Chart of Accounts (COA) redesigned and mapped to Coles' financial reporting standards (IFRS)",
          "Multi-level pricing rules configured for 800+ stores (geographic, promotional, seasonal, TPR)",
          "50,000+ Material Master records migrated, cleansed, and validated before go-live",
          "8,000+ Vendor Master records consolidated from 12,400 legacy records (35% duplicate rate)",
          "Cost centre hierarchy aligned to Coles' 8-level organisational structure",
          "PO authorisation matrix configured by category and value tier (14 approval levels)",
          "Automated three-way matching (PO → GR → Invoice) configured for all AP transactions",
          "Dunning processes configured for AR with Coles-specific credit terms by customer segment",
        ],
      },
      {
        heading: "Integration Requirements",
        list: [
          "Flybuys Loyalty System — real-time API integration (read-only customer transaction feed)",
          "Store POS Systems — daily sales data ingestion via SAP Integration Suite middleware",
          "Logistics Carrier APIs (Toll, Australia Post, StarTrack) — shipment tracking and POD confirmation",
          "Australian Taxation Office — STP Phase 2 payroll reporting (Phase 2 scope) and GST BAS filing",
          "ANZ Bank — EFT payment processing for AP disbursements via Direct Entry",
          "Coles Online (e-commerce) — Phase 3 scope; API bridge maintained during transition",
          "50+ legacy system integrations — phased decommission over 36 months; integration bridge via middleware",
        ],
      },
      {
        heading: "Non-Functional Requirements",
        table: {
          headers: ["ID", "Requirement", "Target"],
          rows: [
            ["NFR-001", "Concurrent system users (peak)", "10,000+ (Mon 09:00 AM peak)"],
            ["NFR-002", "System uptime (business hours)", "99.95% — max 22 mins unplanned downtime/month"],
            ["NFR-003", "Period-end financial close", "≤ 3 business days (from 8–10 currently)"],
            ["NFR-004", "Overnight batch processing completion", "All batch jobs complete by 05:00 AM daily"],
            ["NFR-005", "Standard report generation", "< 10 seconds for pre-built reports"],
            ["NFR-006", "Data security & compliance", "PCI DSS Level 1; SOX 302/404; ISO 27001"],
            ["NFR-007", "Disaster recovery (RTO)", "< 4 hours — business-critical processes"],
            ["NFR-008", "Data recovery point objective (RPO)", "< 1 hour for financial data"],
          ],
        },
      },
    ],
  },

  userStories: {
    sections: [
      {
        heading: "Stakeholder Impact Overview",
        body: "The SAP S/4HANA transformation impacts approximately 5,700 system users across 8 business units and 800+ stores. Impact ranges from fundamental workflow changes for Finance and Supply Chain staff (high impact) to simplified store-level ordering interfaces for store managers (low-medium impact). A structured change management programme is essential to achieving the 85% adoption target within 60 days of go-live.",
      },
      {
        heading: "Department Impact Analysis",
        table: {
          headers: ["Department", "Users", "Impact Level", "Key Change", "Training Duration"],
          rows: [
            ["Finance (HQ)", "700", "High", "Redesigned GL workflows; automated reconciliation; 3-day close", "21 hours (classroom + simulation)"],
            ["Finance Shared Services (AP/AR)", "250", "High", "3-way match automation; digital invoice processing; new dunning", "21 hours (role-specific)"],
            ["Supply Chain & Procurement", "280", "High", "New MM module; automated PO creation; SAP Ariba supplier portal", "14 hours"],
            ["Store Operations (800 stores)", "4,600", "Medium", "Fiori mobile app for ordering; real-time stock visibility", "4 hours (e-learning + in-store)"],
            ["Store Managers (800)", "800", "Low–Medium", "New reporting dashboard; PO authorisation workflow", "4 hours"],
            ["IT Department", "120", "High", "SAP Basis admin; integration management; helpdesk process changes", "40 hours (technical specialist)"],
          ],
        },
      },
      {
        heading: "User Personas",
        subsections: [
          {
            title: "Finance Analyst — HQ",
            body: "3–5 years at Coles; currently Excel-heavy with T-1 day data. Key concern: data accuracy during migration and loss of familiar workarounds.",
            list: [
              "Current pain: Manual month-end reconciliation takes 4–5 days; no real-time GL visibility",
              "To-be experience: SAP Fiori real-time dashboard; automated reconciliation; 3-day close process",
              "Key concern: Will my journal entry templates migrate? Who do I call when SAP throws an error?",
              "Training need: SAP Fiori navigation, Finance core processes, period-end close simulation (21 hrs)",
              "Change risk: Medium-High — high dependency on legacy system familiarity",
            ],
          },
          {
            title: "Supply Chain Planner",
            body: "5–8 years at Coles; manages 8,000+ vendor relationships and daily PO creation. Currently uses 3 separate systems; manually reconciles stock discrepancies.",
            list: [
              "Current pain: PO creation across 3 systems takes 45 min; 35% of POs require manual correction",
              "To-be experience: Single MM screen; automated PO for standard orders; < 10 min process end-to-end",
              "Key concern: Supplier relationship continuity during cutover; SAP Ariba adoption by vendors",
              "Training need: MM module, SAP Ariba, vendor integration workflows (14 hrs + 2 vendor workshops)",
              "Change risk: High — critical role; disruption during cutover has direct supply chain impact",
            ],
          },
          {
            title: "Store Operations Manager",
            body: "Varies widely across 800 stores; focus is on floor operations; varying IT literacy. Minimal time available for system training.",
            list: [
              "Current pain: Legacy web portal for store ordering; stock count errors; no real-time replenishment visibility",
              "To-be experience: SAP Fiori mobile app; simple ordering interface; automated reorder alerts; real-time stock",
              "Key concern: App reliability on store device; what to do if the system is down",
              "Training need: Fiori store app only (4 hrs: e-learning + 30-min in-store session with super-user)",
              "Change risk: Low-Medium — simplified interface vs. legacy; hypercare team on-site in Week 1",
            ],
          },
          {
            title: "IT Administrator",
            body: "SAP Basis and integration specialist. Responsible for system performance, user provisioning, and interface management post-go-live.",
            list: [
              "Current pain: Maintaining 12 legacy systems with varying vendor support levels; $18M/year cost",
              "To-be experience: Single SAP system; RISE with SAP managed infrastructure; standardised support model",
              "Key concern: Knowledge transfer timeline from system integrator; on-call support model at go-live",
              "Training need: SAP Basis administration, SAP Integration Suite, BTP platform (40 hrs specialist)",
              "Change risk: Medium — dependency on SI knowledge transfer quality",
            ],
          },
        ],
      },
      {
        heading: "Change Management Strategy",
        list: [
          "Executive sponsorship programme: CEO video messages at project milestones; Finance Director champions Finance team",
          "Super-user network: 80 super-users identified (1 per ~65 end users); trained 8 weeks before go-live",
          "Change readiness assessments at Month 3, 6, 9, and 12 milestones with structured risk rating",
          "Resistance management plan: Finance and Supply Chain identified as highest-risk groups — additional workshops and 1:1 coaching",
          "60-day hypercare period post-go-live: 50 additional helpdesk FTE; on-site support for top 20 stores in Week 1",
          "Benefits realisation dashboard: monthly KPI scorecard shared with Executive team from Month 6",
          "Lessons learned review at Month 3, 6, and 12 post-go-live; findings incorporated into Phase 2 planning",
        ],
      },
    ],
  },

  bpmn: {
    sections: [
      {
        heading: "As-Is ERP Landscape Overview",
        body: "Coles currently operates 12 disparate systems including a 20-year-old core ERP (Oracle-based), 3 separate financial reporting systems, a standalone warehouse management system (JDA), and 6 store-level ordering and point-of-sale platforms. Data reconciliation between these systems consumes significant manual effort and introduces data integrity risks.",
      },
      {
        heading: "As-Is Pain Points",
        list: [
          "12 systems with no unified data model — finance reconciliation consumes 2–3 FTE/month",
          "Period-end financial close takes 8–10 business days (industry benchmark: 3–5 days)",
          "Supplier portal disconnected from core ERP — 35% of POs require manual correction post-entry",
          "Store ordering system (legacy web portal) prone to stock errors — 2.1% overstock rate estimated",
          "Inventory data is T-1 day old — no real-time stock visibility for store replenishment decisions",
          "IT maintenance of 12 legacy systems costs $18M/year; Oracle ERP vendor support ends in 2025",
          "No single source of truth for financial data — month-end figures require 3-system reconciliation",
        ],
      },
      {
        heading: "Key Process Changes by Module",
        subsections: [
          {
            title: "Finance: Period-End Close",
            list: [
              "As-Is: Manual journal entries across 3 systems; 8–10 day close; offline Excel reconciliation workbooks",
              "To-Be: Automated accruals in S/4HANA; universal journal eliminates cross-system reconciliation; 3-day close",
              "Key change: Elimination of 400+ manual reconciliation journal entries per month",
              "Improvement: 8–10 days → 3 business days (67% reduction)",
            ],
          },
          {
            title: "Supply Chain: Purchase Order Management",
            list: [
              "As-Is: PO created manually in legacy ERP; emailed to supplier; approval via Outlook chain; 45-min process",
              "To-Be: Automated PO generation for standard orders (below threshold); SAP Ariba supplier portal; digital approval; 10-min process",
              "Key change: Supplier self-service via SAP Ariba; 3-way matching (PO → GR → Invoice) automated",
              "Improvement: 35% PO error rate → < 5%; 45 min → 10 min per PO",
            ],
          },
          {
            title: "Store Operations: Ordering & Stock Management",
            list: [
              "As-Is: Store manager uses legacy web portal for ordering; stock count via clipboard; T-1 data",
              "To-Be: SAP Fiori mobile app; automated reorder alerts based on real-time stock; cycle count via scanner",
              "Key change: Real-time stock visibility; automated replenishment triggers for fast-moving lines",
              "Improvement: 2.1% overstock rate → target < 0.8%; stock count time reduced by 60%",
            ],
          },
          {
            title: "Procurement: Vendor Management",
            list: [
              "As-Is: Vendor onboarding via email and spreadsheet; master data maintained manually in ERP; 8,000 active vendors across 12,400 records (35% duplicates)",
              "To-Be: SAP Ariba for vendor onboarding and self-service; vendor master cleansed to 8,000 unique records in S/4HANA; automated ABN validation",
              "Key change: Vendors self-manage their profile; Coles procurement team focused on strategic sourcing",
              "Improvement: Vendor data accuracy target: > 99%; onboarding time from 5 days to 1 day",
            ],
          },
        ],
      },
      {
        heading: "Process Improvement Metrics",
        list: [
          "Period-end financial close: 8–10 business days → 3 business days",
          "PO creation time: 45 minutes → 10 minutes (78% reduction)",
          "PO error rate: 35% → < 5% (3-way match automation)",
          "Inventory accuracy: 97.9% → 99.2% (real-time stock + automated cycle counts)",
          "Manual reconciliation effort: 2–3 FTE/month → 0.5 FTE/month (80% reduction)",
          "Vendor master data quality: 65% (legacy) → > 99% (post-cleanse in S/4HANA)",
          "Legacy system maintenance cost: $18M/year → $0 by Month 36 (all systems decommissioned)",
        ],
      },
    ],
  },

  dataModel: {
    sections: [
      {
        heading: "Migration Strategy Overview",
        body: "SAP recommends and Coles has adopted a Greenfield implementation approach, given the age and fragmentation of the existing landscape. A new S/4HANA system is configured from scratch with cleansed, validated data migrated in 4 defined waves. Legacy systems run in parallel for 30 days before each cutover to validate data integrity and support rollback if required.",
      },
      {
        heading: "Migration Methodology",
        subsections: [
          {
            title: "Phase 1 — Data Discovery & Profiling (Months 1–4)",
            list: [
              "Inventory all data objects across all 12 legacy systems — 67 distinct data entity types identified",
              "Data profiling: assess completeness, accuracy, consistency, and currency for each entity",
              "Document all field-level mappings between legacy systems and SAP target structures",
              "Establish data governance framework: assign a data domain owner per business unit",
              "Outcome: Data Quality Assessment Report; Data Migration Scope & Prioritisation Matrix",
            ],
          },
          {
            title: "Phase 2 — Data Cleansing & Transformation (Months 5–10)",
            list: [
              "Apply business rules to standardise: vendor ABN, material UOM, GL account format",
              "Duplicate resolution: vendor master reduced from 12,400 → 8,000 via ABN + name matching",
              "Legacy code mapping: 4,200 GL accounts mapped to new COA; 50,000 material numbers renumbered",
              "Enrichment: missing fields populated where possible (e.g., supplier category, material descriptions)",
              "Validation: each data domain owner signs off on cleansed data extract before migration",
            ],
          },
          {
            title: "Phase 3 — Migration Execution (Waves, Months 8–18)",
            list: [
              "Wave 1: Master data — vendor master, material master, customer master, GL accounts (Month 10)",
              "Wave 2: Open items — open POs, open sales orders, open invoices, open stock reservations (Month 14)",
              "Wave 3: Historical transactional data — 3 years of transactions (2.4TB) (Month 16)",
              "Wave 4: Go-live cutover — final open items and opening balances (Month 18/Month 36 per unit)",
              "Rehearsal: 2 full dress rehearsals for each wave before production execution",
            ],
          },
          {
            title: "Phase 4 — Validation & Reconciliation (Months 16–36)",
            list: [
              "Automated line-level balance reconciliation between legacy and S/4HANA for all financial entities",
              "Business owner sign-off required per data domain before go-live clearance",
              "Parallel-run period: 30 days for Finance; 2 weeks for Supply Chain",
              "Post-migration data quality report issued within 5 business days of cutover",
              "Hypercare data support: dedicated data team on-call for 60 days post-go-live",
            ],
          },
        ],
      },
      {
        heading: "Data Scope & Complexity",
        table: {
          headers: ["Data Object", "Volume", "Complexity", "Key Challenges"],
          rows: [
            ["Vendor Master", "8,000 active (from 12,400)", "High", "35% duplicates; ABN validation; Ariba onboarding"],
            ["Material Master", "52,000 SKUs", "High", "Category hierarchy remap; UOM standardisation; 18% incomplete descriptions"],
            ["Customer Master", "250,000 records", "Medium", "Address standardisation; 4% duplicates"],
            ["GL Accounts", "4,200 accounts", "Medium", "Full COA redesign; 400 inactive to archive; 60 new accounts"],
            ["Historical Transactions", "3 years / ~180M records", "High", "Volume 2.4TB; period-end balancing required"],
            ["Open Purchase Orders", "~45,000 open POs", "High", "Status mapping; multi-level approval migration"],
            ["Fixed Assets", "28,000 assets", "Medium", "Depreciation schedule recalculation; useful life review"],
            ["Inventory / Stock", "50,000 SKUs × 800 stores", "High", "Real-time quantity sync at cutover; cycle count alignment"],
          ],
        },
      },
      {
        heading: "Legacy System Integration Plan",
        table: {
          headers: ["Legacy System", "Disposition", "Integration Approach", "Decommission Timeline"],
          rows: [
            ["Core ERP (Oracle)", "Retire", "Full data migration (all 4 waves)", "Month 18 (Finance go-live)"],
            ["JDA Warehouse Management", "Retire", "API bridge until decommission; WM replaced by SAP EWM", "Month 24"],
            ["Store Legacy Ordering Portal (6 platforms)", "Retire", "Replace with SAP Fiori app; parallel run 2 weeks", "Month 12"],
            ["Flybuys Loyalty / CRM", "Retain", "Real-time API integration via SAP Integration Suite", "No decommission"],
            ["Supplier Portal (legacy)", "Replace with SAP Ariba", "Vendor master migrated; Ariba onboarding programme", "Month 14"],
            ["Finance Reporting Tools (3)", "Retire", "Replaced by SAP Analytics Cloud embedded reports", "Month 18"],
          ],
        },
      },
      {
        heading: "Data Quality Assessment Findings",
        list: [
          "Vendor Master: 35% duplicates identified (ABN matching: 13%; name+address: 22%); 6-week cleansing sprint recommended",
          "Material Master: 18% missing or incomplete descriptions; 8% incorrect category assignments; requires business review",
          "Customer Master: 12% outdated addresses; 4% duplicate records; Australia Post address validation recommended",
          "GL Accounts: 400 inactive accounts to be archived; 60 new accounts required for new COA structure",
          "Historical Transactions: 99.3% completeness — 0.7% records missing GL assignment; will require manual journal at migration",
          "Overall data quality rating: 71% (Needs Improvement) — data cleansing sprint is on critical path before Wave 1",
        ],
      },
    ],
  },

  riskAnalysis: {
    sections: [
      {
        heading: "Risk Management Approach",
        body: "Risk identification was conducted through 20 structured stakeholder interviews, 3 risk workshops, and review of industry benchmarks for ERP transformations of equivalent scale. A total of 150+ risks were identified; 15 classified as Critical or High and included in the active risk register. The register is reviewed monthly by the Program Governance Board and updated fortnightly by the Program Office.",
      },
      {
        heading: "Risk Register",
        table: {
          headers: ["ID", "Risk", "Severity", "Probability", "Impact", "Primary Mitigation"],
          rows: [
            ["R-001", "Data migration quality failures causing financial misstatement", "Critical", "High", "High", "6-week cleansing sprint; automated line-level reconciliation; 2 dress rehearsals"],
            ["R-002", "Business disruption during cutover (800+ stores, $40B revenue)", "Critical", "Medium", "High", "Weekend cutover; 30-day parallel run (Finance); rollback plan rehearsed"],
            ["R-003", "User adoption failure across 5,700 users", "High", "Medium", "High", "80 super-users; role-based training; change readiness assessments at 4 milestones"],
            ["R-004", "Budget overrun on $120M programme", "High", "Medium", "High", "15% contingency reserve; formal change control board; monthly financial governance"],
            ["R-005", "Key person dependency (system integrator consultants)", "High", "Low", "High", "Knowledge transfer plan; dual coverage for all key roles; IP documentation requirement"],
            ["R-006", "Legacy system integration failures at cutover", "High", "Medium", "High", "API testing in 3 environments (Dev/QA/Prod); middleware buffer; rollback triggers"],
            ["R-007", "Regulatory non-compliance: PCI DSS / SOX violations", "Critical", "Low", "High", "External compliance audit at design, build, and pre-go-live; zero-tolerance policy"],
            ["R-008", "Scope creep expanding timeline and budget", "High", "High", "High", "Change Control Board; scope freeze at Month 4; Director approval required for any change"],
            ["R-009", "Oracle legacy ERP support ending before migration complete", "High", "Medium", "High", "Migration critical path accelerated; extended vendor support contract negotiated to Month 24"],
            ["R-010", "Store operations disruption during Fiori app rollout (800 stores)", "High", "Medium", "High", "Phased rollout by state; in-store super-user support; 24/7 hypercare helpdesk at go-live"],
          ],
        },
      },
      {
        heading: "Top 5 Priority Risks — Detailed Analysis",
        subsections: [
          {
            title: "R-001 — Data Migration Quality",
            body: "Root cause: 71% overall data quality rating in legacy systems; 35% vendor duplicates; 18% incomplete material records. A financial misstatement at go-live would require immediate rollback and damage Executive confidence.",
            list: [
              "Mitigation 1: 6-week dedicated data cleansing sprint before Wave 1 execution (critical path)",
              "Mitigation 2: Automated line-item reconciliation — SAP vs. legacy balance comparison for all financial entities",
              "Mitigation 3: Business domain owner sign-off required before each wave cutover",
              "Mitigation 4: 2 full dress rehearsals per wave; lessons applied before production run",
              "Residual risk: Medium — acceptable with all controls in place; monitored monthly",
            ],
          },
          {
            title: "R-002 — Business Disruption at Cutover",
            body: "Coles processes $40B+ in annual revenue across 800+ stores. A failed cutover during trading hours would have immediate customer and financial impact. The hard cutover is the highest-risk event in the programme.",
            list: [
              "Mitigation 1: Cutover scheduled for weekend (Saturday 10 PM) in late January (lowest-volume trading period)",
              "Mitigation 2: 30-day parallel run for Finance module; 2-week parallel for Supply Chain",
              "Mitigation 3: Detailed rollback plan documented, rehearsed, and signed off by CIO",
              "Mitigation 4: 60-day hypercare — 50 additional helpdesk FTE; on-site teams at top 50 stores in Week 1",
              "Residual risk: Medium — all store GMs briefed; 24/7 war room active for 2 weeks post-cutover",
            ],
          },
          {
            title: "R-003 — User Adoption Failure",
            body: "5,700 users across diverse skill levels and roles. Finance and Supply Chain resistance is the highest risk given fundamental process change. Low adoption directly negates ROI.",
            list: [
              "Mitigation 1: 80 super-users trained 8 weeks before go-live; become first line of in-team support",
              "Mitigation 2: Change readiness assessment at Months 3, 6, 9, 12 — red-rated areas receive targeted intervention",
              "Mitigation 3: Role-based training tailored per persona (21 hrs Finance vs. 4 hrs store operations)",
              "Mitigation 4: Executive sponsorship visible and active — CEO video at kick-off, mid-point, and go-live",
              "Residual risk: Low-Medium — adoption KPIs tracked weekly in hypercare period",
            ],
          },
          {
            title: "R-007 — Regulatory Non-Compliance (PCI DSS / SOX)",
            body: "SAP S/4HANA misconfiguration could result in PCI DSS Level 1 violations (cardholder data exposure) or SOX Section 302/404 failures (financial control weaknesses). Exposure: regulatory fines, audit qualifications, and reputational damage.",
            list: [
              "Mitigation 1: Compliance requirements mapped to specific SAP configuration items and sign-off checkpoints",
              "Mitigation 2: External compliance audit at 3 mandatory gates: Design Review, Build Review, and Pre-Go-Live",
              "Mitigation 3: Audit trail enabled on all financial transactions from Day 1 (SAP Change Document logging)",
              "Mitigation 4: Segregation of duties (SoD) analysis run on all role assignments before go-live",
              "Residual risk: Low — zero-tolerance policy; go-live blocked if any Critical compliance finding unresolved",
            ],
          },
          {
            title: "R-008 — Scope Creep",
            body: "200+ process gaps identified in fit-gap analysis create strong demand for customisation beyond agreed scope. Historical ERP transformations of this scale average 23% scope growth — at $85M baseline implementation cost, this represents $20M+ exposure.",
            list: [
              "Mitigation 1: Formal Change Control Board established at Month 1; meets weekly",
              "Mitigation 2: Hard scope freeze at Month 4; any change requires Director-level sponsor approval",
              "Mitigation 3: Standard SAP processes adopted by default; customisation only where business case proven",
              "Mitigation 4: Scope change log maintained and reviewed at all Steering Committee meetings",
              "Residual risk: Medium — strong governance required; scope creep is the most common ERP failure mode",
            ],
          },
        ],
      },
      {
        heading: "Risk Response Strategy",
        list: [
          "Avoid: R-007 (compliance) — zero tolerance; all Critical compliance findings must be resolved before go-live clearance",
          "Transfer: IT infrastructure and cloud hosting risks transferred to SAP via RISE with SAP SLA (99.95% uptime guarantee)",
          "Mitigate: All Critical and High risks have documented mitigation plan, named owner, and monthly review",
          "Accept: R-008 vendor delays (SAP responsiveness) — acceptable with escalation SLA written into contract (4-hour response for P1)",
          "Risk budget: 15% contingency (AUD $18M) allocated for risk response; drawdown requires Change Control Board approval",
        ],
      },
    ],
  },
};
