"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Code2, Download, ExternalLink, ChevronRight, Terminal, Moon, Sun, Award } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // UPDATE SOCIAL LINKS HERE: Change these URLs to your actual social media profiles
  const SOCIAL_LINKS = {
    linkedin: "https://linkedin.com/in/shivamsinghbhati13",
    github: "https://github.com/shivam200413",
    leetcode: "https://leetcode.com/u/shivambhati290/",
    codechef: "https://www.codechef.com/users/shivambhati001"
  };

  // UPDATE PROJECT REPOSITORY LINKS HERE:
  const PROJECT_LINKS = {
    buddyup: "https://github.com/shivam200413/buddyup-web",
    cloudlab: "https://github.com/shivam200413/cloudlab",
    honeyphish: "https://github.com/shivam200413/HoneyPhish"
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-sans bg-[#faf9f6] dark:bg-[#0a0a0a] text-[#111111] dark:text-[#f5f5f5] relative selection:bg-[#ff6b6b] selection:text-white transition-colors duration-300">
      
      {/* Global Timeline Line */}
      <div className="hidden lg:block fixed left-[4rem] top-0 bottom-0 w-px bg-[#eaeaea] dark:bg-[#333] z-0 transition-colors duration-300"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#eaeaea] dark:border-[#333] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:pl-[8rem] lg:pr-12 h-20 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight flex items-center gap-2 text-[#111] dark:text-[#fff]">
            <Terminal className="w-5 h-5 text-[#ff6b6b]" /> &lt;Shivam /&gt;
          </span>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[#444] dark:text-[#aaa]">
            <a href="#start" className="hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-colors">Start /></a>
            <a href="#work" className="hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-colors">Work /></a>
            <a href="#experience" className="hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-colors">Experience /></a>
            <a href="#skills" className="hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-colors">Skills /></a>
            <a href="#about" className="hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-colors">Class /></a>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-[#f0eee9] dark:bg-[#222] text-[#444] dark:text-[#aaa] hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] dark:bg-white text-white dark:text-[#111] text-sm font-bold rounded hover:bg-[#ff6b6b] dark:hover:bg-[#ff6b6b] dark:hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section id="start" className="relative max-w-[1400px] mx-auto px-6 lg:pl-[8rem] lg:pr-12 min-h-screen flex items-center pt-20">
          {/* Timeline Node */}
          <div className="hidden lg:flex absolute left-[-0.45rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#faf9f6] dark:bg-[#0a0a0a] border-4 border-[#ff6b6b] z-10 items-center justify-center transition-colors duration-300"></div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
            <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-block text-[#ff6b6b] font-mono font-bold tracking-widest uppercase text-sm mb-2">
                Init />
              </div>
              <h1 className="text-6xl lg:text-[5.5rem] font-black tracking-tighter text-[#111] dark:text-[#fff] leading-[1.05]">
                Design.<br />
                Develop.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53]">Deploy.</span>
              </h1>
              <p className="text-xl text-[#444] dark:text-[#bbb] max-w-2xl leading-relaxed font-medium mt-6">
                Hi, I'm <strong className="text-[#111] dark:text-white font-bold">Shivam Singh Bhati</strong>. I engineer scalable full-stack architectures and build intelligent, AI-driven web applications.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] font-bold rounded hover:bg-[#ff6b6b] dark:hover:bg-[#ff6b6b] dark:hover:text-white transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                  Explore Work <ArrowUpRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-4 border-l-2 border-[#eaeaea] dark:border-[#333] pl-6 transition-colors duration-300">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 text-[#555] dark:text-[#aaa] hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] hover:bg-[#f0eee9] dark:hover:bg-[#222] rounded transition-all">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-[#555] dark:text-[#aaa] hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] hover:bg-[#f0eee9] dark:hover:bg-[#222] rounded transition-all">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 text-[#555] dark:text-[#aaa] hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] hover:bg-[#f0eee9] dark:hover:bg-[#222] rounded transition-all">
                    <Code2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative w-full max-w-sm aspect-[4/5] group perspective-1000">
                <div className="absolute inset-0 bg-[#ff6b6b] rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#111] dark:border-[#333] bg-white dark:bg-[#111] z-10 transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2 duration-500">
                  <Image 
                    src="/my_pic.png" 
                    alt="Shivam Singh Bhati" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects / Work */}
        <section id="work" className="relative max-w-[1400px] mx-auto px-6 lg:pl-[8rem] lg:pr-12 py-32 border-t border-[#eaeaea] dark:border-[#333] transition-colors duration-300">
          {/* Timeline Node */}
          <div className="hidden lg:flex absolute left-[-0.45rem] top-32 w-4 h-4 rounded-full bg-[#faf9f6] dark:bg-[#0a0a0a] border-4 border-[#ff6b6b] z-10 transition-colors duration-300"></div>

          <div className="mb-24">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111] dark:text-white flex items-center gap-4">
              Work <span className="text-[#ff6b6b] font-mono text-2xl font-bold">/></span>
            </h2>
            <p className="text-[#444] dark:text-[#aaa] mt-4 text-xl font-medium">Selected full-stack and AI-driven projects.</p>
          </div>

          <div className="space-y-40">
            
            {/* ------------------------------------------- */}
            {/* UPDATE PROJECTS HERE                        */}
            {/* Duplicate or modify the blocks below        */}
            {/* ------------------------------------------- */}
            
            {/* Project 1 */}
            <div className="relative group">
              <div className="absolute -left-4 md:-left-12 -top-12 text-[8rem] md:text-[12rem] font-black text-[#f0eee9] dark:text-[#1a1a1a] z-0 leading-none select-none transition-transform group-hover:-translate-y-4 duration-700">
                01
              </div>
              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-[#111] aspect-[16/10] flex items-center justify-center relative group-hover:shadow-[#ff6b6b]/20 transition-all duration-500">
                  <Image src="/buddyup.png" alt="BuddyUp Architecture" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="lg:col-span-5 space-y-6 lg:pl-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111] dark:text-white tracking-tight">BuddyUp</h3>
                  <p className="text-[#333] dark:text-[#bbb] leading-relaxed text-lg font-medium">
                    A hyper-local activity-discovery Progressive Web App with live presence tracking. Broadcasts locations across cities using geohash-sharded Supabase Realtime channels. Implemented a flare-based invite system with PostGIS proximity queries and a Gemini-powered AI assistant.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "Supabase", "PostGIS", "Leaflet", "Gemini API"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-[#f0eee9] dark:bg-[#222] text-[#333] dark:text-[#ddd] text-xs font-bold rounded tracking-wide border border-transparent dark:border-[#444]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a href={PROJECT_LINKS.buddyup} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] font-bold rounded hover:bg-[#ff6b6b] dark:hover:bg-[#ff6b6b] dark:hover:text-white transition-all shadow-md hover:-translate-y-1">
                      Source Code <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative group">
              <div className="absolute right-0 lg:-right-12 -top-12 text-[8rem] md:text-[12rem] font-black text-[#f0eee9] dark:text-[#1a1a1a] z-0 leading-none select-none transition-transform group-hover:-translate-y-4 duration-700 text-right">
                02
              </div>
              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 lg:order-2 rounded-2xl overflow-hidden shadow-2xl border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-[#111] aspect-[16/10] flex items-center justify-center relative group-hover:shadow-[#ff6b6b]/20 transition-all duration-500">
                  <Image src="/cloudlab.png" alt="CloudLab Architecture" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="lg:col-span-5 lg:order-1 space-y-6 lg:pr-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111] dark:text-white tracking-tight">CloudLab</h3>
                  <p className="text-[#333] dark:text-[#bbb] leading-relaxed text-lg font-medium">
                    A self-hosted, browser-based coding workspace platform built on AWS Free Tier. It dynamically provisions isolated code-server (VS Code) environments via Docker containers and includes a real-time dashboard for live CPU/RAM usage tracking. Secured by JWT authentication and an Nginx reverse proxy.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Next.js", "Node.js", "Docker", "AWS EC2", "Nginx"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-[#f0eee9] dark:bg-[#222] text-[#333] dark:text-[#ddd] text-xs font-bold rounded tracking-wide border border-transparent dark:border-[#444]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a href={PROJECT_LINKS.cloudlab} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] font-bold rounded hover:bg-[#ff6b6b] dark:hover:bg-[#ff6b6b] dark:hover:text-white transition-all shadow-md hover:-translate-y-1">
                      Source Code <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative group">
              <div className="absolute -left-4 md:-left-12 -top-12 text-[8rem] md:text-[12rem] font-black text-[#f0eee9] dark:text-[#1a1a1a] z-0 leading-none select-none transition-transform group-hover:-translate-y-4 duration-700">
                03
              </div>
              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-[#111] aspect-[16/10] flex items-center justify-center relative group-hover:shadow-[#ff6b6b]/20 transition-all duration-500">
                  <Image src="/honeyphish.png" alt="HoneyPhish Simulation" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="lg:col-span-5 space-y-6 lg:pl-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111] dark:text-white tracking-tight">HoneyPhish</h3>
                  <p className="text-[#333] dark:text-[#bbb] leading-relaxed text-lg font-medium">
                    A gamified phishing-simulation platform delivering real-time analytics on key security metrics. To enhance simulation realism, I integrated the OpenAI API for generating dynamic, highly adaptive phishing scenarios based on user context.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "TypeScript", "Three.js", "OpenAI API"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-[#f0eee9] dark:bg-[#222] text-[#333] dark:text-[#ddd] text-xs font-bold rounded tracking-wide border border-transparent dark:border-[#444]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a href={PROJECT_LINKS.honeyphish} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] font-bold rounded hover:bg-[#ff6b6b] dark:hover:bg-[#ff6b6b] dark:hover:text-white transition-all shadow-md hover:-translate-y-1">
                      Source Code <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Experience */}
        <section id="experience" className="relative max-w-[1400px] mx-auto px-6 lg:pl-[8rem] lg:pr-12 py-32 border-t border-[#eaeaea] dark:border-[#333] transition-colors duration-300">
          {/* Timeline Node */}
          <div className="hidden lg:flex absolute left-[-0.45rem] top-32 w-4 h-4 rounded-full bg-[#faf9f6] dark:bg-[#0a0a0a] border-4 border-[#ff6b6b] z-10 transition-colors duration-300"></div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111] dark:text-white flex items-center gap-4 mb-20">
            Experience <span className="text-[#ff6b6b] font-mono text-2xl font-bold">/></span>
          </h2>
          
          <div className="space-y-12">
            
            {/* ------------------------------------------- */}
            {/* UPDATE EXPERIENCE HERE                      */}
            {/* ------------------------------------------- */}
            
            <div className="group relative bg-white dark:bg-[#111] border border-[#eaeaea] dark:border-[#333] p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <div className="inline-block px-3 py-1 bg-[#f0eee9] dark:bg-[#222] text-[#ff6b6b] font-mono text-sm font-bold rounded mb-3">Feb 2025 – Mar 2025</div>
                  <div className="text-[#111] dark:text-[#fff] font-black text-xl mb-1">EY GDS & AICTE</div>
                  <div className="text-[#666] dark:text-[#999] text-sm font-bold">Remote</div>
                </div>
                <div className="lg:col-span-9 border-l-2 border-[#f0eee9] dark:border-[#333] pl-6 lg:pl-8">
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-4">Full Stack Web Development Intern</h3>
                  <ul className="space-y-4 text-[#444] dark:text-[#ccc] font-medium leading-relaxed text-lg">
                    <li className="flex gap-4">
                      <ChevronRight className="w-6 h-6 shrink-0 text-[#ff6b6b] mt-0.5" /> 
                      <span>Built Yum Finder, a food delivery platform using Node.js, Express.js, and MongoDB, implementing real-time order tracking end-to-end.</span>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-6 h-6 shrink-0 text-[#ff6b6b] mt-0.5" /> 
                      <span>Designed and documented RESTful APIs and optimized MongoDB queries to reliably handle concurrent user requests.</span>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-6 h-6 shrink-0 text-[#ff6b6b] mt-0.5" /> 
                      <span>Collaborated in a 3-member Agile team, shipping features iteratively across a 6-week sprint cycle.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-[#111] border border-[#eaeaea] dark:border-[#333] p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <div className="inline-block px-3 py-1 bg-[#f0eee9] dark:bg-[#222] text-[#ff6b6b] font-mono text-sm font-bold rounded mb-3">Jan 2025 – Feb 2025</div>
                  <div className="text-[#111] dark:text-[#fff] font-black text-xl mb-1">TechSaksham</div>
                  <div className="text-[#666] dark:text-[#999] text-sm font-bold">Microsoft & SAP</div>
                </div>
                <div className="lg:col-span-9 border-l-2 border-[#f0eee9] dark:border-[#333] pl-6 lg:pl-8">
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-4">AI Intern</h3>
                  <ul className="space-y-4 text-[#444] dark:text-[#ccc] font-medium leading-relaxed text-lg">
                    <li className="flex gap-4">
                      <ChevronRight className="w-6 h-6 shrink-0 text-[#ff6b6b] mt-0.5" /> 
                      <span>Developed an AI image synthesis tool using Stable Diffusion and ComfyUI for automated visual content generation.</span>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-6 h-6 shrink-0 text-[#ff6b6b] mt-0.5" /> 
                      <span>Improved generation pipeline efficiency through prompt engineering and workflow configuration.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Skills & Certifications Section */}
        <section id="skills" className="relative max-w-[1400px] mx-auto px-6 lg:pl-[8rem] lg:pr-12 py-32 border-t border-[#eaeaea] dark:border-[#333] transition-colors duration-300">
          {/* Timeline Node */}
          <div className="hidden lg:flex absolute left-[-0.45rem] top-32 w-4 h-4 rounded-full bg-[#faf9f6] dark:bg-[#0a0a0a] border-4 border-[#ff6b6b] z-10 transition-colors duration-300"></div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111] dark:text-white flex items-center gap-4 mb-16">
            Skills <span className="text-[#ff6b6b] font-mono text-2xl font-bold">/></span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-[#111] dark:text-white border-b-2 border-[#ff6b6b] inline-block pb-1">Technical Stack</h3>
              
              {/* ------------------------------------------- */}
              {/* UPDATE SKILLS HERE                          */}
              {/* ------------------------------------------- */}
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-[#333] dark:text-[#ccc] mb-4">Languages</h4>
                  <div className="flex flex-wrap gap-3">
                    {["C", "C++", "Java", "JavaScript", "SQL"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#eaeaea] dark:border-[#333] rounded-lg font-semibold text-[#111] dark:text-[#eee] shadow-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#333] dark:text-[#ccc] mb-4">Web & Frameworks</h4>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "REST APIs"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#eaeaea] dark:border-[#333] rounded-lg font-semibold text-[#111] dark:text-[#eee] shadow-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#333] dark:text-[#ccc] mb-4">Databases & Cloud</h4>
                  <div className="flex flex-wrap gap-3">
                    {["MongoDB", "MySQL", "SQLite", "Supabase", "PostGIS", "AWS (EC2, S3, Lambda)", "Vercel", "Netlify"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#eaeaea] dark:border-[#333] rounded-lg font-semibold text-[#111] dark:text-[#eee] shadow-sm">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#333] dark:text-[#ccc] mb-4">Tools & Concepts</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Git", "Linux", "Docker", "VS Code", "Data Structures & Algorithms", "OOP", "Agile"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-[#eaeaea] dark:border-[#333] rounded-lg font-semibold text-[#111] dark:text-[#eee] shadow-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-[#111] dark:text-white border-b-2 border-[#ff6b6b] inline-block pb-1">Certifications</h3>
              
              {/* ------------------------------------------- */}
              {/* UPDATE CERTIFICATIONS HERE                    */}
              {/* ------------------------------------------- */}
              
              <div className="space-y-6">
                
                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-[#eaeaea] dark:border-[#333] shadow-sm">
                  <div className="bg-[#f0eee9] dark:bg-[#222] p-3 rounded-lg">
                    <Award className="w-8 h-8 text-[#ff6b6b]" />
                  </div>
                  <div>
                    <h4 className="text-[#111] dark:text-white font-bold text-lg mb-1">Full Stack Web Development</h4>
                    <p className="text-[#555] dark:text-[#aaa] font-medium">EY GDS & AICTE (Edunet Foundation), 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-[#eaeaea] dark:border-[#333] shadow-sm">
                  <div className="bg-[#f0eee9] dark:bg-[#222] p-3 rounded-lg">
                    <Award className="w-8 h-8 text-[#ff6b6b]" />
                  </div>
                  <div>
                    <h4 className="text-[#111] dark:text-white font-bold text-lg mb-1">AI and Machine Learning Fundamentals</h4>
                    <p className="text-[#555] dark:text-[#aaa] font-medium">Microsoft & SAP, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-[#eaeaea] dark:border-[#333] shadow-sm">
                  <div className="bg-[#f0eee9] dark:bg-[#222] p-3 rounded-lg">
                    <Award className="w-8 h-8 text-[#ff6b6b]" />
                  </div>
                  <div>
                    <h4 className="text-[#111] dark:text-white font-bold text-lg mb-1">1Z0-811: Java Foundations Associate</h4>
                    <p className="text-[#555] dark:text-[#aaa] font-medium">Oracle</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Code / About Section */}
        <section id="about" className="relative max-w-[1400px] mx-auto px-6 lg:pl-[8rem] lg:pr-12 py-32 border-t border-[#eaeaea] dark:border-[#333] transition-colors duration-300">
          {/* Timeline Node */}
          <div className="hidden lg:flex absolute left-[-0.45rem] top-32 w-4 h-4 rounded-full bg-[#faf9f6] dark:bg-[#0a0a0a] border-4 border-[#ff6b6b] z-10 transition-colors duration-300"></div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111] dark:text-white flex items-center gap-4 mb-16">
            Class <span className="text-[#ff6b6b] font-mono text-2xl font-bold">/></span>
          </h2>
          
          <div className="bg-[#ffffff] dark:bg-[#1e1e1e] border border-[#eaeaea] dark:border-[#333] rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
            <div className="bg-[#f0eee9] dark:bg-[#2d2d2d] px-6 py-4 flex items-center gap-2 border-b border-[#eaeaea] dark:border-[#333] transition-colors duration-300">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
              <div className="ml-4 text-sm font-mono text-[#888] dark:text-[#aaa] font-bold">shivam.js</div>
            </div>
            
            <div className="p-6 md:p-10 font-mono text-sm md:text-base overflow-x-auto leading-loose text-[#333] dark:text-[#d4d4d4]">
              <div><span className="text-[#e23636] dark:text-[#c586c0] font-bold">class</span> <span className="text-[#d88c00] dark:text-[#4ec9b0] font-bold">ShivamBhati</span> {'{'}</div>
              
              <div className="pl-8 text-[#888] dark:text-[#6a9955] italic mb-2">// Currently pursuing B.Tech in Electronics and Computer Engineering at VIT Chennai</div>
              <div className="pl-8 text-[#888] dark:text-[#6a9955] italic mb-4">// Oracle Certified in Java Foundations | CGPA: 8.02/10</div>

              <div className="pl-8"><span className="text-[#005cc5] dark:text-[#569cd6] font-bold">constructor</span>() {'{'}</div>
              <div className="pl-16"><span className="text-[#005cc5] dark:text-[#569cd6]">this</span>.<span className="text-[#d88c00] dark:text-[#9cdcfe]">name</span> <span className="text-[#e23636] dark:text-[#d4d4d4]">=</span> <span className="text-[#032f62] dark:text-[#ce9178]">'Shivam Singh Bhati'</span>;</div>
              <div className="pl-16"><span className="text-[#005cc5] dark:text-[#569cd6]">this</span>.<span className="text-[#d88c00] dark:text-[#9cdcfe]">email</span> <span className="text-[#e23636] dark:text-[#d4d4d4]">=</span> <span className="text-[#032f62] dark:text-[#ce9178]">'shivambhati290@gmail.com'</span>;</div>
              <div className="pl-16"><span className="text-[#005cc5] dark:text-[#569cd6]">this</span>.<span className="text-[#d88c00] dark:text-[#9cdcfe]">problemSolving</span> <span className="text-[#e23636] dark:text-[#d4d4d4]">=</span> <span className="text-[#032f62] dark:text-[#ce9178]">'250+ LeetCode & CodeChef'</span>;</div>
              <div className="pl-8">{'}'}</div>

              <div className="pl-8 mt-4"><span className="text-[#005cc5] dark:text-[#dcdcaa] font-bold">getSkills</span>() {'{'}</div>
              <div className="pl-16"><span className="text-[#e23636] dark:text-[#c586c0] font-bold">return</span> [</div>
              <div className="pl-24"><span className="text-[#032f62] dark:text-[#ce9178]">'C', 'C++', 'Java', 'JavaScript', 'SQL'</span>,</div>
              <div className="pl-24"><span className="text-[#032f62] dark:text-[#ce9178]">'React', 'Next.js', 'Node.js', 'Express', 'REST APIs'</span>,</div>
              <div className="pl-24"><span className="text-[#032f62] dark:text-[#ce9178]">'MongoDB', 'MySQL', 'Supabase', 'PostGIS'</span>,</div>
              <div className="pl-24"><span className="text-[#032f62] dark:text-[#ce9178]">'AWS', 'Docker', 'Git', 'Linux'</span></div>
              <div className="pl-16">];</div>
              <div className="pl-8">{'}'}</div>
              
              <div>{'}'}</div>
            </div>
          </div>

        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="relative bg-[#111111] dark:bg-[#050505] text-[#faf9f6] pt-24 pb-12 overflow-hidden z-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24 border-b border-[#333] pb-24">
            <div className="space-y-8 max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white">
                Let's build <br /> <span className="text-[#ff6b6b]">the future.</span>
              </h2>
              <a 
                href="mailto:shivambhati290@gmail.com"
                className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-[#ff6b6b] transition-colors"
              >
                shivambhati290@gmail.com <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-bold text-[#888] uppercase tracking-widest">Connect</h4>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-semibold text-lg text-[#ccc]">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b6b] transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5"/> GitHub
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b6b] transition-colors flex items-center gap-2">
                  <Linkedin className="w-5 h-5"/> LinkedIn
                </a>
                <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b6b] transition-colors flex items-center gap-2">
                  <Code2 className="w-5 h-5"/> LeetCode
                </a>
                <a href={SOCIAL_LINKS.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b6b] transition-colors flex items-center gap-2">
                  <ExternalLink className="w-5 h-5"/> CodeChef
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-[#888]">
            <div>© {new Date().getFullYear()} Shivam Singh Bhati.</div>
            <div className="flex items-center gap-2">Engineered with <span className="text-[#ff6b6b]">❤</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
