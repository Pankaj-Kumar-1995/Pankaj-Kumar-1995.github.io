import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FileText, Download, Briefcase, Users, Clock, Target, Zap } from "lucide-react";

function SectionHeading({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon size={24} style={{ color: "var(--accent)" }} />}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function DocumentCard({ doc }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{doc.title}</h4>
          <p className="text-sm text-gray-600">{doc.description}</p>
        </div>
        {doc.available ? (
          <a
            href={doc.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 px-3 py-2 rounded-md text-white text-sm flex items-center gap-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <Download size={16} />
            View
          </a>
        ) : (
          <div className="ml-4 px-3 py-2 rounded-md bg-gray-200 text-gray-600 text-sm">
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
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-6 py-3">
          <Link to="/#projects" className="text-blue-600 hover:underline text-sm">
            ← Portfolio
          </Link>
        </div>
      </div>

      {/* Cover Image & Header */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        {project.coverImage && (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Project Title & Description */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
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
              <DocumentCard key={key} doc={doc} />
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
          <SectionHeading title="Business Analysis Skills & Tools" icon={Briefcase} />
          
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
              href="mailto:Pankajoffice1504@gmail.com"
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
