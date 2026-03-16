"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const techBadges = [
  "Next.js", "TypeScript", "React", "Tailwind CSS",
  "SQL", "Power BI", "Tableau", "SSRS", "Firebase", "Vercel",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              Hey, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Robert{" "}
              <span className="gradient-text">Chelala</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-6">
              IT Clinical Systems Analyst &amp; Developer
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-lg mb-8">
              I build data-driven solutions and modern web applications. From
              healthcare analytics dashboards to full-stack apps, I bridge the
              gap between complex data and intuitive user experiences.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-slate-500 hover:text-white transition-all"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rchelala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/robert-chelala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:robertchelala@gmail.com"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 blur-2xl opacity-20 scale-110" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/30">
                <Image
                  src="/profile.jpg"
                  alt="Robert Chelala"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-2 text-xs text-slate-300 shadow-xl">
                <span className="text-green-400 mr-1.5">●</span>
                Open to opportunities
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-slate-600 to-transparent" />
        </motion.div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-16 border-y border-slate-800/50 bg-[#0f172a]/40">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-slate-600 text-xs tracking-widest uppercase mb-8">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm text-slate-400 border border-slate-800 bg-slate-900/50 hover:border-blue-500/40 hover:text-slate-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4+", label: "Websites Built" },
            { value: "3+", label: "Apps Developed" },
            { value: "10+", label: "Data Projects" },
            { value: "9+", label: "Years in Healthcare IT" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-[#0f172a] border border-slate-800"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to see what I&apos;ve built?
          </h2>
          <p className="text-slate-400 mb-8">
            From healthcare analytics to web apps and tools — explore my work across data, development, and design.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Browse Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
