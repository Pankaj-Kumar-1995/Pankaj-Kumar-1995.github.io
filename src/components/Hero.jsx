import { motion } from "framer-motion";
import { CONFIG } from "../data/config";
import { scrollToId } from "../utils/scrollTo";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-32 pb-16 px-6 bg-white">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 mb-4"
          >
            <MapPin size={14} />
            {CONFIG.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--accent)" }}>{CONFIG.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 mb-5 font-medium"
          >
            {CONFIG.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            I transform complex business challenges into clear, data-driven solutions.
            With expertise in process optimisation and analytics, I help organisations
            make better decisions and achieve measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollToId("contact")}
              className="px-6 py-3 rounded-lg text-white inline-flex items-center gap-2 font-medium shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get in Touch <ArrowRight size={17} />
            </button>
            <button
              onClick={() => scrollToId("projects")}
              className="px-6 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors font-medium"
            >
              View Projects
            </button>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Shadow blob */}
            <div
              className="absolute inset-0 rounded-full translate-x-5 translate-y-5 opacity-30"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {/* Ring */}
            <div
              className="absolute -inset-2 rounded-full opacity-20"
              style={{ border: "3px solid var(--accent)" }}
            />
            <img
              className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl"
              src="/images/about/profile.png"
              alt="Pankaj Kumar"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
