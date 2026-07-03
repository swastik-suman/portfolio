"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";
import { mockupMap } from "./ProjectMockups";

const accentText: Record<string, string> = {
  blue:   "text-signal",
  teal:   "text-active",
  red:    "text-alert",
  purple: "text-[#a78bfa]",
};
const accentBorder: Record<string, string> = {
  blue:   "hover:border-signal/50",
  teal:   "hover:border-active/50",
  red:    "hover:border-alert/50",
  purple: "hover:border-[#a78bfa]/50",
};
const accentBg: Record<string, string> = {
  blue:   "bg-signal/10",
  teal:   "bg-active/10",
  red:    "bg-alert/10",
  purple: "bg-[#a78bfa]/10",
};

// 4 featured (first 4) displayed large; last 2 in compact grid
const featured = projects.slice(0, 4);
const compact  = projects.slice(4);

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel index="03" name="PROJECTS" />

        <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 tracking-tight max-w-2xl">
          Agents, assistants, dashboards — built to reason and explain.
        </h2>

        {/* ── FEATURED PROJECTS (large alternating cards) ── */}
        <div className="space-y-8 mb-14">
          {featured.map((project, i) => {
            const Mockup = mockupMap[project.slug];
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-xl border border-line bg-panel/40 overflow-hidden transition-colors ${accentBorder[project.accent]}`}
              >
                <div className={`grid md:grid-cols-2 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* Mockup visual */}
                  <div className="aspect-[16/10] md:aspect-auto min-h-[200px]">
                    {Mockup && <Mockup accent={project.accent} />}
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-9 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`font-mono text-[10px] tracking-widest px-2 py-0.5 rounded ${accentBg[project.accent]} ${accentText[project.accent]}`}>
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="font-mono text-[10px] text-text-dim">{project.status}</span>
                      )}
                    </div>

                    <h3 className="font-display font-semibold text-xl sm:text-2xl mb-3 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-text-dim leading-relaxed text-sm mb-5">{project.description}</p>

                    <ul className="space-y-2 mb-6">
                      {project.bullets.slice(0, 3).map((b, idx) => (
                        <li key={idx} className="text-sm text-text-dim leading-relaxed flex gap-2.5">
                          <span className={`mt-2 h-1 w-1 shrink-0 rounded-full bg-current ${accentText[project.accent]}`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span key={s} className="font-mono text-[11px] text-text-dim px-2 py-1 rounded border border-line">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ── COMPACT BI PROJECTS ── */}
        {compact.length > 0 && (
          <>
            <p className="font-mono text-[11px] tracking-widest text-signal mb-5">BUSINESS INTELLIGENCE</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {compact.map((project, i) => {
                const Mockup = mockupMap[project.slug];
                return (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className={`rounded-xl border border-line bg-panel/40 overflow-hidden transition-colors ${accentBorder[project.accent]}`}
                  >
                    <div className="aspect-[16/9]">
                      {Mockup && <Mockup accent={project.accent} />}
                    </div>
                    <div className="p-5">
                      <span className={`font-mono text-[10px] tracking-widest ${accentText[project.accent]}`}>
                        {project.category}
                      </span>
                      <h3 className="font-display font-semibold text-base mt-1 mb-2">{project.name}</h3>
                      <p className="text-sm text-text-dim leading-relaxed mb-4">{project.tagline}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                          <span key={s} className="font-mono text-[10px] text-text-dim px-2 py-0.5 rounded border border-line">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
