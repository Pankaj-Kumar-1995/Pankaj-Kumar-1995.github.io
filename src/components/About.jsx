import { CONFIG } from "../data/config";
import { CheckCircle } from "lucide-react";

export default function About() {
  const points = [
    "Requirements & acceptance criteria",
    "Process mapping (BPMN) & documentation",
    "UAT support & defect triage",
    "Data validation & reporting",
    "Stakeholder management & communication",
    "Risk assessment & mitigation strategies",
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
              src="/images/about/profile.png"
              alt="Pankaj Kumar - Business Analyst"
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

            {/* Skills Grid - 2 columns */}
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
      </div>
    </section>
  );
}
