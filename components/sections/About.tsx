"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/30">
              About
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              Learning through projects.
              <br />
              <span className="text-white/30">
                From analysis to development.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-white/50 md:text-lg">
              <p>
                I'm Tasnim Ghaleb, a computer science student
                interested in data analysis, software development,
                and machine learning.
              </p>

              <p>
                Python is my main programming language. I've used
                it to analyze financial market data and develop
                a file organization tool. I've also worked with
                Flutter and Dart to build a transport management
                application with separate interfaces for
                administrators, drivers, and customers.
              </p>

              <p>
                I prefer learning by building and testing things
                myself. Each project helps me improve my technical
                skills, understand new problems, and explore the
                areas of computer science I want to specialize in.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-white">
                  Python
                </p>
                <p className="mt-2 text-sm text-white/30">
                  Programming & automation
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">
                  Data
                </p>
                <p className="mt-2 text-sm text-white/30">
                  Analysis & visualization
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">
                  ML
                </p>
                <p className="mt-2 text-sm text-white/30">
                  Learning & exploration
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
