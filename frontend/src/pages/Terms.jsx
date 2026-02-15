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
        <div className="bg-brand-white dark:bg-brand-black min-h-screen py-32 transition-colors duration-300">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-12">Terms of <br />Service</h1>
                        <p className="text-brand-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-16">Last Updated: February 2024</p>
                    </FadeIn>

                    <div className="space-y-16">
                        <FadeIn delay={0.1}>
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">1. Engineering Consultations</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    All technical advice and consultancy services provided by LEAGUE Consultancy are based on industry standards and current technological capabilities. While we strive for absolute precision, implementable results may vary based on site-specific factors and legacy hardware constraints.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">2. Intellectual Property</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    Unless otherwise specified in a separate MSA (Master Services Agreement), all custom AI models, robotic control logic, and IoT architectures developed during a project remain the joint intellectual property of LEAGUE and the Client.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">3. Liability Limitations</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light">
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
