"use client";

import { motion } from "framer-motion";
import { education } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel index="05" name="EDUCATION" />

        <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 tracking-tight max-w-xl">
          Where the foundation was built.
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {education.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-line bg-panel/40 p-7 hover:border-signal/50 transition-colors"
            >
              <p className="font-mono text-[11px] tracking-widest text-signal mb-3">
                {item.period}
              </p>
              <h3 className="font-display font-semibold text-base sm:text-lg mb-1 leading-snug">
                {item.degree}
              </h3>
              <p className="text-text-dim text-sm mb-3">{item.institution}</p>
              <span className="inline-block font-mono text-[11px] text-active border border-active/30 rounded px-2 py-0.5">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
