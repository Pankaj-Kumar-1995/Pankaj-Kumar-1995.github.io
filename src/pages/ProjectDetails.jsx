import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </section>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/" className="underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <Link to="/" className="text-sm underline">← Back to Projects</Link>

      <h1 className="text-3xl font-bold mt-4 mb-6">
        {project.title}
      </h1>

      <Section title="Context">
        <p>{project.context}</p>
      </Section>

      <Section title="Stakeholders">
        <ul className="list-disc pl-5 space-y-1">
          {project.stakeholders.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </Section>

      <Section title="Business Problem">
        <p>{project.problem}</p>
      </Section>

      <Section title="Requirements">
        <h4 className="font-medium mt-2">Functional</h4>
        <ul className="list-disc pl-5 mb-3">
          {project.requirements.functional.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h4 className="font-medium mt-2">Non-Functional</h4>
        <ul className="list-disc pl-5">
          {project.requirements.nonFunctional.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </Section>

      <Section title="Approach & Process">
        <ul className="list-disc pl-5 space-y-1">
          {project.approach.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </Section>

      <Section title="Data & Tools">
        <div className="flex flex-wrap gap-2">
          {project.dataAndTools.map((t) => (
            <span key={t} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700">
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Testing & Validation">
        <ul className="list-disc pl-5 space-y-1">
          {project.testing.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <Section title="Outcomes & Impact">
        <ul className="list-disc pl-5 space-y-1">
          {project.outcomes.map((o) => <li key={o}>{o}</li>)}
        </ul>
      </Section>

      {project.screenshots?.length > 0 && (
        <Section title="Screenshots / Diagrams">
          <div className="grid md:grid-cols-2 gap-4">
            {project.screenshots.map((src) => (
              <img
                key={src}
                src={src}
                alt="Project visual"
                className="rounded-lg border"
              />
            ))}
          </div>
        </Section>
      )}

      {project.presentationUrl && (
        <Section title="Live Presentation">
          <div className="aspect-video border rounded-lg overflow-hidden">
            <iframe
              src={project.presentationUrl}
              title="Project Presentation"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </Section>
      )}

      {project.demoUrl && (
        <Section title="Live Demo">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2 rounded-md text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            View Live Demo
          </a>
        </Section>
      )}
    </div>
  );
}
