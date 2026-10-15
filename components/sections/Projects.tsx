"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
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
              Selected work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              A selection of{" "}
              <span className="text-white/30">
                projects I've built.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start">
                {/* Number */}
                <span className="text-sm text-white/20">
                  {project.number}
                </span>

                {/* Main content */}
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                      {project.category}
                    </span>

                    <span className="rounded-full border border-emerald-400/20 px-3 py-1 text-xs text-emerald-400/70">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/40 md:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-60"
                    >
                      Explore project
                      <ArrowUpRight size={16} />
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ExternalLink size={16} />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Arrow */}
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Explore ${project.title}`}
                  className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black md:flex"
                >
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}