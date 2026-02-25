import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Bot, Wifi, Settings, Code2, ChevronRight, Rocket, Factory, Building2, FlaskConical, Landmark, Shield, Cog, GraduationCap, Award, ShieldCheck, Handshake, Cpu, Target } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/projects';
import { company, vision, mission, services, targetAudience, credibility, differentiators } from '../data/companyData';

const iconMap = {
    Brain, Bot, Wifi, Settings, Code2,
    Rocket, Factory, Building2, FlaskConical, Landmark, Shield, Cog,
    GraduationCap, Award, ShieldCheck, Handshake,
};

const FadeIn = ({ children, delay = 0, y = 20, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// ─── HERO ───────────────────────────────────────────
const Hero = () => (
    <section className="relative overflow-hidden pt-4 pb-16 sm:pt-8 sm:pb-20 lg:pt-12 lg:pb-24 transition-colors duration-300">
        {/* Background blurs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-blue-100/40 dark:bg-brand-gray-900/40 blur-[150px] rounded-full transition-colors duration-700"
            />
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-50/40 dark:bg-brand-dark blur-[120px] rounded-full opacity-40 dark:opacity-30 transition-colors duration-700" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-white dark:from-brand-black to-transparent" />
        </div>

        <div className="section-container relative z-10 px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div className="max-w-xl xl:max-w-2xl order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <FadeIn delay={0.1}>
                        <div className="premium-label inline-flex shadow-sm">
                            <Zap className="w-3 h-3 text-brand-black dark:text-brand-white" />
                            <span><strong>AI</strong> · <strong>Robotics</strong> · <strong>IoT</strong> · <strong>Automation</strong></span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} y={30}>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-black leading-[1.05] sm:leading-[1.1] tracking-tighter mb-8 sm:mb-12 uppercase group transition-colors duration-300 max-w-[720px] text-brand-black dark:text-white drop-shadow-sm dark:drop-shadow-none">
                            Building <br />
                            <span className="text-brand-gray-600 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-brand-white transition-all duration-700">Tomorrow's</span> <br />
                            Technology
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3} y={20}>
                        <p className="text-lg sm:text-xl text-brand-gray-600 dark:text-[#D1D5DB] leading-relaxed mb-10 sm:mb-16 max-w-xl font-light transition-colors duration-300 text-justify">
                            <strong>LEAGUE Consultancy</strong> is a next-generation engineering consultancy delivering <strong>intelligent AI systems</strong>, advanced robotics, <strong>industrial automation</strong>, and scalable software solutions.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} y={10}>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
                            <Link to="/contact" id="hero-cta-start" className="btn-primary group w-full sm:w-auto shadow-premium hover:shadow-card-hover dark:shadow-none">
                                <span className="text-xs">Get Started</span>
                                <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <Link to="/projects" id="hero-cta-portfolio" className="btn-outline w-full sm:w-auto">
                                <span className="text-xs">View Portfolio</span>
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 1, 0.36, 1] }}
                    className="relative order-2 flex justify-center lg:justify-end mt-12 lg:mt-0 z-20"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative p-3 sm:p-6 md:p-8 lg:p-12 bg-brand-black dark:bg-brand-gray-900/30 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[4rem] border border-brand-gray-800 dark:border-brand-gray-800 shadow-premium transition-all duration-700 w-full max-w-[450px] xl:max-w-[600px] group"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3.5rem] bg-brand-black shadow-inner aspect-square">
                            <img
                                src="/assets/hero_visual.png"
                                alt="LEAGUE Consultancy — AI, Robotics, IoT Engineering"
                                className="w-full h-full object-cover transition-all duration-1000 contrast-[1.1] brightness-[1.05] saturate-[0.8] group-hover:saturate-100 group-hover:scale-100 scale-[1.05] dark:grayscale dark:group-hover:grayscale-0 dark:opacity-60 dark:group-hover:opacity-100"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/40 via-transparent to-white/10 pointer-events-none" />
                        </div>
                        <div className="absolute -inset-2 bg-brand-black/5 dark:bg-white/5 blur-3xl -z-10 rounded-[5rem] transition-opacity duration-700 pointer-events-none" />
                    </motion.div>

                    <div className="hidden xl:block absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-gray-200 dark:border-brand-gray-800 rounded-tr-[3rem] -z-10 opacity-30" />
                    <div className="hidden xl:block absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-gray-200 dark:border-brand-gray-800 rounded-bl-[3rem] -z-10 opacity-30" />
                </motion.div>
            </div>
        </div>

    </section>
);

// ─── LOGO CLOUD ─────────────────────────────────────────
const LogoCloud = () => (
    <div className="border-t border-brand-gray-100 dark:border-brand-gray-900 bg-brand-gray-50/50 dark:bg-brand-black/50 py-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-6">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-gray-700 dark:text-brand-gray-500 whitespace-nowrap">Core Technologies</span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-10 md:gap-16 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="text-xl font-display font-black tracking-tighter flex items-center gap-2 text-brand-gray-700 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-white transition-colors"><Brain className="w-5 h-5" /> OPENAI</div>
                <div className="text-xl font-display font-black tracking-tighter flex items-center gap-2 text-brand-gray-700 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-white transition-colors"><Code2 className="w-5 h-5" /> PYTORCH</div>
                <div className="text-xl font-display font-black tracking-tighter flex items-center gap-2 text-brand-gray-700 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-white transition-colors"><Cpu className="w-5 h-5" /> NVIDIA CUDA</div>
                <div className="text-xl font-display font-black tracking-tighter flex items-center gap-2 text-brand-gray-700 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-white transition-colors"><Bot className="w-5 h-5" /> ROS2</div>
            </div>
        </div>
    </div>
);


// ─── SERVICES OVERVIEW ──────────────────────────────
const ServicesOverview = () => {
    const serviceIcons = { Brain, Bot, Wifi, Settings, Code2 };
    const displayServices = services.slice(0, 3);
    const cardCount = displayServices.length;

    return (
        <>
            {/* ── DESKTOP & MOBILE: Standard Grid Layout ── */}
            <section className="bg-brand-white dark:bg-brand-black py-16 sm:py-24 border-t border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300" id="services-overview">
                <div className="section-container">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                            <div className="max-w-2xl">
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">What We Do</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white">Our Services</h2>
                            </div>
                            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-brand-black dark:text-brand-white hover:opacity-50 transition-opacity pb-2 border-b-2 border-brand-black dark:border-brand-white">
                                View All Services
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {displayServices.map((service, idx) => {
                            const IconComp = serviceIcons[service.icon] || Brain;
                            return (
                                <FadeIn key={service.id} delay={idx * 0.1} className="h-full">
                                    <div
                                        className="p-8 lg:p-10 rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 group transition-all duration-500 flex flex-col bg-brand-white dark:bg-brand-dark h-full shadow-soft hover:shadow-premium hover:-translate-y-2"
                                    >
                                        <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-2xl w-fit mb-8 group-hover:bg-brand-black dark:group-hover:bg-brand-white text-brand-black dark:text-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500 shadow-md">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight leading-tight text-brand-black dark:text-[#F3F4F6]">{service.title}</h3>
                                        <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light text-sm flex-grow mb-8 text-justify">
                                            {service.id === 'ai' ? (
                                                <>Custom <strong>AI models</strong> and <strong>intelligent systems</strong> tailored for real-world business applications.</>
                                            ) : service.id === 'robotics' ? (
                                                <>Custom <strong>robotics system</strong> design, simulation, and <strong>physical prototyping</strong>.</>
                                            ) : service.id === 'iot' ? (
                                                <>Connected <strong>device ecosystems</strong> for real-time monitoring and <strong>automation</strong>.</>
                                            ) : service.shortDescription}
                                        </p>
                                        <div className="mt-auto flex flex-wrap gap-1.5">
                                            {service.technologies.slice(0, 3).map(tech => (
                                                <span key={tech} className="px-2.5 py-1 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-600 dark:text-brand-gray-500 text-[9px] font-bold uppercase tracking-widest rounded-md">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/contact" className="btn-primary group inline-flex">
                            <span className="text-xs">Request Consultation</span>
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

// ─── FEATURED PROJECTS ──────────────────────────────
const FeaturedProjects = () => {
    const featured = projects.slice(0, 3);
    const cardCount = featured.length;

    // Shared card renderer (keeps card design identical)
    const ProjectCard = ({ project }) => (
        <div className="bg-brand-white dark:bg-brand-dark group flex flex-col h-full rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700">
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
                <p className="text-brand-gray-700 dark:text-brand-gray-500 text-sm leading-relaxed mb-4 font-light line-clamp-2 transition-all duration-500 group-hover:line-clamp-none">{project.challenge}</p>

                {/* Reveal on hover: Objective */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 mb-0 group-hover:mb-4">
                    <p className="text-xs font-bold text-brand-gray-800 dark:text-brand-gray-300 italic mb-2">Goal: {project.objective}</p>
                </div>

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
                    <Link to="/projects" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black dark:text-brand-white flex items-center group/link">
                        <span>Explore Case Study</span>
                        <ArrowRight className="ml-3 w-4 h-4 group-hover/link:translate-x-2 transition-all" />
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* ── DESKTOP & MOBILE: Standard Grid Layout ── */}
            <section className="bg-brand-white dark:bg-brand-black py-16 sm:py-24 border-t border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300" id="featured-projects">
                <div className="section-container">
                    <FadeIn>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
                            <div>
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Case Studies</span>
                                <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
                            </div>
                            <Link to="/projects" className="text-[10px] font-black uppercase tracking-widest text-brand-black dark:text-brand-white hover:opacity-50 transition-opacity pb-2 border-b-2 border-brand-black dark:border-brand-white">
                                View All Cases
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {featured.map((project, idx) => (
                            <FadeIn key={project.id} delay={idx * 0.1} className="h-full">
                                <ProjectCard project={project} />
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/contact" className="btn-outline group inline-flex">
                            <span className="text-xs">Discuss Your Project</span>
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

// ─── CREDIBILITY SECTION ────────────────────────────
const CredibilitySection = () => (
    <section className="dark bg-brand-black dark:bg-brand-gray-900 py-16 sm:py-24 text-brand-white transition-colors duration-700" id="credibility">
        <div className="section-container">
            <FadeIn>
                <div className="text-center mb-20">
                    <span className="text-brand-gray-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Why Trust Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-white">Proof & Credibility</h2>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {credibility.map((item, idx) => {
                    const IconComp = iconMap[item.icon] || Award;
                    return (
                        <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                            <div className="text-center group p-8 lg:p-10 rounded-[2.5rem] border border-brand-gray-800 hover:border-brand-gray-600 transition-all duration-500 bg-brand-white/5 dark:bg-white/5 h-full flex flex-col justify-center">
                                <div className="p-5 bg-white/5 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500 shadow-sm">
                                    <IconComp className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-brand-white">{item.title}</h3>
                                <p className="text-brand-gray-600 dark:text-brand-gray-400 text-sm font-light leading-relaxed">{item.description}</p>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    </section>
);

// ─── TARGET AUDIENCE ────────────────────────────────
const TargetAudienceSection = () => (
    <section className="py-16 sm:py-24 bg-brand-gray-50 dark:bg-brand-dark/50 transition-colors duration-300" id="target-audience">
        <div className="section-container">
            <FadeIn>
                <div className="text-center mb-16">
                    <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Industries Served</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-brand-black dark:text-[#F3F4F6]">Who We Work With</h2>
                    <p className="text-brand-gray-700 dark:text-[#D1D5DB] max-w-2xl mx-auto font-light leading-relaxed">
                        From early-stage startups to government agencies, we partner with organizations solving real-world challenges through technology.
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
                {targetAudience.map((audience, idx) => {
                    const IconComp = iconMap[audience.icon] || Landmark;
                    return (
                        <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                            <div className="px-6 py-10 bg-brand-white dark:bg-brand-dark border border-brand-gray-100 dark:border-brand-gray-800 rounded-[2rem] text-center transition-all duration-300 hover:border-brand-gray-300 dark:hover:border-brand-gray-700 group hover:-translate-y-1 shadow-soft hover:shadow-premium h-full flex flex-col items-center justify-center">
                                <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500 shadow-md">
                                    <IconComp className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-brand-gray-600 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-brand-white text-[10px] uppercase tracking-[0.2em] transition-colors leading-tight block uppercase">{audience.name}</span>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    </section>
);

// ─── VISION / MISSION STRIP ─────────────────────────
const VisionMissionStrip = () => (
    <section className="bg-brand-gray-50 dark:bg-brand-black py-16 sm:py-24 border-t border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300" id="vision-mission">
        <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Vision Left */}
                <FadeIn className="h-full">
                    <div className="h-full p-10 lg:p-14 bg-brand-white dark:bg-brand-dark rounded-[2.5rem] shadow-premium dark:shadow-none dark:border border-brand-gray-800 flex flex-col justify-center">
                        <div className="w-12 h-12 rounded-xl bg-brand-gray-50 dark:bg-brand-gray-800 flex items-center justify-center mb-8 border border-brand-gray-100 dark:border-brand-gray-700 transition-colors">
                            <Target className="w-5 h-5 text-brand-black dark:text-brand-white" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white mb-6">
                            OUR VISION
                        </h2>

                        <p className="text-brand-gray-600 dark:text-brand-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                            {vision.statement}
                        </p>
                    </div>
                </FadeIn>

                {/* Mission Right */}
                <FadeIn delay={0.2} className="h-full">
                    <div className="h-full p-10 lg:p-14 bg-brand-white dark:bg-brand-dark rounded-[2.5rem] shadow-premium dark:shadow-none dark:border border-brand-gray-800 flex flex-col justify-center">
                        <div className="w-12 h-12 rounded-xl bg-brand-gray-50 dark:bg-brand-gray-800 flex items-center justify-center mb-8 border border-brand-gray-100 dark:border-brand-gray-700 transition-colors">
                            <ArrowRight className="w-5 h-5 text-brand-black dark:text-brand-white" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white mb-6">
                            OUR MISSION
                        </h2>

                        <p className="text-brand-gray-600 dark:text-brand-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                            {mission.statement}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

// ─── HOME PAGE ──────────────────────────────────────
const Home = () => (
    <div className="bg-brand-white dark:bg-brand-black transition-colors duration-300 overflow-x-hidden">
        <Hero />
        <LogoCloud />
        <ServicesOverview />
        <FeaturedProjects />
        <CredibilitySection />
        <TargetAudienceSection />
        <VisionMissionStrip />
    </div>
);

export default Home;
