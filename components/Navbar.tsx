"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          <span className="gradient-text">RC</span>
          <span className="text-slate-300 ml-1 text-sm font-normal hidden sm:inline">
            / Robert Chelala
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-slate-800"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="/Robert_Chelala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`h-0.5 bg-current rounded transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-current rounded transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-current rounded transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-md border-b border-slate-800 px-6 pb-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-slate-800"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="/Robert_Chelala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-blue-400 hover:bg-slate-800/60 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
