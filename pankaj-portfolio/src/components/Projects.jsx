import { useMemo, useState } from "react";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "var(--accent)" }} />

          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  active === c.key ? "text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                style={active === c.key ? { backgroundColor: "var(--accent)" } : undefined}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
