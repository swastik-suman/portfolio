"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { techStack } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";

const categories = ["Language", "AI / ML", "BI & Data", "Tools"];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-8" ref={ref}>
        <SectionLabel index="02" name="SKILLS" />

        <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-14 tracking-tight max-w-xl">
          The stack behind the agents and the dashboards.
        </h2>

        <div className="space-y-10">
          {categories.map((cat, ci) => {
            const items = techStack.filter((t) => t.category === cat);
            return (
              <div key={cat}>
                <p className="font-mono text-[11px] tracking-widest text-signal mb-5 uppercase">{cat}</p>
                <div className="flex flex-wrap gap-3">
                  {items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: ci * 0.08 + i * 0.05 }}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-line bg-panel/40 hover:border-signal/60 hover:bg-panel-raised transition-all cursor-default"
                    >
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={tech.logoUrl}
                          alt={tech.name}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-sm text-text-dim group-hover:text-text transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
