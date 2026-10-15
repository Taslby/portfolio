"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  {
    number: "01",
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description:
      "Working with datasets to explore trends, compare results, and communicate findings through analysis and visualization.",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
    link: "https://github.com/Taslby/financial-market-analytics",
    linkText: "View Financial Market Analytics",
  },
  {
    number: "02",
    icon: Code2,
    title: "Python Development",
    description:
      "Developing modular Python applications, organizing code into reusable components, and automating practical tasks.",
    items: [
      "Python",
      "Object-Oriented Programming",
      "File Processing",
      "Automation",
      "Git & GitHub",
    ],
    link: "https://github.com/Taslby/smart-file-organizer",
    linkText: "View Smart File Organizer",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Machine Learning Foundations",
    description:
      "Studying machine learning concepts and algorithms, with an interest in applying them to real datasets and practical problems.",
    items: [
      "Classification",
      "Regression",
      "Decision Trees",
      "Neural Networks",
      "Model Evaluation",
    ],
    link: "#contact",
    linkText: "Get in touch",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Software Development",
    description:
      "Designing and implementing applications with structured components, user interfaces, and clearly defined functionality.",
    items: [
      "Flutter",
      "Dart",
      "Software Design",
      "UI Development",
      "Testing",
    ],
    link: "https://github.com/Taslby/transport_company_system",
    linkText: "View Transport Company System",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-32 md:px-10 md:py-40"
    >
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
              Skills & Focus
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              What I work with.
              <br />
              <span className="text-white/30">
                What I'm learning.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
              My technical background combines programming,
              data analysis, and software development.
              I'm continuing to build my knowledge in
              machine learning through coursework and practice.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-10"
              >
                {/* Icon and number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon
                      size={20}
                      className="text-white/50 transition-colors group-hover:text-white"
                    />
                  </div>

                  <span className="text-sm text-white/20">
                    {skill.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    {skill.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40 md:text-base">
                    {skill.description}
                  </p>
                </div>

                {/* Technologies and concepts */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Project link */}
                <a
                  href={skill.link}
                  target={
                    skill.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    skill.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-10 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                >
                  {skill.linkText}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}