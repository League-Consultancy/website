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

// ─── FULL-SCREEN PROJECT SLIDE ──────────────────────────────────
const ProjectSlide = React.forwardRef(({ project, index, total, direction }, ref) => {
    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 32 },
                opacity: { duration: 0.4 },
            }
        },
        exit: (dir) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 32 },
                opacity: { duration: 0.3 },
            }
        }),
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }
        }),
    };

    return (
        <motion.div
            ref={ref}
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-brand-black overflow-hidden"
        >
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-white/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 w-full h-full max-w-[1600px] flex flex-col lg:flex-row bg-brand-white dark:bg-[#0A0A0A] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-brand-gray-100 dark:border-brand-gray-800 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)]">
                {/* Left: Image Side */}
                <div className="relative w-full lg:w-[45%] xl:w-[48%] h-[35dvh] lg:h-full overflow-hidden bg-brand-gray-900 border-b lg:border-b-0 lg:border-r border-brand-gray-100 dark:border-brand-gray-800 group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110"
                    />
                    {/* Soft Vignette and Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-black/20 pointer-events-none" />

                    {/* Category Badge - Repositioned for cleaner look */}
                    <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-2 bg-brand-white/10 backdrop-blur-xl text-brand-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg border border-white/10 shadow-2xl">
                            {project.category}
                        </span>
                    </div>

                    {/* Big number indicator - subtle but premium */}
                    <div className="absolute bottom-8 left-8 opacity-[0.1] select-none pointer-events-none">
                        <span className="text-[10rem] lg:text-[12rem] font-black text-white leading-none">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Right: Content Side */}
                <div className="w-full lg:w-[55%] xl:w-[52%] h-full flex flex-col p-8 sm:p-12 lg:p-14 xl:p-20 overflow-y-auto bg-brand-white dark:bg-[#0A0A0A]">
                    <div className="max-w-3xl w-full mx-auto">
                        <motion.div custom={0} variants={itemVariants} className="mb-4 flex items-center gap-4">
                            <span className="text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
                                Project Details
                            </span>
                            <div className="h-px flex-grow bg-brand-gray-100 dark:bg-brand-gray-800" />
                        </motion.div>

                        <motion.h3
                            custom={1}
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1] mb-12 text-brand-black dark:text-brand-white"
                        >
                            {project.title}
                        </motion.h3>

                        <div className="space-y-10 mb-12">
                            {/* Detailed Info Blocks */}
                            <motion.div custom={2} variants={itemVariants} className="relative pl-10">
                                <span className="absolute left-0 top-1 text-[10px] font-black uppercase tracking-widest text-brand-gray-400 dark:text-brand-gray-700">01</span>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-3">Problem Statement</h4>
                                <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm lg:text-base leading-relaxed">{project.problem}</p>
                            </motion.div>

                            {project.challenge && (
                                <motion.div custom={2.5} variants={itemVariants} className="relative pl-10 border-t border-brand-gray-100 dark:border-brand-gray-900 pt-8">
                                    <span className="absolute left-0 top-9 text-[10px] font-black uppercase tracking-widest text-brand-gray-400 dark:text-brand-gray-700">02</span>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-3">Engineering Challenge</h4>
                                    <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm lg:text-base leading-relaxed">{project.challenge}</p>
                                </motion.div>
                            )}

                            <motion.div custom={3} variants={itemVariants} className="relative pl-10 border-t border-brand-gray-100 dark:border-brand-gray-900 pt-8">
                                <span className="absolute left-0 top-9 text-[10px] font-black uppercase tracking-widest text-brand-gray-400 dark:text-brand-gray-700">{project.challenge ? '03' : '02'}</span>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-3">Core Objective</h4>
                                <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm lg:text-base leading-relaxed font-bold">{project.objective}</p>
                            </motion.div>

                            {project.approach && (
                                <motion.div custom={3.5} variants={itemVariants} className="relative pl-10 border-t border-brand-gray-100 dark:border-brand-gray-900 pt-8">
                                    <span className="absolute left-0 top-9 text-[10px] font-black uppercase tracking-widest text-brand-gray-400 dark:text-brand-gray-700">{project.challenge ? '04' : '03'}</span>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-3">Strategic Approach</h4>
                                    <p className="text-brand-gray-600 dark:text-brand-gray-300 text-sm lg:text-base leading-relaxed italic">{project.approach}</p>
                                </motion.div>
                            )}

                            {project.solution && (
                                <motion.div custom={3.8} variants={itemVariants} className="p-8 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-3xl border border-brand-gray-100 dark:border-brand-gray-800">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-4 flex items-center gap-2">
                                        <Cpu className="w-3 h-3" /> Technical Solution
                                    </h4>
                                    <p className="text-brand-black dark:text-brand-white text-sm lg:text-base leading-relaxed font-medium">{project.solution}</p>
                                </motion.div>
                            )}
                        </div>

                        {/* Impact Highlight */}
                        {(project.results || project.impact) && (
                            <motion.div custom={4} variants={itemVariants} className="mb-12 p-8 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Proven Performance</span>
                                </div>
                                <h5 className="text-xl lg:text-2xl font-black text-brand-black dark:text-brand-white uppercase mb-2 leading-tight">
                                    {project.results || project.impact}
                                </h5>
                                {project.impact && project.impact !== project.results && (
                                    <p className="text-brand-gray-700 dark:text-emerald-500/70 text-xs font-medium italic">
                                        {project.impact}
                                    </p>
                                )}
                            </motion.div>
                        )}

                        {/* Tech Stack Bar */}
                        <motion.div custom={5} variants={itemVariants} className="pt-8 border-t border-brand-gray-100 dark:border-brand-gray-800 flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map(tech => (
                                <span key={tech} className="px-4 py-2 bg-brand-gray-50 dark:bg-brand-gray-900 text-brand-gray-700 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-brand-gray-100 dark:border-brand-gray-800">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});
