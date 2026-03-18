"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "YouTube", "TikTok"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const handleVideoClick = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => setActiveProject(null), 300);
  };

  return (
    <>
      <CursorFollower />
      <Navbar />
      <main className="min-h-screen px-6 pb-24 pt-32 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Header section */}
          <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-5xl font-semibold tracking-tight md:text-7xl"
              >
                Selected <br className="hidden md:block" />
                <span className="text-foreground/30">Works</span>
              </motion.h1>
            </div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                    filter === cat
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:border-foreground/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onVideoClick={handleVideoClick}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <VideoModal
          isOpen={modalOpen}
          videoUrl={activeProject?.videoUrl || ""}
          title={activeProject?.title || ""}
          onClose={handleClose}
        />
      </main>
      <Footer />
    </>
  );
}
