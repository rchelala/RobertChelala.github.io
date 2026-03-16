"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    role: "IT Clinical Systems Analyst",
    company: "Phoenix Children's Hospital",
    period: "Feb 2021 – Present",
    description:
      "Develop and maintain clinical reporting solutions using SSRS, SQL Server, and Tableau. Support electronic health record systems and build data-driven tools that improve patient care workflows.",
    skills: ["SQL Server", "SSRS", "Tableau", "Sunrise Clinical Manager", "Jira", "Cerner EMR"],
  },
  {
    role: "Certified Pharmacy Technician",
    company: "Phoenix Children's Hospital",
    period: "2017 – 2021",
    description:
      "Specialized in chemotherapy compounding and IV preparations in a pediatric hospital setting. Developed deep understanding of clinical workflows that now informs IT system design.",
    skills: ["Chemotherapy", "Compounding", "Clinical Workflows"],
  },
  {
    role: "Certified Pharmacy Technician",
    company: "Banner Del E. Webb Medical Center",
    period: "2014 – 2017",
    description:
      "Provided pharmacy support in an inpatient hospital environment, processing medication orders and maintaining regulatory compliance.",
    skills: ["Inpatient Pharmacy", "Medication Management"],
  },
];

const skills = [
  {
    category: "Data & Analytics",
    items: ["SQL / T-SQL", "SSRS", "Tableau", "Power BI", "DAX", "Excel / VBA"],
    color: "from-violet-500/20 to-violet-500/5",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    category: "Web Development",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    color: "from-cyan-500/20 to-cyan-500/5",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    category: "Tools & Platforms",
    items: ["Firebase", "Vercel", "GitHub", "Jira", "EmailJS", "Cerner EMR"],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
];

const certifications = [
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    icon: "📊",
  },
  {
    name: "Certified Pharmacy Technician (CPhT)",
    issuer: "PTCB",
    icon: "💊",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Background
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-10 mb-20"
        >
          {/* Photo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-slate-700">
              <Image
                src="/profile.jpg"
                alt="Robert Chelala"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg">Robert Chelala</p>
              <p className="text-slate-400 text-sm">Phoenix, AZ</p>
              <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-500">Open to opportunities</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/rchelala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/robert-chelala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m an IT Clinical Systems Analyst at{" "}
              <span className="text-white font-medium">Phoenix Children&apos;s Hospital</span>{" "}
              with over 9 years in healthcare. I started my career as a pharmacy
              technician, which gave me a deep understanding of clinical workflows — and
              eventually led me to the IT side where I could build solutions that
              actually improve how care is delivered.
            </p>
            <p>
              Today I specialize in{" "}
              <span className="text-white font-medium">data analytics</span> and{" "}
              <span className="text-white font-medium">web/app development</span>. On the
              data side I build reporting solutions in SSRS, SQL Server, Tableau, and
              Power BI. On the development side I&apos;ve built websites and full-stack
              applications using Next.js, React, TypeScript, and Firebase.
            </p>
            <p>
              I enjoy finding the intersection between complex systems and simple,
              intuitive design — whether that&apos;s a hospital dashboard that surfaces
              the right KPIs or a bakery website that lets customers order with a single
              click.
            </p>
            <div className="pt-2">
              <Link
                href="/Robert_Chelala_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className={`rounded-2xl border ${group.border} bg-linear-to-b ${group.color} p-5`}
              >
                <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${group.accent}`}>
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className={`w-1 h-1 rounded-full ${group.accent.replace("text-", "bg-")}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-4">
            {experience.map((job, i) => (
              <div
                key={i}
                className="relative pl-6 border-l border-slate-800 pb-8 last:pb-0"
              >
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-[#0a0f1e]" />
                <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-semibold">{job.role}</h3>
                      <p className="text-blue-400 text-sm">{job.company}</p>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 bg-[#0f172a] border border-slate-800 rounded-xl p-4"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className="text-white font-medium text-sm">{cert.name}</p>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
