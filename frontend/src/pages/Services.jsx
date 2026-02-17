import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Brain, Bot, Wifi, Settings, Code2, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services as serviceData } from '../data/companyData';

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

const serviceIcons = { Brain, Bot, Wifi, Settings, Code2 };

// ─── FOCUS MATH HELPERS ──────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }

function shadowFromNorm(n) {
    const blur = lerp(40, 6, n);
    const spread = lerp(-8, -1, n);
    const yOff = lerp(20, 4, n);
    const alpha = lerp(0.22, 0.08, n);
    return `0 ${yOff.toFixed(0)}px ${blur.toFixed(0)}px ${spread.toFixed(0)}px rgba(0,0,0,${alpha.toFixed(2)})`;
}


// ─── SERVICE CARD ────────────────────────────────────
// Receives its animation MotionValues as props from the parent.
// The card itself NEVER computes focus — only the parent does.
const ServiceCard = ({ service, index, mScale, mOpacity, mY, mShadow }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const IconComp = serviceIcons[service.icon] || Layers;

    // Build style object — only include motion props if they exist
    const motionStyle = {};
    if (mScale) motionStyle.scale = mScale;
    if (mOpacity) motionStyle.opacity = mOpacity;
    if (mY) motionStyle.y = mY;
    if (mShadow) motionStyle.boxShadow = mShadow;

    return (
        <FadeIn delay={index * 0.08}>
            <motion.div
                style={motionStyle}
                className="bg-brand-white dark:bg-brand-gray-900 p-8 lg:p-10 rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-sm hover:border-brand-black dark:hover:border-brand-white transition-colors duration-700 group flex flex-col h-full min-h-[500px] will-change-transform origin-center"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-black dark:text-[#E5E7EB] rounded-xl group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500">
                        <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-300 dark:text-brand-gray-700">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-brand-black dark:text-[#F3F4F6]">{service.title}</h3>
                <p className="text-base text-brand-gray-500 dark:text-brand-gray-400 leading-relaxed font-light mb-6 line-clamp-3">{service.shortDescription}</p>

                {/* Impact Metrics Block */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {service.metrics && service.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-3 bg-brand-gray-50 dark:bg-brand-gray-800/50 rounded-2xl border border-brand-gray-100 dark:border-brand-gray-800">
                            <p className="text-[12px] font-black text-brand-black dark:text-brand-white mb-0.5">{metric.split(' ')[0]}</p>
                            <p className="text-[7px] uppercase tracking-widest text-brand-gray-400 font-bold leading-tight">{metric.split(' ').slice(1).join(' ')}</p>
                        </div>
                    ))}
                </div>

                {/* Expandable Detail View */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-brand-black dark:text-brand-white hover:opacity-60 transition-opacity mb-6"
                >
                    <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.21, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pb-8 space-y-6">
                                <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm leading-relaxed font-light">
                                    {service.detailedDescription}
                                </p>

                                {/* Industries */}
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 block mb-3">Industries Served</span>
                                    <div className="flex flex-wrap gap-2">
                                        {service.industries.map(ind => (
                                            <span key={ind} className="px-3 py-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-brand-gray-100 dark:border-brand-gray-800">
                                                {ind}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 block mb-3">Tools & Platforms</span>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tools.map(tool => (
                                            <span key={tool} className="px-3 py-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-brand-gray-100 dark:border-brand-gray-800">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Technologies */}
                <div className="pt-8 border-t border-brand-gray-100 dark:border-brand-gray-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 block mb-4">Technologies</span>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-500 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-3 mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 block mb-2">Deliverables</span>
                    {service.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs font-bold uppercase tracking-widest text-brand-gray-600 dark:text-brand-gray-400 group/item">
                            <CheckCircle2 className="w-4 h-4 text-brand-black dark:text-brand-white mt-[-1px] group-hover/item:scale-125 transition-transform flex-shrink-0" />
                            <span>{del}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </FadeIn>
    );
};


// ─── DESKTOP: HORIZONTAL PINNED SCROLL + FOCUS ──────
// This component owns the MotionValues for every card.
// It subscribes to the track's x.on('change') and drives
// scale/opacity/y/shadow directly from position math.
// Zero re-renders during scroll.

const DesktopCarousel = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const cardWrapperRefs = useRef([]);
    const cardOffsetsRef = useRef([]); // center offset of each card in the track

    const [scrollDistance, setScrollDistance] = useState(0);

    // Per-card MotionValues (stable across renders)
    const count = serviceData.length;
    const mv0Scale = useMotionValue(1.06); const mv0Opacity = useMotionValue(1); const mv0Y = useMotionValue(0); const mv0Shadow = useMotionValue(shadowFromNorm(0));
    const mv1Scale = useMotionValue(0.94); const mv1Opacity = useMotionValue(0.7); const mv1Y = useMotionValue(8); const mv1Shadow = useMotionValue(shadowFromNorm(1));
    const mv2Scale = useMotionValue(0.94); const mv2Opacity = useMotionValue(0.7); const mv2Y = useMotionValue(8); const mv2Shadow = useMotionValue(shadowFromNorm(1));
    const mv3Scale = useMotionValue(0.94); const mv3Opacity = useMotionValue(0.7); const mv3Y = useMotionValue(8); const mv3Shadow = useMotionValue(shadowFromNorm(1));
    const mv4Scale = useMotionValue(0.94); const mv4Opacity = useMotionValue(0.7); const mv4Y = useMotionValue(8); const mv4Shadow = useMotionValue(shadowFromNorm(1));

    // Collect all motion value sets into array
    const allMV = [
        { scale: mv0Scale, opacity: mv0Opacity, y: mv0Y, shadow: mv0Shadow },
        { scale: mv1Scale, opacity: mv1Opacity, y: mv1Y, shadow: mv1Shadow },
        { scale: mv2Scale, opacity: mv2Opacity, y: mv2Y, shadow: mv2Shadow },
        { scale: mv3Scale, opacity: mv3Opacity, y: mv3Y, shadow: mv3Shadow },
        { scale: mv4Scale, opacity: mv4Opacity, y: mv4Y, shadow: mv4Shadow },
    ];

    // Measure horizontal overflow
    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                const totalWidth = trackRef.current.scrollWidth;
                const vpWidth = window.innerWidth;
                setScrollDistance(Math.max(totalWidth - vpWidth, 0));
            }
        };
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        measure();
        const t = setTimeout(measure, 250);
        window.addEventListener('resize', measure);
        return () => { window.removeEventListener('resize', measure); ro.disconnect(); clearTimeout(t); };
    }, []);

    // Scroll-driven horizontal translation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });
    const x = useTransform(scrollYProgress, [0, 0.95], [0, -scrollDistance]);

    // Measure card center offsets relative to track start (at x=0)
    const measureCards = useCallback(() => {
        if (!trackRef.current) return;
        const trackLeft = trackRef.current.getBoundingClientRect().left;
        const currentX = x.get();
        const offsets = [];
        cardWrapperRefs.current.forEach(el => {
            if (el) {
                const rect = el.getBoundingClientRect();
                const trueLeft = (rect.left - trackLeft) - currentX;
                offsets.push(trueLeft + rect.width / 2);
            }
        });
        cardOffsetsRef.current = offsets;
    }, [x]);

    // Subscribe to x changes to drive focus animation
    useEffect(() => {
        const t1 = setTimeout(measureCards, 300);
        const t2 = setTimeout(measureCards, 600);
        const handleResize = () => measureCards();
        window.addEventListener('resize', handleResize);

        const unsubscribe = x.on('change', (currentX) => {
            const offsets = cardOffsetsRef.current;
            if (offsets.length === 0) return;
            const vpCenter = window.innerWidth / 2;
            const maxDist = window.innerWidth * 0.55;

            for (let i = 0; i < offsets.length && i < allMV.length; i++) {
                const cardVisualCenter = offsets[i] + currentX;
                const distance = Math.abs(cardVisualCenter - vpCenter);
                const n = Math.min(distance / maxDist, 1); // 0 = centered, 1 = far

                allMV[i].scale.set(lerp(1.06, 0.94, n));
                allMV[i].opacity.set(lerp(1, 0.7, n));
                allMV[i].y.set(lerp(0, 10, n));
                allMV[i].shadow.set(shadowFromNorm(n));
            }
        });

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener('resize', handleResize);
            unsubscribe();
        };
    }, [x, measureCards]);

    // Re-measure when scrollDistance finalizes
    useEffect(() => {
        if (scrollDistance > 0) {
            const t = setTimeout(measureCards, 100);
            return () => clearTimeout(t);
        }
    }, [scrollDistance, measureCards]);

    return (
        <div className="hidden md:block">
            <section
                ref={sectionRef}
                id="services-horizontal"
                className="relative"
                style={{ height: `calc(100vh + ${scrollDistance}px)` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    <motion.div
                        ref={trackRef}
                        className="flex gap-12 items-center px-[10vw] will-change-transform"
                        style={{ x }}
                    >
                        {serviceData.map((service, idx) => (
                            <div
                                key={service.id}
                                ref={el => cardWrapperRefs.current[idx] = el}
                                className="min-w-[450px] w-[35vw] max-w-[550px] flex-shrink-0 py-8"
                            >
                                <ServiceCard
                                    service={service}
                                    index={idx}
                                    mScale={allMV[idx]?.scale}
                                    mOpacity={allMV[idx]?.opacity}
                                    mY={allMV[idx]?.y}
                                    mShadow={allMV[idx]?.shadow}
                                />
                            </div>
                        ))}

                        {/* End-of-track CTA */}
                        <div className="min-w-[500px] flex-shrink-0 flex items-center justify-center p-12">
                            <div className="p-16 bg-brand-black dark:bg-brand-gray-900 rounded-[3rem] text-center text-brand-white w-full shadow-2xl border border-brand-gray-800">
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Ready to Accelerate?</h2>
                                <div className="flex flex-col space-y-4 items-center">
                                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-brand-white text-brand-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all group">
                                        <span>Start Your Journey</span>
                                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-transparent border border-brand-gray-700 text-brand-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-gray-800 transition-all group">
                                        <span>Request Quote</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};


// ─── MOBILE: HORIZONTAL SNAP SCROLL + FOCUS ─────────
// Uses a passive scroll listener on the scrollable container.
// On each scroll event, computes each card's distance from
// container center and applies transforms via direct DOM writes.
// No React re-renders, no MotionValues needed.

const MobileCarousel = () => {
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);

    const updateFocus = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const vpCenter = container.clientWidth / 2;
        const maxDist = container.clientWidth * 0.5;

        cardRefs.current.forEach((el) => {
            if (!el) return;
            const cardLeft = el.offsetLeft - scrollLeft;
            const cardCenter = cardLeft + el.offsetWidth / 2;
            const distance = Math.abs(cardCenter - vpCenter);
            const n = Math.min(distance / maxDist, 1);

            const s = lerp(1.06, 0.94, n);
            const o = lerp(1, 0.7, n);
            const ty = lerp(0, 8, n);

            el.style.transform = `scale(${s}) translateY(${ty}px)`;
            el.style.opacity = `${o}`;
            el.style.boxShadow = shadowFromNorm(n);
        });
    }, []);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        container.addEventListener('scroll', updateFocus, { passive: true });
        updateFocus();
        const t = setTimeout(updateFocus, 100);
        return () => { container.removeEventListener('scroll', updateFocus); clearTimeout(t); };
    }, [updateFocus]);

    return (
        <div className="md:hidden py-16 px-6">
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            >
                {serviceData.map((service, idx) => (
                    <div
                        key={service.id}
                        ref={el => cardRefs.current[idx] = el}
                        className="min-w-[300px] w-[85vw] max-w-[380px] flex-shrink-0 snap-center will-change-transform"
                        style={{ transformOrigin: 'center center' }}
                    >
                        <ServiceCard service={service} index={idx} />
                    </div>
                ))}
            </div>
        </div>
    );
};


