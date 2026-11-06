"use client"
// Deployment: 2026-06-05T20:55:00Z
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Code2, 
  Briefcase, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  X,
  Calendar,
  Building2
} from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// --- DATA ---
const DATA = {
  profile: {
    name: "Krunal Kaklotar",
    headline: "Digital Technology Student | AI & ML | Intelligent Systems | Future Technologies",
    location: "Wolfenbüttel, Lower Saxony, Germany",
    about: "Digital Technology Student specializing in AI, ML, and Intelligent Systems at Ostfalia University of Applied Sciences.",
    profile_image: "/images/profile.jpg",
    email: "krunalkaklotar2283@gmail.com",
    linkedin: "https://www.linkedin.com/in/krunal-kaklotar",
    github: "https://github.com/krunal-018/about-me"
  },
  skills: [
    { name: "Python", category: "Programming Languages" },
    { name: "C++", category: "Programming Languages" },
    { name: "JavaScript", category: "Programming Languages" },
    { name: "FastAPI", category: "Web" },
    { name: "React", category: "Web" },
    { name: "TypeScript", category: "Web" },
    { name: "Artificial Intelligence", category: "AI/ML" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "SQL", category: "Database" }
  ],
  projects: [
    {
      id: 1,
      title: "IoT Data Validation & Forecasting System",
      description: "IoT-based data validation and forecasting system focused on real-time structured data.",
      association: "Ostfalia - University of Applied Sciences",
      features: "Email, phone number, password, timestamp, and CSV data validation with automated rule handling. forecasting models, notification systems, and analytics dashboards.",
      technologies: "Python, SQLite, CLI Architecture",
      date_range: "May 2026 – Present"
    },
    {
      id: 2,
      title: "Niramaya – Health AI",
      description: "Biomedical evidence workspace with AI-assisted health explanations, literature search, and visit preparation.",
      association: "VNSGU, Surat",
      features: "Free-text chat grounded in retrieved abstracts, PubMed source cards, English or German answers, and editable visit notes.",
      technologies: "Python, Flask, JavaScript, Europe PMC, Gemini",
      date_range: "May 2025 – Jul 2025"
    },
    {
      id: 3,
      title: "RORO Ferry Service Management System",
      description: "Built a web-based RORO Ferry Service Management System with comprehensive management and booking functionalities.",
      association: "VNSGU, Surat",
      features: "Online ticket booking, trip scheduling, seat management, payment processing, and admin dashboard functionalities.",
      technologies: "PHP, MySQL, JavaScript, Bootstrap",
      date_range: "Jan 2025 – Apr 2025"
    },
    {
      id: 4,
      title: "AI-Powered Live Directory",
      description: "Real-time business directory engine developed during a hackathon.",
      association: "Hackathon Project",
      features: "Real-time validation, AI-assisted extraction, Change detection, Confidence scoring.",
      technologies: "FastAPI, React, Redis, Celery",
      date_range: "Hackathon 2026"
    }
  ],
  education: [
    {
      id: 1,
      institution: "Ostfalia University of Applied Sciences",
      degree: "M.Sc. in Digital Technology",
      date_range: "2026 – Present",
      details: "Specializing in Automation, Robotics, and Intelligent Systems."
    },
    {
      id: 2,
      institution: "VNSGU, Surat",
      degree: "B.Sc. in Information Technology",
      date_range: "2022 – 2025",
      details: "CGPA: 7.66"
    },
    {
      id: 3,
      institution: "N.P Jikadara Uma. Shala (GSEB)",
      degree: "Higher Secondary (12th Grade)",
      date_range: "Completed 2022",
      details: "Percentage: 89%"
    },
    {
      id: 4,
      institution: "Shree Sadguru Vidhyalaya (GSEB)",
      degree: "Secondary (10th Grade)",
      date_range: "Completed 2020",
      details: "Percentage: 72%"
    }
  ]
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setTimeout(() => {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const profile = DATA.profile;

  return (
    <div className="min-h-screen selection:bg-accent-blue/30 font-sans antialiased bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 nav-blur">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-lg tracking-tight"
          >
            {profile.name}<span className="text-accent-blue">.</span>
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            {['About', 'Projects', 'Education', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: 'var(--accent-blue)' }}
                className="transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        <section className="pt-40 pb-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Available for new opportunities
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                  Digital Technology & <span className="text-accent-blue">Intelligent Systems</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-xl mb-12">
                  {profile.headline}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a 
                    href="#contact" 
                    whileHover={{ y: -2 }}
                    className="px-8 py-4 bg-foreground text-background text-sm font-bold rounded-lg hover:opacity-90 transition-all flex items-center gap-3"
                  >
                    Get in touch <ArrowRight size={16} />
                  </motion.a>
                  <div className="flex gap-4 ml-4">
                    <motion.a whileHover={{ color: 'var(--accent-blue)' }} href={profile.linkedin} target="_blank" className="text-slate-400 transition-colors"><LinkedinIcon size={20} /></motion.a>
                    <motion.a whileHover={{ color: 'var(--accent-blue)' }} href={profile.github} target="_blank" className="text-slate-400 transition-colors"><GithubIcon size={20} /></motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4 relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-square pro-card overflow-hidden mb-6 max-w-[280px] ml-auto"
              >
                <Image 
                    src={profile.profile_image} 
                    alt={profile.name} 
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                />
              </motion.div>
              <div className="flex flex-col gap-1 px-2 text-right">
                <div className="flex items-center gap-2 text-slate-500 font-semibold text-[10px] uppercase tracking-widest justify-end">
                  <MapPin size={12} /> {profile.location}
                </div>
                <div className="text-xs font-medium text-slate-400">Master of Science in Digital Technology</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-blue mb-4">/ BACKGROUND</h2>
              <h3 className="text-3xl font-bold tracking-tight mb-6">Bridging AI with Engineering.</h3>
            </div>
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-normal space-y-6"
              >
                <p>{profile.about}</p>
                <div className="grid sm:grid-cols-2 gap-10 pt-10">
                  {Array.from(new Set(DATA.skills.map(s => s.category))).map((category) => (
                    <div key={category}>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-border pb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {DATA.skills.filter(s => s.category === category).map((skill: any, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] font-bold text-slate-600 dark:text-slate-400 px-3 py-1.5 border border-border rounded-md hover:border-accent-blue transition-colors cursor-default"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-border">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-blue mb-4">/ PORTFOLIO</h2>
              <h3 className="text-4xl font-bold tracking-tight">Selected Projects</h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {DATA.projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group pro-card p-8 flex flex-col h-full relative cursor-pointer"
              >
                <div className="absolute top-8 right-8">
                  <ExternalLink size={18} className="text-slate-300 group-hover:text-accent-blue transition-colors" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-normal text-sm mb-8 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.split(',').map(tech => (
                      <span key={tech} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-50 dark:bg-slate-900 border border-border rounded text-slate-500">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-accent-blue transition-colors">
                    View Project Details <ChevronRight size={14} />
                  </div>
                  {project.id === 2 && (
                    <a
                      href="https://niramaya-health-ai-bbzc.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="mt-4 inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-bold text-accent-blue hover:underline focus-visible:outline focus-visible:outline-2"
                    >
                      Try Niramaya <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-blue mb-12 text-center">/ ACADEMIC RECORD</h2>
            <div className="space-y-4">
              {DATA.education.map((edu, idx) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="pro-card p-8 flex flex-col md:flex-row justify-between gap-6 hover:bg-slate-50/50 dark:hover:bg-slate-900/50"
                >
                  <div className="max-w-xl">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent-blue block mb-2">{edu.institution}</span>
                    <h3 className="text-xl font-bold tracking-tight mb-3">{edu.degree}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal border-l-2 border-border pl-4">
                      {edu.details}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400">
                      {edu.date_range}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border mb-20">
          <div className="pro-card p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-blue mb-6">/ CONTACT</h2>
                <h3 className="text-4xl font-bold tracking-tight mb-6">Let&apos;s talk.</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                  Available for roles in Digital Technology and Intelligent Systems.
                </p>
                <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 font-semibold text-sm">
                  <Mail size={16} className="text-accent-blue" />
                  {profile.email}
                </div>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Name" name="name" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all text-sm" />
                  <input placeholder="Email" name="email" type="email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all text-sm" />
                </div>
                <textarea placeholder="Message" name="message" required rows={4} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all text-sm resize-none"></textarea>
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-foreground text-background rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3"
                >
                  {formStatus === 'idle' ? 'Send Message' : 
                   formStatus === 'sending' ? 'Sending...' : 'Message Sent'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-border sticky top-0 bg-background z-10">
                <h3 className="text-2xl font-bold tracking-tight">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-6 mb-10 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-accent-blue" />
                    {selectedProject.date_range}
                  </div>
                  {selectedProject.association && (
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-accent-blue" />
                      {selectedProject.association}
                    </div>
                  )}
                </div>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-4">/ OVERVIEW</h4>
                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-4">/ KEY FEATURES & DETAILS</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                      {selectedProject.features}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-4">/ TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.split(',').map((tech: string) => (
                        <span key={tech} className="px-4 py-2 border border-border rounded-lg text-[11px] font-bold text-slate-600 dark:text-slate-400">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-lg tracking-tight">
            {profile.name}<span className="text-accent-blue">.</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href={profile.linkedin} target="_blank" className="hover:text-accent-blue transition-colors">LinkedIn</a>
            <a href={profile.github} target="_blank" className="hover:text-accent-blue transition-colors">GitHub</a>
          </div>
          <p className="text-[10px] font-bold text-slate-300 dark:text-slate-700 uppercase tracking-widest">
            © 2026 / {profile.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
