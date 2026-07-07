"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";

const contactLinks = [
  {
    icon: Mail,
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: GitBranch,
    label: "GITHUB",
    value: "swastik-suman",
    href: profile.github,
  },
  {
    icon: ExternalLink,
    label: "LINKEDIN",
    value: "swastik-suman-a422a2302",
    href: profile.linkedin,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel index="07" name="CONTACT" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-5 tracking-tight leading-tight">
              Let&apos;s build something{" "}
              <span className="text-active">that reasons</span>.
            </h2>
            <p className="text-text-dim leading-relaxed mb-6 max-w-md">
              Open to internships, research collaborations, and interesting projects in
              AI/ML engineering or data analytics. If you&apos;re working on something that
              involves agents, graphs, or dashboards — I&apos;d love to hear about it.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-active text-ink font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={15} />
              Send a message
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 p-5 rounded-lg border border-line bg-panel/40 hover:border-signal/60 transition-colors"
                >
                  <Icon
                    size={16}
                    className="mt-0.5 shrink-0 text-text-dim group-hover:text-active transition-colors"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-widest text-text-dim mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-text truncate group-hover:text-active transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
