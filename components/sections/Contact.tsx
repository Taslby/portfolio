"use client";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Contact() {
  const [copied, setCopied] = useState(false);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText("tasnimghaleb@gmail.com");
    setCopied(true);
  } catch {
    setCopied(false);
  }
}

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-16"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Contact
            </p>

            <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-[1] tracking-tight text-white md:text-6xl">
              Have a project in mind?
              <br />
              <span className="text-white/60">
                Let's build something useful.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Whether you need data analysis, Python automation or a
              data-driven solution, feel free to get in touch.
            </p>

            {/* Email */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
            <span className="text-sm text-white/80">
              tasnimghaleb@gmail.com
            </span>

            <button
              type="button"
              onClick={copyEmail}
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
          >
              {copied ? "Email copied ✓" : "Copy email"}
            </button>
          </div>

            {/* Social links */}
            <div className="mt-16 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              <a
                href="https://github.com/Taslby"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tasnim-ghaleb-85616b356/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                LinkedIn
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
