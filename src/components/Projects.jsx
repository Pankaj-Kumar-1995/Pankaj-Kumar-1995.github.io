import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";

function ProjectCard({ p, navigate }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
  );
}

function ProjectGrid({ items, navigate }) {
  if (items.length === 0) {
    return (
      <div className="col-span-2 text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
        <p className="text-gray-500">No projects here yet — check back soon.</p>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((p) => (
        <ProjectCard key={p.id} p={p} navigate={navigate} />
      ))}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  const mainProjects = useMemo(
    () => projects.filter((p) => p.category !== "freelancing"),
    []
  );
  const freelancingProjects = useMemo(
    () => projects.filter((p) => p.category === "freelancing"),
    []
  );

  const filtered = useMemo(() => {
    if (active === "all") return mainProjects;
    if (active === "freelancing") return freelancingProjects;
    return projects.filter((p) => p.category === active);
  }, [active, mainProjects, freelancingProjects]);

  const showSubsections = active === "all";

  return (
    <section id="projects" className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat.key
                  ? "text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600"
              }`}
              style={active === cat.key ? { backgroundColor: "var(--accent)" } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {showSubsections ? (
          <div className="space-y-14">
            {/* Academic & Professional */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span
                  className="inline-block w-1 h-6 rounded"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                Academic &amp; Professional Projects
              </h3>
              <ProjectGrid items={mainProjects} navigate={navigate} />
            </div>

            {/* Freelancing */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span
                  className="inline-block w-1 h-6 rounded"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                Freelancing Projects
              </h3>
              <ProjectGrid items={freelancingProjects} navigate={navigate} />
            </div>
          </div>
        ) : (
          <ProjectGrid items={filtered} navigate={navigate} />
        )}
      </div>
    </section>
  );
}
