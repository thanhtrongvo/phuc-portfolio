"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects, type Project } from "@/lib/data";
import VideoModal from "./VideoModal";

/* ── 3D Tilt Card ─────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onVideoClick,
}: {
  project: Project;
  index: number;
  onVideoClick: (project: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const isVideo = project.category === "Photo/Video" && project.videoUrl;

  // 3D tilt state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  // Shine effect position
  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 200,
    damping: 25,
  });
  const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.92 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card"
      onClick={() => (isVideo ? onVideoClick(project) : undefined)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Shine/glare effect on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [shineX, shineY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            ),
          }}
        />

        {/* Hover Overlay — bottom gradient + info */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category Pill — slides down */}
        <motion.div
          className="absolute left-5 top-5"
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          style={{ translateZ: 30 }}
        >
          <span className="rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background opacity-0 transition-all duration-500 group-hover:opacity-100">
            {project.category}
          </span>
        </motion.div>

        {/* Play icon for video cards */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: index * 0.12 + 0.4,
                type: "spring",
                stiffness: 200,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21" />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Bottom Info — slides up */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 translate-y-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <div>
            <h3 className="font-sans text-base font-medium text-white md:text-lg">
              {project.title}
            </h3>
          </div>
          <motion.div
            className="flex items-center gap-1.5 text-white/80"
            whileHover={{ x: 4 }}
          >
            <span className="text-sm">View Project</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  const handleVideoClick = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => setActiveProject(null), 300);
  };

  return (
    <section id="work" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header — staggered word reveal */}
        <div ref={headerRef} className="mb-16 overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="font-sans text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Latest Projects
          </motion.h2>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground/20"
          />
        </div>

        {/* 2-Column Grid with stagger */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onVideoClick={handleVideoClick}
            />
          ))}
        </div>

        {/* View all — animated button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1a1a1a",
              color: "#F5F5F0",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all"
          >
            View all my projects
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        videoUrl={activeProject?.videoUrl || ""}
        title={activeProject?.title || ""}
        onClose={handleClose}
      />
    </section>
  );
}
