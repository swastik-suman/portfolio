"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-line" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel index="06" name="CERTIFICATIONS" />

        <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 tracking-tight max-w-xl">
          Verified skills and completed programs.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-xl border border-line bg-panel/40 p-6 hover:border-active/50 transition-colors"
            >
              <p className="font-mono text-[10px] tracking-widest text-active mb-3">
                {cert.date}
              </p>
              <h3 className="font-display font-semibold text-base mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-sm text-text-dim mb-4">{cert.issuer}</p>

              {cert.pdfFile && (
  
    href={cert.pdfFile}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-text-dim hover:text-active transition-colors"
  >
    <span className="h-px w-4 bg-current" />
    VIEW CERTIFICATE
  </a>
)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
