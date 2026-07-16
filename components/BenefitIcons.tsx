"use client";

import { motion } from "framer-motion";

const drawTransition = { duration: 1.1, ease: "easeInOut" as const };

export function TimeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      aria-hidden="true"
      fill="none"
    >
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        stroke="#1B2A41"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition}
      />
      <motion.path
        d="M32 18v14l10 6"
        stroke="#9C7A34"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.4 }}
      />
    </svg>
  );
}

export function CostIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      aria-hidden="true"
      fill="none"
    >
      <motion.path
        d="M12 44 L24 30 L34 38 L52 18"
        stroke="#9C7A34"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition}
      />
      <motion.path
        d="M42 18h10v10"
        stroke="#1B2A41"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.5 }}
      />
      <motion.line
        x1="12"
        y1="50"
        x2="52"
        y2="50"
        stroke="#1B2A41"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.2 }}
      />
    </svg>
  );
}

export function RiskIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      aria-hidden="true"
      fill="none"
    >
      <motion.path
        d="M32 8 L54 18 V32 C54 46 44 54 32 58 C20 54 10 46 10 32 V18 Z"
        stroke="#1B2A41"
        strokeWidth="2.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition}
      />
      <motion.path
        d="M23 32 L29 38 L41 24"
        stroke="#9C7A34"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.5 }}
      />
    </svg>
  );
}

export function ReachIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      aria-hidden="true"
      fill="none"
    >
      <motion.circle
        cx="32"
        cy="16"
        r="6"
        stroke="#9C7A34"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition}
      />
      <motion.circle
        cx="14"
        cy="46"
        r="6"
        stroke="#1B2A41"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.15 }}
      />
      <motion.circle
        cx="50"
        cy="46"
        r="6"
        stroke="#1B2A41"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.3 }}
      />
      <motion.path
        d="M28 21 L18 40 M36 21 L46 40"
        stroke="#1B2A41"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.45 }}
      />
    </svg>
  );
}

export function TrackingIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      aria-hidden="true"
      fill="none"
    >
      <motion.path
        d="M8 24h32v22H8z"
        stroke="#1B2A41"
        strokeWidth="2.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={drawTransition}
      />
      <motion.path
        d="M40 32h9l7 8v6h-16z"
        stroke="#1B2A41"
        strokeWidth="2.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.3 }}
      />
      <motion.circle
        cx="19"
        cy="48"
        r="4.5"
        stroke="#9C7A34"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.55 }}
      />
      <motion.circle
        cx="47"
        cy="48"
        r="4.5"
        stroke="#9C7A34"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ ...drawTransition, delay: 0.65 }}
      />
    </svg>
  );
}
