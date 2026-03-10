"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

/* ── Staggered container variants ─────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 15, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 18,
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
      delay: i * 0.07,
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
              <span className="text-foreground/30">shape your story.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Creative Toolbox — pills wave in */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 text-xs font-semibold tracking-widest text-muted uppercase"
            >
              My creative toolbox
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2.5"
            >
              {skills.tools.map((tool) => (
                <motion.span
                  key={tool}
                  variants={pillVariants}
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#1a1a1a",
                    color: "#F5F5F0",
                    y: -3,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-default rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Services List — slide-in from left with expanding line */}
          <div>
            {skills.services.map((service, i) => (
              <motion.div
                key={service}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  x: 8,
                  backgroundColor: "rgba(0,0,0,0.02)",
                }}
                className="group flex items-center gap-4 border-b border-border py-4 transition-colors last:border-b-0"
              >
                <motion.span
                  className="font-mono text-xs text-muted transition-colors group-hover:text-foreground"
                  whileHover={{ scale: 1.2 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <span className="text-sm text-foreground/80 transition-colors group-hover:text-foreground md:text-base">
                  {service}
                </span>
                {/* Animated arrow on hover */}
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                  initial={{ x: -5 }}
                  whileHover={{ x: 0 }}
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </motion.svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
