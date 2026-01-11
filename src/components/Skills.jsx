import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills &amp; Expertise</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="border border-gray-100 rounded-lg bg-white p-4 h-[360px]">
            <h3 className="text-lg font-semibold mb-3">Core Strengths</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skills}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 90, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(v) => [`${v}%`, "Strength"]} />
                  <Bar dataKey="value" fill="var(--accent)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Highlights</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• BA artefacts: BRD/FRD, user stories, AC, process maps</li>
              <li>• Delivery: UAT coordination, defect triage, release support</li>
              <li>• Data: SQL validation, reporting, dashboards (Power BI/Excel)</li>
              <li>• Collaboration: cross-functional teams & stakeholder alignment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
