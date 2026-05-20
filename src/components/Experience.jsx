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

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="p-5 flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    {job.logo ? (
                      <img
                        src={`/images/experience/${job.logo}`}
                        alt={job.company}
                        className="h-14 w-14 object-contain"
                      />
                    ) : (
                      <div className="h-14 w-14 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">
                        Logo
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-lg font-bold leading-tight">{job.role}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 self-start sm:self-auto whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-0.5">{job.company}</p>
                  </div>
                </div>

                {/* Two bubble cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-100">
                  {/* What I Do */}
                  <div className="p-4 sm:border-r border-gray-100 border-b sm:border-b-0">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-3"
                      style={{ color: "var(--accent)" }}
                    >
                      {job.period.includes("Current") ? "What I Do" : "What I Did"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.whatIDo.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What I've Learned */}
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3 text-emerald-600">
                      What I&apos;ve Learned
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.whatILearned.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
