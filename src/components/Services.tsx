"use client";

import { useRef, ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

/* ── Tool Icons - Accurate SVG paths ─────────────────── */
const ToolIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, ReactElement> = {
    // CapCut - Official logo (play button in circle)
    capcut: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-12v8l6-4-6-4z" />
      </svg>
    ),
    // Canva - Official "C" logo
    canva: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8c1.851 0 3.558.633 4.92 1.693l-1.428 1.428A5.956 5.956 0 0012 6c-3.309 0-6 2.691-6 6s2.691 6 6 6c2.073 0 3.902-1.056 4.976-2.656l1.428 1.428C16.558 18.367 14.851 20 12 20z" />
      </svg>
    ),
    // Adobe Premiere Pro - "Pr" text logo
    premiere: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16.5 16.5v-15h-15v15h15zM6.5 8h2.8c1.3 0 2.2.9 2.2 2.1 0 1.3-.9 2.2-2.2 2.2H8v2.7H6.5V8zm1.5 3h1.1c.5 0 .9-.4.9-.9 0-.5-.4-.9-.9-.9H8v1.8zm5.5-3h2.3c.4 0 .7.1 1 .2.2.1.4.3.5.5.1.2.2.4.2.7v.1c0 .4-.1.7-.4 1-.2.2-.5.4-.9.5l1.5 2.5h-1.7l-1.3-2.2h-.7v2.2h-1.5V8h2zm1.5 2.4h.6c.3 0 .5-.1.7-.2.1-.1.2-.3.2-.5 0-.2-.1-.4-.2-.5-.2-.1-.4-.2-.7-.2h-.6v1.4z" />
      </svg>
    ),
    // Adobe After Effects - "Ae" text logo
    aftereffects: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16.5 16.5v-15h-15v15h15zM6 15l2.5-7h1.7l2.5 7h-1.6l-.5-1.5H8l-.5 1.5H6zm2.4-2.7h1.5l-.7-2.3-.8 2.3zm5.1-3.3h3.8v1.2h-2.3v1.2h2.1v1.2h-2.1v1.3h2.4V15h-3.9V9z" />
      </svg>
    ),
  };

  return icons[icon] || null;
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
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
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
          {/* Creative Toolbox — Simple B&W Cards */}
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
              {skills.tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col items-center justify-center rounded-xl border border-foreground/10 bg-background p-5 shadow-sm transition-all duration-300 hover:border-foreground/30 hover:shadow-md cursor-pointer"
                >
                  {/* Icon */}
                  <div className="mb-3 text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                    <ToolIcon icon={tool.icon} />
                  </div>
                  
                  {/* Name */}
                  <span className="text-center text-xs font-medium text-foreground/60 leading-tight transition-colors duration-300 group-hover:text-foreground">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
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
                  x: 8,
                }}
                className="group flex items-center gap-4 border-b border-foreground/10 py-5 transition-all last:border-b-0 hover:border-foreground/20"
              >
                <motion.span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 font-mono text-xs font-medium text-foreground/50 transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
                  whileHover={{ scale: 1.1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <span className="text-base font-medium text-foreground/70 transition-colors group-hover:text-foreground md:text-lg">
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
                  className="ml-auto text-foreground/20 opacity-0 transition-all group-hover:opacity-100 group-hover:text-foreground"
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
