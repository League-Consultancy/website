import React, { useState } from 'react';
import { Brain, Bot, Wifi, Settings, Code2, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

const ServiceCard = ({ service, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const IconComp = serviceIcons[service.icon] || Layers;

    return (
        <FadeIn delay={index * 0.08}>
            <div className="bg-brand-white dark:bg-brand-gray-900 p-10 lg:p-14 rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-sm hover:shadow-2xl hover:border-brand-black dark:hover:border-brand-white transition-all duration-700 group flex flex-col">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-black dark:text-[#E5E7EB] rounded-xl group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500">
                        <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-300 dark:text-brand-gray-700">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4 leading-none text-brand-black dark:text-[#F3F4F6]">{service.title}</h3>
                <p className="text-lg text-brand-gray-500 dark:text-brand-gray-400 leading-relaxed font-light mb-8">{service.shortDescription}</p>

                {/* Impact Metrics Block */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {service.metrics && service.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800/50 rounded-2xl border border-brand-gray-100 dark:border-brand-gray-800">
                            <p className="text-[14px] font-black text-brand-black dark:text-brand-white mb-1">{metric.split(' ')[0]}</p>
                            <p className="text-[8px] uppercase tracking-widest text-brand-gray-400 font-bold leading-tight">{metric.split(' ').slice(1).join(' ')}</p>
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
                                            <span key={ind} className="px-3 py-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-brand-gray-100 dark:border-brand-gray-700">
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
                                            <span key={tool} className="px-3 py-1.5 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-brand-gray-100 dark:border-brand-gray-700">
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
            </div>
        </FadeIn>
    );
};

const Services = () => {
    return (
        <div className="bg-brand-white dark:bg-brand-black transition-colors duration-300">
            {/* Header Section */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark py-32 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Expertise</span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Engineering <br />Services
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 max-w-3xl leading-relaxed font-light">
                                We deliver end-to-end technology solutions across five core domains — from custom AI models and robotics prototyping to industrial IoT systems and enterprise software.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Services Grid with Alternating Backgrounds */}
            <section className="py-24 md:py-32">
                <div className="section-container">
                    <div className="space-y-12">
                        {serviceData.map((service, idx) => (
                            <div key={service.id} className={`${idx % 2 === 0 ? '' : 'lg:translate-x-12'} transition-transform duration-700`}>
                                <ServiceCard service={service} index={idx} />
                            </div>
                        ))}
                    </div>
                </div>
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
