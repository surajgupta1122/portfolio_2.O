"use client";

import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Projects() {
  const [activePage, setActivePage] = useState(1);

  const projects = [
    {
      title: "CCTV Management System",
      description:
        "Built a full-stack CCTV management system with admin dashboard and secure authentication.",
      tech: ["React.js", "Tailwind", "MongoDB", "Express.js"],
      link: "https://cctv-management-jet.vercel.app/login",
      github: "https://github.com/surajgupta1122/CCTV-MANAGEMENT",
      image: "Project_icon/CCTV.jpg",
    },
    {
      title: "Job Search Platform (Jobion)",
      description:
        "Group project for a job search web application with responsive UI and filters.",
      tech: ["Next.js", "MySQL", "Tailwind", "TypeScript"],
      link: "https://jobion.in/",
      github: "https://github.com/surajgupta1122/jobion_next",
      image: "Project_icon/project-management.avif",
    },
    {
      title: "Online Learning Platform (SkillForge)",
      description:
        "Built an online learning platform with course management and responsive user interface.",
      tech: ["React.js", "Tailwind", "MySQL", "Express.js"],
      link: "#",
      github: "https://github.com/surajgupta1122/SkillForge",
      image: "Project_icon/Online_learning.jpg",
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing my projects and skills with a clean design.",
      tech: ["HTML", "Tailwind", "JavaScript"],
      link: "https://portfolio-website-alpha-three-68.vercel.app/",
      github: "https://github.com/surajgupta1122/portfolio-website",
      image: "Project_icon/Portfolio.jpg",
    },
    {
      title: "Portfolio 2.O",
      description:
        "Modern portfolio website highlighting my projects, skills, and web development work.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      link: "https://portfolio-2-o-beta.vercel.app/",
      github: "https://github.com/surajgupta1122/portfolio_2.O",
      image: "/Project_icon/Portfolio 2.O.png",
    },
  ];

  // Pagination: 3 projects on page 1, remaining projects on page 2
  const projectsPerPage = activePage === 1 ? 3 : projects.length - 3;
  const startIndex = activePage === 1 ? 0 : 3;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );
  const totalPages = 2;

  const nextPage = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };
  const prevPage = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  return (
    <section
      id="projects"
      className="bg-white dark:bg-[#0A0A0A] py-4 px-6 relative overflow-hidden transition-colors duration-300 mb-24 max-sm:py-6 max-sm:px-4 max-sm:mb-16"
    >
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-xl bg-[#BB1919]/5 dark:bg-[#BB1919]/10 blur-[100px] pointer-events-none transition-all duration-300 max-sm:w-64 max-sm:h-64" />

      <div className="max-w-6xl mx-auto">
        {/* Header area */}
        <div className="gap-4 mb-10 max-sm:mb-8">
          <div className="relative flex items-center justify-center w-full min-h-[100px]">
            <div className="text-center z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300 max-sm:text-2xl">
                Featured Projects
              </h2>
              <div className="flex items-center justify-center gap-4">
                <span className="h-[2px] w-8 md:w-12 bg-[#BB1919]"></span>
                <p className="text-[#BB1919] uppercase tracking-[0.3em] text-[12px] font-bold max-sm:text-[10px]">
                  My Creative Works
                </p>
                <span className="h-[2px] w-8 md:w-12 bg-[#BB1919]"></span>
              </div>
            </div>

            {/* Desktop pagination (hidden on mobile) */}
            <div className="absolute right-0 hidden md:flex items-center gap-3">
              <button
                onClick={prevPage}
                disabled={activePage === 1}
                className="p-3 rounded-xl border border-zinc-800 dark:border-zinc-700 text-black dark:text-white hover:bg-[#BB1919] hover:text-white 
                hover:border-transparent transition-all disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-zinc-300 dark:disabled:hover:border-zinc-700"
              >
                <ChevronLeft size={20} />
              </button>

              {[1, 2].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`w-10 h-10 rounded-xl font-mono text-sm font-bold transition-all duration-300 border ${
                    activePage === page
                      ? "bg-[#BB1919] border-transparent text-white scale-110 shadow-[0_0_15px_rgba(187,25,25,0.3)]"
                      : "bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-400"
                  }`}
                >
                  0{page}
                </button>
              ))}

              <button
                onClick={nextPage}
                disabled={activePage === totalPages}
                className="p-3 rounded-xl border border-zinc-800 dark:border-zinc-700 text-black dark:text-white hover:bg-[#BB1919] hover:text-white 
                hover:border-transparent transition-all disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-zinc-300 dark:disabled:hover:border-zinc-700"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Main content: vertical sidebar + project grid */}
        <div className="flex flex-col md:flex-row gap-12 items-start max-sm:gap-8">
          {/* Vertical sidebar (desktop only) */}
          <div className="hidden md:flex flex-col items-center gap-6">
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#BB1919] to-transparent" />
            <h3 className="[writing-mode:vertical-lr] rotate-180 text-black dark:text-white transition-colors duration-300 text-3xl font-black tracking-[0.2em] uppercase ">
              Works
            </h3>
            <div className="flex-grow w-[2px] bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="w-full">
            {/* Project cards */}
            {activePage === 1 ? (
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 max-sm:gap-5 max-sm:mb-6">
                {currentProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 max-sm:gap-5 max-sm:mb-6">
                  {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                  {/* Placeholders: only if less than 3 items are shown */}
                  {Array.from({ length: 3 - currentProjects.length }).map(
                    (_, i) => (
                      <div key={`placeholder-${i}`} className="invisible">
                        {/* Use any project structure to keep height – index 0 is fine */}
                        <ProjectCard project={projects[0]} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Mobile pagination (visible only on small screens) */}
            <div className="flex md:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={prevPage}
                disabled={activePage === 1}
                className="p-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-black dark:text-white hover:bg-[#BB1919] hover:text-white hover:border-transparent transition-all disabled:opacity-20 disabled:hover:bg-transparent"
              >
                <ChevronLeft size={20} />
              </button>

              {[1, 2].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`w-10 h-10 rounded-xl font-mono text-sm font-bold transition-all duration-300 border ${
                    activePage === page
                      ? "bg-[#BB1919] border-transparent text-white scale-110 shadow-[0_0_15px_rgba(187,25,25,0.3)]"
                      : "bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-400"
                  }`}
                >
                  0{page}
                </button>
              ))}

              <button
                onClick={nextPage}
                disabled={activePage === totalPages}
                className="p-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-black dark:text-white hover:bg-[#BB1919] hover:text-white hover:border-transparent transition-all disabled:opacity-20 disabled:hover:bg-transparent"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className="group relative bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 
    rounded-3xl overflow-hidden hover:border-[#BB1919]/40 transition-all duration-500 shadow-lg dark:shadow-lg"
    >
      <div className="relative h-48 max-sm:h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8 max-sm:p-5">
        <div className="flex justify-between items-start mb-4 max-sm:mb-3">
          <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-[#BB1919] transition-colors duration-300 mb-0 max-sm:text-lg">
            {project.title}
          </h4>
          <div className="flex gap-3">
            <a
              href={project.github}
              className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={project.link}
              className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 "
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 h-auto overflow-hidden transition-all duration-300 max-sm:text-xs max-sm:mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50
               px-3 py-1 rounded-full border border-zinc-700 group-hover:border-[#BB1919]/30 transition-all duration-300 max-sm:text-[9px] max-sm:px-2 max-sm:py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
