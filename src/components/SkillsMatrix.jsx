import { Target, AlertCircle, TrendingUp, Zap } from "lucide-react";

export default function SkillsMatrix() {
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
    <section id="skills-matrix" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">BA Skills & Risk Assessment</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        {/* Risk Matrix Image */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
          <div className="flex justify-center">
            <img
              src="/images/skills/risk-matrix.png"
              alt="4x4 Risk Matrix for Business Analysis"
              className="max-w-4xl w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm max-w-2xl mx-auto">
            Risk Assessment Matrix used in project planning, stakeholder management, and mitigation strategy development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-700">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional BA Skills */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div style={{ color: "var(--accent)" }} className="flex-shrink-0 mt-1">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stakeholder Management & Communication</h3>
                <p className="text-gray-700">Building alignment across teams and translating technical requirements for business audiences</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div style={{ color: "var(--accent)" }} className="flex-shrink-0 mt-1">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Assessment & Mitigation Strategies</h3>
                <p className="text-gray-700">Identifying project risks, creating mitigation plans, and ensuring business continuity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