ProjectSlide.displayName = 'ProjectSlide';

// ─── MAIN PROJECTS PAGE ─────────────────────────────────────────
const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const scrollCooldownRef = useRef(null);
    const touchStartRef = useRef(null);
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    // Reset index when filter changes
    useEffect(() => {
        setCurrentIndex(0);
        setDirection(0);
    }, [filter]);

    const goToSlide = useCallback((newIndex, dir) => {
        if (isScrollLocked) return;
        if (newIndex < 0 || newIndex >= filteredProjects.length) return;
        setIsScrollLocked(true);
        setDirection(dir);
        setCurrentIndex(newIndex);
        clearTimeout(scrollCooldownRef.current);
        scrollCooldownRef.current = setTimeout(() => setIsScrollLocked(false), 800);
    }, [isScrollLocked, filteredProjects.length]);

    const goNext = useCallback(() => goToSlide(currentIndex + 1, 1), [currentIndex, goToSlide]);
    const goPrev = useCallback(() => goToSlide(currentIndex - 1, -1), [currentIndex, goToSlide]);

    // Wheel listener
    useEffect(() => {
        const handleWheel = (e) => {
            const section = document.getElementById('project-fullscreen-section');
            if (!section) return;
            const rect = section.getBoundingClientRect();
            // We want to be strict: only trigger if section is prominently in view
            if (rect.top > 120 || rect.bottom < window.innerHeight * 0.4) return;

            const isFirst = currentIndex === 0;
            const isLast = currentIndex === filteredProjects.length - 1;

            if (e.deltaY > 30 && !isLast) {
                e.preventDefault();
                goNext();
            } else if (e.deltaY < -30 && !isFirst) {
                e.preventDefault();
                goPrev();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentIndex, filteredProjects.length, goNext, goPrev]);

    // Touch support
    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartRef.current = e.touches[0].clientY;
        };
        const handleTouchEnd = (e) => {
            if (touchStartRef.current === null) return;
            const section = document.getElementById('project-fullscreen-section');
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (rect.top > 120 || rect.bottom < window.innerHeight * 0.4) return;

            const deltaY = touchStartRef.current - e.changedTouches[0].clientY;
            const isFirst = currentIndex === 0;
            const isLast = currentIndex === filteredProjects.length - 1;

            if (deltaY > 50 && !isLast) {
                goNext();
            } else if (deltaY < -50 && !isFirst) {
                goPrev();
            }
            touchStartRef.current = null;
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentIndex, filteredProjects.length, goNext, goPrev]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goNext, goPrev]);

    const currentProject = filteredProjects[currentIndex];

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

            {/* Full-Screen Project Showcase */}
            {filteredProjects.length > 0 ? (
                <section
                    id="project-fullscreen-section"
                    className="relative w-full overflow-hidden bg-brand-black"
                    style={{ height: 'calc(100dvh - 120px)' }}
                >
                    {/* Animated Slides */}
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <ProjectSlide
                            key={currentProject.id}
                            project={currentProject}
                            index={currentIndex}
                            total={filteredProjects.length}
                            direction={direction}
                        />
                    </AnimatePresence>

                    {/* Navigation: Left Arrow - Better Floating Position */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-8 z-50 pointer-events-none">
                        {currentIndex > 0 && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goPrev}
                                className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-brand-white/10 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-center transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
                            </motion.button>
                        )}
                    </div>

                    {/* Navigation: Right Arrow - Better Floating Position */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8 z-50 pointer-events-none">
                        {currentIndex < filteredProjects.length - 1 && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goNext}
                                className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-brand-white/10 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-center transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
                            </motion.button>
                        )}
                    </div>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                        {filteredProjects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i, i > currentIndex ? 1 : -1)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${i === currentIndex
                                    ? 'bg-brand-black dark:bg-brand-white w-12 shadow-lg'
                                    : 'bg-brand-gray-300 dark:bg-white/20 hover:bg-brand-gray-400'
                                    }`}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <section className="h-[60vh] flex items-center justify-center">
                    <div className="text-center">
                        <Layers className="w-12 h-12 text-brand-gray-200 dark:text-brand-gray-800 mx-auto mb-8 opacity-50" />
                        <p className="text-brand-gray-600 dark:text-brand-gray-400 font-bold uppercase tracking-widest text-xs">No projects found for this category.</p>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-32 bg-brand-white dark:bg-brand-black">
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
        </div>
    );
};

export default Projects;
