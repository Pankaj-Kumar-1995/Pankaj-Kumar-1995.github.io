import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";
import { ArrowRight } from "lucide-react";

const categoryMeta = {
  analytics:   { label: "Analytics",     gradient: "from-blue-600 to-cyan-500" },
  enterprise:  { label: "Enterprise",    gradient: "from-purple-600 to-violet-500" },
  strategy:    { label: "Strategy",      gradient: "from-emerald-600 to-teal-500" },
  qa:          { label: "QA & Testing",  gradient: "from-orange-500 to-amber-400" },
  freelancing: { label: "Freelancing",   gradient: "from-pink-600 to-rose-400" },
};

function ProjectCard({ p, navigate }) {
  const meta = categoryMeta[p.category] || { label: p.category, gradient: "from-slate-600 to-slate-500" };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer group"
      onClick={() => navigate(`/projects/${p.slug}`)}
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-r ${meta.gradient} px-5 pt-5 pb-8 relative`}>
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 mb-3">
          {meta.label}
        </span>
        <h3 className="text-lg font-bold text-white leading-snug pr-6">{p.title}</h3>
        {/* Decorative circle */}
        <div className="absolute right-4 bottom-0 translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
          <ArrowRight size={18} className="text-white group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-5 pb-5 flex flex-col flex-1">
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{p.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.tools.slice(0, 4).map((t) => (
            <span key={t} className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200">
              {t}
            </span>
          ))}
          {p.tools.length > 4 && (
            <span className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500">
              +{p.tools.length - 4} more
            </span>
          )}
        </div>
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
    <div className="grid md:grid-cols-2 gap-6">
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
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="inline-block w-1 h-6 rounded" style={{ backgroundColor: "var(--accent)" }} />
                Academic &amp; Professional Projects
              </h3>
              <ProjectGrid items={mainProjects} navigate={navigate} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="inline-block w-1 h-6 rounded" style={{ backgroundColor: "var(--accent)" }} />
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
