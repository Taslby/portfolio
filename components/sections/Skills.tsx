"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Data & Analytics",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    number: "02",
    title: "Python & Development",
    skills: [
      "Python",
      "OOP",
      "Automation",
      "Modular Architecture",
      "File Processing",
      "APIs",
      "Git & GitHub",
    ],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "Classification",
      "Regression",
      "Clustering",
      "Model Evaluation",
      "AI Concepts",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Jupyter",
      "PowerShell",
      "Next.js",
      "Flutter",
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/30">
              Skills
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              A technical toolkit built around{" "}
              <span className="text-white/30">
                data, code and intelligent systems.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Skills grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group bg-[#050505] p-8 transition-colors duration-300 hover:bg-white/[0.03] md:p-10"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-white/20">
                  {group.number}
                </span>

                <span className="h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-20 group-hover:bg-white/30" />
              </div>

              <h3 className="text-xl font-medium text-white">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-colors hover:border-white/20 hover:text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}