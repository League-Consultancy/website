import React, { useEffect } from 'react';
import { Brain, Bot, Wifi, Settings, Code2, ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

// ─── SERVICE MODAL ──────────────────────────────────────────────
const ServiceModal = ({ service, onClose }) => {
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

    if (!service) return null;

    const IconComp = serviceIcons[service.icon] || Layers;
    const bgImage = serviceImages[service.id];

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
                className="relative w-full max-w-5xl bg-brand-black rounded-[2rem] border border-brand-gray-800 shadow-2xl overflow-hidden z-20 flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
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
                    <img src={bgImage} alt={service.title} className="w-full h-full object-cover dark:opacity-70 dark:grayscale dark:hover:grayscale-0 dark:hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-black/60 to-transparent pointer-events-none" />

                    <div className="absolute top-6 left-6 z-20">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 shadow-xl text-brand-white">
                            <IconComp className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="w-full md:w-3/5 p-8 sm:p-12 overflow-y-auto bg-brand-black text-brand-white">
                    <h3 className="text-3xl font-black uppercase tracking-tight leading-[1] mb-8 !text-brand-white">
                        {service.title}
                    </h3>

                    <div className="space-y-8 mb-8">
                        <div>
                            <p className="text-white/70 text-sm leading-relaxed text-justify">{service.shortDescription}</p>
                        </div>

                        {service.detailedDescription && (
                            <div>
                                <p className="text-white/50 text-sm leading-relaxed text-justify">{service.detailedDescription}</p>
                            </div>
                        )}

                        {service.deliverables && (
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Key Deliverables:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {service.deliverables.map((item, id) => (
                                        <li key={id} className="flex items-center text-xs text-white/80 font-medium">
                                            <div className="w-1.5 h-1.5 bg-brand-white rounded-full mr-3 opacity-50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-4 border-t border-white/10">
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                                {service.metrics && service.metrics.map((metric, mIdx) => (
                                    <div key={mIdx} className="px-4 py-2.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
                                        <p className="text-base font-black text-brand-white mb-0.5">{metric.split(' ')[0]}</p>
                                        <p className="text-[8px] uppercase tracking-[0.15em] text-white/50 font-bold">{metric.split(' ').slice(1).join(' ')}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {service.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-white/5 text-white/60 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-white/5">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex justify-between items-center group">
                        <span className="text-xs font-black uppercase tracking-widest">Inquire about {service.title}</span>
                        <Link to="/contact" className="w-12 h-12 bg-brand-white text-brand-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ─── SERVICE CARD ─────────────────────────────────────────────
const ServiceCard = ({ service, onClick }) => {
    const IconComp = serviceIcons[service.icon] || Layers;
    const bgImage = serviceImages[service.id];

    return (
        <div
            onClick={onClick}
            className="group block w-full h-full relative p-6 sm:p-8 bg-brand-gray-50/50 dark:bg-brand-dark rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-premium dark:hover:shadow-none dark:hover:border-brand-gray-600 hover:-translate-y-2 flex flex-col"
        >
            {/* Image container */}
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-brand-black">
                <img
                    src={bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-white dark:bg-brand-black/50 backdrop-blur-md rounded-xl text-brand-black dark:text-brand-white border border-brand-gray-100 dark:border-white/10 shadow-sm transition-colors group-hover:bg-brand-black group-hover:text-brand-white dark:group-hover:bg-brand-white dark:group-hover:text-brand-black">
                        <IconComp className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-brand-black dark:text-brand-white group-hover:text-brand-gray-800 dark:group-hover:text-brand-gray-200 transition-colors">
                    {service.title}
                </h3>

                <p className="text-sm text-brand-gray-600 dark:text-brand-gray-400 font-medium leading-relaxed mb-6 line-clamp-3 flex-1 text-justify">
                    {service.shortDescription}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-brand-gray-200 dark:border-brand-gray-800">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-500 group-hover:text-brand-black dark:group-hover:text-brand-white transition-colors">Explore Service</span>
                    <div className="w-8 h-8 rounded-full border border-brand-gray-200 dark:border-brand-gray-700 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black group-hover:text-brand-white dark:group-hover:bg-brand-white dark:group-hover:text-brand-black transition-all">
                        <ArrowRight className="w-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── MAIN SERVICES PAGE ─────────────────────────────────────────

const Services = () => {
    const [selectedService, setSelectedService] = React.useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-brand-white dark:bg-brand-black">
            {/* Hero Header */}
            <section className="relative w-full pt-32 pb-24 bg-brand-gray-50 dark:bg-brand-dark overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
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

            {/* Grid Section */}
            <section className="py-24 px-6 relative bg-brand-white dark:bg-brand-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceData.map((service, idx) => (
                            <FadeIn key={service.id} delay={idx * 0.1} className="h-full">
                                <ServiceCard service={service} onClick={() => setSelectedService(service)} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
                )}
            </AnimatePresence>

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
