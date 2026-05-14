"use client";

import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "IGNOU",
      location: "East Delhi, India",
      duration: "2023 — 2026",
      description:
        "Currently pursuing (BCA) with focus on web development, programming, software engineering, and modern computer technologies.",
      achievements: ["Dean's List 2023", "Lead Organizer of Tech Fest"],
    },
    {
      degree: "Senior Secondary Education (XII)",
      institution: "Vanasthali Public School",
      location: "East Delhi, India",
      duration: "2022 — 2023",
      description:
        "Completed higher secondary education with focus on communication skills, logical reasoning, and overall academic excellence.",
      achievements: ["Top 5% of Class", "Mathematics Excellence Award"],
    },
    {
      degree: "Secondary Education (X)",
      institution: "Vanasthali Public School",
      location: "East Delhi, India",
      duration: "2020 — 2021",
      description:
        "Completed secondary education with focus on academic growth, discipline, and foundational learning across core subjects.",
      achievements: ["Top 5% of Class", "Mathematics Excellence Award"],
    },
  ];

  return (
    <section
      id="education"
      className="bg-white dark:bg-[#0A0A0A] py-2 px-6 max-sm:py-6 max-sm:px-4 relative overflow-hidden transition-colors duration-300 mb-24 max-sm:mb-16"
    >
      {/* Background Red Glow – scaled down on mobile */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-xl w-72 h-72 max-sm:w-48 max-sm:h-48 bg-[#BB1919]/5 dark:bg-[#BB1919]/10 blur-[100px] pointer-events-none transition-all duration-300" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 max-sm:mb-8">
          <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-black dark:text-white mb-6 max-sm:mb-4 uppercase tracking-tight transition-colors duration-300">
            Education
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#BB1919]"></span>
            <p className="text-[#BB1919] uppercase tracking-[0.3em] text-xs font-bold max-sm:text-[10px]">
              My Academic Journey
            </p>
            <span className="h-[2px] w-12 bg-[#BB1919]"></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-sm:gap-8 items-start">
          {/* Vertical Sidebar – hidden on mobile */}
          <div className="hidden md:flex flex-col items-center gap-6">
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#BB1919] to-transparent" />
            <h3 className="[writing-mode:vertical-lr] rotate-180 text-black dark:text-white text-3xl font-black tracking-[0.2em] uppercase transition-colors duration-300">
              History
            </h3>
            <div className="flex-grow w-[2px] bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300" />
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-sm:gap-6 w-full">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group hover:scale-105 max-sm:hover:scale-[1.02] transition-transform duration-300 relative bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 
                dark:border-zinc-800 duration-400 p-4 md:p-6 rounded-3xl hover:border-[#BB1919]/40 duration-400 shadow-lg dark:shadow-xl"
              >
                {/* Degree and Institution */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4 transition-colors duration-400 max-sm:mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-[#BB1919] transition-colors duration-400 mb-1 max-sm:text-base">
                      {edu.degree}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-300 font-medium flex items-center gap-1 transition-colors duration-400 max-sm:text-sm">
                      <GraduationCap size={18} className="text-[#BB1919]" />
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-zinc-500 dark:text-zinc-500 text-sm font-mono gap-1 transition-colors duration-400 max-sm:text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 mb-4 transition-colors duration-400 max-sm:text-xs max-sm:mb-3">
                  {edu.description}
                </p>

                {/* Achievement Tags */}
                <div className="flex flex-wrap gap-3 max-sm:gap-2">
                  {edu.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#BB1919] bg-[#BB1919]/5 px-4 py-2 rounded-xl border border-[#BB1919]/20 transition-all duration-300 max-sm:text-[9px] max-sm:px-3 max-sm:py-1.5"
                    >
                      <Award size={14} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}