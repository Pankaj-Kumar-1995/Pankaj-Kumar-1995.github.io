const techs = [
  "Power BI", "Power Automate", "Copilot Studio", "Microsoft Azure",
  "Azure ML", "Azure Data Factory", "JIRA", "Confluence", "Miro",
  "Trello", "MySQL", "Python", "SQL", "SAP S/4HANA", "Microsoft Copilot",
  "PEGA UCM", "Figma", "Visio", "Excel", "Selenium", "Postman",
  "Azure Bot Service", "QnA Maker", "GitHub", "Appium",
];

const doubled = [...techs, ...techs];

export default function TechStrip() {
  return (
    <div className="my-10 rounded-xl overflow-hidden bg-slate-900 py-5">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Technologies &amp; Tools
      </p>
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-3 w-max">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-600 text-slate-200 bg-slate-800 whitespace-nowrap flex-shrink-0 hover:border-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
