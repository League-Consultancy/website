import React from 'react';
import { Target, Users, Landmark, Award, ArrowRight, GraduationCap, ShieldCheck, Handshake, User, Cpu, Wrench, Monitor, CircuitBoard, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { company, vision, mission, teams, differentiators, credibility, techStack } from '../data/companyData';

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

const credIconMap = { GraduationCap, Award, ShieldCheck, Handshake };

const About = () => {
    return (
        <div className="bg-brand-white dark:bg-brand-black transition-colors duration-300">
            {/* ─── HEADER ─────────────────────────────────── */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark py-32 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                            <FadeIn>
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Story</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[1.1] text-brand-black dark:text-[#F3F4F6]">
                                    Innovation Driven <br />Engineering
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-xl text-brand-gray-600 dark:text-[#D1D5DB] max-w-3xl leading-relaxed font-light text-justify">
                                    {company.longDescription[0]}
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
                                        src="/assets/about_hero.png"
                                        alt="LEAGUE Consultancy About"
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

            {/* ─── ABOUT LONG DESCRIPTION ─────────────────── */}
            <section className="py-32">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <FadeIn>
                            <div>
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">About LEAGUE</span>
                                <div className="space-y-6">
                                    {company.longDescription.map((para, idx) => (
                                        <p key={idx} className="text-[17px] text-brand-gray-600 dark:text-[#D1D5DB] leading-relaxed font-light text-justify">
                                            {idx === 0 ? (
                                                <><strong>LEAGUE Consultancy</strong> is an <strong>innovation driven engineering</strong> services company specializing in <strong>Artificial Intelligence</strong>, Robotics, <strong>IoT systems</strong>, Automation, and advanced software development.</>
                                            ) : para}
                                        </p>
                                    ))}
                                </div>
                                <div className="mt-10 p-8 lg:p-12 bg-gradient-to-br from-brand-gray-50 to-white dark:from-brand-gray-900 dark:to-brand-black rounded-3xl border border-brand-gray-100 dark:border-brand-gray-800 shadow-soft">
                                    <p className="text-2xl md:text-3xl font-display font-black tracking-tight italic text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-brand-gray-500 dark:from-brand-white dark:to-brand-gray-400 leading-tight">
                                        "At LEAGUE Consultancy, <br />
                                        we don't just build systems <br />
                                        we engineer impact."
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* What Makes Us Different */}
                        <FadeIn delay={0.2}>
                            <div>
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Advantage</span>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">What Makes Us <strong>Different</strong></h3>
                                <div className="space-y-6">
                                    {differentiators.map((diff, idx) => (
                                        <div key={idx} className="flex space-x-5 group hover:-translate-x-1 transition-transform duration-500">
                                            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gray-100 dark:bg-brand-gray-800 flex items-center justify-center text-brand-black dark:text-brand-white text-xs font-black group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500 shadow-md">
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                            <p className="text-brand-gray-700 dark:text-brand-gray-400 font-light leading-relaxed text-justify">{diff}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── VISION & MISSION ──────────────────────── */}
            <section className="py-32 bg-brand-gray-50 dark:bg-brand-dark/50">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <FadeIn className="h-full">
                            <div className="h-full p-10 lg:p-14 bg-brand-white dark:bg-brand-dark rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-premium transition-transform duration-500 hover:-translate-y-2 group flex flex-col justify-center">
                                <div className="inline-flex mx-auto p-4 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-black dark:text-brand-white rounded-2xl mb-10 transition-colors duration-300 group-hover:bg-brand-black group-hover:text-brand-white dark:group-hover:bg-brand-white dark:group-hover:text-brand-black w-fit">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl text-center font-black uppercase mb-8 tracking-tighter text-brand-black dark:text-[#F3F4F6]">Our <strong>Vision</strong></h2>
                                <p className="text-xl text-brand-gray-700 dark:text-brand-gray-400 leading-relaxed font-light mb-8 flex-grow">
                                    {vision.statement}
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="h-full">
                            <div className="h-full p-10 lg:p-14 bg-brand-white dark:bg-brand-dark rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-premium transition-transform duration-500 hover:-translate-y-2 group flex flex-col justify-center">
                                <div className="inline-flex mx-auto p-4 bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-black dark:text-brand-white rounded-2xl mb-10 transition-colors duration-300 group-hover:bg-brand-black group-hover:text-brand-white dark:group-hover:bg-brand-white dark:group-hover:text-brand-black w-fit">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl text-center font-black uppercase mb-8 tracking-tighter text-brand-black dark:text-[#F3F4F6]">Our <strong>Mission</strong></h2>
                                <p className="text-xl text-brand-gray-700 dark:text-brand-gray-400 leading-relaxed font-light mb-8 flex-grow">
                                    {mission.statement}
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Core Philosophy Banner */}
                    <FadeIn delay={0.3}>
                        <div className="mt-20 p-10 lg:p-14 bg-brand-black dark:bg-[#1E1E1E] rounded-[2.5rem] text-brand-white text-center shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gray-800 to-transparent"></div>
                            <span className="text-brand-gray-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Core Philosophy</span>
                            <p className="text-2xl md:text-3xl font-black tracking-tight max-w-3xl mx-auto leading-snug mb-10">
                                {company.corePhilosophy}
                            </p>
                            <Link to="/contact" className="inline-flex items-center space-x-3 px-8 py-4 bg-brand-white text-brand-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                                <span>Start Collaboration</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ─── OUR TEAM ─────────────────────────────── */}
            <section className="py-32 bg-brand-white dark:bg-brand-black transition-colors duration-300">
                <div className="section-container">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The People</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black dark:text-brand-white">Our Team</h2>
                        </div>
                    </FadeIn>

                    <div className="space-y-24">
                        {teams.map((team, idx) => (
                            <div key={idx} className="team-category">
                                <FadeIn>
                                    <h3 className="text-2xl font-black uppercase tracking-tight border-b border-brand-gray-100 dark:border-brand-gray-800 pb-4 mb-10 text-brand-black dark:text-brand-white">{team.name}</h3>
                                </FadeIn>

                                {team.members.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {team.members.map((member, mIdx) => (
                                            <FadeIn key={mIdx} delay={mIdx * 0.1} className="h-full">
                                                <div className="group h-full rounded-[2rem] border border-brand-gray-100 dark:border-brand-gray-800 bg-brand-gray-50 dark:bg-brand-dark p-8 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 flex flex-col items-center text-center">
                                                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-brand-white dark:border-brand-gray-700 mb-6 bg-brand-gray-200 dark:bg-brand-gray-800 flex items-center justify-center shadow-inner">
                                                        {member.image ? (
                                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                        ) : (
                                                            <User className="w-12 h-12 text-brand-gray-400 dark:text-brand-gray-500 group-hover:scale-110 transition-transform duration-500" />
                                                        )}
                                                    </div>
                                                    <h4 className="text-xl font-bold text-brand-black dark:text-brand-white mb-2">{member.name}</h4>
                                                    <span className="text-xs font-bold text-brand-gray-600 dark:text-brand-gray-400 uppercase tracking-widest mb-6 inline-block bg-brand-white dark:bg-brand-gray-800 px-3 py-1.5 rounded-lg border border-brand-gray-100 dark:border-brand-gray-700">{member.role}</span>
                                                    {member.linkedin && (
                                                        <div className="mt-auto w-full pt-4">
                                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl border border-brand-gray-200 dark:border-brand-gray-700 text-[10px] font-black uppercase tracking-widest hover:bg-brand-black hover:text-brand-white dark:hover:bg-brand-white dark:hover:text-brand-black transition-all">
                                                                LinkedIn Profile
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </FadeIn>
                                        ))}
                                    </div>
                                ) : (
                                    <FadeIn>
                                        <div className="p-10 border border-dashed border-brand-gray-200 dark:border-brand-gray-800 rounded-[2rem] text-center bg-brand-gray-50/50 dark:bg-brand-dark/50">
                                            <p className="text-brand-gray-500 dark:text-brand-gray-400 font-medium text-sm">We are expanding this team. Member profiles will be updated soon.</p>
                                        </div>
                                    </FadeIn>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CREDIBILITY ───────────────────────────── */}
            <section className="bg-brand-black dark:bg-brand-gray-900 py-32 text-brand-white transition-colors duration-1000">
                <div className="section-container">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <span className="text-brand-gray-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Trust & Recognition</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-brand-white">Proof & Credibility</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {credibility.map((item, idx) => {
                            const IconComp = credIconMap[item.icon] || Award;
                            return (
                                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                                    <div className="text-center group p-8 lg:p-10 rounded-[2.5rem] border border-brand-gray-800 hover:border-brand-gray-600 transition-all duration-500 bg-white/5 h-full flex flex-col justify-center">
                                        <div className="p-5 bg-white/5 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500 shadow-md">
                                            <IconComp className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-brand-white">{item.title}</h3>
                                        <p className="text-brand-gray-700 dark:text-brand-gray-500 text-sm font-light leading-relaxed">{item.description}</p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── TECHNOLOGY STACK ──────────────────────── */}
            <section className="py-32" id="tech-stack">
                <div className="section-container">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Technical Capabilities</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Technology Stack</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(techStack).map(([category, techs], idx) => (
                            <FadeIn key={category} delay={idx * 0.08} className="h-full">
                                <div className="p-8 lg:p-10 bg-brand-gray-50 dark:bg-brand-dark rounded-[2.5rem] border border-brand-gray-100 dark:border-brand-gray-800 group hover:border-brand-gray-300 dark:hover:border-brand-gray-700 transition-all duration-500 h-full flex flex-col hover:shadow-premium">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-gray-600 dark:text-brand-gray-400 mb-8 border-b border-brand-gray-100 dark:border-brand-gray-800 pb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {techs.map(tech => (
                                            <span key={tech} className="px-4 py-2 bg-brand-white dark:bg-brand-gray-800 border border-brand-gray-200 dark:border-brand-gray-700 rounded-xl text-[10px] font-bold uppercase tracking-wider text-brand-black dark:text-brand-gray-300 group-hover:bg-brand-gray-50 dark:group-hover:bg-brand-gray-900 group-hover:border-brand-gray-300 dark:group-hover:border-brand-gray-600 hover:!bg-brand-black hover:!text-brand-white dark:hover:!bg-brand-white dark:hover:!text-brand-black transition-all cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
