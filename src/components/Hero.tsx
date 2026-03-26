"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    alt: "Creative work 1",
    rotate: -6,
    z: 3,
    floatClass: "animate-float",
  },
  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    alt: "Creative work 2",
    rotate: 4,
    z: 2,
    floatClass: "animate-float-delay-1",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    alt: "Creative work 3",
    rotate: -3,
    z: 1,
    floatClass: "animate-float-delay-2",
  },
];

/* ── Character-by-character text reveal ───────────── */
function AnimatedText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Parallax-tilt photo card ─────────────────────── */
function ParallaxPhoto({
  src,
  alt,
  index,
  rotate,
  z,
  floatClass,
}: {
  src: string;
  alt: string;
  index: number;
  rotate: number;
  z: number;
  floatClass: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    mouseX.set(x);
    mouseY.set(y);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      initial={{ opacity: 0, rotate: 0, scale: 0.6, y: 60 }}
      animate={{ opacity: 1, rotate, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.8 + index * 0.2,
        type: "spring",
        stiffness: 80,
        damping: 16,
      }}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        perspective: 800,
        width: index === 0 ? "85%" : index === 1 ? "70%" : "55%",
        height: index === 0 ? "90%" : index === 1 ? "75%" : "60%",
        top: index === 0 ? "5%" : index === 1 ? "0%" : "25%",
        left: index === 0 ? "10%" : index === 1 ? "25%" : "5%",
        zIndex: z,
      }}
      className={`absolute overflow-hidden rounded-2xl border border-border bg-card shadow-2xl ${floatClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80vw, 40vw"
        className="object-cover"
        priority={index === 0}
      />
      {/* Subtle shimmer overlay on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 animate-shimmer" />
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for text and photos
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const photosY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden px-6 pb-8 pt-28 md:px-12 lg:px-24"
    >
      {/* Background floating shapes */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, var(--color-foreground) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[5%] bottom-[20%] h-48 w-48 rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, var(--color-foreground) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left Content — with parallax */}
        <motion.div className="flex-1" style={{ y: textY }}>
          {/* Availability Badge — with pulse glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-glow" />
            <span className="text-sm font-medium text-foreground">
              Available for Inquiries
            </span>
          </motion.div>

          {/* Main Heading — character-by-character reveal */}
          <h1 className="font-sans text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.95] tracking-tight">
            <AnimatedText
              text="Documentary"
              className="text-foreground/30"
              delay={0.5}
            />
            <br />
            <AnimatedText
              text="storyteller."
              className="font-semibold text-foreground"
              delay={0.75}
            />
          </h1>

          {/* Tagline — slide from left */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.3,
              type: "spring",
              stiffness: 120,
            }}
            className="mt-10 text-sm font-bold tracking-wide text-foreground uppercase"
          >
            OBSESSED WITH THE "WHY" ✨
          </motion.p>

          {/* Description — wipe in */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-4 max-w-md"
          >
            <p className="text-base leading-relaxed text-foreground/70">
              Hello, I&apos;m <strong className="text-foreground">Smith</strong>. I&apos;m a video editor obsessed with the world of visual journalism. From the provinces of{" "}
              <strong className="text-foreground">Vietnam</strong> to global financial trends, I find the story.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/70">
              I map out the vision, find the pulse, and execute the edit.
            </p>
          </motion.div>

          {/* CTA Button — spring bounce in */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.7,
              type: "spring",
              stiffness: 200,
            }}
            className="mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-background/20 text-xs font-bold"
              >
                P
              </motion.div>
              Send me a message
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right — Stacked Photo Collage with parallax + 3D tilt */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          style={{ y: photosY }}
        >
          <div className="relative h-[400px] w-full max-w-[500px] md:h-[500px]">
            {heroImages.map((img, i) => (
              <ParallaxPhoto
                key={i}
                src={img.src}
                alt={img.alt}
                index={i}
                rotate={img.rotate}
                z={img.z}
                floatClass={img.floatClass}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        style={{ opacity: marqueeOpacity }}
        className="mt-16 overflow-hidden border-t border-border pt-6 lg:mt-8"
      >
        <div className="animate-marquee flex w-max gap-12">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-12">
              {[
                "Trusted by many",
                "✦",
                "Content Creator",
                "✦",
                "Video Editor",
                "✦",
                "Designer",
                "✦",
                "Visual Storyteller",
                "✦",
                "Trusted by many",
                "✦",
                "Content Creator",
                "✦",
                "Video Editor",
                "✦",
                "Designer",
                "✦",
                "Visual Storyteller",
                "✦",
              ].map((text, i) => (
                <span
                  key={`${setIdx}-${i}`}
                  className={`whitespace-nowrap text-sm ${
                    text === "✦"
                      ? "text-foreground/20"
                      : "font-medium text-foreground/40"
                  }`}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
