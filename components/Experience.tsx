"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hackathons, otherWork } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel index="04" name="EXPERIENCE" />

        <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 tracking-tight max-w-xl">
          Hackathons, competitions, and things built for fun.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <p className="font-mono text-[11px] tracking-widest text-signal mb-6">HACKATHONS &amp; COMPETITIONS</p>
            <div className="relative pl-6 border-l border-line space-y-8">
              {hackathons.map((h, i) => (
                <motion.div
                  key={h.name}
                  initial={{ opacity: 0, x: -14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-active ring-4 ring-ink" />
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-display font-semibold text-base">{h.name}</h4>
                    {h.result && (
                      <span className="font-mono text-[10px] text-active border border-active/30 rounded px-1.5 py-0.5">
                        {h.result}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[11px] text-text-dim mb-2 tracking-wide">{h.org}</p>
                  <p className="text-sm text-text-dim leading-relaxed">{h.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other work */}
          <div>
            <p className="font-mono text-[11px] tracking-widest text-signal mb-6">OTHER TECHNICAL WORK</p>
            <div className="space-y-4">
              {otherWork.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-lg border border-line bg-panel/40 p-5 hover:border-signal/40 transition-colors"
                >
                  <h4 className="font-display font-medium text-sm mb-1.5">{item.name}</h4>
                  <p className="text-sm text-text-dim leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