// ─── MAIN SERVICES PAGE ──────────────────────────────

const Services = () => {
    return (
        <div className="bg-brand-white dark:bg-brand-black transition-colors duration-300">
            {/* Header Section */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark py-32 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                            <FadeIn>
                                <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Expertise</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                                    Engineering <br />Services
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 max-w-3xl leading-relaxed font-light">
                                    We deliver end-to-end technology solutions across five core domains — from custom AI models and robotics prototyping to industrial IoT systems and enterprise software.
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
                                        src="/assets/services_hero.png"
                                        alt="LEAGUE Consultancy Services"
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-100"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/40 via-transparent to-white/10 pointer-events-none" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="bg-brand-white dark:bg-brand-black">
                <DesktopCarousel />
                <MobileCarousel />
            </section>

            {/* CTA after Services */}
            <section className="pb-32">
                <div className="section-container">
                    <FadeIn>
                        <div className="p-12 lg:p-16 bg-brand-black dark:bg-brand-gray-900 rounded-[3rem] text-center text-brand-white">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Ready to Build Something Great?</h2>
                            <p className="text-brand-gray-500 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                                Let us understand your challenge and propose a tailored engineering solution.
                            </p>
                            <Link to="/contact" id="services-page-cta" className="inline-flex items-center justify-center px-10 py-4 bg-brand-white text-brand-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all group">
                                <span>Request Consultation</span>
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Methodology Workflow */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark/50 py-32 transition-colors duration-300">
                <div className="section-container">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Process</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">How We Work</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We deeply understand your problem, constraints, and technical requirements.' },
                            { step: '02', title: 'Design & Prototype', desc: 'Architecture design, rapid prototyping, and feasibility validation.' },
                            { step: '03', title: 'Development', desc: 'Full engineering implementation with iterative testing and feedback.' },
                            { step: '04', title: 'Deployment & Support', desc: 'Production deployment, documentation, and ongoing maintenance.' }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="text-center group">
                                    <div className="w-20 h-20 rounded-2xl border-2 border-brand-gray-200 dark:border-brand-gray-800 flex items-center justify-center text-brand-black dark:text-brand-white mx-auto mb-8 text-2xl font-black group-hover:border-brand-black dark:group-hover:border-brand-white group-hover:scale-110 transition-all duration-500">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold mb-3 uppercase text-xs tracking-widest text-brand-black dark:text-brand-white">{item.title}</h4>
                                    <p className="text-sm text-brand-gray-500 dark:text-brand-gray-400 font-light leading-relaxed px-4">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
