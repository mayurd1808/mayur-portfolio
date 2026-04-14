import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code, 
  Database, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Shield,
  Plane,
  MessageSquare,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

// --- Data Constants ---
const USER_DATA = {
  name: "Mayur Deshmukh",
  title: "Computer Science Engineer | Aspiring Software Developer",
  summary: "Aspiring software developer with a strong focus on Java backend development and AI-powered learning models using Python. Passionate about developing scalable, intelligent, and user-centric applications. Experience in building web applications and integrating machine learning solutions.",
  email: "mayur.d1808@gmail.com",
  phone: "9607898934",
  linkedin: "https://www.linkedin.com/in/mayur-deshmukh-55080232a/",
  github: "https://github.com/", // Placeholder
};

const SKILLS = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS"], icon: <Code className="w-5 h-5" /> },
  { category: "Backend & Frameworks", items: ["Spring Boot", "RESTful Web Services", "Node.js"], icon: <Globe className="w-5 h-5" /> },
  { category: "AI / ML", items: ["Machine Learning", "NLP", "Model Integration", "LLMs"], icon: <Cpu className="w-5 h-5" /> },
  { category: "Databases", items: ["MySQL", "SQLite", "Firebase", "MongoDB"], icon: <Database className="w-5 h-5" /> },
  { category: "Tools & Others", items: ["Git", "GitHub", "German", "Marathi"], icon: <Briefcase className="w-5 h-5" /> }
];

const PROJECTS = [
  {
    title: "Smart Discussion Forum",
    description: "A full-stack platform featuring user authentication, post management, and AI-based content moderation to filter toxic content.",
    tech: ["React", "Node.js", "MongoDB", "AI Moderation"],
    icon: <MessageSquare className="text-indigo-500" />,
    link: "#",
    github: "#"
  },
  {
    title: "Travel Itinerary Planner",
    description: "Web platform generating personalized travel schedules based on user preferences, budget, and duration with secure data handling.",
    tech: ["Java", "Spring Boot", "MySQL", "JavaScript"],
    icon: <Plane className="text-emerald-500" />,
    link: "#",
    github: "#"
  },
  {
    title: "Women Safety App",
    description: "Mobile safety application with real-time location tracking, SOS emergency alerts, and GPS integration for live tracking.",
    tech: ["Python", "GPS API", "Firebase", "Notification APIs"],
    icon: <Shield className="text-rose-500" />,
    link: "#",
    github: "#"
  }
];

const EXPERIENCE = [
  {
    company: "HCLTech",
    role: "Java Full Stack Intern",
    period: "June 2025 - Aug 2025",
    description: "Developed web-based platforms for personalized travel itineraries. Integrated destination details and day-wise travel planning with secure interfaces."
  },
  {
    company: "Innovation Hub, Nashik",
    role: "Full Stack Developer Intern",
    period: "July 2022 - Aug 2022",
    description: "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Focused on building responsive and user-friendly interfaces."
  }
];

const EDUCATION = [
  {
    school: "Sanjivani University, Maharashtra",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 - Present"
  },
  {
    school: "R.C. Patel Polytechnic, Maharashtra",
    degree: "Diploma in Computer Technology",
    period: "2021 - 2024"
  }
];

const CERTIFICATIONS = [
  "Full Stack JAVA - HCLTech",
  "Java Fundamentals - Oracle Academy",
  "Exploratory Data Analysis - Accenture",
  "Intro to LLMs - NPTEL",
  "Generative AI Fluency - FutureSkills Prime"
];

// --- Components ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
    >
      {children}
    </motion.h2>
    <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
  </div>
);

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            MD.
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsDark(!isDark)} className="p-2 text-slate-600 dark:text-slate-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-600 dark:text-slate-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 font-sans transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-4">Software Developer Portfolio</h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{USER_DATA.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                {USER_DATA.title}. Passionate about Java, Python, and building intelligent systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  Hire Me <ChevronRight size={18} />
                </a>
                <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-slate-700 dark:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <Download size={18} /> Download Resume
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeading>About Me</SectionHeading>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {USER_DATA.summary}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-indigo-600 mb-1">Location</h4>
                    <p className="text-sm">Maharashtra, India</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-indigo-600 mb-1">Education</h4>
                    <p className="text-sm">B.Tech CSE Student</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-indigo-100 dark:bg-slate-800 relative group">
                  {/* Custom SVG Profile Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                    <svg viewBox="0 0 24 24" className="w-32 h-32 text-indigo-600/40" fill="currentColor">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading>Technical Arsenal</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading>Featured Projects</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col"
                >
                  <div className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm">
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        <a href={project.github} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
                        <a href={project.link} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><ExternalLink size={20} /></a>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto p-8 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Experience Timeline */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <Briefcase className="text-indigo-600 w-8 h-8" />
                  <h2 className="text-3xl font-bold">Experience</h2>
                </div>
                <div className="space-y-12">
                  {EXPERIENCE.map((exp, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
                    >
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1 ring-4 ring-indigo-500/20 shadow-xl shadow-indigo-600/40"></div>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1 block">{exp.period}</span>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-3">{exp.company}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education & Certs */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <BookOpen className="text-indigo-600 w-8 h-8" />
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                <div className="space-y-12 mb-16">
                  {EDUCATION.map((edu, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
                    >
                      <div className="absolute w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full -left-[9px] top-1"></div>
                      <span className="text-sm font-bold text-slate-500 mb-1 block">{edu.period}</span>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-slate-500 dark:text-slate-400">{edu.school}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <Award className="text-indigo-600 w-8 h-8" />
                  <h2 className="text-2xl font-bold">Certifications</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's build something <span className="text-indigo-400">extraordinary</span> together.</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  Currently looking for opportunities in Software Engineering and Backend Development. Feel free to reach out for collaborations!
                </p>
                
                <div className="space-y-6">
                  <a href={`mailto:${USER_DATA.email}`} className="flex items-center gap-4 group">
                    <div className="p-4 bg-slate-800 group-hover:bg-indigo-600 transition-colors rounded-2xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email Me</p>
                      <p className="text-lg font-bold">{USER_DATA.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-slate-800 transition-colors rounded-2xl">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Connect on LinkedIn</p>
                      <a href={USER_DATA.linkedin} target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-indigo-400 transition-colors">/mayur-deshmukh</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 md:p-10 rounded-3xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600 resize-none" placeholder="Hey Mayur, I'd love to discuss a project..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-2xl font-bold text-indigo-600">MD.</div>
              <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
                &copy; {new Date().getFullYear()} Mayur Deshmukh. Built with React & Tailwind.
              </p>
              <div className="flex gap-6">
                <a href={USER_DATA.github} className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
                <a href={USER_DATA.linkedin} className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
                <a href={`mailto:${USER_DATA.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}