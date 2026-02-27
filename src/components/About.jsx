import { CONFIG } from "../data/config";
import { CheckCircle, Target, AlertCircle, TrendingUp, Zap } from "lucide-react";

export default function About() {
  const points = [
    "Requirements & acceptance criteria",
    "Process mapping (BPMN) & documentation",
    "UAT support & defect triage",
    "Data validation & reporting",
    "Stakeholder management & communication",
    "Risk assessment & mitigation strategies",
  ];

  const skillCategories = [
    {
      icon: <Target size={24} />,
      title: "Requirements & Acceptance Criteria",
      description: "Defining clear, measurable success criteria and acceptance conditions",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Process Mapping (BPMN) & Documentation",
      description: "Creating standardized workflows and comprehensive documentation",
    },
    {
      icon: <AlertCircle size={24} />,
      title: "UAT Support & Defect Triage",
      description: "Managing testing phases and prioritizing defect resolution",
    },
    {
      icon: <Zap size={24} />,
      title: "Data Validation & Reporting",
      description: "Ensuring data integrity and delivering actionable insights",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        {/* Introduction with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg w-full max-w-md"
              src="/images/about/BA_Skills.png"
              alt="Business analysis skills and expertise"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Turning Business Needs into Delivery-Ready Outcomes
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              I work at the intersection of business, data, and delivery. I focus on
              clarity: well-structured requirements, measurable acceptance criteria,
              and clean communication across stakeholders.
            </p>

            {/* Quick Skills Grid - 2 columns */}
            <div className="grid grid-cols-2 gap-4">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                  <CheckCircle size={20} style={{ color: "var(--accent)" }} className="flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Matrix Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">BA Skills & Risk Assessment Framework</h3>
          <div className="flex justify-center mb-6">
            <img
              src="/images/skills/risk-matrix.png"
              alt="4x4 Risk Matrix for Business Analysis"
              className="max-w-4xl w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto">
            Risk Assessment Matrix used in project planning, stakeholder management, and mitigation strategy development
          </p>
        </div>

        {/* Detailed Skills Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Business Analysis Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {skillCategories.map((skill) => (
              <div
                key={skill.title}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div style={{ color: "var(--accent)" }} className="flex-shrink-0 mt-1">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h4>
                    <p className="text-gray-700 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div style={{ color: "var(--accent)" }} className="flex-shrink-0 mt-1">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Stakeholder Management & Communication</h4>
                  <p className="text-gray-700 text-sm">Building alignment across teams and translating technical requirements for business audiences</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div style={{ color: "var(--accent)" }} className="flex-shrink-0 mt-1">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Risk Assessment & Mitigation Strategies</h4>
                  <p className="text-gray-700 text-sm">Identifying project risks, creating mitigation plans, and ensuring business continuity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
