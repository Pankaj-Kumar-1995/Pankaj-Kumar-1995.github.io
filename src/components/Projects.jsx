import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        {/* ...header + filters unchanged... */}

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tools.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
