"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import VideoModal from "./VideoModal";
import ProjectCard from "./ProjectCard";


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
            href="/projects"
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
