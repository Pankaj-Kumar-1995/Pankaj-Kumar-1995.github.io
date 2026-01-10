import { CONFIG } from "../data/config";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-xl font-bold">{CONFIG.name}</div>
          <div className="text-gray-400">{CONFIG.title}</div>
        </div>

        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
