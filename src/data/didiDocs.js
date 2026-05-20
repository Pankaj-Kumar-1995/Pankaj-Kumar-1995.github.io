export const didiDocs = {
  brd: {
    sections: [
      {
        heading: "Executive Summary",
        body: "This Business Requirements Document defines the requirements for enhancing DiDi's accessibility and inclusivity offering in Melbourne. Primary research with 60+ participants confirms significant service gaps — 36% service animal discrimination, 14% wheelchair-accessible fleet, 68% of parents avoiding rideshare. Three proposed service tiers (DidiChildSeat, DidiCare, DidiCompanion) address these gaps with a validated willingness-to-pay of 58–100% and a projected 3-year net ROI of AUD $965,000.",
      },
      {
        heading: "Business Objectives",
        list: [
          "Eliminate service animal discrimination (reduce from 36% reported incidents to 0% target)",
          "Grow wheelchair-accessible vehicle fleet from 14% to 35% of Melbourne DiDi fleet within 18 months",
          "Launch DidiChildSeat add-on to capture the 68% of parents currently avoiding rideshare",
          "Generate AUD $2.5M+ incremental annual revenue from accessibility tier portfolio at maturity",
          "Improve DiDi's accessibility NPS from -12 to +10 within 12 months of launch",
          "Establish first-mover competitive advantage over Uber in the Melbourne accessibility segment",
        ],
      },
      {
        heading: "Problem Statement & Evidence",
        subsections: [
          {
            title: "Research-Validated Service Gaps",
            list: [
              "36% of surveyed users reported discrimination when travelling with registered service animals",
              "Only 14% of DiDi Melbourne vehicles are wheelchair-accessible (vs. 22% for Uber Assist)",
              "68% of parents with children aged 0–8 avoid rideshare entirely due to no child seat guarantee",
              "61% of parents who do use rideshare reported unsafe or absent child seats",
              "DiDi's service animal policy exists but only 28% of drivers were aware of it",
              "58–100% of affected users expressed willingness to pay a premium for guaranteed accessibility",
            ],
          },
          {
            title: "Legal & Compliance Context",
            list: [
              "Equal Opportunity Act 2010 (Vic): drivers are legally required to carry registered service animals — refusal is unlawful",
              "Disability Discrimination Act 1992 (Commonwealth): transport services must not discriminate based on disability",
              "Australian Road Rules: child restraints are mandatory for children aged 0–7 — rideshare providers face liability",
              "Current driver non-compliance creates legal exposure for DiDi Australia",
            ],
          },
        ],
      },
      {
        heading: "Scope",
        subsections: [
          {
            title: "In Scope",
            list: [
              "DidiChildSeat (+$8 add-on): guaranteed child seat vehicle for families with children aged 0–8",
              "DidiCare (premium tier): disability-trained drivers with extended wait time allowance",
              "DidiCompanion (specialty tier): pre-registered service animal guarantee with zero-refusal policy",
              "Driver training and certification programme for DidiCare and DidiCompanion tiers",
              "App feature updates to support tier selection at booking (iOS and Android)",
              "Driver incentive programme: $50 bonus per DidiChildSeat trip completed",
            ],
          },
          {
            title: "Out of Scope",
            list: [
              "Modifications to existing standard DiDi, DiDi Express, or DiDi XL service tiers",
              "International markets: Melbourne pilot only for first 12 months",
              "Self-driving or autonomous vehicle accessibility (future technology roadmap)",
              "In-vehicle wheelchair ramp installation by DiDi (driver's own vehicle modification, incentivised)",
            ],
          },
        ],
      },
      {
        heading: "Stakeholder Register",
        table: {
          headers: ["Stakeholder", "Role", "Interest", "Influence"],
          rows: [
            ["DiDi Australia Management", "Executive sponsor and investment decision maker", "High", "High"],
            ["Passengers with disabilities", "Primary beneficiary — DidiCare and DidiCompanion", "High", "Low"],
            ["Parents with children 0–8", "Primary beneficiary — DidiChildSeat", "High", "Low"],
            ["Service animal owners", "Primary beneficiary — DidiCompanion", "High", "Low"],
            ["DiDi Driver Partners", "Delivery partners; opt-in to accessibility tiers", "High", "Medium"],
            ["Compliance & Legal (DiDi)", "Regulatory oversight; EO Act and DDA compliance", "Medium", "High"],
            ["Marketing & Customer Experience", "Brand launch and awareness campaign", "High", "Medium"],
          ],
        },
      },
      {
        heading: "Success Criteria",
        list: [
          "DidiChildSeat: 500+ completed rides/month within 3 months of launch",
          "DidiCompanion: 0 service animal refusal incidents reported within first 6 months",
          "DidiCare: 200 certified drivers onboarded within 60 days of launch",
          "Wheelchair-accessible vehicle pool: 35% of Melbourne fleet within 18 months",
          "Accessibility NPS improvement: from -12 to +10 within 12 months",
          "Revenue from accessibility tiers: AUD $2.5M+ annually by Month 18",
        ],
      },
      {
        heading: "Constraints & Assumptions",
        list: [
          "Melbourne pilot only — national rollout decision to be made at Month 12 based on pilot results",
          "App feature changes require coordination with DiDi's global product team (minimum 90-day lead time)",
          "Driver participation in accessibility tiers is opt-in; DiDi cannot compel existing drivers",
          "Child seat procurement is the driver's responsibility; DiDi provides a one-time subsidy of AUD $150",
          "Must comply with Equal Opportunity Act 2010 (Vic) and Disability Discrimination Act 1992 (Cth)",
          "Phase 1 budget cap: AUD $256,000 (app dev, training, marketing, compliance review)",
        ],
      },
    ],
  },

  marketResearch: {
    sections: [
      {
        heading: "Research Methodology",
        body: "Primary research was conducted over 3 weeks at Melbourne Central Station — chosen as a high-traffic transport hub with a diverse population including commuters, disability support workers, and parents. 12 in-depth semi-structured interviews (20–35 minutes each) and 50+ surveys were completed. Secondary research covered DiDi and Uber public accessibility policies, ACCC transport reports, VicRoads vehicle data, and academic literature on accessible urban mobility.",
      },
      {
        heading: "Key Findings — Service Animals",
        list: [
          "36% of service animal owners reported being refused service by a DiDi driver at least once",
          "74% had experienced at least one uncomfortable or discriminatory incident related to their service animal",
          "Driver awareness of DiDi's service animal policy: only 28% of surveyed DiDi drivers",
          "Average additional wait time to find a willing driver after refusal: 22 minutes",
          "Legal obligation awareness: 63% of refused drivers were unaware they were breaking the law",
          "Finding: A verified pre-registration system would reduce refusals by ensuring driver awareness and accountability",
        ],
      },
      {
        heading: "Key Findings — Wheelchair Accessibility",
        list: [
          "Only 14% of DiDi Melbourne vehicles reported as wheelchair-accessible (WAV)",
          "Uber Assist: 22% accessible vehicles — the current market leader in Melbourne",
          "Average wait time for an accessible vehicle: 24–38 minutes (vs. 6 minutes for standard rides)",
          "82% of regular wheelchair users reported using rideshare less than once per week due to unreliability",
          "67% of wheelchair users said they would increase rideshare frequency if wait times were under 10 minutes",
          "Finding: Fleet incentive programme needed to grow WAV pool to 35%+ — critical for service reliability",
        ],
      },
      {
        heading: "Key Findings — Child Seats",
        list: [
          "68% of parents with children aged 0–8 reported avoiding rideshare entirely due to no child seat guarantee",
          "61% of parents who do use rideshare with children reported unsafe, absent, or incorrect child seats",
          "100% of parent respondents expressed willingness to pay AUD $5–10 premium for a guaranteed child seat",
          "58% preferred a pre-booking add-on model (vs. driver carry model: 42%)",
          "No Melbourne rideshare provider currently offers a guaranteed child seat option — clear market gap",
          "Finding: DidiChildSeat add-on (+$8) is commercially viable with 100% willingness-to-pay confirmation",
        ],
      },
      {
        heading: "Survey Statistics",
        table: {
          headers: ["Research Finding", "Statistic"],
          rows: [
            ["Parents willing to pay $8+ for guaranteed child seat", "100% of parent respondents"],
            ["Disability passengers willing to pay premium for DidiCare", "78% of disability respondents"],
            ["Service animal owners willing to pay for DidiCompanion guarantee", "58% of service animal owners"],
            ["Trust in DiDi vs. Uber on accessibility", "34% prefer DiDi; 66% prefer Uber"],
            ["DiDi accessibility NPS (affected users)", "-12 (vs. industry benchmark of +8)"],
            ["Willingness to switch from Uber if DiDi had better accessibility", "71% of Uber-using accessibility passengers"],
          ],
        },
      },
      {
        heading: "Competitor Analysis",
        table: {
          headers: ["Feature", "DiDi Melbourne", "Uber Melbourne"],
          rows: [
            ["Wheelchair-accessible vehicles", "14% of fleet", "22% of fleet (Uber Assist)"],
            ["Service animal policy", "Policy exists; poorly communicated; 72% driver non-awareness", "Better app visibility; still inconsistent enforcement"],
            ["Child seat option", "None available", "None available — market gap for both"],
            ["Disability-trained drivers", "None formalised", "Uber Assist: 3-hour voluntary training"],
            ["Dedicated app accessibility feature", "None", "Uber Assist filter in booking flow"],
            ["Accessibility NPS", "-12 (affected user segment)", "+4 (affected user segment)"],
            ["Accessible vehicle wait time", "24–38 minutes", "15–22 minutes"],
          ],
        },
      },
      {
        heading: "Market Opportunity Summary",
        list: [
          "Child seat segment: 68% of parents = 340,000+ potential rides/year in Melbourne at 100% willingness-to-pay",
          "Service animal segment: untapped, legally mandated, high reputational upside — currently a liability not an asset",
          "Wheelchair access: growing fleet from 14% → 35% opens estimated $1.2M+ additional annual revenue",
          "First-mover advantage: no Melbourne rideshare provider dominates the child seat or dedicated service animal tier",
          "Switcher potential: 71% of Uber-using accessibility passengers would switch to DiDi with better accessibility",
          "ESG and brand value: SDG alignment (Goals 3, 10, 11, 17) strengthens DiDi's corporate responsibility credentials",
        ],
      },
    ],
  },

  businessCase: {
    sections: [
      {
        heading: "Financial Model Overview",
        body: "The three-tier accessibility portfolio is modelled on willingness-to-pay data from primary research, Melbourne rideshare market size estimates (IBIS World 2023), and DiDi's current Melbourne market share (~28% of rideshare trips). Revenue builds gradually as driver certification numbers grow. The model reaches break-even by Month 11 and generates AUD $965,000 net over 3 years.",
      },
      {
        heading: "Revenue Projections by Service Tier",
        table: {
          headers: ["Service Tier", "Pricing Model", "Volume Forecast", "Year 1 Revenue", "Year 2+ Annual Revenue"],
          rows: [
            ["DidiChildSeat", "$8 add-on per booking", "500 rides/month (M3) → 2,000/month (M12)", "AUD $192,000", "AUD $288,000/year"],
            ["DidiCare", "$12 premium per trip", "200 rides/month (M6) → 800/month (M12)", "AUD $86,400", "AUD $115,200/year"],
            ["DidiCompanion", "$3 booking fee + loyalty uplift", "150/month (M4) → 600/month (M12)", "AUD $27,000", "AUD $32,400/year"],
            ["Total", "", "", "AUD $305,400", "AUD $435,600/year"],
          ],
        },
      },
      {
        heading: "Cost Analysis",
        table: {
          headers: ["Cost Item", "Basis", "Amount (AUD)"],
          rows: [
            ["App development (tier selection, registration)", "3-month sprint, DiDi global product team", "$120,000 (one-time)"],
            ["Child seat subsidy (driver incentive)", "$150/seat × 300 certified vehicles", "$45,000 (one-time)"],
            ["DidiCare driver training programme", "$180/driver × 200 trained drivers", "$36,000 (one-time)"],
            ["Marketing & launch campaign (Melbourne)", "Digital, OOH, community outreach", "$40,000 (one-time)"],
            ["Compliance & legal review", "2-month external counsel engagement", "$15,000 (one-time)"],
            ["Total Phase 1 investment", "", "$256,000"],
            ["Ongoing annual operating costs", "Support, training refresh, programme management", "~$80,000/year"],
          ],
        },
      },
      {
        heading: "ROI Analysis",
        list: [
          "Year 1 net: $305,400 revenue − $256,000 investment − $80,000 operating = −$30,600 (near break-even)",
          "Break-even point: Month 11 (when cumulative revenue crosses cumulative investment)",
          "Year 2 net: $435,600 revenue − $80,000 operating = $355,600 profit",
          "Year 3 net: $435,600 revenue − $80,000 operating = $355,600 profit (assuming stable volumes)",
          "3-year net ROI: −$30,600 + $355,600 + $355,600 = AUD $680,600 (after costs)",
          "Intangible value (not in model): brand uplift, legal compliance, driver quality signal, ESG credentials",
          "Sensitivity: if DidiChildSeat achieves 3,000 rides/month by Month 18, 3-year ROI exceeds AUD $1.2M",
        ],
      },
      {
        heading: "Break-Even Analysis by Tier",
        subsections: [
          {
            title: "DidiChildSeat",
            list: [
              "Monthly allocated costs: $4,000 (app maintenance, driver incentive amortisation)",
              "Revenue per ride: $8 add-on",
              "Break-even: 500 rides/month = $4,000 revenue",
              "Break-even timeline: Month 3 per volume forecast",
              "Risk: Low — 100% willingness-to-pay confirmed; no Melbourne competitor",
            ],
          },
          {
            title: "DidiCare",
            list: [
              "Monthly allocated costs: $3,000 (driver training amortised, support premium)",
              "Revenue per trip: $12 premium",
              "Break-even: 250 trips/month = $3,000 revenue",
              "Break-even timeline: Month 8 per volume forecast",
              "Risk: Medium — relies on successful driver opt-in and disability community awareness",
            ],
          },
          {
            title: "DidiCompanion",
            list: [
              "Monthly allocated costs: $800 (registry maintenance, compliance monitoring)",
              "Revenue per booking: $3 fee",
              "Break-even: 267 bookings/month = $801 revenue",
              "Break-even timeline: Month 9 per volume forecast",
              "Risk: Low-Medium — volume modest; primary value is legal compliance and brand, not revenue",
            ],
          },
        ],
      },
    ],
  },

  processFlow: {
    sections: [
      {
        heading: "As-Is Process — No Accessibility Support (Current State)",
        body: "DiDi's current standard booking flow has no accessibility options. Passengers with special needs must request a standard ride and rely entirely on driver goodwill. This creates frequent refusals for service animal owners, unsafe child restraint situations, and inaccessible vehicles for wheelchair users. The current process exposes DiDi to legal liability under the Equal Opportunity Act 2010 (Vic).",
      },
      {
        heading: "As-Is Process — Service Animal (Current State)",
        list: [
          "1. Passenger with service animal opens DiDi app and requests a standard ride",
          "2. Driver accepts the ride and sees only the pickup location",
          "3. Driver arrives and notices the service animal for the first time",
          "4. Outcome A (36% of cases): Driver refuses — passenger must cancel; waits average 22 mins for another driver",
          "5. Outcome B (64% of cases): Driver accepts but may behave uncomfortably; negative experience for passenger",
          "6. No formal real-time complaint mechanism — DiDi support takes 48+ hours to respond to incidents",
          "7. Driver faces no immediate consequence for refusal — complaint investigation is slow",
        ],
      },
      {
        heading: "DidiChildSeat Booking Flow (To-Be)",
        list: [
          "1. Parent opens DiDi app → selects 'Add Child Seat' option on the booking screen (+$8 added to fare)",
          "2. App filters available vehicles to DidiChildSeat-certified drivers with verified child seats only",
          "3. Booking confirmed; confirmation screen shows 'Child Seat Included' badge and driver ETA",
          "4. Driver arrives with child seat installed and ready; child seat model visible in-app (e.g., 'Britax Safe-n-Sound')",
          "5. Parent installs child; trip completed normally",
          "6. Post-trip: parent receives receipt with child seat add-on itemised",
          "7. Parent rates the child seat experience (1–5 stars, separate from ride rating)",
          "8. DiDi: child seat satisfaction data feeds monthly quality review; poor-rated drivers flagged for equipment check",
        ],
      },
      {
        heading: "DidiCare Booking Flow (To-Be)",
        list: [
          "1. Passenger with disability opens DiDi app → selects 'DidiCare' tier from the accessibility menu",
          "2. App displays estimated wait time (avg +3–5 minutes over standard) and confirms DidiCare availability",
          "3. A DidiCare-certified driver (3-hour trained) accepts the trip",
          "4. Driver and passenger app both show 'DidiCare' banner confirming the trained tier",
          "5. Driver arrives; has completed training in: disability awareness, boarding assistance, communication techniques",
          "6. Passenger has a 5-minute extended wait allowance — no cancellation penalty applied for this tier",
          "7. Driver assists with boarding/alighting as needed, per passenger's instructions",
          "8. Post-trip: separate DidiCare rating collected; contributes to driver's DidiCare certification renewal",
        ],
      },
      {
        heading: "DidiCompanion Service Animal Flow (To-Be)",
        list: [
          "1. Service animal owner registers their animal in DiDi app: name, registration number, type, and photo (one-time setup)",
          "2. DiDi verifies registration against state disability services registry (automated check, 24-hour manual review fallback)",
          "3. When booking: passenger selects 'DidiCompanion' — registration is visible to driver before they accept",
          "4. Driver sees 'DidiCompanion — Registered Service Animal' clearly displayed on the trip request",
          "5. Driver accepts knowing the service animal is pre-verified and legally protected",
          "6. Any refusal by a driver who has seen the DidiCompanion flag: automatic escalation flag raised immediately",
          "7. DiDi Compliance Team notified within 30 minutes; contacts passenger and driver within 2 hours",
          "8. First refusal: formal warning and mandatory retraining. Second refusal: driver deactivation.",
          "9. Passenger receives follow-up from DiDi within 24 hours; compensation offered for any refused trips",
        ],
      },
      {
        heading: "Escalation & Exception Handling",
        list: [
          "Driver refuses DidiCompanion trip after seeing flag: automatic compliance escalation; 30-minute response SLA",
          "Child seat defect or safety concern reported post-trip: driver flagged; equipment safety check required within 48 hours; replacement trip offered free",
          "DidiCare passenger requires assistance beyond driver training scope: trip completed; passenger welfare check call from DiDi support within 1 hour",
          "App or matching failure (no DidiChildSeat driver available): passenger offered standard ride with full add-on refund or guaranteed rebooking within 15 minutes",
          "All escalations: logged to DiDi compliance system; reviewed monthly for pattern analysis and policy improvement",
        ],
      },
    ],
  },

  presentation: {
    sections: [
      {
        heading: "Executive Summary",
        body: "DiDi Melbourne faces measurable, research-validated accessibility gaps that create legal risk, surrender market share to Uber, and harm DiDi's brand reputation among a growing customer segment. Primary research with 60+ participants confirms 58–100% willingness-to-pay for accessibility guarantees. Three scalable service tiers — DidiChildSeat, DidiCare, and DidiCompanion — address all identified gaps, with a projected 3-year net ROI of AUD $680,600+ and significant intangible value in compliance, brand, and ESG positioning.",
      },
      {
        heading: "Problem Brief",
        list: [
          "36% of service animal users experience refusals — DiDi is in violation of the Equal Opportunity Act 2010 (Vic)",
          "68% of Melbourne parents with children aged 0–8 avoid rideshare entirely — $34M+ untapped annual revenue opportunity",
          "Only 14% of DiDi vehicles wheelchair-accessible vs. 22% for Uber Assist — DiDi loses the accessibility-conscious passenger",
          "DiDi's accessibility NPS: −12 among affected users — significantly below the industry benchmark of +8",
          "71% of accessibility-focused Uber users said they would switch to DiDi with a better accessibility offering",
          "No Melbourne rideshare provider currently dominates the child seat or service animal tier — first-mover opportunity available",
        ],
      },
      {
        heading: "Solution Overview",
        subsections: [
          {
            title: "DidiChildSeat — Tier 1 (+$8 Add-On)",
            body: "Guarantees a child seat vehicle for families with children aged 0–8. Drivers earn a $50 bonus per child seat trip, incentivising fleet investment. No competitor in Australian rideshare currently offers this.",
            list: [
              "Addresses 68% of parents currently avoiding rideshare — 340,000+ potential rides/year in Melbourne",
              "100% willingness-to-pay confirmed in primary research",
              "Driver incentive: $50 per completed child seat trip (funded from add-on revenue)",
              "Revenue at maturity: AUD $288,000/year | Break-even: Month 3",
            ],
          },
          {
            title: "DidiCare — Tier 2 (Premium Accessibility)",
            body: "Premium ride tier with disability-trained drivers, extended 5-minute wait allowance, and no cancellation penalty. Targets passengers with mobility impairments, chronic illness, or who require boarding assistance.",
            list: [
              "3-hour driver training: disability awareness, boarding/alighting assistance, communication techniques",
              "78% of disability respondents willing to pay the $12 premium",
              "Aligns with DiDi's duty of care obligations under the Disability Discrimination Act 1992",
              "Revenue at maturity: AUD $115,200/year | Break-even: Month 8",
            ],
          },
          {
            title: "DidiCompanion — Tier 3 (Service Animal Guarantee)",
            body: "Pre-registered service animal verification system that eliminates surprise refusals. Driver sees animal registration before accepting — legally informed consent. Zero-tolerance deactivation policy for repeat refusers.",
            list: [
              "Eliminates DiDi's current legal exposure under Equal Opportunity Act 2010 (Vic)",
              "58% of service animal owners willing to pay the $3 booking fee",
              "Zero discrimination incidents: KPI target for first 6 months",
              "Revenue at maturity: AUD $32,400/year — primary value is compliance and brand, not revenue",
            ],
          },
        ],
      },
      {
        heading: "Implementation Roadmap",
        table: {
          headers: ["Phase", "Timeline", "Activities", "Key Deliverable"],
          rows: [
            ["Phase 1 — Compliance & Foundations", "Months 1–3", "Legal review; driver training curriculum design; app requirements specification; DidiCompanion registration system design", "DidiCompanion compliance policy; Training curriculum approved"],
            ["Phase 2 — App Development & Pilot Launch", "Months 4–6", "App feature build (90-day global product lead); 200 DidiCare drivers trained; DidiCare and DidiCompanion go-live", "DidiCare live; DidiCompanion live; first accessibility rides completed"],
            ["Phase 3 — DidiChildSeat Launch", "Months 7–9", "Child seat subsidy distributed; DidiChildSeat app feature live; marketing campaign launch", "DidiChildSeat live; 500 rides/month target by Month 9"],
            ["Phase 4 — Optimisation & Scale Decision", "Months 10–12", "Performance review against KPIs; service improvements; national rollout business case prepared", "Full Melbourne portfolio; national rollout go/no-go decision"],
          ],
        },
      },
      {
        heading: "Expected Outcomes & SDG Alignment",
        subsections: [
          {
            title: "Business Outcomes",
            list: [
              "Competitive differentiation: first Melbourne rideshare provider with guaranteed child seat — 3-month first-mover window before Uber can respond",
              "Legal compliance: service animal refusal rate reduced from 36% to 0% target — eliminates active legal liability",
              "Brand: accessibility NPS improvement from −12 to +10 within 12 months",
              "Revenue: AUD $680,600+ 3-year net ROI from accessibility tier portfolio",
              "Driver quality signal: accessibility certification attracts service-focused drivers",
            ],
          },
          {
            title: "UN Sustainable Development Goals (SDG) Alignment",
            list: [
              "SDG 3 — Good Health & Well-Being: improved transport access for passengers with disabilities, parents, and service animal owners",
              "SDG 10 — Reduced Inequalities: removing transport barriers for mobility-impaired passengers; eliminating service animal discrimination",
              "SDG 11 — Sustainable Cities & Communities: inclusive urban mobility for all Melbourne residents, regardless of ability",
              "SDG 17 — Partnerships for the Goals: shared-value driver incentive model creates mutual benefit for DiDi and driver partners",
            ],
          },
        ],
      },
      {
        heading: "Key Risks & Mitigations",
        list: [
          "Driver opt-in rate: $50/trip child seat incentive targets 300 certified drivers in Month 1; monitored weekly",
          "App development timeline: 90-day global product team lead time means Phase 1 must begin immediately to meet Phase 2 launch",
          "Competitor response: Uber may copy the child seat model — recommend aggressive marketing and partnership launch within 3 months to establish brand first",
          "Driver training quality: third-party accessibility trainers engaged; training content co-designed with disability advocacy groups",
          "Volume ramp: if DidiChildSeat volume < 250 rides/month by Month 6, targeted parent community campaign to be activated",
        ],
      },
    ],
  },
};
