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
            className="absolute inset-0 w-full h-full p-4 pt-16 sm:p-8 sm:pt-20 lg:p-12 lg:pt-24 xl:p-16 xl:pt-32 flex items-center justify-center bg-brand-black overflow-hidden"
        >
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-white/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 w-full h-full max-w-[1600px] flex flex-col lg:flex-row bg-brand-white dark:bg-[#0A0A0A] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-brand-gray-100 dark:border-brand-gray-800 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)]">
                {/* Left: Image Side */}
                <div className="relative w-full lg:w-[45%] xl:w-[50%] h-[30dvh] sm:h-[40dvh] lg:h-full overflow-hidden bg-brand-gray-100 dark:bg-brand-gray-900 border-b lg:border-b-0 lg:border-r border-brand-gray-100 dark:border-brand-gray-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20">
                        <span className="px-4 py-2 bg-brand-black/90 backdrop-blur-md text-brand-white text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-white/10">
                            {project.category}
                        </span>
                    </div>

                    {/* Big number indicator */}
                    <div className="absolute bottom-4 right-4 lg:bottom-12 lg:left-12 opacity-[0.05] lg:opacity-[0.12] select-none pointer-events-none">
                        <span className="text-[7rem] lg:text-[15rem] font-black text-brand-black dark:text-brand-white leading-none">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Right: Content Side */}
                <div className="w-full lg:w-[55%] xl:w-[50%] h-full flex flex-col justify-start lg:justify-center p-6 sm:p-10 lg:p-14 xl:p-20 overflow-y-auto overflow-x-hidden bg-brand-white dark:bg-[#0A0A0A] scrollbar-hide">
                    <div className="max-w-2xl mx-auto lg:mx-0 w-full">
                        {/* Project Counter */}
                        <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible" className="mb-6 flex items-center gap-3">
                            <span className="text-brand-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
                                Project {String(index + 1).padStart(2, '0')} <span className="text-brand-gray-300 dark:text-brand-gray-700 mx-1">/</span> {String(total).padStart(2, '0')}
                            </span>
                            <div className="h-px w-12 bg-brand-gray-200 dark:bg-brand-gray-800" />
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                            custom={1}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-[1] lg:leading-[0.95] mb-6 lg:mb-8 text-brand-black dark:text-brand-white"
                        >
                            {project.title}
                        </motion.h3>

                        {/* Case Study Details */}
                        <div className="space-y-6 mb-10">
                            {/* Problem */}
                            <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible" className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-lg text-brand-black dark:text-brand-white flex-shrink-0">
                                    <Zap className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-brand-gray-400 block mb-1">Problem</span>
                                    <p className="text-brand-gray-600 dark:text-brand-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">{project.problem}</p>
                                </div>
                            </motion.div>

                            {/* Objective */}
                            <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible" className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-lg text-brand-black dark:text-brand-white flex-shrink-0">
                                    <Target className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-brand-gray-400 block mb-1">Objective</span>
                                    <p className="text-brand-gray-600 dark:text-brand-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">{project.objective}</p>
                                </div>
                            </motion.div>

                            {project.results && (
                                <motion.div custom={4} variants={itemVariants} initial="hidden" animate="visible" className="p-4 lg:p-6 bg-brand-gray-50 dark:bg-brand-gray-900/50 rounded-2xl border border-brand-gray-100 dark:border-brand-gray-800">
                                    <div className="flex items-center gap-2 mb-1">
                                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                                        <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Key Outcome</span>
                                    </div>
                                    <p className="text-brand-black dark:text-brand-white text-sm lg:text-lg font-bold uppercase tracking-tight italic">"{project.results}"</p>
                                </motion.div>
                            )}
                        </div>

                        {/* Tech Stack */}
                        <motion.div custom={5} variants={itemVariants} initial="hidden" animate="visible" className="pt-8 border-t border-brand-gray-100 dark:border-brand-gray-800">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 5).map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-brand-gray-50 dark:bg-brand-gray-900 text-brand-gray-500 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-brand-gray-100 dark:border-brand-gray-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
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
                            <FadeIn><span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Portfolio Archive</span></FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                                    Engineering <br />Case Studies
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-lg text-brand-gray-500 dark:text-brand-gray-400 max-w-2xl font-light leading-relaxed">
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
                                className="relative p-3 sm:p-5 md:p-6 lg:p-8 bg-white/40 dark:bg-brand-gray-900/30 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] border border-brand-gray-200 dark:border-brand-gray-800 shadow-2xl transition-all duration-700 w-full max-w-[320px] xl:max-w-[400px] group"
                            >
                                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-brand-black shadow-inner aspect-square">
                                    <img
                                        src="/assets/projects_hero.png"
                                        alt="LEAGUE Consultancy Projects"
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-100"
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
            <section className="py-3 border-b border-brand-gray-100 dark:border-brand-gray-900 bg-brand-white/80 dark:bg-brand-black/80 backdrop-blur-xl sticky top-20 z-40 transition-colors duration-300">
                <div className="section-container !py-0">
                    <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide pb-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${filter === cat
                                    ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black shadow-2xl shadow-brand-black/20'
                                    : 'text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full-Screen Project Showcase */}
            {filteredProjects.length > 0 ? (
                <section
                    id="project-fullscreen-section"
                    className="relative w-full overflow-hidden bg-brand-black"
                    style={{ height: 'calc(100dvh - 180px)' }}
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

                    {/* Navigation: Left Arrow */}
                    <div className="absolute top-[28dvh] sm:top-[35dvh] lg:inset-y-0 left-6 sm:left-10 lg:left-14 xl:left-20 w-12 flex items-center justify-center z-40 pointer-events-none">
                        {currentIndex > 0 && (
                            <motion.button
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goPrev}
                                className="pointer-events-auto w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-brand-white/10 dark:bg-brand-black/40 backdrop-blur-3xl border border-white/20 text-white flex items-center justify-center hover:bg-brand-black dark:hover:bg-brand-white dark:hover:text-brand-black transition-all shadow-2xl"
                            >
                                <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7" />
                            </motion.button>
                        )}
                    </div>

                    {/* Navigation: Right Arrow */}
                    <div className="absolute top-[28dvh] sm:top-[35dvh] lg:inset-y-0 right-6 sm:right-10 lg:right-14 xl:right-20 w-12 flex items-center justify-center z-40 pointer-events-none">
                        {currentIndex < filteredProjects.length - 1 && (
                            <motion.button
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goNext}
                                className="pointer-events-auto w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-brand-white/10 dark:bg-brand-black/40 backdrop-blur-3xl border border-white/20 text-white flex items-center justify-center hover:bg-brand-black dark:hover:bg-brand-white dark:hover:text-brand-black transition-all shadow-2xl"
                            >
                                <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7" />
                            </motion.button>
                        )}
                    </div>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                        {filteredProjects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i, i > currentIndex ? 1 : -1)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${i === currentIndex
                                    ? 'bg-brand-black dark:bg-brand-white w-8 shadow-lg'
                                    : 'bg-brand-gray-300 dark:bg-white/20'
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
                        <p className="text-brand-gray-400 font-bold uppercase tracking-widest text-xs">No projects found for this category.</p>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-32 bg-brand-white dark:bg-brand-black">
                <div className="section-container">
                    <FadeIn>
                        <div className="p-12 lg:p-16 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800 text-center">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-brand-black dark:text-brand-white">Have a Similar Challenge?</h2>
                            <p className="text-brand-gray-500 font-light max-w-xl mx-auto mb-10 leading-relaxed">
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
