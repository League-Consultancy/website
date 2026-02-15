import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Bell, Key, Camera, Rocket, Zap } from 'lucide-react';
import { Button, Input } from '../components/common/UI';

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

const Profile = () => {
    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-300">
            <section className="py-24">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <FadeIn>
                                <div className="text-center p-12 bg-brand-gray-50 dark:bg-[#1A1A1A] rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800">
                                    <div className="relative inline-block mb-8">
                                        <div className="w-32 h-32 bg-brand-black dark:bg-brand-white rounded-full flex items-center justify-center text-brand-white dark:text-brand-black text-4xl font-black">
                                            JD
                                        </div>
                                        <button className="absolute bottom-0 right-0 p-3 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black rounded-full shadow-xl hover:scale-110 transition-transform">
                                            <Camera className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">John Doe</h2>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400">Chief Technology Officer</p>

                                    <div className="mt-12 space-y-2">
                                        {[
                                            { label: 'Overview', icon: User, active: true },
                                            { label: 'Security', icon: Shield, active: false },
                                            { label: 'Notifications', icon: Bell, active: false },
                                            { label: 'Keys', icon: Key, active: false },
                                        ].map((item) => (
                                            <button
                                                key={item.label}
                                                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${item.active ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black shadow-xl' : 'text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white hover:bg-brand-gray-100 dark:hover:bg-brand-gray-900'}`}
                                            >
                                                <item.icon className="w-4 h-4" />
                                                <span>{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-12">
                            <FadeIn delay={0.1}>
                                <div className="p-10 lg:p-14 bg-white dark:bg-[#1A1A1A] rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-sm">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-10 pb-6 border-b border-brand-gray-100 dark:border-brand-gray-800">Account Intel</h3>
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <Input label="First Name" defaultValue="John" />
                                        <Input label="Last Name" defaultValue="Doe" />
                                        <Input label="Email Identifier" defaultValue="john.doe@techcorp.com" type="email" />
                                        <Input label="Organization" defaultValue="TechCorp Solutions" />
                                        <div className="md:col-span-2">
                                            <Input label="Bio / Professional Background" defaultValue="CTO with 15+ years of experience in industrial AI and robotics integration." />
                                        </div>
                                        <div className="md:col-span-2 pt-6">
                                            <Button type="button" className="w-full md:w-auto">Synchronize Changes</Button>
                                        </div>
                                    </form>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="p-10 lg:p-14 bg-brand-black dark:bg-[#1E1E1E] rounded-[3rem] text-brand-white">
                                    <div className="flex items-center space-x-4 mb-10">
                                        <Rocket className="w-8 h-8 opacity-50" />
                                        <h3 className="text-2xl font-black uppercase tracking-tighter">Active Projects</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { name: "Autonomous Logistics Phase 1", progress: 75, status: "In Progress" },
                                            { name: "Edge GPU Cluster Deployment", progress: 100, status: "Completed" }
                                        ].map(project => (
                                            <div key={project.name} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="flex justify-between items-center mb-4">
                                                    <h4 className="font-bold uppercase tracking-tight text-sm">{project.name}</h4>
                                                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/10 rounded-md">{project.status}</span>
                                                </div>
                                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-white" style={{ width: `${project.progress}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
