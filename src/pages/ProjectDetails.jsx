import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { CONFIG } from "../data/config";
import { FileText, Download, Briefcase, Users, Clock, Target, Zap, X } from "lucide-react";

function extractName(item) {
  const ends = [" — ", " (", ": ", " |"].map((p) => { const i = item.indexOf(p); return i > 0 ? i : item.length; });
  return item.substring(0, Math.min(...ends)).trim();
}

const ARCH_COLORS = [
  { header: "bg-blue-600", border: "border-blue-200", tag: "bg-blue-50 text-blue-800 border border-blue-200" },
  { header: "bg-violet-600", border: "border-violet-200", tag: "bg-violet-50 text-violet-800 border border-violet-200" },
  { header: "bg-emerald-600", border: "border-emerald-200", tag: "bg-emerald-50 text-emerald-800 border border-emerald-200" },
  { header: "bg-amber-600", border: "border-amber-200", tag: "bg-amber-50 text-amber-800 border border-amber-200" },
];

function FlowChart({ steps }) {
  return (
    <div className="mt-3 space-y-0.5">
      {steps.map((step, i) => {
        const m = step.match(/^(\d+)\.\s+(.+)/s);
        const num = m ? m[1] : String(i + 1);
        const text = m ? m[2] : step;
        return (
          <div key={i}>
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {num}
              </div>
              <div className="flex-1 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2.5 text-sm text-gray-800 leading-snug">
                {text}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-3 py-0.5 opacity-40" style={{ color: "var(--accent)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <line x1="8" y1="0" x2="8" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <polyline points="5,7 8,11 11,7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ArchitectureDiagram({ layers }) {
  return (
    <div className="mt-3 space-y-2">
      {layers.map((layer, i) => {
        const c = ARCH_COLORS[i % ARCH_COLORS.length];
        const components = (layer.list || []).map(extractName);
        return (
          <div key={i}>
            {i > 0 && (
              <div className="flex justify-center text-gray-400">
                <svg width="24" height="18" viewBox="0 0 24 18">
                  <line x1="12" y1="0" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <polyline points="7,9 12,14 17,9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
            <div className={`rounded-xl overflow-hidden border-2 ${c.border}`}>
              <div className={`${c.header} px-4 py-2 text-white font-bold text-sm uppercase tracking-wide`}>
                {layer.title}
              </div>
              <div className="bg-white p-4">
                {layer.body && <p className="text-xs text-gray-600 mb-3">{layer.body}</p>}
                <div className="flex flex-wrap gap-2">
                  {components.map((name, j) => (
                    <span key={j} className={`px-3 py-1.5 rounded-full text-xs font-medium ${c.tag}`}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ConversationFlow({ messages }) {
  return (
    <div className="mt-3 bg-gray-50 rounded-xl border p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-xs text-gray-500 font-medium">Conversation preview</span>
      </div>
      {messages.map((msg, i) => {
        if (msg.startsWith("Student:")) return (
          <div key={i} className="flex justify-end">
            <div className="max-w-[75%] bg-blue-600 text-white px-3 py-2 rounded-2xl rounded-br-sm text-xs leading-relaxed">
              <div className="font-semibold text-blue-200 text-[10px] mb-0.5">Student</div>
              {msg.slice(8).trim()}
            </div>
          </div>
        );
        if (msg.startsWith("Bot:")) return (
          <div key={i} className="flex justify-start">
            <div className="max-w-[75%] bg-white border shadow-sm px-3 py-2 rounded-2xl rounded-bl-sm text-xs leading-relaxed text-gray-800">
              <div className="font-semibold text-blue-600 text-[10px] mb-0.5">WIL Assistant</div>
              {msg.slice(4).trim()}
            </div>
          </div>
        );
        if (msg.startsWith("Staff:")) return (
          <div key={i} className="flex justify-start">
            <div className="max-w-[75%] bg-green-50 border border-green-200 px-3 py-2 rounded-2xl rounded-bl-sm text-xs leading-relaxed text-gray-800">
              <div className="font-semibold text-green-600 text-[10px] mb-0.5">WIL Staff</div>
              {msg.slice(6).trim()}
            </div>
          </div>
        );
        if (msg.startsWith("[")) return (
          <div key={i} className="text-center">
            <span className="text-[10px] text-gray-500 bg-gray-200 rounded px-2 py-0.5 italic">{msg}</span>
          </div>
        );
        return <div key={i} className="text-center text-xs text-gray-400 italic">{msg}</div>;
      })}
    </div>
  );
}

function DashboardWireframe({ components, title }) {
  const items = components.map((c) => {
    const ends = [" (", ": ", " — ", " |"].map((p) => { const i = c.indexOf(p); return i > 0 ? i : c.length; });
    const cut = Math.min(...ends);
    return { label: c.substring(0, cut).trim(), detail: c.substring(cut).replace(/^[:(— ]+/, "").trim() };
  });
  return (
    <div className="mt-3 border-2 border-dashed border-gray-300 rounded-xl overflow-hidden">
      <div className="bg-gray-200 flex items-center gap-1.5 px-3 py-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 bg-white rounded text-[10px] text-center text-gray-400 py-0.5 mx-2 truncate">{title}</div>
      </div>
      <div className="p-3 bg-gray-50 space-y-2">
        {items.map(({ label, detail }, i) => (
          <div key={i} className="border border-dashed border-gray-400 rounded bg-white px-3 py-2">
            <div className="text-xs font-semibold text-gray-600">[ {label} ]</div>
            {detail && <div className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{detail}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function DocModal({ doc, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!doc?.content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[88vh] flex flex-col">
        <div className="flex items-start justify-between px-6 py-4 border-b flex-shrink-0">
          <div>
            <h3 className="text-xl font-bold">{doc.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{doc.description}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0 mt-0.5"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 space-y-8">
          {doc.content.sections.map((section, idx) => (
            <div key={idx}>
              {section.heading && (
                <h4
                  className="text-sm font-semibold uppercase tracking-wide mb-3 pb-1.5 border-b border-gray-200"
                  style={{ color: "var(--accent)" }}
                >
                  {section.heading}
                </h4>
              )}
              {section.body && (
                <p className="text-gray-700 leading-relaxed text-sm">{section.body}</p>
              )}

              {/* Visual: flowchart for step-based lists */}
              {section.visualType === "flowchart" && section.list && (
                <FlowChart steps={section.list} />
              )}

              {/* Visual: architecture diagram for layered subsections */}
              {section.visualType === "architecture" && section.subsections && (
                <ArchitectureDiagram layers={section.subsections} />
              )}

              {/* Default: plain bullet list */}
              {!section.visualType && section.list && (
                <ul className="space-y-1.5 mt-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span style={{ color: "var(--accent)" }} className="font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-x-auto rounded border border-gray-200 mt-2">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: "var(--accent)" }}>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="px-3 py-2 text-left font-semibold text-white text-xs uppercase tracking-wide whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-3 py-2 text-gray-700 border-t border-gray-100 text-sm">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Default: subsection cards */}
              {!section.visualType && section.subsections && (
                <div className="space-y-4 mt-2">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="pl-4 border-l-2 border-blue-200">
                      <h5 className="font-semibold text-sm text-gray-900 mb-1.5">{sub.title}</h5>
                      {sub.body && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-1.5">{sub.body}</p>
                      )}
                      {/* Visual: chat bubble conversation flow */}
                      {sub.visualType === "conversation" && sub.list && (
                        <ConversationFlow messages={sub.list} />
                      )}
                      {/* Visual: dashboard wireframe mockup */}
                      {sub.visualType === "wireframe" && sub.list && (
                        <DashboardWireframe components={sub.list} title={sub.title} />
                      )}
                      {/* Default: numbered list (replaces em-dashes) */}
                      {!sub.visualType && sub.list && (
                        <ul className="space-y-1">
                          {sub.list.map((item, j) => (
                            <li key={j} className="text-sm text-gray-600 flex gap-2">
                              <span className="flex-shrink-0 font-semibold text-xs mt-0.5" style={{ color: "var(--accent)" }}>{j + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon size={24} style={{ color: "var(--accent)" }} />}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function DocumentCard({ doc, onOpen }) {
  const hasContent = Boolean(doc.content);
  const hasLink = doc.available && doc.downloadUrl;

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold mb-1">{doc.title}</h4>
          <p className="text-sm text-gray-600">{doc.description}</p>
        </div>
        {hasContent ? (
          <button
            onClick={() => onOpen(doc)}
            className="flex-shrink-0 px-3 py-2 rounded-md text-white text-sm flex items-center gap-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <FileText size={16} />
            View
          </button>
        ) : hasLink ? (
          <a
            href={doc.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 px-3 py-2 rounded-md text-white text-sm flex items-center gap-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <Download size={16} />
            View
          </a>
        ) : (
          <div className="flex-shrink-0 px-3 py-2 rounded-md bg-gray-200 text-gray-600 text-sm whitespace-nowrap">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}

function KeyMetric({ label, value, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
      <Icon size={20} style={{ color: "var(--accent)" }} />
      <div>
        <p className="text-xs text-gray-600">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function TimelineItem({ phase, duration, description }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
        <div className="w-0.5 h-20 bg-gray-300 mt-2" />
      </div>
      <div className="pb-6">
        <h4 className="font-semibold text-lg">{phase}</h4>
        <p className="text-sm text-gray-600 font-medium">{duration}</p>
        <p className="text-gray-700 mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [openDoc, setOpenDoc] = useState(null);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/#projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {openDoc && <DocModal doc={openDoc} onClose={() => setOpenDoc(null)} />}
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-6 py-3">
          <Link to="/#projects" className="text-blue-600 hover:underline text-sm">
            ← Portfolio
          </Link>
        </div>
      </div>

      {/* Cover Banner */}
      {(() => {
        const gradients = {
          analytics:   "from-blue-700 to-cyan-600",
          enterprise:  "from-purple-700 to-violet-600",
          strategy:    "from-emerald-700 to-teal-600",
          qa:          "from-orange-600 to-amber-500",
          freelancing: "from-pink-700 to-rose-500",
        };
        const g = gradients[project.category] || "from-blue-700 to-blue-900";
        return (
          <div className={`relative h-56 md:h-64 bg-gradient-to-br ${g} overflow-hidden`}>
            {project.coverImage && (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            )}
            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5" />
            {/* Title overlay */}
            <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
                {project.category.replace("-", " & ")}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-3xl">
                {project.title}
              </h1>
            </div>
          </div>
        );
      })()}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Overview & Metrics */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {project.summary.overview}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KeyMetric label="Duration" value={project.duration} icon={Clock} />
            <KeyMetric label="Team Size" value={project.teamSize} icon={Users} />
            <KeyMetric label="Role" value={project.role} icon={Briefcase} />
            <KeyMetric label="Category" value={project.category} icon={Target} />
          </div>
        </div>

        {/* Project Summary */}
        <section className="mb-16">
          <SectionHeading title="Project Summary" />
          
          <div className="space-y-8">
            {/* Objectives */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target size={20} style={{ color: "var(--accent)" }} />
                Project Objectives
              </h3>
              <ul className="space-y-2">
                {project.summary.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Problem */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap size={20} style={{ color: "var(--accent)" }} />
                Business Problem
              </h3>
              <div className="bg-blue-50 border-l-4 p-4" style={{ borderLeftColor: "var(--accent)" }}>
                <p className="text-gray-800">{project.summary.businessProblem}</p>
              </div>
            </div>

            {/* Stakeholders */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} style={{ color: "var(--accent)" }} />
                Key Stakeholders
              </h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.summary.stakeholders.map((stakeholder, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">{stakeholder}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-16">
          <SectionHeading title="BA Documentation & Artifacts" icon={FileText} />
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(project.documentation).map(([key, doc]) => (
              <DocumentCard key={key} doc={doc} onOpen={setOpenDoc} />
            ))}
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-16">
          <SectionHeading title="Project Timeline & Phases" icon={Clock} />
          <div className="max-w-2xl">
            {project.timeline.map((item, idx) => (
              <TimelineItem
                key={idx}
                phase={item.phase}
                duration={item.duration}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* BA Skills & Tools */}
        <section className="mb-16">
          <SectionHeading title="Skills & Tools Applied" icon={Briefcase} />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* BA Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">BA Skills Applied</h3>
              <ul className="space-y-3">
                {project.baSkills.map((skill, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <SectionHeading title="Key Achievements & Impact" icon={Zap} />
          <div className="grid md:grid-cols-2 gap-4">
            {project.achievements.map((achievement, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <p className="text-gray-800">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visuals & Diagrams */}
        {project.screenshots?.length > 0 && (
          <section className="mb-16">
            <SectionHeading title="Project Visuals & Diagrams" />
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((src, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition">
                  <img
                    src={src}
                    alt={`Project visual ${idx + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="border-t pt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in this project?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how I can bring similar BA expertise and analysis rigor to your initiatives.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`mailto:${CONFIG.email}`}
              className="px-6 py-3 rounded-md text-white font-semibold"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get In Touch
            </a>
            <Link
              to="/#projects"
              className="px-6 py-3 rounded-md border-2 font-semibold"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
