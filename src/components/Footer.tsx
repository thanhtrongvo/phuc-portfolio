"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "youtube":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-dark px-6 pb-8 pt-24 text-white md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Big CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-sans text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            Lets {/* Rotating Word */}
            <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
              <span className="animate-rotate-words flex flex-col text-white/40">
                <span className="block h-[1.1em]">create</span>
                <span className="block h-[1.1em]">visualize</span>
                <span className="block h-[1.1em]">build</span>
                <span className="block h-[1.1em]">design</span>
                <span className="block h-[1.1em]">create</span>
              </span>
            </span>
            <br />
            incredible work together.
          </h2>
        </motion.div>

        {/* Email + Social Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm text-white/40">Email</p>
            <a
              href="mailto:trongphucwork123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-lg font-medium text-white transition-colors hover:text-white/70"
            >
              trongphucwork123@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-white/40">Social</p>
            <div className="mt-2 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white/50 hover:bg-white/10"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 text-xs text-white/30 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span>Based in Vietnam</span>
          </div>
          <span>© {new Date().getFullYear()} Phuc</span>
        </motion.div>

        {/* Giant Watermark Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 select-none overflow-hidden"
        >
          <p className="-mb-6 font-sans text-[clamp(6rem,20vw,16rem)] font-bold leading-none tracking-tighter text-white/[0.07] md:-mb-10">
            PHUC
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
