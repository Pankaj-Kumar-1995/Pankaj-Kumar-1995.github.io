const techs = [
  { name: "Power BI",        icon: "/images/tech/powerbi.svg" },
  { name: "Power Automate",  icon: "/images/tech/powerautomate.svg" },
  { name: "Microsoft Azure", icon: "/images/tech/microsoftazure.svg" },
  { name: "Azure ML",        icon: "/images/tech/microsoftazure.svg" },
  { name: "Azure DevOps",    icon: "/images/tech/azuredevops.svg" },
  { name: "Copilot Studio",  icon: "/images/tech/microsoftteams.svg" },
  { name: "JIRA",            icon: "/images/tech/jira.svg" },
  { name: "Confluence",      icon: "/images/tech/confluence.svg" },
  { name: "Miro",            icon: "/images/tech/miro.svg" },
  { name: "Trello",          icon: "/images/tech/trello.svg" },
  { name: "MySQL",           icon: "/images/tech/mysql.svg" },
  { name: "Python",          icon: "/images/tech/python.svg" },
  { name: "GitHub",          icon: "/images/tech/github.svg" },
  { name: "Selenium",        icon: "/images/tech/selenium.svg" },
  { name: "Postman",         icon: "/images/tech/postman.svg" },
  { name: "Figma",           icon: "/images/tech/figma.svg" },
  { name: "SAP S/4HANA",    icon: "/images/tech/sap.svg" },
  { name: "Excel",           icon: "/images/tech/microsoftexcel.svg" },
];

const doubled = [...techs, ...techs];

export default function TechStrip() {
  return (
    <div className="my-10 rounded-xl overflow-hidden bg-slate-900">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-4 pb-3">
        Technologies &amp; Tools
      </p>
      <div className="overflow-hidden relative pb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-3 w-max px-4">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-600 text-slate-200 bg-slate-800 whitespace-nowrap flex-shrink-0 hover:border-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-default"
            >
              <img
                src={tech.icon}
                alt=""
                className="w-3.5 h-3.5 brightness-0 invert opacity-80 flex-shrink-0"
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
