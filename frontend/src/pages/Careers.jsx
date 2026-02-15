import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase, Sparkles, GraduationCap, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobOpenings, cultureBenefits } from '../data/careersData';

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

const Careers = () => {
    const [filter, setFilter] = useState('All');
    const departments = ['All', ...new Set(jobOpenings.map(j => j.department))];

    const filteredJobs = filter === 'All'
        ? jobOpenings
        : jobOpenings.filter(j => j.department === filter);

    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-300">
            {/* Header */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark py-32 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Join Our Mission</span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Shape the <br />Future of Tech
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-brand-gray-600 dark:text-[#D1D5DB] max-w-2xl font-light leading-relaxed">
                                We're looking for visionary engineers, designers, and problem-solvers to build the next generation of industrial breakthroughs.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Culture Stats */}
            <section className="py-24 border-b border-brand-gray-100 dark:border-brand-gray-900">
                <div className="section-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Remote First", icon: MapPin, val: "Global" },
                            { label: "R&D Focused", icon: Sparkles, val: "25% Time" },
                            { label: "Learning", icon: GraduationCap, val: "Unlimited" },
                            { label: "Team Size", icon: Users, val: "40+ Experts" }
                        ].map((stat, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="text-center group">
                                    <div className="w-12 h-12 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all">
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-2xl font-black uppercase tracking-tighter mb-1 leading-none">{stat.val}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400">{stat.label}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Filter */}
            <section className="py-24">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
                        <FadeIn>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">Open Positions</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">
                                {departments.map(dept => (
                                    <button
                                        key={dept}
                                        onClick={() => setFilter(dept)}
                                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === dept ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black' : 'text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white'}`}
                                    >
                                        {dept}
                                    </button>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className="space-y-6">
                        {filteredJobs.map((job, idx) => (
                            <FadeIn key={job.id} delay={idx * 0.05}>
                                <Link
                                    to="/contact"
                                    className="group block p-8 lg:p-10 bg-white dark:bg-[#1A1A1A] border border-brand-gray-100 dark:border-brand-gray-800 rounded-[2.5rem] hover:border-brand-black dark:hover:border-brand-white transition-all duration-500 hover:shadow-2xl"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <span className="px-3 py-1 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-gray-400 text-[8px] font-black uppercase tracking-widest rounded-full">{job.department}</span>
                                                <span className="flex items-center text-[8px] font-black uppercase tracking-widest text-brand-gray-300"><MapPin className="w-2.5 h-2.5 mr-1" /> {job.location}</span>
                                            </div>
                                            <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-brand-gray-600 dark:group-hover:text-brand-gray-400 transition-colors">{job.title}</h3>
                                            <p className="text-sm text-brand-gray-500 font-light max-w-xl leading-relaxed">{job.description}</p>
                                        </div>
                                        <div className="flex items-center md:flex-col md:items-end gap-6 md:gap-4">
                                            <div className="text-right">
                                                <p className="text-lg font-black tracking-tighter text-brand-black dark:text-brand-white">{job.salary}</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400">{job.experience}</p>
                                            </div>
                                            <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-2xl group-hover:bg-brand-black group-hover:text-brand-white dark:group-hover:bg-brand-white dark:group-hover:text-brand-black transition-all">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture & Benefits */}
            <section className="py-32 bg-brand-gray-50 dark:bg-brand-dark/50 overflow-hidden">
                <div className="section-container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeIn>
                            <div>
                                <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Beyond the Code</span>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">Engineering <br />Excellence Culture</h2>
                                <p className="text-lg text-brand-gray-500 dark:text-[#D1D5DB] font-light leading-relaxed mb-12">
                                    We believe great products are built by teams that have the freedom to experiment and the support to grow.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {cultureBenefits.map(benefit => (
                                        <div key={benefit} className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest text-brand-gray-700 dark:text-brand-gray-300">
                                            <div className="w-1.5 h-1.5 bg-brand-black dark:bg-brand-white rounded-full" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="relative aspect-square">
                                <div className="absolute inset-10 bg-brand-black dark:bg-brand-white rounded-[4rem] rotate-6 group-hover:rotate-12 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-brand-gray-100 dark:bg-brand-gray-900 rounded-[4rem] border border-brand-gray-200 dark:border-brand-gray-800 flex items-center justify-center p-16">
                                    <div className="text-center">
                                        <Heart className="w-16 h-16 text-brand-black dark:text-brand-white mx-auto mb-8 animate-pulse" />
                                        <p className="text-2xl font-black uppercase tracking-tighter leading-tight">Built with <br />Passion</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
