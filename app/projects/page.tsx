"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Category = "all" | "data" | "websites" | "apps";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "data" | "websites" | "apps";
  link?: string;
  github?: string;
  highlights?: string[];
}

const projects: Project[] = [
  // ── WEBSITES ──────────────────────────────────────────────
  {
    title: "Forever After Ink",
    description:
      "Website for a tattoo studio showcasing artist portfolios, booking information, and gallery of completed work.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    category: "websites",
    link: "https://forever-after-ink.vercel.app/#contact",
    github: "https://github.com/rchelala/forever-after-ink",
    highlights: ["Artist portfolio gallery", "Booking info", "Mobile optimized"],
  },
  {
    title: "Baked by Jolee",
    description:
      "Bakery ordering site where customers browse a menu, add items to their order, and submit directly to the owner via EmailJS — no backend required.",
    tags: ["HTML", "CSS", "JavaScript", "EmailJS", "Firebase"],
    category: "websites",
    link: "https://baked-by-jolee.web.app",
    highlights: ["Interactive menu ordering", "EmailJS order submission", "Hosted on Firebase"],
  },

  // ── APPS ──────────────────────────────────────────────────
  {
    title: "DAX & SQL Commenter",
    description:
      "AI-powered tool that automatically generates inline documentation for DAX (Power BI) and SQL code. Supports brief, detailed, and step-by-step comment levels.",
    tags: ["Next.js", "React", "AI", "Vercel"],
    category: "apps",
    link: "https://dax-and-sql-detailed-commenter-app.vercel.app",
    highlights: [
      "DAX & SQL language support",
      "3 comment depth levels",
      "Dark/light mode",
      "Code history",
    ],
  },
  {
    title: "Grocery & Pantry App",
    description:
      "Full-stack household management app with user authentication, pantry tracking, smart shopping lists, and a recipe manager. Dashboard surfaces purchase analytics and expiring items.",
    tags: ["Firebase", "React", "Authentication", "Firestore"],
    category: "apps",
    link: "https://grocery-app-ccc13.web.app",
    highlights: [
      "Household accounts & auth",
      "Pantry & shopping list management",
      "Analytics dashboard",
      "Recipe tab",
    ],
  },
  {
    title: "Kids Interactive App",
    description:
      "A fun, colorful web app designed for toddlers with interactive elements, sounds, and visuals built to be simple and engaging for young children.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    category: "apps",
    link: "https://kids-toddler-app.vercel.app/",
    github: "https://github.com/rchelala/Kids-App",
    highlights: ["Toddler-friendly UI", "Interactive elements", "PWA manifest"],
  },

  // ── DATA ──────────────────────────────────────────────────
  {
    title: "Hospital Network Dashboard",
    description:
      "Executive-level Tableau dashboard visualizing patient volumes, ER wait times, and resource utilization across a hospital network.",
    tags: ["Tableau", "Healthcare Analytics", "Data Visualization"],
    category: "data",
    link: "https://public.tableau.com/app/profile/robert.chelala/viz/HospitalNetworkDashboard/NetworkDashboard",
    highlights: ["Multi-facility comparison", "ER metrics", "Exec-ready layout"],
  },
  {
    title: "ER Performance Dashboard",
    description:
      "Real-time emergency room dashboard tracking patient throughput, door-to-doctor times, and department bottlenecks.",
    tags: ["Tableau", "Healthcare", "KPI Reporting"],
    category: "data",
    link: "https://public.tableau.com/app/profile/robert.chelala/viz/EmergencyDept_Dashboard/ERDashboard4",
    highlights: ["Door-to-doctor KPIs", "Throughput analysis", "Trend tracking"],
  },
  {
    title: "SSRS Patient & Physician Report",
    description:
      "SQL Server Reporting Services report identifying top hospitals and physicians by medical condition using optimized stored procedures and CTE-based queries.",
    tags: ["SSRS", "SQL Server", "T-SQL", "Stored Procedures"],
    category: "data",
    link: "https://rchelala.github.io/RobertChelala.github.io/assets/Patient%20List%20Report.pdf",
    highlights: [
      "CTE & stored procedure optimization",
      "ROW_NUMBER() window functions",
      "Performance-tuned queries",
    ],
  },
  {
    title: "Excel Contracting Template",
    description:
      "Automated Excel cost estimation tool for construction jobs with markup calculations, labor breakdowns, material lists, and one-click PDF export.",
    tags: ["Excel", "VBA", "Data Modeling"],
    category: "data",
    highlights: [
      "Auto markup calculations",
      "Labor & material breakdown",
      "PDF export",
    ],
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "websites", label: "Websites" },
  { key: "apps", label: "Apps" },
  { key: "data", label: "Data" },
];

const categoryColors: Record<string, string> = {
  data: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  websites: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  apps: "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

const tagColors: Record<string, string> = {
  "Next.js": "bg-slate-800 text-slate-300",
  TypeScript: "bg-blue-950 text-blue-300",
  "Tailwind CSS": "bg-cyan-950 text-cyan-300",
  React: "bg-sky-950 text-sky-300",
  Firebase: "bg-orange-950 text-orange-300",
  Tableau: "bg-indigo-950 text-indigo-300",
  SQL: "bg-emerald-950 text-emerald-300",
  "SQL Server": "bg-emerald-950 text-emerald-300",
  SSRS: "bg-emerald-950 text-emerald-300",
  Excel: "bg-green-950 text-green-300",
  AI: "bg-purple-950 text-purple-300",
};

function getTagColor(tag: string) {
  return tagColors[tag] ?? "bg-slate-800 text-slate-400";
}

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-slate-400 max-w-xl">
            A collection of websites, apps, and data projects I&apos;ve built —
            spanning healthcare analytics, web development, and full-stack applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-slate-300"
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-60">
                {cat.key === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Section labels */}
        {active === "all" && (
          <div className="space-y-14">
            {(["websites", "apps", "data"] as const).map((cat) => (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${categoryColors[cat]}`}
                  >
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>
                <ProjectGrid projects={projects.filter((p) => p.category === cat)} />
              </div>
            ))}
          </div>
        )}

        {active !== "all" && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectGrid projects={filtered} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="card-hover group relative flex flex-col bg-[#0f172a] border border-slate-800 rounded-2xl p-6 overflow-hidden"
        >
          {/* Top accent line */}
          <div
            className={`absolute top-0 left-0 right-0 h-px ${
              project.category === "websites"
                ? "bg-linear-to-r from-transparent via-cyan-500 to-transparent"
                : project.category === "apps"
                ? "bg-linear-to-r from-transparent via-blue-500 to-transparent"
                : "bg-linear-to-r from-transparent via-violet-500 to-transparent"
            }`}
          />

          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="space-y-1 mb-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="text-blue-500 mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded text-xs font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {project.category === "data" ? "View" : "Live Site"}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-300 transition-colors font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
