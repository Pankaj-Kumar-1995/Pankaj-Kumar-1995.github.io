export const suffescomDocs = {
  brd: {
    sections: [
      {
        heading: "Executive Summary",
        body: "This Business Requirements Document defines the requirements for Suffescom's Hyperlocal Cloud platform — a white-label SaaS solution enabling entrepreneurs and enterprise clients to launch and manage multiple hyperlocal businesses from a single unified dashboard. Version 1.0 covers four verticals: Retail, Restaurant, On-Demand Delivery, and Taxi/Ride-Hailing.",
      },
      {
        heading: "Business Objectives",
        list: [
          "Provide a single admin dashboard to manage all business verticals without switching platforms",
          "Enable white-label customisation: client branding, colour schemes, domain configuration",
          "Support multi-store and multi-branch management under a single account",
          "Deliver real-time visibility into orders, revenue, delivery status, and driver location",
          "Reduce time-to-launch for new business verticals from months to days",
          "Achieve < 2% production defect rate through rigorous QA before each client deployment",
        ],
      },
      {
        heading: "Platform Modules",
        table: {
          headers: ["Module", "Business Type", "Core Capabilities", "Primary User"],
          rows: [
            ["Retail", "Physical & online store", "Product catalogue, inventory, POS integration, order management", "Store owner, inventory manager"],
            ["Restaurant", "Food & beverage", "Menu management, table orders, kitchen display system (KDS), delivery integration", "Restaurant owner, kitchen staff"],
            ["On-Demand Delivery", "Logistics & courier", "Order dispatch, real-time driver tracking, route optimisation, proof of delivery", "Delivery manager, driver"],
            ["Taxi / Ride-Hailing", "Passenger transport", "Booking engine, driver matching, fare calculation, trip history, ratings", "Fleet manager, driver, passenger"],
            ["Super Admin Dashboard", "Platform owner", "Unified view of all verticals: revenue, orders, users, analytics, settings", "Business owner, admin"],
          ],
        },
      },
      {
        heading: "Stakeholder Register",
        table: {
          headers: ["Stakeholder", "Role", "Interest", "Influence"],
          rows: [
            ["Suffescom Product Manager", "Product owner and release approver", "High", "High"],
            ["White-label Clients (B2B)", "Platform operators — launch their own branded apps", "High", "High"],
            ["End Customers (B2C)", "Consumers placing orders or booking rides", "High", "Low"],
            ["Delivery Drivers / Taxi Drivers", "Fulfilment partners using driver app", "High", "Medium"],
            ["QA Team (Pankaj + 3 analysts)", "Quality gate before each client deployment", "High", "Medium"],
            ["Development Team", "Feature implementation and bug resolution", "Medium", "High"],
          ],
        },
      },
      {
        heading: "Success Criteria",
        list: [
          "All four verticals functional and defect-free before client handover (0 P1/P2 defects at go-live)",
          "End-to-end order flow (place → dispatch → deliver → complete) working across all modules",
          "Super admin dashboard shows real-time data within 3-second refresh",
          "White-label customisation (brand, colours, domain) deployable by client in < 30 minutes",
          "Mobile apps (iOS and Android) for customer and driver roles rating ≥ 4.0/5.0 on app stores",
          "API response time ≤ 500ms for all order and tracking endpoints under standard load",
        ],
      },
    ],
  },

  userStories: {
    sections: [
      {
        heading: "Business Owner User Stories",
        subsections: [
          {
            title: "US-001 — Unified Dashboard Overview",
            body: "As a business owner, I want to see all my verticals (retail, restaurant, delivery, taxi) in one dashboard so that I don't need to switch between multiple platforms.",
            list: [
              "AC1: Super admin dashboard shows revenue, orders, and active users for all active verticals",
              "AC2: Each vertical has a summary card; clicking opens the vertical-specific management view",
              "AC3: Dashboard data refreshes every 30 seconds without manual reload",
              "AC4: Date range filter applies across all verticals simultaneously",
            ],
          },
          {
            title: "US-002 — White-Label Branding Configuration",
            body: "As a white-label client, I want to customise the platform with my brand name, logo, and colours so that customers see my brand, not Suffescom.",
            list: [
              "AC1: Admin settings panel allows upload of logo (PNG/SVG), primary/secondary colour selection, and custom domain entry",
              "AC2: Changes preview in real time before saving",
              "AC3: Branding propagates to customer app, driver app, and web portal within 60 seconds of save",
              "AC4: White-label config persists across platform updates without resetting",
            ],
          },
          {
            title: "US-003 — Multi-Branch Management",
            body: "As a business owner with multiple locations, I want to manage all branches from one account so that I don't need separate logins per location.",
            list: [
              "AC1: Add/remove branch from admin panel; each branch has independent settings (hours, menu, drivers)",
              "AC2: Revenue and order reports filterable by branch",
              "AC3: Staff roles assignable per branch (branch manager sees only their branch)",
              "AC4: Inventory transfers between branches trackable with audit log",
            ],
          },
        ],
      },
      {
        heading: "Customer User Stories",
        subsections: [
          {
            title: "US-004 — Multi-Vertical Order from Single App",
            body: "As a customer, I want to order food, retail items, and book a taxi from the same branded app so that I have one account for all my needs.",
            list: [
              "AC1: Home screen of customer app shows all available verticals for the business",
              "AC2: Cart is vertical-specific; mixing restaurant and retail items not permitted (clear messaging)",
              "AC3: Single login/profile across all verticals; past orders visible per vertical",
              "AC4: Notifications for all order types sent via same push notification channel",
            ],
          },
          {
            title: "US-005 — Real-Time Order Tracking",
            body: "As a customer, I want to track my delivery or taxi in real time so that I know exactly when to expect arrival.",
            list: [
              "AC1: Live map shows driver/delivery agent location updating every 10 seconds",
              "AC2: ETA displayed and recalculated dynamically based on traffic",
              "AC3: Push notification sent at: order confirmed, driver assigned, driver nearby (< 2 min), delivered",
              "AC4: Customer can contact driver via masked phone number (no personal number shared)",
            ],
          },
        ],
      },
      {
        heading: "Delivery Agent / Driver User Stories",
        subsections: [
          {
            title: "US-006 — Driver App — Accept & Navigate Orders",
            body: "As a delivery agent, I want to receive, accept, and navigate orders from the driver app so that I can efficiently fulfil deliveries.",
            list: [
              "AC1: New order notification appears with pickup address, drop address, and estimated earnings",
              "AC2: Accept/decline within 30 seconds; declined order reassigned automatically",
              "AC3: In-app navigation (Google Maps integration) launches on order acceptance",
              "AC4: 'Picked up' and 'Delivered' status buttons with optional photo proof of delivery",
            ],
          },
        ],
      },
      {
        heading: "Admin User Stories",
        subsections: [
          {
            title: "US-007 — Analytics & Reporting",
            body: "As a platform admin, I want to view revenue, order volume, and customer retention reports so that I can make informed business decisions.",
            list: [
              "AC1: Reports available for: daily/weekly/monthly revenue by vertical, top-selling items, peak order times, customer retention rate",
              "AC2: Exportable to CSV and PDF",
              "AC3: Automated weekly email report to admin inbox",
              "AC4: Comparisons to prior period shown with % change arrows",
            ],
          },
        ],
      },
    ],
  },

  testStrategy: {
    sections: [
      {
        heading: "QA Approach Overview",
        body: "Suffescom Hyperlocal Cloud QA follows an Agile testing model aligned to 2-week sprints. Given the multi-module architecture, testing is structured by vertical (Retail, Restaurant, Delivery, Taxi) with mandatory integration testing across modules. Each client deployment requires a full regression pass to ensure white-label customisation has not broken core functionality.",
      },
      {
        heading: "Module Test Coverage Matrix",
        table: {
          headers: ["Module", "Functional Testing", "API Testing", "UI Testing", "Integration Testing"],
          rows: [
            ["Super Admin Dashboard", "✓ Critical", "✓ All endpoints", "✓ Cross-browser", "✓ All verticals"],
            ["Retail Module", "✓ Critical + High", "✓ Order + Inventory APIs", "✓ Mobile + Web", "✓ Payment + Delivery"],
            ["Restaurant Module", "✓ Critical + High", "✓ Order + KDS APIs", "✓ Mobile + Tablet (KDS)", "✓ Delivery dispatch"],
            ["Delivery Module", "✓ Full suite", "✓ Tracking + Dispatch APIs", "✓ Driver app (iOS + Android)", "✓ All order sources"],
            ["Taxi Module", "✓ Critical + High", "✓ Booking + Fare APIs", "✓ Driver + Passenger app", "✓ Payment gateway"],
            ["White-Label Config", "✓ Branding checks", "✓ Config API", "✓ Across all surfaces", "✓ Propagation check"],
          ],
        },
      },
      {
        heading: "API Testing Strategy",
        list: [
          "Tool: Postman collections organised by module; automated via Newman for CI pipeline",
          "Coverage target: 100% of Critical and High priority endpoints; 80% of Medium endpoints",
          "Test types: positive cases (expected inputs), negative cases (invalid/missing fields), boundary values, auth/permissions",
          "Order flow API sequence tested end-to-end: POST /order → GET /order-status → PATCH /order/dispatch → PATCH /order/complete",
          "Real-time tracking APIs tested for latency: driver location update endpoint must respond in ≤ 200ms",
          "Load test: order creation endpoint stress-tested at 100 concurrent requests (target: no errors, avg response ≤ 500ms)",
        ],
      },
      {
        heading: "Regression Testing Approach",
        list: [
          "Full regression suite runs on every client deployment build (typically weekly)",
          "Regression scope: all Critical and High test cases across all 5 modules (approximately 320 test cases)",
          "Execution split: 40% automated (Selenium for web; Appium for mobile), 60% manual",
          "Targeted regression after bug fixes: only affected module + downstream integration tests re-run",
          "White-label regression: after any branding config change, 15-case visual regression checklist executed",
          "Regression duration target: full suite in ≤ 2 business days to maintain sprint cadence",
        ],
      },
      {
        heading: "Defect Severity & Escalation",
        table: {
          headers: ["Priority", "Example", "Fix SLA", "Escalation"],
          rows: [
            ["P1 — Critical", "Order cannot be placed; app crash on launch; payment fails", "Fix within 24h; deploy hotfix", "Immediate — Product Manager + Tech Lead"],
            ["P2 — High", "Real-time tracking not updating; incorrect fare calculation", "Fix within 3 days", "Daily update to Product Manager"],
            ["P3 — Medium", "Notification delayed; UI element misaligned on specific device", "Fix in next sprint", "Tracked in JIRA; sprint review"],
            ["P4 — Low", "Typo; minor colour inconsistency; non-critical animation glitch", "Backlog", "JIRA backlog; no escalation"],
          ],
        },
      },
    ],
  },

  processFlow: {
    sections: [
      {
        heading: "Platform Architecture Overview",
        body: "Suffescom Hyperlocal Cloud is a microservices-based SaaS platform. Each vertical (Retail, Restaurant, Delivery, Taxi) operates as an independent service module, communicating via a shared API gateway. The Super Admin Dashboard aggregates data from all modules via a dedicated analytics service. White-label configuration is managed by a central configuration service that propagates branding to all customer-facing surfaces.",
      },
      {
        heading: "Restaurant Order Flow",
        list: [
          "1. Customer opens restaurant module → browses menu → adds items to cart",
          "2. Customer places order → POST /orders/restaurant creates order record",
          "3. Restaurant admin receives order notification on admin dashboard and KDS (kitchen display)",
          "4. Kitchen accepts order → status updated to 'Preparing' → customer notified via push",
          "5. If delivery: system checks available drivers → nearest driver offered order via driver app",
          "6. Driver accepts → real-time tracking activated → customer sees driver on map",
          "7. Driver marks 'Picked Up' → status 'Out for Delivery' → ETA updated",
          "8. Driver marks 'Delivered' (+ optional photo proof) → order completed → payment settled",
          "9. Customer prompted for rating (food + delivery separately)",
        ],
      },
      {
        heading: "Delivery Dispatch Flow",
        list: [
          "1. Order received from any vertical (restaurant, retail, or standalone delivery request)",
          "2. Dispatch service calculates pickup and drop coordinates → estimates distance and ETA",
          "3. Driver matching algorithm: find nearest available driver within 5km radius",
          "4. Driver offered order: 30-second accept window; auto-reassign if declined",
          "5. Driver navigates to pickup via in-app Google Maps integration",
          "6. Driver arrives → taps 'At Pickup' → merchant/restaurant notified",
          "7. Pickup confirmed → driver navigates to delivery address",
          "8. Delivery completed: customer signature or photo proof captured",
          "9. Order closed → earnings added to driver's in-app wallet → daily settlement batch",
        ],
      },
      {
        heading: "Cross-Module Data Flow",
        list: [
          "All order data flows through a central Order Management Service regardless of vertical",
          "User authentication is centralised — single JWT token valid across all modules",
          "Payment processing: single payment gateway integration (Stripe/Razorpay) handles all verticals",
          "Real-time events (order status changes, driver location updates) published via WebSocket broadcast",
          "Analytics service consumes events from all modules via message queue (RabbitMQ); aggregates for dashboard",
          "White-label config service: stores branding per client; injected at render time on all surfaces",
          "Notifications service: unified push/SMS/email routing for all order events across verticals",
        ],
      },
      {
        heading: "Key Integration Test Scenarios",
        list: [
          "Scenario 1: Restaurant order with delivery — tests Order, Dispatch, Tracking, and Payment services together",
          "Scenario 2: White-label branding change → verify propagation to customer app, driver app, and web within 60 seconds",
          "Scenario 3: Multi-branch order routing — order placed for Branch A while Branch B is selected; correct branch receives notification",
          "Scenario 4: Driver app switches from taxi to delivery order — verify context switch without re-login",
          "Scenario 5: Admin dashboard aggregation — 5 orders across 4 verticals placed simultaneously; all appear in Super Admin within 3-second refresh",
        ],
      },
    ],
  },

  defectLog: {
    sections: [
      {
        heading: "Defect Summary Overview",
        body: "During the QA engagement on Suffescom Hyperlocal Cloud (6 months), the team logged 284 defects across all modules. Of these, 12 were P1/P2 (Critical/High), all resolved before any client deployment. Analysis of defect patterns informed targeted improvements to the development process, reducing defect injection rate by 31% in the final two months.",
      },
      {
        heading: "Defect Distribution by Module & Severity",
        table: {
          headers: ["Module", "P1 Critical", "P2 High", "P3 Medium", "P4 Low", "Total"],
          rows: [
            ["Super Admin Dashboard", "2", "4", "18", "22", "46"],
            ["Restaurant Module", "3", "6", "24", "19", "52"],
            ["Retail Module", "2", "3", "21", "17", "43"],
            ["Delivery Module", "3", "8", "31", "26", "68"],
            ["Taxi Module", "1", "4", "22", "18", "45"],
            ["White-Label Config", "1", "3", "12", "14", "30"],
            ["Total", "12", "28", "128", "116", "284"],
          ],
        },
      },
      {
        heading: "Top Critical Defects Found",
        subsections: [
          {
            title: "DEF-001: Order not created when payment gateway times out (Restaurant, P1)",
            body: "Payment gateway timeout (> 10 seconds) caused order to remain in 'Pending' state with no retry logic — customer charged but restaurant received no order.",
            list: [
              "Root Cause: No timeout handler on payment API call; no idempotency key on order creation",
              "Impact: Customer charged without order placed — immediate refund and client reputation risk",
              "Fix: Timeout handler added (8-second max); idempotency key implemented; order status reconciliation job added",
              "Prevention: Payment API timeout handling added to standard API test checklist",
            ],
          },
          {
            title: "DEF-002: Driver location not updating after app backgrounded (Delivery, P1)",
            body: "On Android 12+, background location permission changes caused driver tracking to stop updating when the driver app was sent to background.",
            list: [
              "Root Cause: Android 12 background location policy change not reflected in app permissions manifest",
              "Impact: Customer sees static driver position; restaurant cannot track delivery; ETA inaccurate",
              "Fix: Foreground service implemented for location tracking; manifest updated with correct permission flags",
              "Prevention: Android OS version compatibility added to regression checklist for all driver location test cases",
            ],
          },
          {
            title: "DEF-003: Incorrect fare calculation for taxi when surge pricing active (Taxi, P1)",
            body: "When surge multiplier (1.5×–2.0×) activated during peak hours, the fare displayed to the customer at booking did not reflect surge pricing — undercharge at completion.",
            list: [
              "Root Cause: Surge multiplier applied at trip completion but not at fare estimation step — two separate code paths",
              "Impact: Revenue loss for operator; customer expectation mismatch",
              "Fix: Surge multiplier applied at fare estimate API; fare estimate displayed with surge indicator on booking screen",
              "Prevention: Surge pricing included in all taxi fare calculation test cases; validated for all multiplier values",
            ],
          },
        ],
      },
      {
        heading: "Defect Pattern Analysis",
        list: [
          "Pattern 1: API timeout handling — 18% of P1/P2 defects involved missing timeout or retry logic; added timeout testing to API test template",
          "Pattern 2: Android OS version compatibility — 11% of mobile defects related to Android 11/12 permission model changes; added OS matrix to device test plan",
          "Pattern 3: Cross-module state sync — 14% of P2 defects involved stale data between modules (e.g., order status not updated in dashboard); added event propagation delay test cases",
          "Pattern 4: White-label config propagation — 10% of defects found during white-label regression; added automated propagation check to deployment checklist",
          "Pattern 5: Insufficient negative case coverage — 23% of P3 defects were edge cases not covered in test cases; expanded API negative case library from 40 to 95 test cases",
        ],
      },
      {
        heading: "Process Improvements & Outcomes",
        list: [
          "Improvement 1: API test template updated to require timeout handling test for all external API calls → P1 timeout defects reduced to 0 in final 2 months",
          "Improvement 2: OS compatibility matrix added to mobile test plan (Android 10, 11, 12; iOS 14, 15, 16) → mobile P2 defects reduced 40%",
          "Improvement 3: Cross-module integration test suite expanded from 15 to 32 scenarios → cross-module P2 defects reduced 35%",
          "Improvement 4: Defect pattern report shared with Development Lead monthly → defect injection rate reduced 31% in Months 5–6 vs. Months 1–2",
          "Overall: Production defect rate at client go-live: 0 P1/P2 defects across all 3 client deployments in the engagement",
        ],
      },
    ],
  },
};
