"use client";

import { motion } from "framer-motion";

/* ── Intersection Point Component ─────────────────── */
const IntersectionPoint = ({ 
  top, 
  left, 
  delay = 0 
}: { 
  top: string; 
  left: string; 
  delay?: number;
}) => (
  <motion.div
    className="absolute z-10"
    style={{ top, left }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {/* Outer ring */}
    <div className="absolute -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border border-foreground/20" />
    {/* Inner dot */}
    <div className="absolute -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
    {/* Decorative cross */}
    <div className="absolute -translate-x-1/2 -translate-y-1/2 h-6 w-[1px] bg-foreground/10" />
    <div className="absolute -translate-x-1/2 -translate-y-1/2 h-[1px] w-6 bg-foreground/10" />
  </motion.div>
);

/* ── Main Grid Lines Component ─────────────────────── */
export default function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical Lines */}
      <motion.div
        className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-gradient-to-b from-transparent via-foreground/8 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-gradient-to-b from-transparent via-foreground/6 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-gradient-to-b from-transparent via-foreground/10 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-gradient-to-b from-transparent via-foreground/6 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 left-[90%] w-[1px] bg-gradient-to-b from-transparent via-foreground/8 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Diagonal accent lines */}
      <motion.div
        className="absolute top-0 left-[10%] w-[1px] h-[200px] bg-gradient-to-b from-foreground/15 to-transparent origin-top"
        initial={{ scaleY: 0, rotate: 15 }}
        animate={{ scaleY: 1, rotate: 15 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 right-[10%] w-[1px] h-[200px] bg-gradient-to-b from-foreground/15 to-transparent origin-top"
        initial={{ scaleY: 0, rotate: -15 }}
        animate={{ scaleY: 1, rotate: -15 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      />

      {/* Intersection points at key positions */}
      <IntersectionPoint top="20%" left="10%" delay={1.0} />
      <IntersectionPoint top="20%" left="90%" delay={1.1} />
      <IntersectionPoint top="40%" left="25%" delay={1.2} />
      <IntersectionPoint top="40%" left="75%" delay={1.3} />
      <IntersectionPoint top="60%" left="50%" delay={1.4} />
      <IntersectionPoint top="80%" left="10%" delay={1.5} />
      <IntersectionPoint top="80%" left="90%" delay={1.6} />

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/20" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-foreground/20" />
      </motion.div>
      <motion.div
        className="absolute top-8 right-8 w-12 h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-foreground/20" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-foreground/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 w-12 h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      >
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/20" />
        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-foreground/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      >
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-foreground/20" />
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-foreground/20" />
      </motion.div>
    </div>
  );
}
