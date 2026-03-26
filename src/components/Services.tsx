"use client";

import { useRef, ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

/* ── Tool Icons ─────────────────────────────────────── */
const ToolIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, ReactElement> = {
    capcut: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    canva: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    premiere: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 7h2.5c1.38 0 2.5 1.12 2.5 2.5S11.88 12 10.5 12H10v3H8V7zm2 3.5h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10v1zm5-1.5h2v1h-2v1.5h2v1h-2V15h-1.5V9H15z" />
      </svg>
    ),
    aftereffects: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM9.5 7L7 17h1.75l.5-2h2.5l.5 2H14L11.5 7h-2zm1 2.5l.75 3.5h-1.5l.75-3.5zm6 .5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H18v-1.5h-1v-1h1V12h-1v-1h1V9.5h-1.5z" />
      </svg>
    ),
  };

  return icons[icon] || null;
};

/* ── Tool Brand Colors ──────────────────────────────── */
const toolColors: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
  capcut: {
    bg: "bg-gradient-to-br from-black to-gray-800",
    text: "text-white",
    border: "border-gray-700",
    shadow: "shadow-gray-900/30",
  },
  canva: {
    bg: "bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8]",
    text: "text-white",
    border: "border-cyan-400/30",
    shadow: "shadow-cyan-500/30",
  },
  premiere: {
    bg: "bg-gradient-to-br from-[#9999FF] to-[#2A0060]",
    text: "text-white",
    border: "border-purple-400/30",
    shadow: "shadow-purple-500/30",
  },
  aftereffects: {
    bg: "bg-gradient-to-br from-[#9999FF] to-[#CF96FD]",
    text: "text-white",
    border: "border-violet-400/30",
    shadow: "shadow-violet-500/30",
  },
};

/* ── Staggered container variants ─────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 15,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header — split word reveal */}
        <div ref={headerRef} className="mb-16 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Services that
              <br />
              <span className="text-foreground/30">bring motion to life.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Creative Toolbox — App Icon Cards */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-xs font-semibold tracking-widest text-muted uppercase"
            >
              My creative toolbox
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {skills.tools.map((tool) => {
                const colors = toolColors[tool.icon] || {
                  bg: "bg-card",
                  text: "text-foreground",
                  border: "border-border",
                  shadow: "shadow-black/10",
                };
                return (
                  <motion.div
                    key={tool.name}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex flex-col items-center justify-center rounded-2xl border ${colors.border} ${colors.bg} p-6 shadow-lg ${colors.shadow} cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                    style={{ perspective: 1000 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Icon */}
                    <div className={`mb-3 ${colors.text} transition-transform duration-300 group-hover:scale-110`}>
                      <ToolIcon icon={tool.icon} />
                    </div>
                    
                    {/* Name */}
                    <span className={`text-center text-xs font-medium ${colors.text} leading-tight`}>
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Services List — slide-in from left with expanding line */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-xs font-semibold tracking-widest text-muted uppercase"
            >
              What I do
            </motion.p>
            {skills.services.map((service, i) => (
              <motion.div
                key={service}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  x: 12,
                  backgroundColor: "rgba(0,0,0,0.03)",
                }}
                className="group flex items-center gap-4 border-b border-border py-5 transition-all last:border-b-0"
              >
                <motion.span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 font-mono text-xs font-semibold text-muted transition-all group-hover:bg-foreground group-hover:text-background"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <span className="text-base font-medium text-foreground/80 transition-colors group-hover:text-foreground md:text-lg">
                  {service}
                </span>
                {/* Animated arrow on hover */}
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto text-foreground/30 opacity-0 transition-all group-hover:opacity-100 group-hover:text-foreground"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </motion.svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
