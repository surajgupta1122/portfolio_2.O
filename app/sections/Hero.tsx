import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-[#0A0A0A] text-black dark:text-white flex items-center px-6 pt-24 transition-colors duration-300 mb-24 max-sm:mb-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Image */}
        <div className="relative flex justify-center max-lg:mb-4">
          <div className="w-[40%] h-[100%] rounded-full bg-[#BB1919]/20 blur-3xl absolute max-lg:w-[60%] max-lg:h-[60%] max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2" />
          <div className="relative w-[58%] h-[58%] rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 overflow-hidden transition-colors duration-300 ">
            <img
              src="/Portfolioimg.png"
              alt="profile"
              className="w-[full] h-[full] object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col mb-18 max-lg:text-center max-lg:items-center">
          <p className="text-[#BB1919] uppercase tracking-[0.3em] text-sm mb-6">
            Frontend & Full Stack Developer
          </p>

          <h1 className="text-3xl md:text-6xl font-bold font-inter">
            Turning Vision Into Reality With Code And Design.
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-6 max-w-xl transition-colors duration-300 max-lg:mx-auto">
            I build responsive, scalable, and modern web applications using
            Next.js, React, TypeScript, and Tailwind CSS with a strong focus on
            UI/UX and performance.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 max-lg:justify-center">
            <a
             href="/Suraj_Resume.pdf"
            className="bg-[#BB1919] hover:bg-[#991515] transition px-6 py-3 rounded-2xl flex items-center gap-2 font-medium text-white">
              Resume
              <Download size={18} />
            </a>

            <a 
            href="#contact"
            className="border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 transition px-6 py-3 rounded-2xl flex items-center gap-2 font-medium text-black dark:text-white">
              Contact
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}