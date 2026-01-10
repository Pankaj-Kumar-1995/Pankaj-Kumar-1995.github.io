import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        <div className="max-w-3xl mx-auto">
          {experience.map((job, idx) => (
            <div key={job.id} className="mb-10 relative pl-8">
              {idx < experience.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-full bg-gray-200" />
              )}

              <div
                className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: "var(--accent)" }}
              />

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    {job.period}
                  </span>
                </div>
                <h4 className="text-gray-600 font-medium mb-3">{job.company}</h4>
                <p className="text-gray-700">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
