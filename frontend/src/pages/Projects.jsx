import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Layers, Zap, Cpu, Target, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

// ─── FADE-IN UTILITY ────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, y = 20, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// ─── PROJECT MODAL ──────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
    // Add event listener correctly, ignoring missing dependencies
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto"
        >
            <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-md" onClick={onClose} />
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl bg-brand-white dark:bg-brand-dark rounded-[2rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-2xl overflow-hidden z-20 flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2 bg-brand-black/50 text-white hover:bg-brand-black rounded-full backdrop-blur-md transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* Left side: Image */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-brand-black">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover dark:opacity-70 dark:grayscale dark:hover:grayscale-0 dark:hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-black/60 to-transparent pointer-events-none" />

                    <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-2 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black text-[9px] font-black uppercase tracking-[0.2em] rounded-lg shadow-xl border border-transparent">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="w-full md:w-3/5 p-8 sm:p-12 overflow-y-auto">
                    <h3 className="text-3xl font-black uppercase tracking-tight leading-[1] mb-8 text-brand-black dark:text-brand-white">
                        {project.title}
                    </h3>

                    <div className="space-y-8 mb-8">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-2">Problem Statement</h4>
                            <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm leading-relaxed text-justify">{project.problem}</p>
                        </div>

                        {project.challenge && (
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-2">Engineering Challenge</h4>
                                <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm leading-relaxed text-justify">{project.challenge}</p>
                            </div>
                        )}

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-2">Core Objective</h4>
                            <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm leading-relaxed font-bold text-justify">{project.objective}</p>
                        </div>

                        {project.approach && (
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-2">Strategic Approach</h4>
                                <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm leading-relaxed italic text-justify">{project.approach}</p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="p-6 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-2xl border border-brand-gray-100 dark:border-brand-gray-800">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-4 flex items-center gap-3">
                                    <Cpu className="w-4 h-4" />
                                    <span>Technical Solution</span>
                                </h4>
                                <p className="text-brand-black dark:text-brand-white text-sm leading-relaxed font-medium text-justify">{project.solution}</p>
                            </div>
                        )}

                        {(project.results || project.impact) && (
                            <div className="p-6 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Proven Performance</span>
                                </div>
                                <h5 className="text-xl font-black text-brand-black dark:text-brand-white uppercase mb-1 leading-tight">
                                    {project.results || project.impact}
                                </h5>
                                {project.impact && project.impact !== project.results && (
                                    <p className="text-brand-gray-700 dark:text-emerald-500/70 text-xs font-medium italic">
                                        {project.impact}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="pt-6 border-t border-brand-gray-100 dark:border-brand-gray-800 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-brand-gray-50 dark:bg-brand-gray-900 text-brand-gray-700 dark:text-brand-gray-400 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-brand-gray-100 dark:border-brand-gray-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ─── PROJECT CARD ───────────────────────────────────────────────
const ProjectCard = ({ project, onClick }) => (
    <div
        className="bg-brand-white dark:bg-brand-dark group flex flex-col h-full rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700 cursor-pointer"
        onClick={() => onClick(project)}
    >
        <div className="h-56 bg-brand-black relative overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-1000 contrast-[1.1] saturate-[0.9] group-hover:saturate-100 group-hover:scale-105 dark:opacity-70 dark:group-hover:opacity-100 dark:grayscale dark:group-hover:grayscale-0"
                loading="lazy"
            />
            <div className="absolute top-6 right-6 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-md border border-transparent">
                {project.category}
            </div>
        </div>
        <div className="p-8 flex-grow flex flex-col relative z-20 bg-brand-white dark:bg-brand-dark transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-3 leading-tight">{project.title}</h3>
            <p className="text-brand-gray-700 dark:text-brand-gray-500 text-sm leading-relaxed mb-4 font-light line-clamp-2 transition-all duration-500">{project.challenge}</p>

            <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-700 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-transparent group-hover:bg-brand-gray-100 dark:group-hover:bg-brand-gray-700 group-hover:border-brand-gray-200 dark:group-hover:border-brand-gray-600 transition-all duration-500">{tech}</span>
                ))}
            </div>
            {project.results && (
                <p className="text-xs font-bold text-brand-black dark:text-brand-white uppercase tracking-wider mb-4">
                    ↗ {project.results}
                </p>
            )}
            <div className="mt-auto">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black dark:text-brand-white flex items-center group/link">
                    <span>Explore Case Study</span>
                    <ArrowRight className="ml-3 w-4 h-4 group-hover/link:translate-x-2 transition-all" />
                </span>
            </div>
        </div>
    </div>
);


// ─── MAIN PROJECTS PAGE ─────────────────────────────────────────
const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-300">
            {/* Header Hero */}
            <section className="relative overflow-hidden pt-32 pb-20 border-b border-brand-gray-100 dark:border-brand-gray-900">
                <div className="section-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                            <FadeIn><span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Portfolio Archive</span></FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                                    Engineering <br />Case Studies
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-lg text-brand-gray-700 dark:text-brand-gray-400 max-w-2xl font-light leading-relaxed">
                                    Real-world implementations across AI, Robotics, IoT, and Industrial Automation — each solving a genuine engineering challenge.
                                </p>
                            </FadeIn>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 1, 0.36, 1] }}
                            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative p-3 sm:p-5 md:p-6 lg:p-8 bg-brand-black dark:bg-brand-gray-900/30 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] border border-brand-gray-800 dark:border-brand-gray-800 shadow-2xl transition-all duration-700 w-full max-w-[320px] xl:max-w-[400px] group"
                            >
                                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-brand-black shadow-inner aspect-square">
                                    <img
                                        src="/assets/projects_hero.png"
                                        alt="LEAGUE Consultancy Projects"
                                        className="w-full h-full object-cover transition-all duration-1000 contrast-[1.1] brightness-[1.05] saturate-[0.8] group-hover:saturate-100 group-hover:scale-100 scale-[1.05] dark:grayscale dark:group-hover:grayscale-0 dark:opacity-60 dark:group-hover:opacity-100"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/40 via-transparent to-white/10 pointer-events-none" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray-50 dark:bg-brand-dark/50 -skew-x-12 translate-x-1/2 opacity-50 transition-colors duration-700" />
            </section>

            {/* Filter Bar — sticky below navbar (80px navbar + ~60px filter = ~140px total) */}
            <div className="bg-brand-white dark:bg-brand-black sticky top-[80px] z-40 border-b border-brand-gray-100 dark:border-brand-gray-900">
                <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide pb-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 shrink-0 whitespace-nowrap shadow-sm border ${filter === cat
                                    ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black border-transparent scale-105'
                                    : 'bg-brand-gray-50/50 text-brand-gray-600 dark:text-brand-gray-400 border-brand-gray-100 hover:bg-brand-gray-100 hover:text-brand-black dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:text-brand-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Project Showcase */}
            <section className="py-16 sm:py-24 transition-colors duration-300">
                <div className="section-container">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {filteredProjects.map((project, idx) => (
                                <FadeIn key={project.id} delay={idx * 0.1} className="h-full">
                                    <ProjectCard
                                        project={project}
                                        onClick={(p) => setSelectedProject(p)}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-12 text-center border border-brand-gray-100 dark:border-brand-gray-800 rounded-3xl bg-brand-gray-50 dark:bg-brand-gray-900">
                            <Layers className="w-12 h-12 text-brand-gray-300 dark:text-brand-gray-700 mb-6" />
                            <p className="text-brand-gray-600 dark:text-brand-gray-400 font-bold uppercase tracking-widest text-xs">No projects found for this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 sm:py-32 bg-brand-white dark:bg-brand-black">
                <div className="section-container">
                    <FadeIn>
                        <div className="p-12 lg:p-16 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800 text-center">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-brand-black dark:text-brand-white">Have a Similar Challenge?</h2>
                            <p className="text-brand-gray-700 dark:text-brand-gray-500 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                                Tell us about your project and we'll design a tailored solution.
                            </p>
                            <Link to="/contact" id="projects-page-cta" className="btn-primary group inline-flex">
                                <span className="text-xs">Discuss Your Project</span>
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
