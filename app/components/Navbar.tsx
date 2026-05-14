"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTimes } from "react-icons/fa";
import { Moon, Sun, Menu } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dark mode logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === null ? true : savedTheme === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Smooth scroll with offset
  const scrollToSection = (sectionId: string) => {
    setSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Intersection Observer for active section
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "education",
      "contact",
    ];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (
              !bestEntry ||
              entry.intersectionRatio > bestEntry.intersectionRatio
            ) {
              bestEntry = entry;
            }
          }
        }
        if (bestEntry) setActiveSection(bestEntry.target.id);
      },
      {
        rootMargin: "-80px 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#0A0A0A]/90 backdrop-blur-sm dark:backdrop-blur-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* LEFT: Desktop navigation (hidden on mobile) + mobile hamburger */}
        <div className="flex items-center gap-8 justify-start">
          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`relative pb-1 transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-[#BB1919] dark:text-[#BB1919] border-b-2 border-[#BB1919]"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white border-b-2 border-transparent"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger (visible only on mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition p-2 "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* CENTER – logo */}
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center bg-black text-white dark:bg-white dark:text-[#BB1919] transition-colors duration-300">
            SG
          </h1>
        </div>

        {/* RIGHT – social icons + theme toggle (all visible on desktop, socials only on mobile are inside sidebar) */}
        <div className="flex items-center gap-5 justify-end">
          <a
            href="https://github.com/surajgupta1122"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-gupta-11j45/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/919540962288"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-500 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden pointer-events-auto"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar panel */}
      <div
        className={`fixed top-0 left-0 z-[110] h-full w-64 bg-white dark:bg-[#0A0A0A] border-r border-zinc-200 dark:border-zinc-800 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
         // Prevents clicks inside the menu from closing it via the overlay
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end p-4 border-b border-zinc-200 dark:border-zinc-800">

          {/* Social icons inside sidebar (only visible on mobile) */}
        <div className="absolute left-0 flex items-center justify-start gap-4 pl-7">
          <a
            href="https://github.com/surajgupta1122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-gupta-11j45/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/919540962288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-500 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="relative flex items-center justify-center w-12 h-12 text-zinc-600 dark:text-zinc-400 active:bg-zinc-100 dark:active:bg-zinc-800 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full p-2 transition-colors pointer-events-auto duration-200"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`text-sm font-medium transition-colors duration-300 block py-2 ${
                activeSection === link.id
                  ? "text-[#BB1919] dark:text-[#BB1919] border-l-4 border-[#BB1919] pl-3"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white pl-4"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
