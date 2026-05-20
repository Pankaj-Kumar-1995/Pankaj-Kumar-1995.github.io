export const oppoDocs = {
  testStrategy: {
    sections: [
      {
        heading: "Test Strategy Overview",
        body: "This Test Strategy Document defines the overall quality assurance approach for OPPO Reno 7 and Find X3 device lines, covering hardware-software integration, 5G network validation, camera system testing, and endurance benchmarking. The strategy is risk-based, prioritising scenarios most likely to surface field defects before market launch.",
      },
      {
        heading: "Scope",
        subsections: [
          {
            title: "In Scope",
            list: [
              "Hardware-software integration testing: firmware and Android OS stability",
              "5G network validation: SA and NSA modes, frequency bands (Sub-6GHz, mmWave where applicable)",
              "Camera system QA: photo/video quality, autofocus accuracy, low-light performance",
              "Battery endurance and fast-charging validation",
              "Thermal performance and heat dissipation under load",
              "Regression testing across firmware build iterations",
              "Field simulation testing: real-world usage patterns, drop/vibration stress",
            ],
          },
          {
            title: "Out of Scope",
            list: [
              "Manufacturing defect screening (handled by factory QC, separate process)",
              "Carrier-specific network certification (handled by carrier labs)",
              "Accessory compatibility (separate accessories QA team)",
            ],
          },
        ],
      },
      {
        heading: "Test Types & Prioritisation",
        table: {
          headers: ["Test Type", "Priority", "Frequency", "Tools / Method"],
          rows: [
            ["5G Connectivity & Handover", "Critical", "Every build", "Network simulators, field SIM testing"],
            ["Hardware-SW Integration", "Critical", "Every build", "Automated scripts + manual verification"],
            ["Camera Image Quality", "High", "Weekly build", "DXOMARK-aligned criteria, light booth"],
            ["Battery Endurance", "High", "Bi-weekly", "Robotic scripting, charge/discharge cycles"],
            ["Thermal Performance", "High", "Bi-weekly", "Thermal camera, stress benchmarking tools"],
            ["Regression (full suite)", "High", "Pre-release", "Robotic automation (30% coverage)"],
            ["Drop & Vibration Stress", "Medium", "Milestone gates", "IEC 60068-2 standard test rigs"],
            ["Usability / UX Validation", "Medium", "Monthly", "Internal user panels, observation sessions"],
          ],
        },
      },
      {
        heading: "Test Environments",
        list: [
          "Lab environment: controlled temperature (25°C ± 2°C), humidity (45–65% RH) for baseline tests",
          "Network lab: 5G SA/NSA test network (sub-6GHz and mmWave benches)",
          "Field simulation room: simulated real-world RF environments (urban, suburban, indoor)",
          "Endurance rigs: robotic hands executing scripted usage cycles 24/7",
          "Device pool: 20 units per model (Reno 7: 20 units; Find X3: 20 units) at various firmware stages",
        ],
      },
      {
        heading: "Entry & Exit Criteria",
        subsections: [
          {
            title: "Entry Criteria (Test Execution Start)",
            list: [
              "Firmware build signed off by software team and uploaded to QA server",
              "Test environment verified and calibrated (network lab, thermal equipment)",
              "All Critical test cases reviewed and approved by QA Lead",
              "Defect tracking system (JIRA) configured for the new build",
            ],
          },
          {
            title: "Exit Criteria (Release Gate)",
            list: [
              "Zero Critical or High defects open (unresolved) at release candidate stage",
              "All Critical test cases executed with ≥ 95% pass rate",
              "5G connectivity pass rate ≥ 99% across all tested frequency bands",
              "Battery endurance within ± 5% of specification claim",
              "No thermal shutdown incidents under standard usage conditions",
              "RCA completed for all Medium+ defects found during cycle",
            ],
          },
        ],
      },
      {
        heading: "Risk-Based Testing Approach",
        list: [
          "Risk ranking: defects scored by Severity × Probability × Customer Impact — top 20% tested first each cycle",
          "Historical defect data from OPPO A-series used as baseline risk indicator for Reno 7 and Find X3",
          "5G modem and camera ISP flagged as highest-risk components — test coverage ≥ 90% mandatory",
          "Market region risk weighting: Australia, Europe, China priority markets — region-specific RF bands tested first",
          "New feature risk: Find X3's microscope lens camera and dual-exposure system identified as novel risk — bespoke test cases created",
        ],
      },
    ],
  },

  testCases: {
    sections: [
      {
        heading: "Test Case Structure",
        body: "All test cases follow a standardised template: Test Case ID, Module, Test Objective, Preconditions, Steps, Expected Result, Actual Result, Status (Pass/Fail/Blocked), Severity, and Assigned Tester. Test cases are stored in JIRA and linked to requirements in Confluence.",
      },
      {
        heading: "5G Connectivity Test Cases",
        table: {
          headers: ["TC ID", "Test Objective", "Precondition", "Expected Result"],
          rows: [
            ["5G-001", "Verify 5G SA network registration", "SIM with 5G SA plan; 5G SA test network active", "Device registers on 5G SA within 30 seconds; 5G indicator visible"],
            ["5G-002", "Verify 5G NSA handover from 4G LTE", "Device on 4G LTE; 5G NSA cell available", "Seamless handover to 5G NSA; no call drop; speed increase observed"],
            ["5G-003", "Validate peak download throughput (sub-6GHz)", "5G SA network; -85 dBm signal strength", "Downlink throughput ≥ 900 Mbps at optimal signal"],
            ["5G-004", "Test 5G connectivity under signal stress", "Signal attenuator set to -105 dBm", "Device maintains connection; gracefully falls back to 4G; no crash"],
            ["5G-005", "Verify 5G during active HD video call", "5G SA; video call via native dialler", "Video call stable; no audio break; 5G maintained throughout"],
            ["5G-006", "Test 5G battery consumption vs. 4G", "5G SA mode; standardised usage script 2 hours", "5G battery drain ≤ 15% above 4G equivalent — within specification"],
            ["5G-007", "Verify 5G roaming handover (inter-cell)", "Multiple 5G cells in test network", "Seamless inter-cell handover; ping latency ≤ 20ms during transition"],
          ],
        },
      },
      {
        heading: "Camera System Test Cases",
        table: {
          headers: ["TC ID", "Test Objective", "Expected Result"],
          rows: [
            ["CAM-001", "Primary camera photo quality — daylight", "ISO noise ≤ threshold; sharpness score ≥ DXOMARK baseline"],
            ["CAM-002", "Low-light photography (0.1 lux)", "Usable image; noise reduction active; no colour cast"],
            ["CAM-003", "Autofocus speed (single subject, 1m)", "AF locks within 250ms; no hunting/cycling"],
            ["CAM-004", "4K video recording — 10 minutes continuous", "No thermal throttle; no dropped frames; stable exposure"],
            ["CAM-005", "Find X3 microscope lens 60× capture", "Image sharp at 60×; macro mode activates automatically; no distortion"],
            ["CAM-006", "Camera app launch time (cold start)", "Camera ready for capture within 1.5 seconds of tap"],
            ["CAM-007", "Simultaneous front + rear camera (video mode)", "Both streams active; no frame sync error; recording stable"],
          ],
        },
      },
      {
        heading: "Battery & Endurance Test Cases",
        list: [
          "BAT-001: Full charge cycle — 0% to 100%; time must match specification (Reno 7: ≤ 63 min with 65W; Find X3: ≤ 58 min with 65W)",
          "BAT-002: Discharge endurance — standardised robotic usage script (30% calls, 30% video, 20% social, 20% idle); target > 18 hours",
          "BAT-003: Fast charge safety — thermal monitoring during 65W charging; skin temp ≤ 42°C",
          "BAT-004: Charge cycle longevity — 50 full charge cycles; capacity retention ≥ 97%",
          "BAT-005: Overnight trickle charge — plugged in 8 hours; no overcharge; no battery swell simulation trigger",
          "BAT-006: Battery during 5G active use — 1 hour 5G data; remaining battery vs. specification claim",
        ],
      },
      {
        heading: "Hardware-Software Integration Test Cases",
        list: [
          "HW-001: Fingerprint sensor (in-display optical) — 100 unlock attempts; success rate ≥ 98%; rejection rate ≤ 2%",
          "HW-002: Face unlock — 50 attempts including glasses, dim light, angle variations; pass rate ≥ 95%",
          "HW-003: Proximity sensor during call — screen off within 1s of phone held to ear; back on within 0.5s when lowered",
          "HW-004: Accelerometer/gyroscope — screen rotation; gaming motion input; accuracy vs. calibration reference",
          "HW-005: NFC payment — 3 simulated tap-to-pay transactions; each completes within 500ms",
          "HW-006: USB-C data transfer — file transfer 1GB at USB 3.1 speeds; no disconnection",
          "HW-007: Speaker + microphone — voice recording quality; in-call audio; noise cancellation in simulated environment",
        ],
      },
    ],
  },

  rootCause: {
    sections: [
      {
        heading: "RCA Methodology Overview",
        body: "Root Cause Analysis at OPPO QA follows a structured 3-stage approach: immediate defect containment, root cause identification (using 5-Why and Fishbone), and corrective action implementation with verification. All Medium+ severity defects undergo formal RCA before closure. Learnings are shared in weekly cross-team sessions to prevent recurrence across device lines.",
      },
      {
        heading: "5-Why Analysis — Example (5G Handover Drop)",
        subsections: [
          {
            title: "Defect: Device drops call during 4G → 5G handover",
            list: [
              "Why 1: Why did the call drop? — Radio link failure triggered during handover sequence",
              "Why 2: Why did radio link failure occur? — Timing gap between 4G release and 5G registration exceeded threshold",
              "Why 3: Why was the timing gap too large? — Modem firmware used conservative handover timer from legacy 4G spec",
              "Why 4: Why was the legacy timer not updated? — 5G NSA handover requirements not reflected in firmware config file",
              "Why 5: Why was the config not updated? — 5G NSA test scenarios were added post firmware freeze; config change not raised",
              "Root Cause: 5G NSA handover timer configuration not updated to match 5G NSA spec requirements",
              "Corrective Action: Config file updated; 5G-specific handover test cases added to pre-freeze checklist",
            ],
          },
        ],
      },
      {
        heading: "Defect Classification Matrix",
        table: {
          headers: ["Severity", "Definition", "Response SLA", "RCA Required"],
          rows: [
            ["Critical (P1)", "Device crash, data loss, safety issue, or market-blocking defect", "Fix within 24 hours; escalated to Engineering Director", "Yes — within 48 hours"],
            ["High (P2)", "Core feature broken; significant UX degradation; failing release criterion", "Fix within 72 hours; flagged to QA Lead daily", "Yes — within 5 business days"],
            ["Medium (P3)", "Feature works with workaround; moderate UX issue; not release-blocking", "Fixed in next sprint; tracked in JIRA", "Yes — within 10 business days"],
            ["Low (P4)", "Cosmetic issue; minor UX inconsistency; no functional impact", "Fixed in backlog; prioritised by Product", "No — documented only"],
          ],
        },
      },
      {
        heading: "Fishbone (Ishikawa) Diagram Categories",
        list: [
          "Modem / Firmware: 5G config errors, timing parameters, frequency band support gaps",
          "Hardware: antenna placement, thermal management, component tolerance variation",
          "Software / OS: Android layer conflicts, driver version mismatches, memory management",
          "Test Environment: lab network simulator accuracy, RF interference, equipment calibration",
          "Process: test coverage gaps, late test case additions, build freeze timing",
          "Human Factors: test case misinterpretation, inadequate knowledge transfer from R&D",
        ],
      },
      {
        heading: "RCA Template",
        subsections: [
          {
            title: "Standard RCA Report Fields",
            list: [
              "Defect ID and JIRA link",
              "Device model and firmware build version",
              "Defect description: symptom, reproduction steps, frequency",
              "Immediate containment action (before root cause identified)",
              "5-Why analysis: 5 levels minimum for P1/P2 defects",
              "Root cause statement: one clear sentence",
              "Corrective action: specific, assigned, with due date",
              "Preventive action: process or checklist change to prevent recurrence",
              "Verification: how the fix was confirmed (test case ID)",
              "Lessons learned: shared at next weekly QA sync",
            ],
          },
        ],
      },
    ],
  },

  processFlow: {
    sections: [
      {
        heading: "QA Process Overview",
        body: "OPPO's device QA process follows a gated lifecycle from test design through to market release. Each gate requires sign-off before proceeding. The QA team works in parallel with firmware development sprints, enabling continuous testing rather than end-of-cycle validation. Kaizen retrospectives are held after each major milestone to identify and implement process improvements.",
      },
      {
        heading: "Phase 1 — Test Design & Preparation",
        list: [
          "1. Requirements received from R&D: hardware specs, software feature list, market target (country/carrier)",
          "2. Risk analysis: identify highest-risk components and features based on new vs. carried-forward design",
          "3. Test case creation: new test cases written for novel features; existing cases reviewed and updated",
          "4. Test case review: peer review within QA team; sign-off by QA Lead",
          "5. Environment setup: network lab configured for target market frequency bands; devices provisioned",
          "6. Automation update: robotic scripts updated or created for new regression scenarios",
          "Gate 1 ✓: Test cases approved, environments ready, automation updated",
        ],
      },
      {
        heading: "Phase 2 — Test Execution (Iterative)",
        list: [
          "1. Firmware build received from software team; build notes reviewed for changes",
          "2. Smoke test (2 hours): verify critical features function; reject build if smoke fails",
          "3. Full test execution: all Critical and High test cases executed by QA team",
          "4. Defects logged in JIRA: description, reproduction steps, severity, screenshots/logs attached",
          "5. Defect triage meeting (daily): QA + Engineering; defects assigned, prioritised, and tracked",
          "6. Regression pass: after bug fixes, targeted regression run to verify fixes and check for regressions",
          "Gate 2 ✓: All Critical test cases executed; no P1/P2 defects open",
        ],
      },
      {
        heading: "Phase 3 — Release Gate & Certification",
        list: [
          "1. Release candidate (RC) build declared by Engineering: freeze on new features",
          "2. Full regression suite executed: automated (30%) + manual (70%)",
          "3. Exit criteria verification: all metrics reviewed against release gate thresholds",
          "4. RCA review: all Medium+ defects have completed RCA; corrective actions verified",
          "5. QA sign-off: QA Lead signs release approval document",
          "6. Carrier certification package prepared (separate track): submitted to carrier labs",
          "Gate 3 ✓: QA released; device moves to manufacturing scale-up",
        ],
      },
      {
        heading: "Defect Management Flow",
        list: [
          "Defect raised by tester → JIRA ticket created with severity, module, build version",
          "QA Lead triages within 4 hours for P1/P2; 24 hours for P3/P4",
          "Engineering assigned: defect investigated; fix ETA provided",
          "Fix implemented → developer updates JIRA with fix details and target build",
          "QA verifies fix on new build: pass → defect closed; fail → defect reopened with additional notes",
          "P1/P2 defects: daily status update to Engineering Director until resolved",
          "Weekly defect burndown chart shared with cross-functional team",
        ],
      },
      {
        heading: "Kaizen Continuous Improvement Cycle",
        list: [
          "After each major milestone (alpha, beta, RC): 1-hour retrospective with QA team",
          "Categories reviewed: test coverage gaps, process bottlenecks, automation opportunities, recurring defect patterns",
          "Each retrospective produces 2–3 Kaizen action items with named owner and 2-week due date",
          "Kaizen board (physical) maintained in QA lab: To Do / In Progress / Done",
          "Example Kaizen outcome: 5G test cases moved from post-freeze to pre-freeze — eliminated 3 late P2 defects in subsequent device launch",
          "Quarterly Kaizen review: measure whether process changes reduced defect escape rate vs. prior device",
        ],
      },
    ],
  },

  marketInsights: {
    sections: [
      {
        heading: "Field Defect Analysis Overview",
        body: "Market feedback and field defect data from OPPO's after-sales and customer service systems were analysed monthly by the QA team. Field defects — issues not caught in pre-launch testing — were the primary input for test strategy improvement. Kaizen actions driven by field data prevented an estimated 35% of pre-launch defects in subsequent device lines.",
      },
      {
        heading: "Top Market Defect Categories",
        table: {
          headers: ["Defect Category", "Market Frequency", "Root Cause (Common)", "QA Action Taken"],
          rows: [
            ["5G connectivity drops in weak signal areas", "High", "Conservative handover timer not matching real-world network conditions", "Added weak-signal handover test cases (-105 dBm); updated timer config"],
            ["Camera autofocus hunting in low light", "High", "AF algorithm not optimised for LED indoor lighting (common in AU)", "Added low-light AF test cases with LED reference lighting"],
            ["Battery drain faster than claimed", "Medium-High", "Background app behaviour on specific carrier SIM configurations", "Added 5G + background app battery drain to test suite"],
            ["Fingerprint unlock failures (wet hands)", "Medium", "Optical sensor threshold not adjusted for humidity variance", "Added humidity condition to fingerprint test protocol"],
            ["Screen flicker at low brightness in dark", "Medium", "PWM frequency at low brightness causing flicker for sensitive users", "Added low-brightness flicker test with reference camera measurement"],
            ["Overheating during sustained gaming", "Low-Medium", "Thermal throttle set too conservatively; GPU performance inconsistent", "Added 30-min gaming endurance thermal test to gate criteria"],
          ],
        },
      },
      {
        heading: "Kaizen Actions Driven by Market Feedback",
        list: [
          "Kaizen #1: Field 5G data → added 7 new 5G handover test cases before next device freeze; 5G field complaints reduced 28% on next model",
          "Kaizen #2: Camera low-light AF field data → created dedicated LED lighting environment in QA lab; AF complaints reduced 41%",
          "Kaizen #3: Battery drain complaints → standardised carrier SIM rotation in battery endurance testing; matched real-world conditions",
          "Kaizen #4: Fingerprint field data → added humidity test station to lab; failure rate reduced in Find X3 vs. Find X2",
          "Kaizen #5: Market failure insights formalised into a 'Field Learning Repository' in Confluence — searchable by component and symptom for future device planning",
        ],
      },
      {
        heading: "Failure Analysis Methodology",
        list: [
          "Monthly field defect report received from after-sales team (market, severity, volume, device batch)",
          "QA team reproduces top 5 field defects in lab within 5 business days of report",
          "5-Why RCA conducted for each reproduced defect; root cause documented",
          "Impact assessment: was this a test gap, environment gap, or specification gap?",
          "Corrective action: update test case library, test environment, or raise spec clarification with Engineering",
          "Lessons shared at monthly 'Insights & Sharing' session with R&D, Software, and Product teams",
          "Metric tracked: field defect escape rate per 10,000 units — target < 5; achieved 3.8 on Find X3 (from 6.1 on Find X2)",
        ],
      },
      {
        heading: "Metrics: Before vs. After Improvements",
        table: {
          headers: ["Metric", "Find X2 (Before Kaizen)", "Find X3 (After Kaizen)", "Improvement"],
          rows: [
            ["Field defect escape rate (per 10K units)", "6.1", "3.8", "−38%"],
            ["5G connectivity complaints (% of field reports)", "22%", "14%", "−36%"],
            ["Camera-related field defects", "18%", "11%", "−39%"],
            ["Pre-launch P1 defect resolution time (avg)", "3.2 days", "1.8 days", "−44%"],
            ["Regression automation coverage", "18%", "31%", "+72%"],
            ["Test cycle duration (alpha to RC)", "11 weeks", "9 weeks", "−18%"],
          ],
        },
      },
    ],
  },
};
