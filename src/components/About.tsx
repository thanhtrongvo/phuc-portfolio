"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

/* ── Word-by-word reveal ──────────────────────────── */
function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: false, margin: "-60px" });

  // Parallax for the photo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const photoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.02],
  );

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header — slide-up reveal */}
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
              A research-first approach
              <br />
              <span className="text-foreground/30">
                to visual storytelling.
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground/20"
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          {/* Photo — parallax scroll + hover scale */}
          <motion.div
            ref={photoRef}
            className="lg:col-span-2"
            style={{ y: photoY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 80,
                damping: 16,
              }}
              className="group relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-border bg-card"
            >
              <motion.div
                style={{ scale: photoScale }}
                className="h-full w-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Phuc — photographer and filmmaker"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
            </motion.div>

            {/* Name & Title — stagger in */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5"
            >
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="font-serif text-lg font-medium text-foreground italic"
              >
                phuc
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-sm text-muted"
              >
                content creator, designer, video editor
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Bio Text — word-by-word reveal */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              <RevealText
                text="I start with a plan — and never look back. What began with a curiosity for how things work grew into a passion for cinematic journalism. I move between deep research, sound design, and video editing—always chasing the best way to interpret a script on the screen."
                delay={0.1}
              />
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              <RevealText
                text="Being a visual storyteller means more than just cutting clips. From complex data sets to cinematic documentaries, I aim to build work that feels intentional—something that hooks the viewer and explains the 'why' behind the story."
                delay={0.3}
              />
            </p>

            {/* Philosophy card — typewriter-style reveal */}
            <motion.div
              ref={quoteRef}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={quoteInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="mt-4 overflow-hidden rounded-2xl border border-border bg-card p-8"
            >
              {/* Decorative quote mark */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={quoteInView ? { opacity: 0.1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-2 left-4 font-serif text-8xl text-foreground leading-none select-none"
              >
                &ldquo;
              </motion.span>
              <p className="relative font-serif text-xl leading-relaxed text-foreground italic md:text-2xl">
                <RevealText
                  text="Details matter because they carry the vision. Every cut, every beat, and every sound choice has to serve the story. If it doesn't match the rhythm of the script, it doesn't stay."
                  delay={0.4}
                />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
