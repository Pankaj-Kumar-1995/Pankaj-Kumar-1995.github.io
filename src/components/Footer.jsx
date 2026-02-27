import { CONFIG } from "../data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 px-6 mt-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold">{CONFIG.name}</div>
            <div className="text-gray-400 text-sm mt-1">{CONFIG.title}</div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="/#about" className="hover:text-white transition">
                About
              </a>
              <br />
              <a href="/#projects" className="hover:text-white transition">
                Projects
              </a>
              <br />
              <a href="/#experience" className="hover:text-white transition">
                Experience
              </a>
              <br />
              <a href="/#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href={`mailto:${CONFIG.email}`} className="hover:text-white transition">
                {CONFIG.email}
              </a>
              <br />
              <a href={`tel:${CONFIG.phone}`} className="hover:text-white transition">
                {CONFIG.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-gray-400 text-sm">
            <p>
              © {currentYear} {CONFIG.name}. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Designed & Built with React • Styled with Tailwind CSS • Hosted on GitHub Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
