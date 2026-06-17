export const nyc311Docs = {
  brd: {
    sections: [
      {
        heading: "Executive Summary",
        body: "This Business Requirements Document defines the requirements for a machine learning-based demand forecasting system for NYC311 non-emergency services. The system uses LSTM neural networks and DBSCAN geographic clustering to predict service demand patterns, enabling proactive resource allocation across NYC's 30M+ annual service requests.",
      },
      {
        heading: "Business Objectives",
        list: [
          "Achieve ≥ 92% forecast accuracy for peak demand periods",
          "Reduce resource allocation errors by 45% within 6 months of go-live",
          "Enable $2.3M annual cost savings through optimised staffing",
          "Improve average service response time by 18%",
          "Establish a real-time demand monitoring dashboard for operations and city planning",
        ],
      },
      {
        heading: "Scope",
        subsections: [
          {
            title: "In Scope",
            list: [
              "ML-based demand forecasting for all NYC311 non-emergency service categories",
              "DBSCAN geographic clustering to identify demand hotspot patterns by borough",
              "Power BI dashboard for operations team and resource planners",
              "Automated alert system for predicted demand spikes (≥ 15% above baseline)",
              "5-year historical 311 call data analysis and model training",
              "Weekly automated model retraining pipeline",
            ],
          },
          {
            title: "Out of Scope",
            list: [
              "NYC 911 emergency calls (separate DoITT system)",
              "Automated staff rostering system (Phase 2 integration)",
              "Real-time call routing or dispatch automation (Phase 2)",
              "Mobile app for field operators (Phase 2)",
            ],
          },
        ],
      },
      {
        heading: "Stakeholder Register",
        table: {
          headers: ["Stakeholder", "Role", "Interest", "Influence"],
          rows: [
            ["NYC DoITT", "Executive sponsor and technical infrastructure owner", "High", "High"],
            ["NYC311 Operations Team", "Primary dashboard users; staffing decisions", "High", "High"],
            ["Resource Planning Department", "Staffing and budget allocation beneficiary", "High", "Medium"],
            ["Data Science Team", "Model development and MLOps", "High", "Medium"],
            ["Finance & Budget Office", "Cost approval and savings realisation tracking", "Medium", "High"],
          ],
        },
      },
      {
        heading: "Success Criteria",
        list: [
          "Forecast accuracy ≥ 92% measured on holdout test set (peak periods)",
          "7-day demand forecasts available daily by 06:00 AM Eastern Time",
          "Power BI dashboard load time < 3 seconds for all standard views",
          "Resource allocation error rate reduced by 45% within 6 months",
          "Demand spike alerts delivered within 30 minutes of model inference completion",
          "System uptime ≥ 99.5% (dashboard and inference API)",
        ],
      },
      {
        heading: "Assumptions",
        list: [
          "5 years of historical NYC311 call data is accessible in the Azure Data Lake",
          "Azure Machine Learning licences are approved and provisioned for the Data Science team",
          "Operations team commits minimum 8 hours/week for UAT and feedback sessions",
          "NOAA weather data API access is available for feature engineering",
          "DoITT infrastructure policy restricts to Azure cloud — no on-premise components",
        ],
      },
      {
        heading: "Constraints",
        list: [
          "DoITT policy: all processing must remain within Azure Government Cloud",
          "Phase 1 budget cap: USD $1.8M",
          "Project timeline: 26 weeks to go-live",
          "Minimum 5-year data retention required under NYC data governance policy",
          "Model explainability required: operations managers must understand forecast drivers",
        ],
      },
    ],
  },

  frd: {
    sections: [
      {
        heading: "System Overview",
        body: "The NYC311 Demand Forecasting System is an Azure-native ML pipeline that ingests historical 311 call data, trains LSTM time-series models and DBSCAN clustering models, and publishes 7-day demand forecasts to a Power BI operational dashboard. The system runs automatically on a scheduled cadence, with anomaly alerts delivered via Power Automate.",
      },
      {
        heading: "Functional Requirements",
        table: {
          headers: ["ID", "Requirement", "Priority", "Notes"],
          rows: [
            ["FR-001", "System shall ingest NYC311 call records from Azure Data Lake (5-year history, 150M+ records)", "High", "Azure Data Factory pipeline"],
            ["FR-002", "System shall train an LSTM model on hourly call volumes per service category", "High", "Python / Azure ML"],
            ["FR-003", "System shall generate 7-day demand forecasts by service category and borough", "High", "Daily inference at 05:00 AM ET"],
            ["FR-004", "System shall apply DBSCAN clustering to geocoded call locations to identify demand hotspots", "High", "Weekly clustering refresh"],
            ["FR-005", "System shall retrain LSTM model weekly on rolling expanded data window", "High", "Sunday 02:00 AM automated job"],
            ["FR-006", "System shall trigger an alert when predicted demand is ≥ 15% above 90-day baseline", "High", "Power Automate → email + Teams"],
            ["FR-007", "System shall publish forecasts to a Power BI dashboard refreshed daily by 06:00 AM", "High", "Power BI Service scheduled refresh"],
            ["FR-008", "System shall support filtering by service category, borough, and date range in dashboard", "Medium", "Power BI slicers"],
            ["FR-009", "System shall allow export of forecast data to Excel/CSV", "Medium", "Power BI export functionality"],
            ["FR-010", "System shall log all model predictions and actuals for weekly accuracy audit", "High", "Azure ML logging + Cosmos DB"],
            ["FR-011", "System shall display a geographic heatmap of predicted demand clusters on an NYC borough map", "Medium", "Power BI filled map + custom visual"],
            ["FR-012", "System shall provide 30/60/90-day trend summaries for executive reporting", "Medium", "Power BI executive report page"],
            ["FR-013", "System shall support what-if scenario modelling (demand multiplier by date range)", "Low", "Phase 2 candidate"],
            ["FR-014", "System shall provide model accuracy metrics (MAPE, RMSE) in operations dashboard", "Medium", "Weekly model performance report"],
          ],
        },
      },
      {
        heading: "Integration Requirements",
        list: [
          "Azure Data Lake Storage Gen2 — source of NYC311 historical and live call data",
          "NOAA Weather API — daily weather features for model input (temperature, precipitation, events)",
          "Azure Machine Learning — model training, versioning, and inference endpoints",
          "Power BI Service — dashboard hosting, scheduled refresh, and sharing",
          "Power Automate — demand spike alert delivery via email and Microsoft Teams",
          "NYC Resource Scheduling System — forecast export for staffing plan generation",
          "Azure Cosmos DB — conversation logs, model run metadata, and alert history",
        ],
      },
      {
        heading: "Non-Functional Requirements",
        table: {
          headers: ["ID", "Requirement", "Target"],
          rows: [
            ["NFR-001", "Forecast accuracy (peak periods, MAPE)", "≤ 8% (≥ 92% accuracy)"],
            ["NFR-002", "Model weekly retraining duration", "< 4 hours end-to-end"],
            ["NFR-003", "Dashboard load time (standard views)", "< 3 seconds"],
            ["NFR-004", "Data freshness (dashboard)", "Updated by 06:00 AM ET daily"],
            ["NFR-005", "System uptime (dashboard + API)", "≥ 99.5%"],
            ["NFR-006", "Concurrent dashboard users", "200+"],
            ["NFR-007", "Alert delivery latency", "Within 30 minutes of inference completion"],
            ["NFR-008", "Data security", "Azure Government Cloud; AES-256 at rest; TLS 1.3 in transit"],
          ],
        },
      },
    ],
  },

  userStories: {
    sections: [
      {
        heading: "Operations Manager User Stories",
        subsections: [
          {
            title: "US-001 — 7-Day Demand Forecast View",
            body: "As an NYC311 Operations Manager, I want to view 7-day demand forecasts by service category so that I can schedule appropriate staffing levels in advance.",
            list: [
              "AC1: Forecasts available for all 311 service categories with a 7-day forward horizon",
              "AC2: Daily demand counts displayed as a line chart with upper/lower confidence intervals",
              "AC3: Filterable by service category (e.g., Noise, HEAT/HOT WATER, Blocked Driveway) and borough",
              "AC4: Dashboard refreshed daily and available by 06:00 AM ET",
            ],
          },
          {
            title: "US-002 — Demand Spike Alerts",
            body: "As an Operations Manager, I want to receive an automated alert when predicted demand is ≥ 15% above baseline so that I can proactively adjust resources before the spike occurs.",
            list: [
              "AC1: Email and Teams notification delivered by 06:30 AM on spike-forecast days",
              "AC2: Alert includes service type, affected borough, predicted volume, and recommended adjustment",
              "AC3: Alert threshold configurable per service category by operations admin",
              "AC4: Alert history accessible in dashboard for trend review",
            ],
          },
          {
            title: "US-003 — Staffing Export",
            body: "As an Operations Manager, I want to export forecast data to the resource scheduling system so that staffing adjustments are informed by quantitative predictions.",
            list: [
              "AC1: 'Export to Scheduling System' button sends 7-day forecast to scheduling API",
              "AC2: Export includes service category, predicted volume, borough, and confidence band",
              "AC3: Export log shows timestamp and user for audit purposes",
            ],
          },
        ],
      },
      {
        heading: "Data Analyst User Stories",
        subsections: [
          {
            title: "US-004 — Geographic Demand Clusters",
            body: "As a Data Analyst, I want to explore geographic demand hotspots on an interactive NYC map so that I can identify borough-level patterns and inform infrastructure decisions.",
            list: [
              "AC1: Heatmap displays DBSCAN cluster assignments by call density across NYC boroughs",
              "AC2: Clusters filterable by time period and service category",
              "AC3: Clicking a cluster reveals the top 5 call sub-types and predicted volume for that area",
              "AC4: Clusters updated weekly based on latest spatial analysis",
            ],
          },
          {
            title: "US-005 — Model Performance Monitoring",
            body: "As a Data Analyst, I want to view weekly model accuracy metrics so that I can monitor forecast reliability and identify when retraining is needed.",
            list: [
              "AC1: Dashboard shows weekly MAPE and RMSE per service category",
              "AC2: Trend chart shows accuracy over the past 12 weeks",
              "AC3: Red threshold indicator when accuracy drops below 92% target",
              "AC4: Model version and training date shown alongside accuracy metrics",
            ],
          },
        ],
      },
      {
        heading: "City Planner / Executive User Stories",
        subsections: [
          {
            title: "US-006 — Executive Trend Summaries",
            body: "As a City Planner, I want to view 30/60/90-day demand trend summaries so that I can support budget cycles and long-term resource planning decisions.",
            list: [
              "AC1: Executive report page shows trend direction, seasonal patterns, and YoY comparison",
              "AC2: Key KPIs: total predicted calls, variance from last year, top 3 growing service categories",
              "AC3: Report exportable to PDF and PowerPoint for board presentations",
              "AC4: Updated weekly; last refresh timestamp displayed prominently",
            ],
          },
        ],
      },
      {
        heading: "Analyst Journey Map",
        subsections: [
          {
            title: "As-Is: Manual Resource Planning (Current State)",
            list: [
              "Operations team downloads last week's call volume report from the legacy reporting system",
              "Manager manually reviews Excel spreadsheet and applies judgment-based trend estimates",
              "Staffing request submitted to resource planning — average 2-day processing lag",
              "Resources allocated based on historical averages with no demand prediction",
              "During the week, managers monitor live volumes manually — spikes addressed reactively",
              "Post-week report compares actual vs. planned; findings inform next cycle (too late to act)",
              "Pain point: $2.3M+ annually wasted in over/under-staffing due to reactive planning",
            ],
          },
          {
            title: "To-Be: AI-Driven Forecast-Based Planning (Future State)",
            list: [
              "LSTM model retrains automatically each Sunday on rolling 5-year data window",
              "Inference pipeline runs daily at 05:00 AM; 7-day forecast published by 06:00 AM",
              "Operations manager reviews Power BI dashboard over morning briefing",
              "If spike alert received, staffing roster adjusted proactively — 7 days in advance",
              "DBSCAN geographic clusters updated weekly; borough-specific resources allocated",
              "Post-week accuracy metrics reviewed; model improvement backlog managed by Data Science team",
              "Outcome: 45% fewer allocation errors; $2.3M savings; 18% better response times",
            ],
          },
        ],
      },
    ],
  },

  bpmn: {
    sections: [
      {
        heading: "As-Is Process: Manual Resource Planning",
        body: "NYC311's current resource planning relies entirely on backward-looking weekly reports and experienced-based judgment. There is no predictive capability, no automated alerting, and no geographic intelligence applied to staffing decisions. All analysis is performed manually in Excel by a team of 3 operations analysts.",
      },
      {
        heading: "As-Is Process Steps",
        visualType: "flowchart",
        list: [
          "1. NYC311 legacy reporting system generates a weekly call volume summary (every Monday AM)",
          "2. Operations analyst downloads the Excel report and performs manual trend calculations",
          "3. Analyst applies seasonal multipliers and judgment-based adjustments based on experience",
          "4. Staffing recommendation submitted to Resource Planning Department via email",
          "5. Resource Planning reviews, adjusts for budget constraints, and confirms roster (avg 2-day delay)",
          "6. Staff roster finalised and communicated to operators (48–72 hours before the week begins)",
          "7. During the week, operations managers monitor live call volumes on legacy dashboard",
          "8. If unexpected spike detected, emergency staffing request raised — requires senior approval",
          "9. Emergency staff brought in at premium cost (1.5x standard rate)",
          "10. End-of-week: actual vs. planned comparison generated; fed into next week's cycle",
        ],
      },
      {
        heading: "As-Is Pain Points",
        list: [
          "Zero predictive capability — all planning is backward-looking; demand spikes always catch team off-guard",
          "Manual Excel analysis consumes 12+ analyst hours per week for three analysts",
          "Staffing decision lead time: 48–72 hours — too short for meaningful roster adjustment",
          "No geographic intelligence — city-wide averages mask significant borough-level variation",
          "Call category mix ignored — different call types require different staff skills",
          "Emergency staffing costs estimated at $800K–$1.2M annually (premium overtime rates)",
          "Forecast accuracy of manual method estimated at 61% — well below the 92% target",
          "No audit trail linking staffing decisions to forecast assumptions",
        ],
      },
      {
        heading: "To-Be Process: ML-Driven Demand Forecasting",
        body: "The future-state process automates all data ingestion, model training, and forecast generation. Operations managers receive actionable predictions 7 days in advance, with automated alerts for predicted spikes. The entire analytical pipeline runs without manual intervention; human decision-making focuses on reviewing forecasts and adjusting rosters.",
      },
      {
        heading: "To-Be Process Steps",
        visualType: "flowchart",
        list: [
          "1. Azure Data Factory ingests the prior day's NYC311 call records nightly at 01:00 AM",
          "2. Data quality checks run automatically; invalid records flagged and quarantined",
          "3. Every Sunday 02:00 AM: LSTM model retraining pipeline triggers on rolling 5-year window",
          "4. Retraining completes by 04:00 AM; new model version validated against holdout set",
          "5. If accuracy ≥ 92%: new model promoted to production; previous version archived",
          "6. Daily 05:00 AM: inference pipeline runs; 7-day forecasts generated per category and borough",
          "7. DBSCAN clustering refreshed weekly; geographic hotspot map updated",
          "8. If spike detected (≥ 15% above baseline): Power Automate alert sent by 06:30 AM",
          "9. Operations manager reviews Power BI dashboard by 07:00 AM daily briefing",
          "10. Manager uses 7-day forecast to prepare staffing request 7 days in advance",
          "11. Forecast exported to resource scheduling system; automated roster suggestion generated",
          "12. Post-week: actual vs. forecast accuracy calculated and logged for model improvement backlog",
        ],
      },
      {
        heading: "Process Improvement Metrics",
        list: [
          "Forecast accuracy: 61% (manual) → 92% (LSTM model) — 31 percentage-point improvement",
          "Staffing decision lead time: 48–72 hours → 7 days — dramatically more planning runway",
          "Analyst hours on manual reporting: 12 hrs/week → 1 hr/week (review only)",
          "Resource allocation errors: reduced by 45% within 6 months",
          "Emergency staffing incidents: target reduction of 70% (from ~180 to ~54 per year)",
          "Estimated annual savings: $2.3M from reduced over-staffing and emergency call-ins",
          "Service response time improvement: 18% — from proactive resource positioning",
        ],
      },
    ],
  },

  dataModel: {
    sections: [
      {
        heading: "Architecture Overview",
        body: "The NYC311 Forecasting System uses a three-layer Azure-native architecture: an ingestion layer for data collection and quality control, a processing and ML layer for model training and inference, and a presentation layer for operational dashboards and alerts. All components run within Azure Government Cloud to meet DoITT security requirements.",
      },
      {
        heading: "Architecture Layers",
        visualType: "architecture",
        subsections: [
          {
            title: "Ingestion Layer",
            body: "Responsible for collecting, validating, and preparing all data inputs for the ML pipeline.",
            list: [
              "Azure Data Factory — orchestrates nightly ingestion from NYC311 data lake and NOAA weather API",
              "Azure Data Lake Storage Gen2 — raw and processed data storage (5-year history; ~2.4TB)",
              "Azure Databricks — data cleansing, feature engineering, and train/test split preparation",
              "Data quality rules: null checks, coordinate validation, outlier detection (> 3σ flagged)",
            ],
          },
          {
            title: "Processing & ML Layer",
            body: "Core machine learning pipeline for model training, versioning, and inference.",
            list: [
              "Azure Machine Learning — LSTM model training, experiment tracking, model registry",
              "LSTM Model: 30-day input window → 7-day output forecast per service category per borough",
              "DBSCAN Clustering: epsilon = 0.5km, min_samples = 50; weekly geographic hotspot identification",
              "Azure ML Pipelines: automated weekly retraining and daily inference jobs",
              "Model versioning: MLflow tracking; automatic promotion if accuracy ≥ 92%",
            ],
          },
          {
            title: "Presentation Layer",
            body: "Operational dashboards and alert delivery for the NYC311 operations team.",
            list: [
              "Power BI Service — 4 report pages: forecast overview, geographic heatmap, category deep-dive, executive summary",
              "Power Automate — spike alert delivery via email and Microsoft Teams to operations managers",
              "Power BI Paginated Reports — exportable PDF/PowerPoint for board-level presentations",
              "Azure Cosmos DB — alert history, model run logs, and export audit trail",
            ],
          },
        ],
      },
      {
        heading: "Data Sources & Inputs",
        table: {
          headers: ["Data Source", "Type", "Volume", "History", "Key Fields"],
          rows: [
            ["NYC311 Call Records", "Operational (primary)", "30M+ records/year", "5 years", "Call type, location (lat/long), timestamp, resolution time, borough"],
            ["NOAA Weather Data", "External API (daily)", "Daily aggregates", "5 years", "Temp (min/max), precipitation, wind speed, extreme event flags"],
            ["NYC Public Holidays", "Reference data", "Annual", "Ongoing", "Holiday name, date, observed vs. actual"],
            ["Borough Boundaries", "Geospatial", "Static (annual refresh)", "Baseline", "GeoJSON polygons for 5 boroughs + 59 community districts"],
            ["Staff Actuals", "Operational (feedback)", "Weekly", "2 years", "Actual vs. planned headcount; emergency call-in log"],
          ],
        },
      },
      {
        heading: "ML Model Design",
        subsections: [
          {
            title: "LSTM Time-Series Forecasting Model",
            body: "Long Short-Term Memory (LSTM) neural network trained on 5 years of hourly call volume data. Selected over ARIMA and Prophet after comparative testing; LSTM achieved lowest MAPE on holdout test (7.4% vs. ARIMA 14.2% and Prophet 11.8%).",
            list: [
              "Input: 30-day rolling window of hourly call volumes + weather features + day-of-week + holiday flags",
              "Output: 7-day ahead forecast with 80% and 95% confidence intervals",
              "Architecture: 2-layer LSTM (128 → 64 units) + Dense output layer; dropout 0.2 for regularisation",
              "Training: Adam optimiser; batch size 64; early stopping on validation loss",
              "Retraining: Weekly on expanding window; model promoted if MAPE < 8% on holdout",
            ],
          },
          {
            title: "DBSCAN Geographic Clustering Model",
            body: "Density-Based Spatial Clustering of Applications with Noise (DBSCAN) applied to geocoded call locations to identify demand hotspot clusters without requiring a predefined number of clusters.",
            list: [
              "Input: geocoded call locations (lat/long) filtered by service category and date range",
              "Parameters: epsilon = 0.5km (neighbourhood radius), min_samples = 50 (minimum cluster density)",
              "Output: cluster assignments per location; hotspot polygons for Power BI map visual",
              "Refresh: weekly; clusters labelled with top 3 call sub-types for operations context",
              "Noise points (unclustered calls): displayed as individual markers in dashboard",
            ],
          },
        ],
      },
      {
        heading: "Data Quality Framework",
        list: [
          "Completeness check: reject records missing call type, timestamp, or location — target ≥ 99.5% pass rate",
          "Coordinate validation: flag records with lat/long outside NYC bounding box (40.49°N–40.92°N, 73.70°W–74.26°W)",
          "Duplicate detection: deduplicate on service request ID; log duplicate rate weekly",
          "Outlier detection: daily volumes > 3σ from 30-day rolling mean flagged for analyst review",
          "Data freshness SLA: prior-day records available in Data Lake by 03:00 AM; pipeline aborts and alerts if not met",
          "Weather data fallback: if NOAA API unavailable, previous day's weather values used with imputation flag",
        ],
      },
    ],
  },

  wireframes: {
    sections: [
      {
        heading: "Design Principles",
        list: [
          "Forecast-first: landing page leads with the most actionable insight — today's predicted demand vs. 7-day outlook",
          "Exception-driven: demand spikes and model accuracy drops surfaced prominently; normal state is quiet",
          "Drill-down model: city-level → borough → service category → geographic cluster",
          "Mobile-accessible: key KPI cards viewable on phone; full map and chart analysis on desktop",
          "Explainable AI: every forecast view shows top 3 contributing factors (weather, day-of-week, recent trend)",
          "WCAG 2.0 AA compliant: colour-blind-safe palette; all charts have text alternatives",
        ],
      },
      {
        heading: "Dashboard Page 1 — Demand Forecast Overview",
        subsections: [
          {
            title: "Layout & Components",
            visualType: "wireframe",
            list: [
              "Header: NYC311 logo, last refresh timestamp, alert indicator (green/amber/red)",
              "KPI row (top): Total predicted calls next 7 days | vs. last week % | vs. same period last year %",
              "Main chart: 7-day forecast line chart; one line per top-5 service category; confidence interval shading",
              "Today reference line: vertical dashed line on chart; past actuals shown as solid; forecast as dashed",
              "Spike alert banner: red banner appears at top of page when any category ≥ 15% above baseline",
              "Filter panel (right): Service Category (multi-select) | Borough | Date Range",
            ],
          },
        ],
      },
      {
        heading: "Dashboard Page 2 — Geographic Demand Heatmap",
        subsections: [
          {
            title: "Layout & Components",
            visualType: "wireframe",
            list: [
              "Full-width NYC borough map with DBSCAN cluster overlays (colour intensity = predicted demand density)",
              "Cluster click → tooltip: cluster ID, top 3 call types, predicted volume, % of city total",
              "Time slider below map: animate heatmap across 7-day forecast horizon",
              "Borough selector (sidebar): highlight single borough and show borough-level KPIs",
              "Legend: colour gradient from light blue (low density) to dark red (peak demand)",
              "Unclustered noise points shown as small grey dots",
            ],
          },
        ],
      },
      {
        heading: "Dashboard Page 3 — Service Category Deep Dive",
        subsections: [
          {
            title: "Layout & Components",
            visualType: "wireframe",
            list: [
              "Category selector dropdown: all 40+ NYC311 service categories",
              "90-day historical vs. 7-day forecast trend chart for the selected category",
              "Day-of-week demand heatmap: 7 columns (Mon–Sun) × 24 rows (hourly) showing average volume",
              "Top 5 zip codes by predicted volume (bar chart with map pin markers)",
              "Model accuracy panel: current week MAPE, 12-week rolling MAPE trend sparkline",
              "Key driver callout: top 3 features influencing this week's forecast (weather, holiday, trend)",
            ],
          },
        ],
      },
      {
        heading: "Dashboard Page 4 — Executive Summary",
        subsections: [
          {
            title: "Layout & Components",
            visualType: "wireframe",
            list: [
              "30/60/90-day trend KPI cards: predicted call volume with trend direction arrows",
              "YoY comparison chart: current year forecast vs. prior year actuals (bar + line combo)",
              "Top 3 fastest-growing service categories (with % growth and borough breakdown)",
              "Resource efficiency score: planned vs. actual allocation ratio for the past 4 weeks",
              "Export to PDF button: generates formatted board-ready report with all charts",
              "Export to PowerPoint button: slide deck with chart images and commentary",
            ],
          },
        ],
      },
      {
        heading: "Alert Management Flow",
        visualType: "flowchart",
        list: [
          "Spike detected (≥ 15% above 90-day baseline) → Power Automate flow triggered at 05:30 AM",
          "Email sent to operations manager distribution list with: service type, borough, predicted volume, recommended staffing adjustment",
          "Teams notification posted to #nyc311-ops channel with same information plus direct link to dashboard",
          "Operations manager clicks dashboard link → spike highlighted on forecast overview chart",
          "Manager enters staffing adjustment decision in dashboard log (free text) → logged to Cosmos DB",
          "Post-week: alert accuracy reviewed — did the spike materialise? Logged for model improvement",
        ],
      },
    ],
  },
};
