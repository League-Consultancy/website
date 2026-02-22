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
        <div className="bg-brand-white dark:bg-brand-black min-h-screen pt-32 pb-20 transition-colors duration-300">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-12">Privacy <br />Manifesto</h1>
                        <p className="text-brand-gray-600 dark:text-brand-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-16">Data Sovereignty: February 2024</p>
                    </FadeIn>

                    <FadeIn delay={0.05}>
                        <div className="p-8 mb-16 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-[2rem] border border-brand-gray-100 dark:border-brand-gray-800">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-black dark:text-brand-white mb-4">Key Privacy Commitments</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-brand-gray-700 dark:text-brand-gray-400 font-light">
                                    <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-brand-black dark:bg-brand-white shrink-0 opacity-50" />
                                    Data is collected solely for predictive maintenance and billing purposes.
                                </li>
                                <li className="flex items-start text-sm text-brand-gray-700 dark:text-brand-gray-400 font-light">
                                    <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-brand-black dark:bg-brand-white shrink-0 opacity-50" />
                                    Client datasets are never used to train public models without explicit consent.
                                </li>
                                <li className="flex items-start text-sm text-brand-gray-700 dark:text-brand-gray-400 font-light">
                                    <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-brand-black dark:bg-brand-white shrink-0 opacity-50" />
                                    Strict zero-trust access control guarantees isolated data handling.
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    <div className="space-y-12">
                        <FadeIn delay={0.1}>
                            <section className="pb-12 border-b border-brand-gray-100 dark:border-brand-gray-900">
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">1. Data Collection Range</h2>
                                <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    We collect telemetry data from industrial IoT nodes solely for the purpose of predictive maintenance and system optimization. Personal data from consultancy partners is restricted to contact and billing identifiers.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <section className="pb-12 border-b border-brand-gray-100 dark:border-brand-gray-900">
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">2. Neural Network Privacy</h2>
                                <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
                                    All AI training processes conducted on client datasets are performed on-site or within secure, isolated VPCs. No client data is utilized to train public or shared models without explicit encrypted consent.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <section className="pb-12 border-b border-brand-gray-100 dark:border-brand-gray-900">
                                <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-brand-black dark:text-brand-white">3. Zero-Trust Access</h2>
                                <p className="text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
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
