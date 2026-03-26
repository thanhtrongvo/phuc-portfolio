"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";

function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 py-6 text-left transition-colors hover:text-foreground/70 md:items-center"
        aria-expanded={isOpen}
      >
        <span className="shrink-0 font-mono text-sm text-muted">{item.id}</span>
        <span className="flex-1 text-base font-medium text-foreground md:text-lg">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-xl text-muted"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-10 text-sm leading-relaxed text-muted md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-8 py-24 md:px-16 lg:px-32">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Your questions
            <br />
            <span className="text-foreground/30">answered.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        {/* Follow-up CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-border bg-card p-8 text-center"
        >
          <p className="text-base text-foreground/70">
            Have a follow-up question?
          </p>
          <a
            href="mailto:trongphucwork123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-foreground/70"
          >
            Send me an email!
            <svg
              width="16"
              height="16"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}
