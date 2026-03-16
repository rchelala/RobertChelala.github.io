import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0a0f1e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          Built by{" "}
          <span className="gradient-text font-medium">Robert Chelala</span>
          {" "}· Next.js + Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <Link href="/projects" className="hover:text-slate-300 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          <a
            href="https://github.com/rchelala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
