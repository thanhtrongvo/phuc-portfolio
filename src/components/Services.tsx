"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

// Import icons from react-icons
import { 
  TbBrandAdobePremier, 
  TbBrandAdobeAfterEffect 
} from "react-icons/tb";
import { SiCanva } from "react-icons/si";

/* ── Custom CapCut Icon (not available in react-icons) ─────── */
const CapCutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.004 0c-1.327.004-2.598.207-3.78.569l5.62 3.246c2.938 1.697 4.077 5.461 2.542 8.404-.053.102-.108.203-.167.302l5.608 3.238a11.367 11.367 0 0 0 2.17-6.617V9.14c0-2.502-.81-4.822-2.182-6.703a.512.512 0 0 0-.7-.133l-2.627 1.518A11.342 11.342 0 0 0 12.004 0zm-8.17 3.427a.512.512 0 0 0-.255.07A11.334 11.334 0 0 0 .687 9.14v.002c0 2.502.81 4.822 2.182 6.703.174.239.515.29.7.133l2.627-1.518a11.34 11.34 0 0 0 6.484 3.824l-5.62-3.246c-2.938-1.697-4.077-5.461-2.542-8.404.053-.102.108-.203.167-.302L-.923 3.094a.512.512 0 0 0-.243-.067zM12 6.857a5.143 5.143 0 1 0 0 10.286 5.143 5.143 0 0 0 0-10.286zm-.004 13.426a11.34 11.34 0 0 0-6.478-3.822l5.616 3.244c.923.533 1.945.823 2.972.867l.003.001c1.027.044 2.068-.156 3.035-.593l.006-.003c.3-.135.59-.295.866-.478l-2.628-1.517a5.655 5.655 0 0 1-3.392 2.301z"/>
  </svg>
);

/* ── Tool Icon Component ─────────────────────────────────────── */
const ToolIcon = ({ icon }: { icon: string }) => {
  const iconClass = "h-8 w-8";
  
  switch (icon) {
    case "capcut":
      return <CapCutIcon className={iconClass} />;
    case "canva":
      return <SiCanva className={iconClass} />;
    case "premiere":
      return <TbBrandAdobePremier className={iconClass} />;
    case "aftereffects":
      return <TbBrandAdobeAfterEffect className={iconClass} />;
    default:
      return null;
  }
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
