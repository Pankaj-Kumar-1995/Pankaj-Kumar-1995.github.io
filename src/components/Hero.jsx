import { motion } from "framer-motion";
import { CONFIG } from "../data/config";
import { scrollToId } from "../utils/scrollTo";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-32 pb-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--accent)" }}>{CONFIG.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-xl md:text-2xl text-gray-600 mb-6"
          >
            {CONFIG.title}
          </motion.p>

          <p className="text-gray-700 mb-8 max-w-xl">
            Master of Business Information Technology (RMIT) graduate with 3.5+ years
            of experience across software delivery, testing, and business analysis.
            I translate business needs into clear requirements, data specs, and delivery-ready documentation.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("contact")}
              className="px-6 py-3 rounded-md text-white inline-flex items-center gap-2"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get in Touch <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToId("projects")}
              className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              View Projects
            </button>

            <a
              href={CONFIG.resumeUrl}
              className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full translate-x-4 translate-y-4 bg-blue-100" />
            <img
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-lg"
              src="/profile.png"
              alt="Pankaj Kumar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
