import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CONFIG } from "../data/config";
import { scrollToId } from "../utils/scrollTo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", CONFIG.accentColor);
  }, []);

  const scrollLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollLink = (id) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => (isHome ? scrollToId("top") : navigate("/"))}
          className="text-xl font-bold"
          style={{ color: "var(--accent)" }}
        >
          Pankaj<span className="font-light">Kumar</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {scrollLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => handleScrollLink(l.id)}
              className="hover:text-blue-600 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/blogs")}
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === "/blogs" ? "font-semibold" : ""
            }`}
            style={location.pathname === "/blogs" ? { color: "var(--accent)" } : {}}
          >
            Blogs
          </button>
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
            {scrollLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  handleScrollLink(l.id);
                  setOpen(false);
                }}
                className="text-left hover:text-blue-600 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigate("/blogs");
                setOpen(false);
              }}
              className="text-left hover:text-blue-600 transition-colors"
            >
              Blogs
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
