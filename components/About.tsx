"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28 border-t border-line" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel index="01" name="ABOUT" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-5 tracking-tight">
              CS engineer, agent-system builder, dashboard designer.
            </h2>
            <p className="text-text-dim leading-relaxed text-base sm:text-lg">
              {about.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="rounded-lg border border-line bg-panel/50 p-5"
              >
                <p className="font-display font-semibold text-3xl text-active mb-1">{h.value}</p>
                <p className="font-mono text-[11px] text-text-dim tracking-wide leading-snug">{h.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
