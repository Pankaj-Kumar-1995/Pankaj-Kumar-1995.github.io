export const rmitDocs = {
  brd: {
    sections: [
      {
        heading: "Executive Summary",
        body: "This Business Requirements Document defines the requirements for deploying an AI-powered chatbot using Microsoft Copilot to support RMIT's Work Integrated Learning (WIL) team. The initiative targets a 60% reduction in manual support ticket processing, improved student satisfaction, and 24/7 automated coverage for routine student inquiries.",
      },
      {
        heading: "Business Objectives",
        list: [
          "Reduce manual support ticket processing by 60% within 6 months of go-live",
          "Improve student satisfaction score from 3.4/5 to 4.2/5",
          "Enable 24/7 automated support for routine inquiries",
          "Free WIL support staff from repetitive tasks to focus on complex student cases",
          "Implement a Responsible AI framework aligned with RMIT's AI Ethics Policy",
        ],
      },
      {
        heading: "Scope",
        subsections: [
          {
            title: "In Scope",
            list: [
              "AI chatbot for student-facing WIL inquiries (placement details, deadlines, requirements)",
              "Integration with RMIT Student Information System (SIS) via REST API",
              "Escalation pathway from chatbot to human WIL support agents",
              "Analytics dashboard for WIL support team (Power BI)",
              "Multi-language support: English and Mandarin",
              "Knowledge base management interface for WIL administrators",
            ],
          },
          {
            title: "Out of Scope",
            list: [
              "HR or staff-facing chatbot functionality",
              "Mobile app integration (deferred to Phase 2)",
              "International campus or offshore student support (Phase 2)",
              "Custom AI model training — solution uses Microsoft Copilot out-of-the-box",
            ],
          },
        ],
      },
      {
        heading: "Stakeholder Register",
        table: {
          headers: ["Stakeholder", "Role", "Interest", "Influence"],
          rows: [
            ["WIL Team Lead", "Primary sponsor and decision maker", "High", "High"],
            ["Student Support Staff (8)", "Day-to-day users; handle escalations", "High", "Medium"],
            ["IT Department", "Technical implementation owner", "Medium", "High"],
            ["Student Services Manager", "Operational oversight and reporting", "High", "High"],
            ["Compliance & Risk Team", "Data privacy governance", "Medium", "High"],
            ["Students (domestic & international)", "End beneficiaries of the solution", "High", "Low"],
          ],
        },
      },
      {
        heading: "Success Criteria",
        list: [
          "60% reduction in manual ticket volume within 6 months of go-live",
          "Chatbot automated resolution rate ≥ 75% for Tier-1 (routine) inquiries",
          "Student satisfaction with chatbot support ≥ 4.0 / 5.0",
          "System uptime ≥ 99.5% during business hours",
          "Average chatbot response time < 2 seconds",
          "Staff time freed from routine inquiries ≥ 50%",
        ],
      },
      {
        heading: "Assumptions",
        list: [
          "RMIT IT will provide secure API access to the Student Information System",
          "A Microsoft Copilot licence is available and approved for the WIL team",
          "Support staff will complete the 8-hour onboarding and escalation training",
          "Students access the chatbot via the RMIT student portal (web browser)",
          "QnA knowledge base content will be provided and verified by WIL staff before go-live",
          "Go-live is targeted for the start of Semester 1, 2024",
        ],
      },
      {
        heading: "Constraints",
        list: [
          "Go-live date must align with semester commencement (March 2024)",
          "Phase 1 budget cap: AUD $120,000",
          "Must comply with the Australian Privacy Act 1988 and RMIT Data Governance Policy",
          "Solution must integrate with existing RMIT IT infrastructure — no new external cloud vendors",
          "Chatbot must clearly identify itself as AI (not human) in all student interactions",
        ],
      },
    ],
  },

  frd: {
    sections: [
      {
        heading: "System Overview",
        body: "The AI Chatbot system is composed of three integrated layers: a presentation layer (embedded widget in the RMIT student portal), an intelligence layer (Microsoft Copilot + Azure Bot Service + QnA Maker), and a data layer (RMIT SIS integration, conversation logging, and Power BI analytics). Students interact in natural language; the system resolves Tier-1 queries automatically or escalates Tier-2 queries to human agents.",
      },
      {
        heading: "Functional Requirements",
        table: {
          headers: ["ID", "Requirement", "Priority", "Notes"],
          rows: [
            ["FR-001", "System shall understand natural language queries in English and Mandarin", "High", "NLP via Microsoft Copilot"],
            ["FR-002", "System shall search and retrieve answers from the QnA knowledge base", "High", "QnA Maker with confidence scoring"],
            ["FR-003", "System shall escalate unresolved queries to a human WIL agent", "High", "Live handoff with transcript"],
            ["FR-004", "System shall retrieve student-specific placement data from SIS", "High", "REST API integration"],
            ["FR-005", "System shall send automated deadline reminder notifications", "Medium", "Via Power Automate"],
            ["FR-006", "System shall log all conversations with timestamp for audit", "High", "90-day retention policy"],
            ["FR-007", "System shall display a post-conversation satisfaction rating (1–5)", "Medium", "Optional for student"],
            ["FR-008", "WIL admin shall update FAQ knowledge base via a management interface", "High", "Changes live within 5 minutes"],
            ["FR-009", "System shall generate weekly usage and resolution rate reports", "Medium", "Power BI dashboard"],
            ["FR-010", "System shall detect and flag sensitive or harmful content before responding", "High", "Responsible AI guardrail"],
            ["FR-011", "System shall maintain conversation context within a session", "High", "Supports multi-turn conversations"],
            ["FR-012", "System shall display a persistent 'Talk to a person' button throughout chat", "High", "Accessibility and trust requirement"],
          ],
        },
      },
      {
        heading: "Integration Requirements",
        list: [
          "RMIT Student Information System (SIS) — REST API for placement and enrolment data",
          "Azure Active Directory (AAD) — Single Sign-On for student and staff authentication",
          "Microsoft Teams — Notifications to WIL staff on new escalations",
          "Power Automate — Workflow automation for reminders and escalation notifications",
          "Power BI — Analytics dashboards for support team and management",
          "RMIT Student Portal — Embedded chatbot widget (web component)",
        ],
      },
      {
        heading: "Non-Functional Requirements",
        table: {
          headers: ["ID", "Requirement", "Target"],
          rows: [
            ["NFR-001", "Chatbot response time", "< 2 seconds (P95)"],
            ["NFR-002", "System uptime", "≥ 99.5% during semester periods"],
            ["NFR-003", "Concurrent users supported", "500+ simultaneous sessions"],
            ["NFR-004", "Data encryption", "AES-256 at rest; TLS 1.3 in transit"],
            ["NFR-005", "Session timeout (idle)", "30 minutes of inactivity"],
            ["NFR-006", "Accessibility compliance", "WCAG 2.1 Level AA"],
            ["NFR-007", "Conversation log retention", "90 days, then anonymised"],
          ],
        },
      },
    ],
  },

  userStories: {
    sections: [
      {
        heading: "Student User Stories",
        subsections: [
          {
            title: "US-001 — Placement Requirements Inquiry",
            body: "As a WIL student, I want to ask the chatbot what documents I need for my placement so that I don't need to wait for a staff email response.",
            list: [
              "AC1: Chatbot returns placement requirements within 2 seconds",
              "AC2: Information matches current SIS data for the student's enrolment",
              "AC3: Response includes a 'Was this helpful?' prompt",
            ],
          },
          {
            title: "US-002 — Deadline Lookup",
            body: "As a WIL student, I want to check my submission deadlines through the chatbot so that I don't miss critical dates.",
            list: [
              "AC1: Chatbot retrieves upcoming deadlines from SIS using the student's ID",
              "AC2: Deadlines displayed in chronological order with days remaining",
              "AC3: Student can opt in to receive a reminder email 3 days before each deadline",
            ],
          },
          {
            title: "US-003 — Human Escalation",
            body: "As a WIL student, I want to reach a human support agent when the chatbot cannot resolve my issue so that complex problems receive proper attention.",
            list: [
              "AC1: 'Talk to a person' button visible throughout the entire conversation",
              "AC2: Escalation automatically triggered after 2 unsuccessful chatbot responses",
              "AC3: Human agent receives the full conversation transcript on pickup",
              "AC4: Student is shown estimated wait time during business hours",
            ],
          },
          {
            title: "US-004 — Mandarin Language Support",
            body: "As an international WIL student, I want to interact with the chatbot in Mandarin so that language is not a barrier to accessing support.",
            list: [
              "AC1: System auto-detects language from the student's first message",
              "AC2: Mandarin responses achieve ≥ 95% translation accuracy on key placement topics",
              "AC3: All system messages (escalation prompts, errors, ratings) are translated",
            ],
          },
        ],
      },
      {
        heading: "Support Staff User Stories",
        subsections: [
          {
            title: "US-005 — Escalation Transcript Access",
            body: "As a WIL support staff member, I want to see the student's full chatbot conversation history when an escalation arrives so that I don't need to ask the student to repeat themselves.",
            list: [
              "AC1: Full transcript visible in the staff interface immediately on escalation pickup",
              "AC2: Transcript includes timestamps and intent classification for each message",
              "AC3: Staff can add internal case notes to the escalation record",
            ],
          },
          {
            title: "US-006 — Knowledge Base Management",
            body: "As a WIL administrator, I want to add and update FAQ entries in the chatbot knowledge base so that responses stay accurate as policies change.",
            list: [
              "AC1: CMS interface allows adding, editing, and archiving FAQ entries without IT assistance",
              "AC2: Updated entries are live in the chatbot within 5 minutes of saving",
              "AC3: Change history is logged with editor name and timestamp",
            ],
          },
        ],
      },
      {
        heading: "Admin User Stories",
        subsections: [
          {
            title: "US-007 — Analytics Dashboard",
            body: "As a WIL Team Lead, I want to view weekly chatbot performance metrics so that I can identify knowledge gaps and make informed resourcing decisions.",
            list: [
              "AC1: Dashboard shows total queries, automated resolution rate, escalation rate, and satisfaction scores",
              "AC2: Top 10 unresolved query topics listed to guide knowledge base improvements",
              "AC3: Reports filterable by week, month, or semester",
              "AC4: Data exportable to Excel",
            ],
          },
        ],
      },
      {
        heading: "Student Journey Map",
        subsections: [
          {
            title: "As-Is Journey — Current State",
            list: [
              "Student has a WIL query (placement, deadlines, documents)",
              "Student composes and sends an email to the WIL support inbox",
              "Email joins a queue of ~48 daily incoming messages",
              "Staff member manually reads, categorises, and researches the answer",
              "Staff drafts and sends reply — average turnaround: 24 hours",
              "Student receives answer (may require follow-up if unclear)",
              "Pain point: 70% of staff time spent on routine, repetitive inquiries",
            ],
          },
          {
            title: "To-Be Journey — Future State with Chatbot",
            list: [
              "Student has a WIL query and opens the chatbot on the student portal",
              "Student types a natural language question (English or Mandarin)",
              "Chatbot processes intent and searches the QnA knowledge base",
              "If resolved (≥ 80% confidence): answer returned within 2 seconds",
              "If unresolved: chatbot triggers escalation; staff notified via Teams",
              "Human agent picks up with full conversation context — target resolution: 2 hours",
              "Student rates the interaction; data feeds Power BI analytics dashboard",
              "Outcome: 75% of inquiries automated; staff focused on complex student cases",
            ],
          },
        ],
      },
    ],
  },

  bpmn: {
    sections: [
      {
        heading: "As-Is Process: Manual WIL Student Support",
        body: "The current support process is entirely manual and email-driven. All student inquiries are handled through a shared inbox monitored by 8 WIL support staff. There is no triage automation; staff must manually read, categorise, and respond to every query regardless of complexity.",
      },
      {
        heading: "As-Is Process Steps",
        list: [
          "1. Student identifies a WIL-related query (placement, documents, deadlines)",
          "2. Student composes and sends email to wilsupport@rmit.edu.au",
          "3. Email arrives in shared WIL support inbox (~48 emails/day average)",
          "4. Available staff member opens and reads the email",
          "5. Staff categorises the inquiry: routine / complex / escalation required",
          "6. If routine → staff manually searches internal documentation and policy guides",
          "7. If complex or unclear → staff consults team lead or subject specialist",
          "8. Staff drafts a personalised response",
          "9. Response sent to student (average: 24 hours; peak periods: up to 48 hours)",
          "10. If student replies with a follow-up → process loops from step 3",
        ],
      },
      {
        heading: "Identified Pain Points",
        list: [
          "70% of staff time consumed by repetitive, routine inquiries (placement docs, deadlines)",
          "No 24/7 support — students outside business hours wait until the next day",
          "Inconsistent responses across different staff members on the same topics",
          "No searchable audit trail or history of previous student interactions",
          "High staff burnout due to inquiry volume and repetitive nature of work",
          "Severe bottlenecks during peak periods (semester start, submission deadlines)",
        ],
      },
      {
        heading: "To-Be Process: AI-Assisted WIL Support",
        body: "The future-state process introduces the AI chatbot as the primary first point of contact. Microsoft Copilot and QnA Maker handle Tier-1 (routine) inquiries automatically. Only Tier-2 (complex) inquiries reach human agents, reducing manual workload by an estimated 60%. Staff receive full conversation context on all escalations.",
      },
      {
        heading: "To-Be Process Steps",
        list: [
          "1. Student opens the chatbot on the RMIT student portal",
          "2. Student authenticates via RMIT SSO (Azure AD) — student data loaded from SIS",
          "3. Student submits a query in natural language (English or Mandarin)",
          "4. Azure Bot Service receives the message; Microsoft Copilot interprets student intent",
          "5. System queries the QnA knowledge base for a matching answer",
          "6. If confidence ≥ 80% → chatbot returns answer automatically (Tier-1 resolved)",
          "7. If confidence 50–79% → chatbot returns best-match answer + 'Was this helpful?' prompt",
          "8. If confidence < 50% OR student clicks 'Talk to a person' → escalation triggered",
          "9. WIL staff notified via Microsoft Teams with full conversation transcript attached",
          "10. Staff agent picks up the case and resolves it within the 2-hour SLA",
          "11. Post-session satisfaction rating collected and logged to Power BI",
          "12. Unresolved query topics automatically flagged for knowledge base review",
        ],
      },
      {
        heading: "Process Improvement Metrics",
        list: [
          "Tier-1 automated resolution: ~75% of all inquiries (target at 6-month mark)",
          "Manual escalation queue reduced from ~48 to ~12 tickets per day",
          "Average Tier-1 response time: < 2 seconds (vs. 24-hour manual average)",
          "Average Tier-2 resolution time: 2-hour SLA (vs. 24–48 hours current)",
          "Staff time freed for complex, high-value student interactions: ≥ 50%",
          "24/7 automated availability — no after-hours service gaps",
        ],
      },
    ],
  },

  dataModel: {
    sections: [
      {
        heading: "System Architecture Overview",
        body: "The chatbot solution is built on three integrated layers using Microsoft Azure infrastructure, leveraging RMIT's existing Microsoft 365 and Azure tenant for rapid deployment with minimal vendor onboarding and no new cloud providers.",
      },
      {
        heading: "Architecture Layers",
        subsections: [
          {
            title: "Presentation Layer",
            body: "Student-facing interface embedded in the RMIT student portal as a lightweight web component. Accessible on desktop and mobile browsers without app installation.",
            list: [
              "Chatbot widget — fixed bottom-right overlay on student portal pages",
              "React-based web component; no installation required for students",
              "Persistent 'Talk to a person' button and in-session conversation history",
              "WCAG 2.1 AA compliant — keyboard navigable, screen reader compatible",
            ],
          },
          {
            title: "Intelligence Layer",
            body: "Core AI processing and orchestration for natural language understanding, intent classification, and response generation.",
            list: [
              "Microsoft Copilot (GPT-4 based) — natural language understanding and generation",
              "Azure Bot Service — message routing, session management, channel orchestration",
              "QnA Maker — domain-specific FAQ matching with tunable confidence thresholds",
              "Azure Cognitive Services — language detection and Mandarin translation",
            ],
          },
          {
            title: "Data Layer",
            body: "Data integration, storage, and analytics infrastructure for operational and reporting needs.",
            list: [
              "RMIT SIS (REST API) — student placement and enrolment data (session-only queries)",
              "Azure Cosmos DB — conversation logs and session state",
              "Power Automate — workflow triggers (deadline reminders, escalation notifications)",
              "Power BI — analytics dashboards for WIL team and management",
            ],
          },
        ],
      },
      {
        heading: "Responsible AI Framework",
        subsections: [
          {
            title: "Fairness",
            list: [
              "Bias testing across student demographics (domestic, international, CALD backgrounds) before go-live",
              "Quarterly fairness audit of chatbot responses with stakeholder review board",
              "Mandarin language support ensures equitable access for international students",
            ],
          },
          {
            title: "Reliability & Safety",
            list: [
              "99.5% uptime SLA backed by Azure managed infrastructure and geo-redundancy",
              "Automatic fallback to human escalation whenever confidence score < 50%",
              "Content moderation filters applied to all student inputs before AI processing",
            ],
          },
          {
            title: "Privacy & Security",
            list: [
              "AES-256 encryption at rest; TLS 1.3 for all data in transit",
              "Compliant with Australian Privacy Act 1988 and RMIT Data Governance Policy",
              "No PII stored in QnA knowledge base; student identity managed via SSO tokens only",
              "Conversation logs retained for 90 days then anonymised for aggregate analytics",
            ],
          },
          {
            title: "Transparency",
            list: [
              "Chatbot clearly identifies itself as AI-powered in the first message of every session",
              "Students informed of data collection purpose via portal consent notice at first use",
              "Confidence thresholds and escalation rules documented and available for governance review",
            ],
          },
          {
            title: "Accountability",
            list: [
              "All conversations logged with timestamp, session ID, and intent classification",
              "Monthly escalation pattern review by WIL Team Lead and IT Department",
              "Quarterly ethics review with Compliance & Risk team",
              "Responsible AI register updated with any model behaviour incidents within 48 hours",
            ],
          },
        ],
      },
      {
        heading: "Data Governance",
        table: {
          headers: ["Data Type", "Classification", "Retention", "Access"],
          rows: [
            ["Conversation transcripts", "Confidential", "90 days → anonymised", "WIL Team Lead, Compliance"],
            ["Student SIS data (live queries)", "Sensitive", "Session only — not persisted", "Chatbot system only"],
            ["SSO tokens (Azure AD)", "Sensitive", "Session only", "Azure AD, Bot Service"],
            ["QnA knowledge base content", "Internal", "Indefinite (versioned)", "WIL Admin, IT"],
            ["Aggregate analytics (Power BI)", "Internal", "2 years", "All WIL staff"],
            ["Satisfaction ratings", "Internal", "2 years", "All WIL staff, Management"],
          ],
        },
      },
      {
        heading: "Model & Confidence Configuration",
        list: [
          "NLU model: Microsoft Copilot (GPT-4 architecture) — no custom model training required",
          "FAQ matching: QnA Maker with per-category confidence threshold tuning",
          "Auto-resolve threshold: ≥ 80% confidence — full automated response",
          "Assisted-resolve threshold: 50–79% — answer shown with 'Was this helpful?' prompt",
          "Escalation threshold: < 50% confidence OR student-initiated via 'Talk to a person'",
          "Monthly retraining cycle: new QnA pairs added based on top escalation topics",
        ],
      },
    ],
  },

  wireframes: {
    sections: [
      {
        heading: "Design Principles",
        list: [
          "Clarity first: chatbot responses capped at ~100 words; complex answers link to documentation",
          "Always accessible: 'Talk to a person' button visible at all times — never buried in menus",
          "AI transparency: first message in every session identifies the system as AI-powered",
          "Graceful failure: unrecognised inputs prompt structured multiple-choice options",
          "RMIT branded: red and white colour scheme; RMIT logo in chat header",
          "Mobile-first responsive: fully functional on any screen size without app installation",
          "Accessibility: WCAG 2.1 AA — keyboard navigable, screen reader compatible, high contrast",
        ],
      },
      {
        heading: "Conversation Flow 1 — Placement Requirements",
        subsections: [
          {
            title: "Trigger: Student asks about required placement documents",
            list: [
              "Student: 'What documents do I need for my WIL placement?'",
              "Bot: 'Hi [Name]! For your WIL placement you'll need: ① A signed Host Organisation Agreement ② A completed Risk Assessment form ③ Your student insurance confirmation. Need details on any of these?'",
              "Student: 'Tell me more about the Host Organisation Agreement'",
              "Bot: 'The Host Organisation Agreement must be signed by your host employer and returned to the WIL team at least 2 weeks before your start date. [Download form →] Would you like me to remind you of your submission deadline?'",
              "Student: 'Yes please'",
              "Bot: 'Done! You'll receive a reminder at your RMIT email 3 days before the deadline. Is there anything else I can help with?'",
            ],
          },
        ],
      },
      {
        heading: "Conversation Flow 2 — Deadline Lookup",
        subsections: [
          {
            title: "Trigger: Student asks about upcoming submission deadlines",
            list: [
              "Student: 'When is my placement log due?'",
              "Bot: 'Your WIL placement log is due on 15 October 2024 — that's 12 days away. Would you like me to send a reminder email 3 days before the deadline?'",
              "Student: 'Yes please'",
              "Bot: 'Done! You'll receive a reminder on 12 October at your RMIT email. Is there anything else I can help with?'",
            ],
          },
        ],
      },
      {
        heading: "Conversation Flow 3 — Escalation to Human Agent",
        subsections: [
          {
            title: "Trigger: Complex issue OR 2 failed chatbot responses",
            list: [
              "Student: 'My host employer hasn't received the placement confirmation from RMIT'",
              "Bot: 'This sounds like something our WIL team needs to look into directly. I'm connecting you with an advisor now — they'll have our full conversation. Typical wait: under 10 minutes during business hours.'",
              "[System: Escalation triggered — Teams notification sent to WIL support queue]",
              "[Staff interface: Agent sees full transcript, student name, and enrolment details]",
              "Staff: 'Hi [Name], I can see the issue with your placement confirmation. Let me look into this for you right now...'",
            ],
          },
        ],
      },
      {
        heading: "Conversation Flow 4 — Ambiguous Query Handling",
        subsections: [
          {
            title: "Trigger: Student input matches no QnA entry with sufficient confidence",
            list: [
              "Student: 'I'm confused about my placement'",
              "Bot: 'Happy to help — could you tell me a bit more? I can assist with: ① Placement documents and requirements ② Submission deadlines and reminders ③ Host organisation details ④ Something else (I'll connect you with a person)'",
              "Student selects option ①",
              "[System routes to Placement Requirements flow — see Flow 1 above]",
            ],
          },
        ],
      },
      {
        heading: "Interface Design Specifications",
        list: [
          "Widget dimensions: 360px wide × 500px tall on desktop; full-screen on mobile",
          "Chat header: RMIT logo, 'WIL Support Assistant' label, green online indicator, minimise and close buttons",
          "Message bubbles: Student messages right-aligned (blue); bot messages left-aligned (white with grey border)",
          "Typing indicator: Three animated dots shown while chatbot processes (max 2 seconds)",
          "Quick reply chips: Tappable option buttons displayed below bot messages when presenting choices",
          "Persistent footer: 'Talk to a person' text link always visible above the message input field",
          "Post-session rating: 1–5 star prompt shown after session ends — skippable, optional",
          "Timestamps shown for all messages; session start time shown in chat header",
        ],
      },
    ],
  },
};
