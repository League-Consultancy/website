import React, { useState, useRef } from 'react';
import { ArrowRight, Layers, Zap, Cpu, Target, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const FadeIn = ({ children, delay = 0, y = 20 }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-brand-white dark:bg-brand-gray-900 rounded-[2.5rem] border border-brand-gray-200 dark:border-brand-gray-800 overflow-hidden shadow-soft hover:shadow-card-hover dark:shadow-none dark:hover:shadow-2xl transition-all duration-700 flex flex-col group">
            {/* Image */}
            <div className="h-64 bg-brand-black relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0 dark:brightness-110"
                    loading="lazy"
                />
                <div className="absolute top-5 left-5 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] z-20 shadow-xl">
                    {project.highlightMetric}
                </div>
                <div className="absolute top-5 right-5 bg-brand-black/50 backdrop-blur-md text-brand-white px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest z-10 border border-white/10">
                    {project.category}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-4 leading-tight tracking-tight">{project.title}</h3>

                {/* Case Study Fields */}
                <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                        <div className="mt-0.5 p-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-lg text-brand-black dark:text-brand-white flex-shrink-0">
                            <Zap className="w-3 h-3" />
                        </div>
                        <div>
                            <span className="text-[9px] font-black uppercase text-brand-gray-400 block mb-0.5">Problem</span>
                            <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm leading-relaxed font-light">{project.problem}</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <div className="mt-0.5 p-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-lg text-brand-black dark:text-brand-white flex-shrink-0">
                            <Target className="w-3 h-3" />
                        </div>
                        <div>
                            <span className="text-[9px] font-black uppercase text-brand-gray-400 block mb-0.5">Objective</span>
                            <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm leading-relaxed font-light">{project.objective}</p>
                        </div>
                    </div>
                </div>

                {/* Expandable Section */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-black dark:text-brand-white hover:opacity-60 transition-opacity mb-4"
                >
                    <span>{isExpanded ? 'Less Details' : 'Full Case Study'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.21, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-4 pb-4">
                                <div className="flex items-start space-x-3">
                                    <div className="mt-0.5 p-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-lg text-brand-black dark:text-brand-white flex-shrink-0">
                                        <Cpu className="w-3 h-3" />
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black uppercase text-brand-gray-400 block mb-0.5">Approach</span>
                                        <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm leading-relaxed font-light">{project.approach}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="mt-0.5 p-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-lg text-brand-black dark:text-brand-white flex-shrink-0">
                                        <TrendingUp className="w-3 h-3" />
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black uppercase text-brand-gray-400 block mb-0.5">Results</span>
                                        <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm leading-relaxed font-light">{project.impact}</p>
                                    </div>
                                </div>

                                {project.client && (
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-400 pt-2">
                                        Client: {project.client}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Technologies & Results */}
                <div className="mt-auto pt-6 border-t border-brand-gray-100 dark:border-brand-gray-800">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map(tech => (
                            <span key={tech} className="px-2.5 py-1 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-500 dark:text-brand-gray-400 text-[9px] font-bold uppercase tracking-widest rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {project.results && (
                        <p className="text-xs font-bold text-brand-black dark:text-brand-white uppercase tracking-wider">
                            ↗ {project.results}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

// ─── HORIZONTAL SCROLL SECTION (reusable) ───────────
const HorizontalScrollSection = ({ children, itemCount, id, className = '' }) => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    // Measure the actual horizontal distance to scroll
    React.useEffect(() => {
        const updateMeasurements = () => {
            if (containerRef.current) {
                const totalWidth = containerRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;

                // Distance = totalWidth - viewportWidth
                setScrollDistance(Math.max(totalWidth - viewportWidth, 0));
            }
        };

        const resizeObserver = new ResizeObserver(updateMeasurements);
        if (containerRef.current) resizeObserver.observe(containerRef.current);

        updateMeasurements();
        // Delay to allow layout to settle after filter changes
        const timer = setTimeout(updateMeasurements, 250);

        window.addEventListener('resize', updateMeasurements);
        return () => {
            window.removeEventListener('resize', updateMeasurements);
            resizeObserver.disconnect();
            clearTimeout(timer);
        };
    }, [itemCount]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Map vertical scroll progress to horizontal translation
    // We map to 0.95 to ensure a tiny pause at the end for the CTA to be fully absorbed
    const x = useTransform(scrollYProgress, [0, 0.95], [0, -scrollDistance]);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`relative ${className}`}
            style={{ height: `calc(100vh + ${scrollDistance}px)` }}
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                <motion.div
                    ref={containerRef}
                    className="flex gap-10 items-center px-[10vw] will-change-transform"
                    style={{ x }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-300">
            {/* Header */}
            <section className="relative overflow-hidden pt-32 pb-24 border-b border-brand-gray-100 dark:border-brand-gray-900">
                <div className="section-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                            <FadeIn>
                                <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Portfolio Archive</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                                    Engineering <br />Case Studies
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-xl text-brand-gray-500 dark:text-brand-gray-400 max-w-2xl font-light leading-relaxed">
                                    Real-world implementations across AI, Robotics, IoT, and Industrial Automation — each solving a genuine engineering challenge.
                                </p>
                            </FadeIn>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 1, 0.36, 1] }}
                            className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative p-3 sm:p-6 md:p-8 lg:p-10 bg-white/40 dark:bg-brand-gray-900/30 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3.5rem] border border-brand-gray-200 dark:border-brand-gray-800 shadow-2xl transition-all duration-700 w-full max-w-[400px] xl:max-w-[500px] group"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-brand-black shadow-inner aspect-square">
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

            {/* Filter Bar */}
            <section className="py-6 border-b border-brand-gray-100 dark:border-brand-gray-900 bg-brand-white/80 dark:bg-brand-black/80 backdrop-blur-xl sticky top-20 z-40 transition-colors duration-300">
                <div className="section-container !py-0">
                    <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide pb-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${filter === cat
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

            {/* Project List */}
            <section className="bg-brand-white dark:bg-brand-black">
                {/* ── DESKTOP: horizontal pinned carousel ── */}
                <div className="hidden md:block">
                    {filteredProjects.length > 0 ? (
                        <HorizontalScrollSection itemCount={filteredProjects.length} id="projects-horizontal">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="min-w-[420px] w-[32vw] max-w-[500px] flex-shrink-0 py-10">
                                    <ProjectCard project={project} />
                                </div>
                            ))}

                            {/* Final CTA in the track */}
                            <div className="min-w-[400px] flex-shrink-0 flex items-center justify-center p-12">
                                <div className="p-12 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800 text-center w-full shadow-lg">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-brand-black dark:text-white">Have a Challenge?</h3>
                                    <Link to="/contact" className="btn-primary group inline-flex whitespace-nowrap">
                                        <span className="text-xs">Discuss Your Project</span>
                                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </HorizontalScrollSection>
                    ) : (
                        <div className="text-center py-40">
                            <Layers className="w-12 h-12 text-brand-gray-200 dark:text-brand-gray-800 mx-auto mb-8 opacity-50" />
                            <p className="text-brand-gray-400 font-bold uppercase tracking-widest text-xs">No projects found for this category.</p>
                        </div>
                    )}
                </div>

                {/* ── MOBILE: natural horizontal snap scroll ── */}
                <div className="md:hidden py-16 px-6">
                    {filteredProjects.length > 0 ? (
                        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="min-w-[300px] w-[85vw] max-w-[380px] flex-shrink-0 snap-center">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <Layers className="w-10 h-10 text-brand-gray-200 dark:text-brand-gray-800 mx-auto mb-8 opacity-50" />
                            <p className="text-brand-gray-400 font-bold uppercase tracking-widest text-[10px]">No projects found.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-32">
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
