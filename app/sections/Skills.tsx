"use client";

import {
  SiHtml5,  SiNextdotjs, SiJavascript, SiReact, SiExpress,
  SiGithub, SiNodedotjs, SiMongodb, SiMysql
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa"; 

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JAVASCRIPT", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "NEXT.JS", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "REACT JS", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "GITHUB", icon: <SiGithub className="text-black dark:text-white" /> },
    { name: "NODE JS", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "EXPRESS JS", icon: <SiExpress className="text-black dark:text-white" /> },
    { name: "MONGODB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "MYSQL", icon: <SiMysql className="text-[#00758F]" /> },
  ];

  return (
    <section 
      id="skills" 
      className="bg-white dark:bg-[#0A0A0A] transition-colors duration-300 relative overflow-hidden py-2 px-6 max-sm:py-6 max-sm:px-4 font-sans mb-24 max-sm:mb-16">
      
      <div className="absolute top-50 right-0 w-64 h-64 max-sm:w-32 max-sm:h-32 bg-[#BB1919]/10 dark:bg-[#BB1919]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-sm:mb-10">
          <h2 className="text-5xl max-sm:text-3xl font-bold mb-4 uppercase tracking-tighter text-black dark:text-white">What I do</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed max-sm:px-2">
            I am a <span className="text-black dark:text-white font-semibold">full stack developer</span> focused on building modern web applications. 
            I specialize in creating clean, efficient, and scalable codebases.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start max-sm:gap-6">
          {/* Vertical Sidebar Title */}
          <div className="hidden md:flex flex-col items-center gap-4">
             <div className="h-10 w-[2px] bg-[#BB1919]" />
             <h3 className="[writing-mode:vertical-lr] rotate-180 text-black dark:text-white text-3xl font-bold tracking-widest uppercase">
               Skills
             </h3>
             <div className="flex-grow w-[2px] bg-zinc-800 dark:bg-zinc-800" />
          </div>

          {/* Grid of Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-sm:gap-3 w-full">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-zinc-100 dark:bg-[#151515] p-8 max-sm:p-5 rounded-lg flex flex-col items-center justify-center gap-6 max-sm:gap-4 border border-transparent dark:border-zinc-800 hover:border-[#BB1919]/50 transition-all duration-300 shadow-lg hover:-translate-y-2"
              >
                <div className="text-5xl max-sm:text-4xl transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 text-xs font-bold tracking-[0.2em] group-hover:text-black dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side Pagination Dots (Visual only) */}
          <div className="hidden lg:flex flex-col gap-4 py-10">
            <div className="w-1 h-63 rounded-full bg-[#BB1919]" />
          </div>
        </div>
      </div>
    </section>
  );
}