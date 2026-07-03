"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { AgentTraceGraph } from "./AgentTraceGraph";

// Typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const roles = [
  "AI/ML Engineer",
  "Multi-Agent Builder",
  "Full-Stack Developer",
  "Data Analyst",
];

// Word-by-word reveal animation for heading
function AnimatedHeading({ text }: { text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <h1 ref={ref} className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.08] tracking-tight mb-6">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-20 pb-28 md:pt-28 md:pb-36 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-active animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-active">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          <AnimatedHeading text="Building AI systems that reason, trace, and explain." />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-mono text-lg text-signal mb-6 h-7"
          >
            {typed}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-text-dim text-base sm:text-lg max-w-lg mb-9 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 rounded bg-active text-ink font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded border border-line text-text text-sm hover:border-active hover:text-active transition-colors"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2.5 text-text-dim hover:text-active transition-colors">
                <GitBranch size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2.5 text-text-dim hover:text-active transition-colors">
                <ExternalLink size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email"
                className="p-2.5 text-text-dim hover:text-active transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — photo + agent graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-5 justify-center pt-4"
        >
          {/* Profile photo */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-signal/40 via-active/20 to-transparent animate-spin-slow" />
            <div className="absolute inset-1 rounded-full bg-panel border border-line overflow-hidden">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover object-top"
                priority
                onError={(e) => {
                  // fallback avatar if photo not found
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

            </div>
            {/* ping dot */}
            <span className="absolute bottom-3 right-3 h-4 w-4 rounded-full bg-active border-2 border-ink" />
          </div>

          {/* Agent graph */}
          <div className="w-full rounded-xl border border-line bg-panel/60 backdrop-blur-sm p-2">
            <AgentTraceGraph className="w-full h-auto" />
            <p className="font-mono text-[10px] text-text-dim text-center mt-1 mb-1 tracking-wider">
              AEGIS PIPELINE — AGENT TRACE
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-grid-fade pointer-events-none" />
    </section>
  );
}
