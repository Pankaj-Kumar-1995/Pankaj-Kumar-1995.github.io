import { CONFIG } from "../data/config";
import { CheckCircle, MapPin } from "lucide-react";

export default function About() {
  const points = [
    "Requirements & acceptance criteria",
    "Process mapping (BPMN) & documentation",
    "UAT support & defect triage",
    "Data validation & reporting",
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            className="rounded-lg shadow-lg w-full"
            src="D:\Pankaj-Kumar-1995.github.io\images\1753167961966.png"
            alt="Business analysis collaboration"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Turning Business Needs into Delivery-Ready Outcomes
            </h3>
            <p className="text-gray-700 mb-5">
              I work at the intersection of business, data, and delivery. I focus on
              clarity: well-structured requirements, measurable acceptance criteria,
              and clean communication across stakeholders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <CheckCircle size={18} style={{ color: "var(--accent)" }} />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg border bg-white inline-flex items-center gap-2">
              <MapPin size={18} style={{ color: "var(--accent)" }} />
              <span className="text-gray-700">{CONFIG.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
