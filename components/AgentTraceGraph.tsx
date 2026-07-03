"use client";

import { useId } from "react";
import { motion } from "framer-motion";

type Node = { id: string; x: number; y: number; label?: string };
type Edge = [string, string];

const nodes: Node[] = [
  { id: "n1", x: 80, y: 220, label: "INGEST" },
  { id: "n2", x: 230, y: 110, label: "ANALYZE" },
  { id: "n3", x: 230, y: 330, label: "TRIAGE" },
  { id: "n4", x: 400, y: 60, label: "RISK" },
  { id: "n5", x: 400, y: 200, label: "MEMORY" },
  { id: "n6", x: 400, y: 380, label: "RESPOND" },
  { id: "n7", x: 560, y: 130, label: "REPORT" },
  { id: "n8", x: 560, y: 300, label: "ACT" },
];

const edges: Edge[] = [
  ["n1", "n2"],
  ["n1", "n3"],
  ["n2", "n4"],
  ["n2", "n5"],
  ["n3", "n5"],
  ["n3", "n6"],
  ["n4", "n7"],
  ["n5", "n7"],
  ["n5", "n8"],
  ["n6", "n8"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function AgentTraceGraph({ className }: { className?: string }) {
  const gradId = useId();

  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      role="img"
      aria-label="Animated diagram of an AI agent pipeline, representing the AEGIS multi-agent system"
    >
      <defs>
        <linearGradient id={`edge-${gradId}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-active)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const from = byId[a];
        const to = byId[b];
        return (
          <line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={`url(#edge-${gradId})`}
            strokeWidth={1.5}
            opacity={0.5}
          />
        );
      })}

      {/* Traveling pulses */}
      {edges.map(([a, b], i) => {
        const from = byId[a];
        const to = byId[b];
        return (
          <motion.circle
            key={`pulse-${a}-${b}`}
            r={3}
            fill="var(--color-active)"
            initial={{ cx: from.x, cy: from.y, opacity: 0 }}
            animate={{
              cx: [from.x, to.x],
              cy: [from.y, to.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.45,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={5}
            fill="var(--color-ink)"
            stroke="var(--color-signal)"
            strokeWidth={1.5}
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          />
          {n.label && (
            <text
              x={n.x}
              y={n.y - 14}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--color-text-dim)"
              letterSpacing="0.05em"
            >
              {n.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
