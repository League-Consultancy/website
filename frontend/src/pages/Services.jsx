import React, { useRef, useEffect } from 'react';
import { Brain, Bot, Wifi, Settings, Code2, ArrowRight, Layers } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services as serviceData } from '../data/companyData';

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

const serviceIcons = { Brain, Bot, Wifi, Settings, Code2 };

const serviceImages = {
    1: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400",
    2: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1400",
    3: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1400",
    4: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400",
    5: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1400",
};

// ─── SERVICE SLIDE (Full-Bleed with centered content) ────────────

const ServiceSlide = ({ service, index, total }) => {
    const IconComp = serviceIcons[service.icon] || Layers;
    const bgImage = serviceImages[service.id];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <div className="relative w-screen shrink-0 overflow-hidden group" style={{ height: 'calc(100dvh - 80px)' }}>
            {/* Full-bleed Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-brand-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-brand-black/40" />
            </div>

            {/* Content — full-height flex, vertically centered */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={containerVariants}
                className="relative z-10 h-full w-full flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 md:py-10 text-brand-white"
            >
                {/* Top Row: Icon + Counter */}
                <div className="flex items-center justify-between">
                    <motion.div variants={itemVariants} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 shadow-xl group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500">
                        <IconComp className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>
                    <motion.span variants={itemVariants} className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white/40">
                        {String(index + 1).padStart(2, '0')} <span className="text-white/20 mx-1.5">/</span> {String(total).padStart(2, '0')}
                    </motion.span>
                </div>

                {/* Middle: Title + Description (vertically centered) */}
                <div className="flex-1 flex flex-col justify-center max-w-4xl py-4 scrollbar-hide overflow-y-auto max-h-[50dvh] pb-8 pr-4">
                    <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-[0.9] text-brand-white">
                        {service.title}
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-light max-w-2xl mb-4">
                        {service.shortDescription}
                    </motion.p>
                    {service.detailedDescription && (
                        <motion.p variants={itemVariants} className="hidden md:block text-sm md:text-base text-white/50 leading-relaxed font-light max-w-2xl mb-6">
                            {service.detailedDescription}
                        </motion.p>
                    )}

                    {/* Deliverables */}
                    {service.deliverables && (
                        <motion.div variants={itemVariants} className="mb-6">
                            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Key Deliverables:</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
                                {service.deliverables.map((item, id) => (
                                    <li key={id} className="flex items-center text-xs sm:text-sm text-white/80 font-medium">
                                        <div className="w-1.5 h-1.5 bg-brand-white rounded-full mr-3 opacity-50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>

                {/* Bottom: Metrics + Tech Tags + CTA */}
                <div className="max-w-4xl flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
                    <div>
                        {/* Impact Metrics */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 md:gap-3 mb-4">
                            {service.metrics && service.metrics.map((metric, mIdx) => (
                                <div key={mIdx} className="px-4 py-2.5 md:px-5 md:py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
                                    <p className="text-base md:text-lg font-black text-brand-white mb-0.5">{metric.split(' ')[0]}</p>
                                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-white/50 font-bold">{metric.split(' ').slice(1).join(' ')}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Tech Tags */}
                        <motion.div variants={itemVariants} className="pt-4 border-t border-white/10">
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {service.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-white/5 text-white/60 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5 hover:border-brand-gray-700 transition-all cursor-default">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="shrink-0">
                        <Link to="/contact" className="inline-flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-brand-white text-brand-black rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <span>Inquire Now</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

// ─── MAIN SERVICES PAGE ─────────────────────────────────────────

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const totalServices = serviceData.length;

    const x = useTransform(scrollYProgress, (progress) => {
        const vw = typeof window !== 'undefined' ? window.innerWidth : 1920;
        return -(progress * (totalServices - 1) * vw);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = 'auto';
        return () => { document.documentElement.style.scrollBehavior = 'smooth'; };
    }, []);

    return (
        <div className="w-full bg-brand-white dark:bg-brand-black">
            {/* Hero Header */}
            <section className="relative w-full flex items-center justify-center bg-brand-gray-50 dark:bg-brand-dark overflow-hidden transition-colors duration-300" style={{ height: 'calc(100dvh - 80px)' }}>
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                            <FadeIn><span className="premium-label">Our Expertise</span></FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-brand-black dark:text-brand-white">
                                    Engineering <br />Solutions
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 font-light max-w-2xl leading-relaxed text-justify">
                                    We architect <strong>future-ready systems</strong> across <strong>AI</strong>, <strong>Robotics</strong>, and <strong>IoT</strong> — bridging the gap between high-level theory and industrial reality.
                                </p>
                            </FadeIn>
                        </div>
                        <FadeIn delay={0.3} className="relative flex justify-center lg:justify-end">
                            <div className="relative p-6 md:p-8 bg-brand-black dark:bg-brand-gray-900/40 backdrop-blur-3xl rounded-[3rem] border border-brand-gray-800 dark:border-brand-gray-800 shadow-2xl animate-float">
                                <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-black aspect-square w-full max-w-[350px] lg:max-w-[400px]">
                                    <img src="/assets/services_hero.png" alt="Engineering Portfolio" className="w-full h-full object-cover contrast-[1.15] brightness-[1.1] saturate-[0.8] transition-all duration-700 dark:grayscale dark:opacity-70" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/60 to-transparent" />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Horizontal Scroll Section */}
            <section
                ref={containerRef}
                className="relative bg-brand-black"
                style={{ height: `${totalServices * 100}vh` }}
            >
                <div className="sticky top-[80px] w-full overflow-hidden" style={{ height: 'calc(100dvh - 80px)' }}>
                    <motion.div
                        style={{ x, willChange: "transform" }}
                        className="flex h-full"
                    >
                        {serviceData.map((service, idx) => (
                            <ServiceSlide key={service.id} service={service} index={idx} total={totalServices} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* After-Scroll Sections */}
            <div className="relative z-20 bg-brand-white dark:bg-brand-black border-t border-brand-gray-100 dark:border-brand-gray-900">
                {/* Methodology */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-24">
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.4em] text-[11px] mb-6 block">Our Process</span>
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-brand-black dark:text-brand-white">The Engineering Loop</h2>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Methodology Steps */}
                            {[
                                { step: '01', title: 'Extraction', desc: 'Understanding constraints and defining the problem vector.' },
                                { step: '02', title: 'Synthesis', desc: 'Rapid prototyping and mathematical validation.' },
                                { step: '03', title: 'Realization', desc: 'Full-scale engineering with rigorous testing.' },
                                { step: '04', title: 'Operation', desc: 'Deployment, scaling, and lifecycle support.' }
                            ].map((item, idx) => (
                                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                                    <div className="p-8 lg:p-10 rounded-[2.5rem] bg-brand-gray-50 dark:bg-brand-dark border border-brand-gray-100 dark:border-brand-gray-900 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 text-center group h-full flex flex-col justify-center">
                                        <div className="w-16 h-16 rounded-2xl border-2 border-brand-gray-200 dark:border-brand-gray-800 flex items-center justify-center text-brand-black dark:text-brand-white mx-auto mb-8 text-xl font-black group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500 shadow-md">
                                            {item.step}
                                        </div>
                                        <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-brand-black dark:text-brand-white">{item.title}</h4>
                                        <p className="text-xs text-brand-gray-700 dark:text-brand-gray-400 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="dark p-16 sm:p-24 lg:p-32 bg-brand-black dark:bg-brand-gray-900 rounded-[4rem] text-center text-brand-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-800 to-brand-black opacity-50 group-hover:scale-110 transition-transform duration-[3000ms]" />
                                <div className="relative z-10">
                                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85] text-brand-white">Ready to Build <br />Impactful Tech?</h2>
                                    <p className="text-brand-gray-600 dark:text-brand-gray-400 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-14 leading-relaxed">
                                        Align your project with our engineering expertise. Let's build something that matters.
                                    </p>
                                    <Link to="/contact" id="services-page-cta" className="btn-primary">
                                        <span>Request Consultation</span>
                                        <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
