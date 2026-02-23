import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, y = 20 }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
    >
        {children}
    </motion.div>
);

const Terms = () => {
    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen pt-32 pb-20 transition-colors duration-300">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-12">Terms of <br />Service</h1>
                        <p className="text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-16">Last Updated: February 2024</p>
                    </FadeIn>

                    <FadeIn delay={0.05}>
                        <div className="p-8 mb-16 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-[2rem] border border-brand-gray-100 dark:border-brand-gray-800">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-black dark:text-brand-white mb-4">Key Points Summary</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-brand-gray-700 dark:text-brand-gray-400 font-light">
                                    <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-brand-black dark:bg-brand-white shrink-0 opacity-50" />
                                    Consultancy services are provided "as is" and rely on current technological limits.
                                </li>
                                <li className="flex items-start text-sm text-brand-gray-700 dark:text-brand-gray-400 font-light">
                                    <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-brand-black dark:bg-brand-white shrink-0 opacity-50" />
                                    Intellectual property is jointly owned unless detailed in a Master Services Agreement.
                                </li>
                                <li className="flex items-start text-sm text-brand-gray-700 dark:text-brand-gray-400 font-light">
                                    <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-brand-black dark:bg-brand-white shrink-0 opacity-50" />
                                    LEAGUE holds no liability for third-party hardware or integration downtimes.
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    <div className="space-y-12 prose-premium">
                        <FadeIn delay={0.1}>
                            <section className="pb-12 border-b border-brand-gray-100 dark:border-brand-gray-900">
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">1. Engineering Consultations</h2>
                                <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    All technical advice and consultancy services provided by LEAGUE Consultancy are based on industry standards and current technological capabilities. While we strive for absolute precision, implementable results may vary based on site-specific factors and legacy hardware constraints.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <section className="pb-12 border-b border-brand-gray-100 dark:border-brand-gray-900">
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">2. Intellectual Property</h2>
                                <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    Unless otherwise specified in a separate MSA (Master Services Agreement), all custom AI models, robotic control logic, and IoT architectures developed during a project remain the joint intellectual property of LEAGUE and the Client.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <section className="pb-12 border-b border-brand-gray-100 dark:border-brand-gray-900">
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">3. Liability Limitations</h2>
                                <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    LEAGUE Consultancy holds no liability for production downtimes or hardware failures occurring during the integration of third-party robotics or automation systems, provided all safety protocols were adhered to during deployment.
                                </p>
                            </section>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
