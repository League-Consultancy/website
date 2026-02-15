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

const Privacy = () => {
    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen py-32 transition-colors duration-300">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-12">Privacy <br />Manifesto</h1>
                        <p className="text-brand-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-16">Data Sovereignty: February 2024</p>
                    </FadeIn>

                    <div className="space-y-16">
                        <FadeIn delay={0.1}>
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">1. Data Collection Range</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    We collect telemetry data from industrial IoT nodes solely for the purpose of predictive maintenance and system optimization. Personal data from consultancy partners is restricted to contact and billing identifiers.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">2. Neural Network Privacy</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    All AI training processes conducted on client datasets are performed on-site or within secure, isolated VPCs. No client data is utilized to train public or shared models without explicit encrypted consent.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">3. Zero-Trust Access</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    We operate on a zero-trust architecture. Access to project repositories and industrial dashboards is granted via multi-factor hardware keys and restricted to specific IP ranges.
                                </p>
                            </section>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
