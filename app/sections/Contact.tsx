"use client";

import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-[#0A0A0A] py-2 px-6 max-sm:py-6 max-sm:px-4 relative overflow-hidden transition-colors duration-300 mb-24 max-sm:mb-16"
    >
      {/* Background Red Glow – scaled down on mobile */}
      <div className="absolute top-0 right-0 w-96 h-96 max-sm:w-64 max-sm:h-64 rounded-xl bg-[#BB1919]/5 dark:bg-[#BB1919]/10 blur-[100px] pointer-events-none transition-all duration-300" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 max-sm:mb-8">
          <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-black dark:text-white mb-6 max-sm:mb-4 uppercase tracking-tight transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#BB1919]"></span>
            <p className="text-[#BB1919] uppercase tracking-[0.3em] text-xs font-bold max-sm:text-[10px]">
              Let's Build Something Together
            </p>
            <span className="h-[2px] w-12 bg-[#BB1919]"></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-sm:gap-8 items-start">
          {/* Vertical Sidebar (hidden on mobile) */}
          <div className="hidden md:flex flex-col items-center gap-6">
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#BB1919] to-transparent" />
            <h3 className="[writing-mode:vertical-lr] rotate-180 text-black dark:text-white text-3xl font-black tracking-[0.2em] uppercase transition-colors duration-300">
              Contact
            </h3>
            <div className="flex-grow w-[2px] bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300" />
          </div>

          <div className="grid lg:grid-cols-5 gap-6 max-sm:gap-4 w-full">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-2 space-y-4 max-sm:space-y-3">
              <ContactCard
                icon={<Mail size={18} />}
                label="Email Me"
                value="sg8121094@gmail.com"
              />
              <ContactCard
                icon={<Phone size={18} />}
                label="Call Me"
                value="+91 9540962288"
              />
              <ContactCard
                icon={<MapPin size={18} />}
                label="Location"
                value="Noida, Uttar Pradesh"
              />

              {/* Social Links */}
              <div className="p-6 max-sm:p-4 rounded-3xl hover:border-[#BB1919] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                <p className="text-zinc-500 dark:text-zinc-500 text-[11px] font-bold uppercase tracking-[0.3em] mb-6 max-sm:mb-4 transition-colors duration-300">
                  Social Profiles
                </p>
                <div className="flex gap-4">
                  <SocialIcon icon={<FaGithub size={20} />} href="https://github.com/surajgupta1122" />
                  <SocialIcon icon={<FaLinkedin size={20} />} href="https://www.linkedin.com/in/suraj-gupta-11j45/" />
                  <SocialIcon icon={<MessageSquare size={20} />} href="https://wa.me/919540962288" />
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 max-sm:p-5 rounded-3xl hover:border-[#BB1919] space-y-6 max-sm:space-y-4 transition-colors duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6 max-sm:gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest ml-1 transition-colors duration-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-2xl px-6 py-4 max-sm:px-4 max-sm:py-3 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:border-[#BB1919]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest ml-1 transition-colors duration-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-2xl px-6 py-4 max-sm:px-4 max-sm:py-3 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:border-[#BB1919]/50 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest ml-1 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-2xl px-6 py-4 max-sm:px-4 max-sm:py-3 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:border-[#BB1919]/50 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#BB1919] hover:bg-[#991515] disabled:opacity-70 text-white font-bold py-4 max-sm:py-3 rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-lg shadow-[#BB1919]/20"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ContactCard and SocialIcon remain exactly the same as before
function ContactCard({ icon, label, value, href }: any) {
  const content = (
    <div className="flex items-center gap-6 group max-sm:gap-4">
      <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-[#BB1919] group-hover:bg-[#BB1919] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.3em] mb-1 transition-colors duration-300">
          {label}
        </p>
        <p className="text-black dark:text-white font-semibold group-hover:text-[#BB1919] transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div className="p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-[#BB1919]/40 transition-all duration-500">
      {href ? <a href={href}>{content}</a> : content}
    </div>
  );
}

function SocialIcon({ icon, href }: any) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-[#BB1919] hover:text-white transition-all duration-500 border border-zinc-200 dark:border-zinc-700 hover:border-transparent"
    >
      {icon}
    </a>
  );
}