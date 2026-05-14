"use client";

import { MessageSquare, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#0A0A0A] border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-8 px-6 max-sm:pt-10 max-sm:pb-6 max-sm:px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-sm:gap-6 mb-12 max-sm:mb-8">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
              <span className="text-white dark:text-black font-bold text-xl">SG</span>
            </div>
            <p className="text-[#BB1919] uppercase tracking-[0.3em] text-xs font-bold max-sm:text-[10px]">
              Full Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-sm:gap-x-6 max-sm:gap-y-3">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white text-sm font-medium max-sm:text-xs transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social & Top Button */}
          <div className="flex items-center gap-6 max-sm:gap-4">
            <div className="flex gap-4 max-sm:gap-3">
              <a href="https://github.com/surajgupta1122" className="text-zinc-600 dark:text-zinc-500 hover:text-[#BB1919] transition-colors duration-300">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/suraj-gupta-11j45/" className="text-zinc-600 dark:text-zinc-500 hover:text-[#BB1919] transition-colors duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="https://wa.me/919540962288" className="text-zinc-600 dark:text-zinc-500 hover:text-[#BB1919] transition-colors duration-300">
                <MessageSquare size={18} />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-500 hover:bg-[#BB1919] hover:text-white hover:border-transparent transition-all duration-300"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 max-sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
          <p className="text-zinc-500 dark:text-zinc-400 text-xs text-center md:text-left max-sm:text-[11px]">
            © {new Date().getFullYear()} Suraj Gupta. All rights reserved.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs flex items-center gap-1 max-sm:text-[11px]">
            Built with <span className="text-[#BB1919]">❤</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}