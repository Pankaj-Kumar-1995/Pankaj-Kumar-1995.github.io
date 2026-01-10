import { useEffect, useState } from "react";
import { CONFIG } from "../data/config";
import { scrollToId } from "../utils/scrollTo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", CONFIG.accentColor);
  }, []);

  const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollToId("top")}
          className="text-xl font-bold"
          style={{ color: "var(--accent)" }}
        >
          Pankaj<span className="font-light">Kumar</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="hover:text-blue-600 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href={CONFIG.resumeUrl}
            className="px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  scrollToId(l.id);
                  setOpen(false);
                }}
                className="text-left hover:text-blue-600 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={CONFIG.resumeUrl}
              className="px-4 py-2 rounded-md text-white text-left"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
