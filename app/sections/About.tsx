"use client";

import { Calendar, MapPin, Mail, Phone, Cake, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-2 px-6 pl-18 max-sm:px-4 max-sm:pl-4 max-sm:py-6 bg-white dark:bg-[#0A0A0A] transition-colors duration-300 overflow-hidden mb-24 max-sm:mb-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Left Side: Content */}
          <div className="order-1">
            {/* 👇 Added max-sm:text-center to center the whole header */}
            <header className="mb-8 max-sm:mb-6 max-sm:text-center">
              <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-black dark:text-white transition-colors duration-300 mb-2">
                About Me
              </h2>
              {/* 👇 Added max-sm:justify-center to center the flex items */}
              <div className="flex items-center gap-4 max-sm:justify-center">
                <span className="h-[2px] w-12 bg-[#BB1919] transition-colors duration-300"></span>
                <p className="text-[#BB1919] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold transition-colors duration-300">
                  Full Stack Developer
                </p>
                <span className="h-[2px] w-12 bg-[#BB1919] transition-colors duration-300"></span>
                {/* second red line for balance – I added it because the original had only one, but the pattern usually has two; if you want only one, remove this span */}
              </div>
            </header>

            {/* ⬇️ Mobile image – only visible on small screens, right after the header ⬇️ */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="relative group m-4">
                <div className="absolute -inset-2 bg-black dark:bg-[#BB1919]/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-all duration-500"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-700 dark:border-zinc-800 shadow-2xl transition-colors duration-300">
                  <img
                    src="/About.png"
                    alt="Suraj Gupta"
                    className="w-full max-w-[280px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-sm font-medium">Coding my way through 2026</p>
                  </div>
                </div>
                {/* Floating badge for mobile – simplified */}
                <div className="absolute -bottom-4 -left-4 z-20 bg-white dark:bg-zinc-900 p-3 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
                  <p className="text-[#BB1919] font-bold text-xl">1+</p>
                  <p className="text-[9px] uppercase tracking-tighter text-zinc-500 dark:text-zinc-400">Years Exp.</p>
                </div>
              </div>
            </div>
            {/* ⬆️ End mobile image ⬆️ */}

            <div className="text-zinc-700 dark:text-zinc-400 space-y-4 max-sm:space-y-3 transition-colors duration-300">
              <p className="leading-relaxed italic border-l-4 border-[#BB1919] pl-4 py-2 bg-zinc-50 dark:bg-zinc-900/30 transition-all duration-300">
                Hello! 👋 I&apos;m Suraj Gupta, a creative web developer who loves
                bringing designs to life through clean, performant code.
              </p>
              <p className="leading-relaxed transition-colors duration-300">
                I specialize in crafting responsive websites that perform smoothly. 
                With hands-on experience in <span className="text-black dark:text-white font-semibold transition-colors duration-300">Next.js and Express.js</span>, 
                I am focused on building scalable web applications and solving complex problems.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-sm:mt-6 max-sm:gap-3 transition-colors duration-300">
              <InfoItem icon={<Calendar size={18} />} label="Birth date" value="11 Nov, 2002" />
              <InfoItem icon={<MapPin size={18} />} label="City" value="Uttar Pradesh" />
              <InfoItem icon={<Mail size={18} />} label="Email" value="sg8121094@gmail.com"/>
              <InfoItem icon={<Phone size={18} />} label="Phone" value="+91 9540962288"/>
              <InfoItem icon={<Cake size={18} />} label="Age" value="23" />
              <InfoItem icon={<Briefcase size={18} />} label="Freelance" value="Available" highlight />
            </div>

            <div className="mt-10 max-sm:mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#BB1919] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-8 py-4 max-sm:px-6 max-sm:py-3 rounded-full transition-all duration-300 font-semibold shadow-lg shadow-[#BB1919]/20"
              >
                Get in touch
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Side: Image – visible only on desktop (lg and above) */}
          <div className="order-2 hidden lg:flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 max-sm:-inset-1 bg-black dark:bg-[#BB1919]/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-all duration-500"></div>
              
              <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-700 dark:border-zinc-800 shadow-2xl transition-colors duration-300">
                <img
                  src="/About.png"
                  alt="Suraj Gupta"
                  className="w-full max-w-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm font-medium">Coding my way through 2026</p>
                </div>
              </div>

              {/* Floating Badge (desktop) */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 hidden sm:block transition-colors duration-300 hover:border-[#BB1919] hover:text-white cursor-pointer">
                <p className="text-[#BB1919] font-bold text-2xl transition-colors duration-300">1+</p>
                <p className="text-[10px] uppercase tracking-tighter text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                  Years Experience
                </p>
                <p className="text-[9px] text-zinc-500 dark:text-zinc-500 transition-colors duration-300 hover:text-[#BB1919]">
                  Open to work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value, highlight = false }: any) {
  return (
    <div className="group p-3 rounded-xl border border-zinc-500 dark:border-zinc-800/50 hover:border-[#BB1919]/30 bg-zinc-50/50 dark:bg-zinc-900/30 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[#BB1919] transition-colors duration-300">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-0.5 transition-colors duration-300">
            {label}
          </p>
          <p
            className={`text-sm font-semibold truncate transition-colors duration-300 group-hover:text-[#BB1919] ${
              highlight ? "text-[#BB1919]" : "text-zinc-800 dark:text-zinc-200"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}