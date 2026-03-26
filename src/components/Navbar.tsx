"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sections = ["work", "services", "about", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Navbar — no entrance animation */}
      <nav
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div
          className={`flex items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500 ${
            scrolled
              ? "border-black/10 bg-white/85 shadow-lg backdrop-blur-xl"
              : "border-black/5 bg-white/60 shadow-md backdrop-blur-lg"
          }`}
        >
          {/* Logo / Avatar */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 rounded-full px-3 py-1.5"
          >
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-foreground text-xs font-bold text-background transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/smallimg.jpg"
                alt="Logo"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="hidden font-sans text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground/70 md:block">
              phuc
            </span>
          </a>

          {/* Desktop Links — enhanced hover with sliding indicator */}
          <div
            className="hidden items-center gap-0.5 md:flex"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isHovered = hoveredItem === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  className="relative rounded-full px-4 py-2 text-sm text-foreground/60 transition-colors duration-200 hover:text-foreground"
                >
                  {/* Hover pill — slides smoothly between links */}
                  {isHovered && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-black/[0.07]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                      }}
                    />
                  )}

                  {/* Active dot indicator */}
                  {isActive && !isHovered && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="group relative ml-1 overflow-hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          >
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Contact</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 7, width: 18 }
                    : { rotate: 0, y: 0, width: 18 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="block h-[1.5px] bg-foreground"
                style={{ width: 18 }}
              />
              <motion.span
                animate={
                  mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-3 bg-foreground"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -7, width: 18 }
                    : { rotate: 0, y: 0, width: 18 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="block h-[1.5px] bg-foreground"
                style={{ width: 18 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-4xl font-semibold text-foreground"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-foreground px-8 py-3 text-lg font-medium text-background"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
